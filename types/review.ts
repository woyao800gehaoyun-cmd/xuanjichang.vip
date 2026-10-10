export type ReviewFrontmatter = {
  title: string;
  description: string;
  brandName: string;
  overallScore: number;
  protocols: string[];
  transitType: string;
  pricing: string;
  affiliateUrl: string;
  pros: string[];
  cons: string[];
  date: string;
  entryLocation?: string;
  clients?: string;
  latency?: Record<string, number>;
  streaming?: string;
  tagline?: string;
};

export type ReviewPost = ReviewFrontmatter & {
  slug: string;
  content: string;
};
