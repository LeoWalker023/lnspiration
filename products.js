window.INSPIRATION_PRODUCTS = [
  {
    id: "airename", name: "Airename", fullName: "AI Rename Pro Studio", version: "2.0.5", platforms: "Windows",
    description: "面向设计资产、游戏资源和图片素材的批量整理工具。导入素材，选择规则或 AI 命名方式，在实时预览中确认结果，再批量处理。",
    releaseDate: "2026 年 8 月 20 日", releaseTitle: "AI Rename Pro Studio 2.0.5",
    stories: [
      { title: "从导入到输出，一处完成", text: "左侧管理资产队列，中间设置命名规则，右侧调整格式与画布。所有结果都能在执行前预览。", image: "assets/AI-Rename-layout-preview-v3-actionbar.png", alt: "Airename 主界面" },
      { title: "让 AI 看懂你的素材", text: "接入支持视觉识别的模型后，AI 会根据图片内容、已有文件名、使用背景和参考图给出命名建议。", image: "assets/AI-Rename-API-Settings-Locked-Preview.png", alt: "Airename API 设置" }
    ],
    features: ["批量导入 PNG、JPG、WEBP、PSD 与 PSB 素材", "用标签、匹配、序列化或增删剪裁规则统一命名", "AI 根据图片内容、文件名和参考图生成名称建议", "导出 JPG、PNG、WEBP、BMP、TIFF、GIF 或 AVIF", "调整目标画布、背景、边距，并在处理前实时预览"],
    assets: [{ name: "AI-Rename-Pro-Studio-2.0.5.exe", label: "Windows 安装包", url: "https://github.com/LeoWalker023/AI-Rename-Pro-Studio-Releases/releases/download/v2.0.5/AI-Rename-Pro-Studio-2.0.5.exe" }, { name: "AI-Rename-Pro-Studio-2.0.5.exe.sha256", label: "SHA-256 校验文件", url: "https://github.com/LeoWalker023/AI-Rename-Pro-Studio-Releases/releases/download/v2.0.5/AI-Rename-Pro-Studio-2.0.5.exe.sha256" }]
  },
  {
    id: "linguatype", name: "翻译虎", fullName: "LinguaType", version: "1.1.6", platforms: "Windows · macOS",
    description: "轻量、快捷的桌面翻译工具。按下快捷键即可呼出，常驻托盘而不打断当前工作，适合阅读、沟通和每天遇到的语言切换。",
    releaseDate: "2026 年 8 月 18 日", releaseTitle: "LinguaType 1.1.6",
    stories: [
      { title: "需要时出现，不打断工作", text: "翻译虎常驻系统托盘。你可以从托盘菜单快速打开翻译窗口、调整设置或检查更新，翻译能力始终在手边。", image: "assets/翻译虎-自绘托盘菜单-渲染图.png", alt: "翻译虎托盘菜单" },
      { title: "快捷键，让翻译更自然", text: "设置全局快捷键后，无论你正在阅读网页、查看文档还是处理素材，都可以快速呼出翻译，不必反复切换窗口。", image: "assets/翻译虎-快捷键状态单行左对齐预览.png", alt: "翻译虎快捷键状态" },
      { title: "更新提醒，也保持安静", text: "发现新版本时，翻译虎会用清晰的更新提醒告诉你变化。由你决定何时下载和安装，不被强制打断。", image: "assets/翻译虎-自绘更新提醒-屏幕预览.png", alt: "翻译虎更新提醒" }
    ],
    features: ["全局快捷键，随时呼出翻译", "托盘常驻，不占用工作区", "多种翻译服务灵活切换", "清晰的更新提醒与版本管理", "支持 Windows 与 macOS"],
    assets: [{ name: "LinguaType-1.1.6.exe", label: "Windows 安装包", url: "https://github.com/LeoWalker023/LinguaType-Releases/releases/download/v1.1.6/LinguaType-1.1.6.exe" }]
  },
  {
    id: "animationpathprotector", name: "Animation Path Protector", fullName: "Unity Editor Plugin", version: "1.0.0", platforms: "Unity 2021.3+",
    description: "创建 Animator 后挂载组件，插件会持续维护动画与层级路径的连接。你可以自由修改节点层级、位置和名称，动画曲线会自动同步，不再因为重构而断链。",
    releaseDate: "2026 年 8 月 24 日", releaseTitle: "Animation Path Protector 1.0.0",
    features: ["在 Animator 对象上挂载 Animation Path Protector", "持续监视动画涉及的子节点和层级路径", "修改节点位置、层级或名称后自动重新接驳动画", "Inspector 显示当前监视的节点数量与保护状态", "支持刷新节点快照并记录 Unity Undo", "轻量 C# 编辑器插件，不增加运行时依赖"],
    assets: [{ name: "lnspiration-unity-plugins-main.zip", label: "Unity 插件源码 ZIP", url: "https://github.com/LeoWalker023/lnspiration-unity-plugins/archive/refs/heads/main.zip" }]
  },
  {
    id: "dependencyfinder", name: "依赖检索器", fullName: "Spark Dependency Explorer", version: "1.1.0", platforms: "Unity 2021.3+",
    description: "拖入资产或文件夹，同时查看它依赖了什么、又被哪些资源引用。正向与反向检索、代码引用定位和删除预览，让项目清理更清晰、更安全。",
    releaseDate: "2026 年 8 月 11 日", releaseTitle: "Spark Dependency Explorer 1.1.0",
    stories: [
      { title: "依赖与引用，在同一个工作台里", text: "左侧保留来源资产的导入层级，右侧随当前选择展示正向依赖或反向引用。直接与递归模式可以随时切换，图片资源还会显示真实缩略图。", visual: "dependency-workbench" },
      { title: "删除之前，先把边界看清楚", text: "逐项选择来源和专用依赖，在预览中确认最终清单。共享依赖、代码资产、Packages 资源和 Unity 内置资源都有明确的保护策略。", visual: "dependency-delete" }
    ],
    features: ["拖入预制体、材质、场景、代码、文件夹或其他 Unity 资产", "切换正向依赖与反向引用，并支持直接或递归检索", "识别直接引用、间接引用和 C# 代码引用候选位置", "按资源名称、缩略图或定位按钮在 Project 窗口中定位", "删除前预览最终清单，并保留仍被使用的共享依赖", "Packages、Unity 内置资源和代码资产默认受到保护"],
    assets: [{ name: "Unity-Dependency-Finder.zip", label: "Unity 插件 ZIP", url: "https://github.com/LeoWalker023/lnspiration-unity-plugins/raw/refs/heads/main/dependency-finder/Unity-Dependency-Finder.zip" }]
  }
];
