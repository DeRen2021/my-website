# De Ren's Personal Website

这是一个基于 React 开发的交互式个人网站，采用终端风格的界面设计，提供独特的用户体验。

## 项目特点

- 🖥️ 交互式终端界面
- 🎨 现代化的 UI 设计
- ✨ 流畅的动画效果
- 📱 响应式布局
- 🔍 命令自动补全功能

## 技术栈

- React 18
- Tailwind CSS
- React Spring (动画效果)
- Lucide React (图标库)

## 主要功能

通过终端命令与网站交互，支持以下命令：
- `about` - 查看个人简介
- `skills` - 查看技能清单
- `projects` - 查看项目经历
- `internships` - 查看实习经历
- `contact` - 查看联系方式
- `help` - 查看所有可用命令
- `clear` - 清空终端
- `home` - 返回首页

## 本地开发

### 环境要求
- Node.js 14.0.0 或更高版本
- npm 6.0.0 或更高版本

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm start
```
访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本
```bash
npm run build
```

## 项目结构

```
src/
  ├── PersonalWebsite.js   # 主要组件
  ├── App.js              # 应用入口
  ├── index.js            # 渲染入口
  └── index.css           # 全局样式
```

## 自定义配置

本项目使用了以下配置文件：
- `craco.config.js` - Create React App 配置覆盖
- `tailwind.config.js` - Tailwind CSS 配置
- `postcss.config.js` - PostCSS 配置

## 贡献

欢迎提出建议和改进意见！

## 许可

MIT License
