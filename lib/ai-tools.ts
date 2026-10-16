export type AiTool = {
  name: string;
  description: string;
  url: string;
  tag?: string;
};

export type AiToolCategory = {
  id: string;
  title: string;
  subtitle: string;
  icon: 'chat' | 'search' | 'code' | 'office' | 'image' | 'video' | 'audio' | 'workflow';
  tools: AiTool[];
};

export const aiToolCategories: AiToolCategory[] = [
  {
    id: 'chat', title: '通用对话与智能助手', subtitle: '日常问答、推理、翻译、写作与多模态交互', icon: 'chat',
    tools: [
      { name: 'ChatGPT', description: 'OpenAI 通用 AI 助手，覆盖推理、写作、代码与图像。', url: 'https://chatgpt.com', tag: '热门' },
      { name: 'Claude', description: '擅长长文本阅读、分析、写作与代码任务。', url: 'https://claude.ai', tag: '热门' },
      { name: 'Gemini', description: 'Google 多模态助手，可结合其搜索与办公生态。', url: 'https://gemini.google.com', tag: '热门' },
      { name: 'Microsoft Copilot', description: '微软 AI 助手，适合搜索、创作与 Windows 用户。', url: 'https://copilot.microsoft.com' },
      { name: 'Grok', description: 'xAI 推出的对话助手，侧重实时信息与推理。', url: 'https://grok.com' },
      { name: 'DeepSeek', description: '提供中文对话、推理与代码能力的 AI 助手。', url: 'https://chat.deepseek.com' },
      { name: 'Kimi', description: '中文长文本阅读、资料整理与联网搜索工具。', url: 'https://www.kimi.com' },
      { name: 'Qwen', description: '阿里通义千问模型体验入口，支持多模态任务。', url: 'https://www.qwen.ai' },
      { name: '豆包', description: '字节跳动推出的中文 AI 助手与创作工具。', url: 'https://www.doubao.com' },
      { name: '腾讯元宝', description: '腾讯 AI 助手，提供搜索、阅读与日常问答。', url: 'https://yuanbao.tencent.com' },
      { name: 'Z.ai', description: '智谱面向全球用户的通用 AI 助手。', url: 'https://z.ai' },
      { name: 'Mistral Le Chat', description: 'Mistral AI 的轻量快速对话产品。', url: 'https://chat.mistral.ai' },
      { name: 'Meta AI', description: 'Meta 的多平台 AI 助手与图像创作入口。', url: 'https://www.meta.ai' },
      { name: 'Poe', description: '在一个界面中使用多种模型与用户机器人。', url: 'https://poe.com' },
      { name: 'Character.AI', description: '以角色设定和情景对话为核心的 AI 平台。', url: 'https://character.ai' },
    ],
  },
  {
    id: 'search', title: 'AI 搜索与研究', subtitle: '联网检索、论文阅读、资料汇总与知识发现', icon: 'search',
    tools: [
      { name: 'Perplexity', description: '带引用来源的 AI 搜索与研究助手。', url: 'https://www.perplexity.ai', tag: '热门' },
      { name: 'You.com', description: '整合搜索、聊天与研究代理的 AI 搜索平台。', url: 'https://you.com' },
      { name: 'Semantic Scholar', description: '面向学术论文发现、引用与相关研究检索。', url: 'https://www.semanticscholar.org' },
      { name: 'Genspark', description: '可生成专题页面并执行多步骤研究任务。', url: 'https://www.genspark.ai' },
      { name: 'Elicit', description: '用于文献综述、论文筛选和研究证据整理。', url: 'https://elicit.com' },
      { name: 'Consensus', description: '从学术论文中寻找结论并展示证据来源。', url: 'https://consensus.app' },
      { name: 'NotebookLM', description: '基于用户资料生成摘要、问答和音频概览。', url: 'https://notebooklm.google.com', tag: '热门' },
      { name: 'SciSpace', description: '辅助阅读、解释论文并检索相关学术资料。', url: 'https://scispace.com' },
      { name: 'ResearchRabbit', description: '通过论文关系图发现作者、文献与研究脉络。', url: 'https://www.researchrabbit.ai' },
    ],
  },
  {
    id: 'code', title: 'AI 编程与网站开发', subtitle: '代码补全、终端代理、应用原型与网站生成', icon: 'code',
    tools: [
      { name: 'GitHub Copilot', description: '集成于编辑器和 GitHub 工作流的代码助手。', url: 'https://github.com/features/copilot', tag: '热门' },
      { name: 'Cursor', description: '围绕代码库问答、编辑和代理任务设计的 AI 编辑器。', url: 'https://cursor.com', tag: '热门' },
      { name: 'Devin', description: '面向完整软件任务的自主编程代理。', url: 'https://devin.ai' },
      { name: 'OpenAI Codex', description: 'OpenAI 的云端编程代理与软件协作工具。', url: 'https://openai.com/codex/' },
      { name: 'Claude Code', description: 'Anthropic 的终端编程代理，适合代码库任务。', url: 'https://code.claude.com' },
      { name: 'Gemini CLI', description: 'Google 开源终端 AI 代理和开发工具。', url: 'https://github.com/google-gemini/gemini-cli' },
      { name: 'Replit', description: '在线开发环境与 AI 应用生成平台。', url: 'https://replit.com' },
      { name: 'v0', description: '通过自然语言生成网页界面与前端代码。', url: 'https://v0.app' },
      { name: 'Bolt', description: '在浏览器中生成、运行和部署全栈应用。', url: 'https://bolt.new' },
      { name: 'Lovable', description: '面向产品原型和 Web 应用的自然语言开发工具。', url: 'https://lovable.dev' },
      { name: 'JetBrains AI', description: '集成于 JetBrains IDE 的代码解释与开发助手。', url: 'https://www.jetbrains.com/ai/' },
      { name: 'Amazon Q Developer', description: 'AWS 面向开发与云运维场景的 AI 助手。', url: 'https://aws.amazon.com/q/developer/' },
    ],
  },
  {
    id: 'office', title: '办公、写作与演示', subtitle: '文档润色、PPT 生成、知识管理和营销内容', icon: 'office',
    tools: [
      { name: 'Notion AI', description: '在 Notion 工作区内完成写作、总结与知识问答。', url: 'https://www.notion.com/product/ai' },
      { name: 'Grammarly', description: '英文语法、语气、改写和商务写作辅助。', url: 'https://www.grammarly.com' },
      { name: 'QuillBot', description: '提供改写、摘要、语法检查和引用工具。', url: 'https://quillbot.com' },
      { name: 'Gamma', description: '通过提示词快速制作演示、文档和网页。', url: 'https://gamma.app', tag: '热门' },
      { name: 'Canva AI', description: '在 Canva 中生成设计、图片、文案和演示。', url: 'https://www.canva.com/ai-image-generator/' },
      { name: 'Microsoft 365 Copilot', description: '集成 Word、Excel、PowerPoint 与 Teams 的办公助手。', url: 'https://www.microsoft.com/microsoft-365/copilot' },
      { name: 'Gemini for Workspace', description: '在 Gmail、Docs、Sheets 等 Google 工具中使用 AI。', url: 'https://workspace.google.com/solutions/ai/' },
      { name: 'Jasper', description: '面向品牌和营销团队的内容生成平台。', url: 'https://www.jasper.ai' },
      { name: 'Copy.ai', description: '销售、营销文案和内容工作流自动化工具。', url: 'https://www.copy.ai' },
    ],
  },
  {
    id: 'image', title: 'AI 图片与设计', subtitle: '文生图、图像编辑、品牌视觉和设计协作', icon: 'image',
    tools: [
      { name: 'Midjourney', description: '高质量艺术风格与商业视觉图像生成。', url: 'https://www.midjourney.com', tag: '热门' },
      { name: 'Adobe Firefly', description: 'Adobe 的生成式图片、填充与设计工具。', url: 'https://firefly.adobe.com' },
      { name: 'Ideogram', description: '擅长文字排版、海报和创意图像生成。', url: 'https://ideogram.ai' },
      { name: 'Leonardo AI', description: '面向游戏资产、概念设计和图像创作。', url: 'https://leonardo.ai' },
      { name: 'Recraft', description: '适合品牌图形、矢量图和设计素材生成。', url: 'https://www.recraft.ai' },
      { name: 'Krea', description: '实时图像生成、增强和创意控制平台。', url: 'https://www.krea.ai' },
      { name: 'Figma Make', description: '在 Figma 生态中通过 AI 创建交互原型。', url: 'https://www.figma.com/make/' },
      { name: 'Stability AI', description: 'Stable Diffusion 模型与生成式媒体平台。', url: 'https://stability.ai' },
    ],
  },
  {
    id: 'video', title: 'AI 视频生成与编辑', subtitle: '文生视频、数字人、口播和影视创作', icon: 'video',
    tools: [
      { name: 'Runway', description: '生成、编辑视频并提供影视制作工作流。', url: 'https://runwayml.com', tag: '热门' },
      { name: 'Pika', description: '面向短视频和特效创作的生成式视频工具。', url: 'https://pika.art' },
      { name: 'Luma Dream Machine', description: '提供文生视频、图生视频和镜头控制。', url: 'https://lumalabs.ai/dream-machine' },
      { name: '可灵 AI', description: '快手推出的中文图片与视频生成平台。', url: 'https://klingai.com' },
      { name: 'Google Flow', description: 'Google 面向 AI 电影和连续镜头创作的工具。', url: 'https://labs.google/fx/tools/flow' },
      { name: 'HeyGen', description: '数字人、视频翻译与企业口播视频制作。', url: 'https://www.heygen.com' },
      { name: 'Synthesia', description: '使用数字人快速制作培训与企业视频。', url: 'https://www.synthesia.io' },
    ],
  },
  {
    id: 'audio', title: 'AI 音频、语音与音乐', subtitle: '语音合成、音乐生成、降噪、转录和会议记录', icon: 'audio',
    tools: [
      { name: 'ElevenLabs', description: '高自然度语音合成、配音和声音克隆。', url: 'https://elevenlabs.io', tag: '热门' },
      { name: 'Suno', description: '通过提示词生成完整歌曲和人声音乐。', url: 'https://suno.com', tag: '热门' },
      { name: 'Udio', description: '支持多种风格与结构控制的 AI 音乐生成。', url: 'https://www.udio.com' },
      { name: 'Descript', description: '基于文字编辑音视频并支持转录和配音。', url: 'https://www.descript.com' },
      { name: 'Adobe Podcast', description: '语音增强、降噪和播客录制处理工具。', url: 'https://podcast.adobe.com' },
      { name: 'Murf', description: '面向演示、课程和广告的 AI 配音平台。', url: 'https://murf.ai' },
      { name: 'Otter.ai', description: '会议录音转写、摘要和协作笔记。', url: 'https://otter.ai' },
      { name: 'Fireflies.ai', description: '自动加入会议并生成转录、摘要和行动项。', url: 'https://fireflies.ai' },
    ],
  },
  {
    id: 'workflow', title: 'AI 自动化与开发平台', subtitle: '工作流编排、智能体、模型 API 和本地模型运行', icon: 'workflow',
    tools: [
      { name: 'Zapier', description: '连接常用应用并通过 AI 自动执行跨平台任务。', url: 'https://zapier.com' },
      { name: 'Make', description: '通过可视化流程连接应用、数据与 AI 服务。', url: 'https://www.make.com' },
      { name: 'n8n', description: '可自托管的开源自动化和 AI 工作流平台。', url: 'https://n8n.io', tag: '开源' },
      { name: 'Dify', description: '开源 LLM 应用、知识库和智能体开发平台。', url: 'https://dify.ai', tag: '开源' },
      { name: 'Coze', description: '创建、发布机器人和多步骤 AI 工作流。', url: 'https://www.coze.com' },
      { name: 'Flowise', description: '通过可视化节点搭建 LLM 和智能体流程。', url: 'https://flowiseai.com', tag: '开源' },
      { name: 'Hugging Face', description: '模型、数据集、应用演示与开源 AI 社区。', url: 'https://huggingface.co' },
      { name: 'Ollama', description: '在本地下载并运行主流开源大语言模型。', url: 'https://ollama.com', tag: '本地' },
      { name: 'LM Studio', description: '带图形界面的本地模型下载、运行和 API 工具。', url: 'https://lmstudio.ai', tag: '本地' },
      { name: 'Replicate', description: '通过云 API 运行开源 AI 模型和应用。', url: 'https://replicate.com' },
      { name: 'OpenRouter', description: '通过统一 API 调用多个模型提供商。', url: 'https://openrouter.ai' },
    ],
  },
];

export const aiToolCount = aiToolCategories.reduce((total, category) => total + category.tools.length, 0);
