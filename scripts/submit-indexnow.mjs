const siteUrl = 'https://xuanjichang.vip';
const host = new URL(siteUrl).host;
const key = process.env.INDEXNOW_KEY || 'bb6b43dff63f4838b234df9de7b0f7fe';
const keyLocation = `${siteUrl}/${key}.txt`;
const endpoint = process.env.INDEXNOW_ENDPOINT || 'https://api.indexnow.org/indexnow';

const sleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

async function fetchWithRetry(url, attempts = 12, delay = 10000) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { 'user-agent': 'xuanjichang.vip IndexNow submitter' },
      });

      if (response.ok) return response;
      lastError = new Error(`${url} returned HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }

    if (attempt < attempts) {
      console.log(`Waiting for deployment (${attempt}/${attempts})...`);
      await sleep(delay);
    }
  }

  throw lastError;
}

function decodeXml(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'");
}

async function main() {
  const keyResponse = await fetchWithRetry(keyLocation);
  const publishedKey = (await keyResponse.text()).trim();

  if (publishedKey !== key) {
    throw new Error('The deployed IndexNow key file does not match the configured key.');
  }

  const sitemapResponse = await fetchWithRetry(`${siteUrl}/sitemap.xml`, 6, 5000);
  const sitemap = await sitemapResponse.text();
  const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => decodeXml(match[1].trim()))
    .filter((url) => new URL(url).host === host);

  if (urlList.length === 0) {
    throw new Error('No URLs for this host were found in sitemap.xml.');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation, urlList }),
  });

  if (response.status !== 200 && response.status !== 202) {
    const responseBody = await response.text();
    throw new Error(`IndexNow returned HTTP ${response.status}: ${responseBody}`);
  }

  console.log(`IndexNow accepted ${urlList.length} URLs (HTTP ${response.status}).`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
