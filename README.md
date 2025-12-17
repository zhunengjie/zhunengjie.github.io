# 星光宇宙背景技术简历网站

一个现代化、视觉冲击力强的两页式技术简历网站，采用星光宇宙背景，结合流畅动画效果，展现前端开发工程师的专业能力和技术审美。

## 技术栈

- **前端框架**: React 18+
- **编程语言**: TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **动画库**: Framer Motion
- **路由**: React Router DOM
- **图标**: Font Awesome
- **包管理器**: pnpm

## 快速开始

### 前提条件

确保您的系统已安装以下软件：
- Node.js (v16 或更高版本)
- pnpm (v7 或更高版本)

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

开发服务器将在 http://localhost:3000 启动

### 构建生产版本

```bash
pnpm build
```

构建后的文件将位于 `dist` 目录中

## 项目结构

```
├── src/                 # 源代码目录
│   ├── components/      # React 组件
│   ├── pages/           # 页面组件
│   ├── contexts/        # React Context
│   ├── hooks/           # 自定义 hooks
│   ├── lib/             # 工具函数
│   ├── App.tsx          # 应用入口组件
│   └── main.tsx         # 应用挂载点
├── public/              # 静态资源
├── index.html           # HTML 入口
├── package.json         # 项目依赖配置
└── tsconfig.json        # TypeScript 配置
```

## 功能特色

- **星光宇宙背景**：整个网站采用动态星光背景，带有闪烁和视差效果
- **流畅动画过渡**：页面切换和元素加载时的平滑动画效果
- **响应式设计**：适配桌面和移动设备的布局
- **交互式导航**：支持平滑滚动到各个内容区块
- **动态内容展示**：技能、工作经历、项目等内容的动态展示效果

## 页面说明

1. **引导页 (Landing Page)**：展示个人简介，带有优雅的动画效果和"了解更多"按钮
2. **详细简历页 (Resume Page)**：包含个人简介、教育背景、工作经历、技能栈、个人项目和兴趣爱好等完整信息

## 部署说明

构建后的项目是一个纯静态网站，可以部署到任何静态网站托管服务，如：
- GitHub Pages
- Netlify
- Vercel
- 阿里云OSS
- 腾讯云COS

只需将 `dist` 目录中的文件上传到您选择的托管服务即可。