# 医简 DocEase - 前端应用

> 面向临床医生的 AI 医疗文书辅助工具（前端界面）

---

## ⚠️ 重要说明

**本项目仅为前端界面演示/开发版本**

- ✅ 当前仅包含前端代码，**不包含后端服务**
- ✅ AI 生成、数据存储、用户认证等功能接口为占位实现
- ✅ 生产环境需要配合后端 API 服务使用

---

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | ^19.2.4 | 前端框架 |
| Vite | ^8.0.1 | 构建工具 |
| Tailwind CSS | ^4.2.2 | 样式框架 |
| Lucide React | ^1.7.0 | 图标库 |

---

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

---

## 项目结构

```
docease-app/
├── public/              # 静态资源
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.jsx          # 主应用组件
│   ├── App.css          # 组件样式
│   ├── index.css        # 全局样式（含 Tailwind）
│   ├── main.jsx         # 应用入口
│   └── assets/          # 图片资源
├── index.html           # HTML 模板
├── vite.config.js       # Vite 配置
├── tailwind.config.js   # Tailwind 配置
├── postcss.config.js    # PostCSS 配置
└── eslint.config.js     # ESLint 配置
```

---

## 当前功能

- 📋 **三大文书模块**：首次病程 / 日常查房 / 出院小结
- ✨ **AI 生成界面**：支持输入患者信息并模拟生成医疗文书
- 📋 **一键复制**：生成的文书内容可快速复制到剪贴板
- ⚠️ **合规审查面板**：界面已预留，待接入后端审查接口

---

## 待实现功能

- [ ] 接入 AI 后端 API（大模型生成医疗文书）
- [ ] 接入合规审查 API（自动检查文书规范性）
- [ ] 用户认证与登录系统
- [ ] 数据持久化存储
- [ ] 语音识别录入功能
- [ ] 智能模板推荐

---

## 相关链接

- 🏠 项目主页：[医简 DocEase](https://github.com/cnzhq/docease)
- 📄 根目录 README：了解完整项目介绍

---

<p align="center">
  <i>让医疗文书不再繁琐，让医生回归诊疗本身</i>
</p>