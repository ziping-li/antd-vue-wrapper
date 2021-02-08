# 简介

基于 Vue3 和 [Ant Design Vue](https://2x.antdv.com/docs/vue/introduce-cn/) 封装的常用集合。

通常来讲，业务开发中也有系列适用于当前开发场景的通用功能，也可以理解为该项目也是一个业务封装的模板。

## 主要功能

- Ant Design Vue 主题预设
- 原子化 css 工具样式库
- 常用的 工具 方法 
- 一些支持响应式的增强组件

## 安装

```bash
npm i antd-vue-wrapper -S
```

## 使用

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import AVW from 'antd-vue-wrapper';
import 'antd-vue-wrapper/dist/antd-vue-wrapper.css'

const app = createApp(App);
app.use(AVW);

app.mount('#app');
```

支持按需引入

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import { Container } from 'antd-vue-wrapper';
import 'antd-vue-wrapper/dist/antd-vue-wrapper.css'

const app = createApp(App);
app.component(Container);

app.mount('#app');
```

## 开发环境

- vite
- Typescript
- jsx
- Vue3
- Ant Design Vue
