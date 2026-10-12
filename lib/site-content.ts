export const navigation = [
  { href: '/recommendations/', label: '机场推荐' },
  { href: '/reviews/', label: '机场评测' },
  { href: '/tutorials/', label: '客户端教程' },
  { href: '/downloads/', label: '客户端下载' },
  { href: '/ai-tools/', label: 'AI 工具' },
  { href: '/streaming-tools/', label: '流媒体工具' },
  { href: '/apple-id/', label: '苹果 ID 指南' },
  { href: '/free-nodes/', label: '免费节点' },
  { href: '/about/', label: '关于我们' },
  { href: '/contact/', label: '联系我们' },
] as const;

export type SectionCard = { title: string; description: string; meta: string; tag: string };
export type SectionData = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  accent: 'blue' | 'coral' | 'mint' | 'sun';
  highlights: { value: string; label: string }[];
  cards: SectionCard[];
  notice?: string;
};

export const sections: SectionData[] = [
  {
    slug: 'recommendations', navLabel: '机场推荐', eyebrow: 'EDITORIAL PICKS', accent: 'blue',
    title: '按真实需求选线路，而不是照着排行榜盲买',
    description: '我们把预算、运营商、设备数量和主要用途拆开比较。每个推荐都标明适用边界，不用“全网最好”这类无法验证的结论。',
    highlights: [{ value: '4 类', label: '使用场景' }, { value: '6 项', label: '核心指标' }, { value: '月更', label: '价格与可用性' }],
    cards: [
      { tag: '稳定优先', title: '跨境办公与远程会议线路怎么选', description: '重点看晚高峰丢包、入口机房、SLA 和工单响应，不把峰值测速当作唯一标准。', meta: '适合：开发者 / 外贸团队' },
      { tag: '预算优先', title: '每月 20 元档的选择与取舍', description: '对比流量、设备数、倍率节点和月付政策，排除低价套餐中最常见的隐性限制。', meta: '预算：¥15–30 / 月' },
      { tag: '解锁优先', title: 'AI 与流媒体兼顾的出口策略', description: '出口 IP 质量比节点数量更重要，关注 ChatGPT、Claude 与 Netflix 的持续可用性。', meta: '检查：IP 风控 / DNS / 地区' },
      { tag: '多设备', title: '家庭场景的路由器与设备配置', description: '从并发限制、订阅兼容到旁路由接入，计算真实家庭设备的使用成本。', meta: '设备：8 台以上' },
    ],
  },
  {
    slug: 'tutorials', navLabel: '客户端教程', eyebrow: 'SETUP HANDBOOK', accent: 'mint',
    title: '从导入订阅到排查故障，一步一步完成配置',
    description: '覆盖 Windows、macOS、iOS、Android 与路由器平台。教程以可复现步骤为主，同时解释每个设置会影响什么。',
    highlights: [{ value: '5', label: '主流平台' }, { value: '12+', label: '配置场景' }, { value: '零基础', label: '阅读门槛' }],
    cards: [
      { tag: 'Windows', title: 'Clash 系客户端订阅与系统代理设置', description: '导入订阅、选择节点、开启系统代理，并解决浏览器可用但应用不可用的问题。', meta: '预计 6 分钟' },
      { tag: 'macOS', title: 'macOS 客户端权限与增强模式说明', description: '解释首次启动权限、TUN 模式、规则模式和全局模式的差异。', meta: '预计 8 分钟' },
      { tag: 'iOS', title: 'iPhone 导入订阅与按需连接', description: '完成海外 Apple ID 准备、客户端下载、订阅导入和按需规则设置。', meta: '预计 10 分钟' },
      { tag: '排障', title: '节点能连但网页打不开的六步检查', description: '从本地 DNS、系统时间、代理端口、规则集到服务端状态逐项定位。', meta: '故障排查清单' },
      { tag: '路由器', title: '旁路由接入前必须理解的网络结构', description: '避免网关冲突、DNS 泄漏和回程异常，适合准备部署家庭网络的读者。', meta: '进阶教程' },
      { tag: '订阅', title: '订阅更新失败与链接失效处理', description: '区分订阅过期、网络阻断、客户端缓存和服务商接口故障。', meta: '常见问题' },
    ],
  },
  {
    slug: 'downloads', navLabel: '客户端下载', eyebrow: 'CLIENT LIBRARY', accent: 'coral',
    title: '常用客户端入口与版本选择建议',
    description: '按操作系统整理常用客户端，说明适合人群、协议兼容和安装注意事项。下载前请优先核对项目官方发布页与签名。',
    highlights: [{ value: 'Win', label: 'Windows' }, { value: 'Mac', label: 'macOS' }, { value: 'iOS', label: 'iPhone / iPad' }],
    notice: '安全提示：不要安装群聊或网盘中的未知修改版客户端。本站仅整理公开项目与官方商店信息。',
    cards: [
      { tag: 'Windows', title: 'Clash Verge Rev', description: '适合需要规则分流、TUN 模式和多配置管理的 Windows / macOS 用户。', meta: '桌面端 · 开源项目' },
      { tag: 'Windows', title: 'v2rayN', description: '界面直接、协议覆盖广，适合偏好传统列表管理方式的 Windows 用户。', meta: '桌面端 · 开源项目' },
      { tag: 'macOS', title: 'ClashX Meta 系客户端', description: '菜单栏操作轻量，适合基础分流；安装时需确认系统版本兼容性。', meta: 'macOS · 项目发布页' },
      { tag: 'iOS', title: 'Shadowrocket', description: '规则和协议兼容较全面，需要从对应地区 App Store 获取。', meta: 'iOS · 付费应用' },
      { tag: 'Android', title: 'NekoBox for Android', description: '支持多种现代协议，适合需要精细路由和日志排查的 Android 用户。', meta: 'Android · 开源项目' },
      { tag: 'Router', title: 'OpenClash', description: '适合 OpenWrt 场景。部署前应了解网关、DNS 和固件资源限制。', meta: '路由器 · 进阶' },
    ],
  },
  {
    slug: 'ai-tools', navLabel: 'AI 工具', eyebrow: 'AI WORKSPACE', accent: 'sun',
    title: 'AI 产品入口、网络要求与使用效率指南',
    description: '关注 ChatGPT、Claude、Gemini 等工具的地区可用性、账号风控和日常工作流，不收集或提供绕过平台规则的方法。',
    highlights: [{ value: '3+', label: '主流平台' }, { value: '实用', label: '工作流优先' }, { value: '更新', label: '地区政策跟踪' }],
    cards: [
      { tag: '对比', title: 'ChatGPT、Claude 与 Gemini 怎么分工', description: '从长文本、代码、搜索整合与多模态四类任务比较，不用单一榜单替代实际需求。', meta: '工具选择指南' },
      { tag: '风控', title: '为什么频繁切换出口地区容易触发验证', description: '解释 IP 地区、浏览器环境、登录节奏与支付资料不一致带来的账号风险。', meta: '账号安全' },
      { tag: '效率', title: '把 AI 变成可复用的内容研究流程', description: '从资料整理、事实核验、提纲到发布前检查，建立清晰的人机协作边界。', meta: '编辑工作流' },
      { tag: '隐私', title: '向 AI 上传文件之前应该检查什么', description: '识别个人信息、商业秘密、访问凭据和版权材料，减少无意的数据暴露。', meta: '隐私清单' },
    ],
  },
  {
    slug: 'streaming-tools', navLabel: '流媒体工具', eyebrow: 'STREAMING DESK', accent: 'coral',
    title: '片库检测、画质排查与跨区观看基础知识',
    description: '整理 Netflix、Disney+、YouTube 等平台常见问题。解锁结果会随出口 IP 和平台策略变化，任何一次检测都不是永久保证。',
    highlights: [{ value: '4K', label: '画质排查' }, { value: 'DNS', label: '地区判断' }, { value: 'IP', label: '出口质量' }],
    cards: [
      { tag: 'Netflix', title: '能登录但只能看自制剧是什么原因', description: '通常与出口 IP 被识别为代理有关，应先区分账号地区、节点地区与 IP 库标记。', meta: '解锁排查' },
      { tag: 'YouTube', title: '4K 卡顿不一定是节点带宽不足', description: '检查编解码、设备性能、运营商晚高峰和单线程吞吐，再判断线路问题。', meta: '画质与性能' },
      { tag: 'Disney+', title: '地区错误与支付地区不一致', description: '梳理账号注册地区、商店地区、支付方式和当前出口之间的关系。', meta: '账户指南' },
      { tag: '检测', title: '正确理解流媒体解锁检测结果', description: '自动检测只代表当下出口，最终仍应以目标设备的实际播放为准。', meta: '测试方法' },
    ],
  },
  {
    slug: 'apple-id', navLabel: '苹果 ID 指南', eyebrow: 'APPLE ID GUIDE', accent: 'blue',
    title: '地区、商店与订阅管理的清晰操作指南',
    description: '讲清 Apple ID 地区切换、付款方式、家庭共享和应用下载之间的关系。所有操作都应遵守 Apple 服务条款。',
    highlights: [{ value: '地区', label: '商店差异' }, { value: '支付', label: '账单管理' }, { value: '安全', label: '双重认证' }],
    cards: [
      { tag: '基础', title: 'Apple ID 地区和设备地区不是一回事', description: '设备语言、系统地区与 App Store 账户地区可以不同，影响范围也完全不同。', meta: '概念说明' },
      { tag: '切换', title: '更改商店地区前的检查清单', description: '处理余额、有效订阅、家庭共享和待处理退款，避免地区选项无法修改。', meta: '操作前必读' },
      { tag: '安全', title: '开启双重认证与恢复联系方式', description: '使用长期可控的联系方式，并妥善保存恢复信息，避免购买来源不明的成品账号。', meta: '账号安全' },
      { tag: '下载', title: '下载后切回原账号会发生什么', description: '应用通常可以继续使用，但更新、内购与订阅仍可能需要原下载账号。', meta: '常见问题' },
    ],
  },
  {
    slug: 'free-nodes', navLabel: '免费节点', eyebrow: 'PUBLIC SERVICE WATCH', accent: 'mint',
    title: '免费资源只适合临时测试，不适合承载隐私数据',
    description: '公开节点的运营者、日志策略和安全边界通常不可验证。我们不发布来历不明的订阅，只提供风险说明与可信公益项目的辨别方法。',
    highlights: [{ value: '临时', label: '使用定位' }, { value: '零信任', label: '隐私原则' }, { value: '核验', label: '来源优先' }],
    notice: '不要通过免费节点登录网银、主邮箱、公司后台或传输任何敏感文件。无法确认运营主体时，应默认链路可能被记录。',
    cards: [
      { tag: '风险', title: '免费节点能看到哪些信息', description: '即使 HTTPS 保护了正文，运营者仍可能观察连接目标、时间、流量规模和 DNS 请求。', meta: '隐私基础' },
      { tag: '识别', title: '三步判断公开项目是否值得信任', description: '查看维护主体、源代码与隐私说明，再检查域名历史和发布渠道是否一致。', meta: '来源核验' },
      { tag: '测试', title: '临时测速时也要使用隔离环境', description: '不要导入主力客户端；使用独立配置，关闭局域网共享并在测试后彻底删除。', meta: '安全操作' },
      { tag: '替代', title: '比长期使用免费节点更稳妥的方案', description: '短期套餐、自建可信出口或公司合规接入通常更可控，也便于追踪故障。', meta: '方案建议' },
    ],
  },
  {
    slug: 'about', navLabel: '关于我们', eyebrow: 'ABOUT THE DESK', accent: 'sun',
    title: '我们评测的是线路表现，不是宣传页面',
    description: '选机场是一份面向普通用户和技术读者的独立内容站。我们记录测试环境、时间窗口和判断边界，让结论尽量可以复核。',
    highlights: [{ value: '20:00', label: '晚高峰起测' }, { value: '多网', label: '运营商交叉验证' }, { value: '披露', label: '商业关系' }],
    cards: [
      { tag: '原则', title: '不出售排名位置', description: '推荐顺序由测试结果和适用场景决定。商业合作不会改变已记录的测试数据。', meta: '编辑独立性' },
      { tag: '方法', title: '记录时间、入口、协议与样本', description: '没有测试环境的速度数字缺乏意义，所以每篇深度评测都会交代测试口径。', meta: '可复核方法' },
      { tag: '边界', title: '一次测试不代表永久质量', description: '网络状态和出口 IP 会变化，我们标注日期，并在重大变化时更新或撤回结论。', meta: '结论边界' },
      { tag: '纠错', title: '欢迎提供可验证的反例', description: '如果你发现数据错误，请附上时间、运营商、节点和测试方式，编辑会重新核验。', meta: '公开纠错' },
    ],
  },
  {
    slug: 'contact', navLabel: '联系我们', eyebrow: 'CONTACT', accent: 'coral',
    title: '提供线索、纠正数据，或讨论内容合作',
    description: '为了更快复核问题，请在来信中说明页面链接、测试时间、所在运营商和可公开的证据。我们不会索取你的账号密码或订阅密钥。',
    highlights: [{ value: '纠错', label: '优先处理' }, { value: '评测', label: '样本征集' }, { value: '合作', label: '明确披露' }],
    notice: '请勿发送订阅链接、账号密码、支付凭据、身份证明或包含个人隐私的完整日志。',
    cards: [
      { tag: '数据纠错', title: '报告页面中的事实或链接错误', description: '请提供页面地址、错误位置与可验证来源；确认后我们会修正并记录更新时间。', meta: '建议主题：数据纠错' },
      { tag: '评测线索', title: '提交线路变化或故障样本', description: '建议包含运营商、城市、日期、节点和测试工具，敏感信息请先打码。', meta: '建议主题：测试线索' },
      { tag: '内容合作', title: '工具作者与服务商资料更新', description: '可以提交正式发布页和技术说明，但不接受以赞助换取指定排名。', meta: '建议主题：资料更新' },
      { tag: '安全问题', title: '报告本站安全或隐私问题', description: '请先提供影响范围与复现条件，不要公开未修复的敏感细节。', meta: '建议主题：安全报告' },
    ],
  },
];

export function getSection(slug: string) {
  return sections.find((section) => section.slug === slug);
}
