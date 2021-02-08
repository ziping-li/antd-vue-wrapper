# 快速上手

Antd Vue Wrapper 将提供更多的功能，以便快速开发项目。

## 引入 antd-vue-wrapper

### 1. 安装脚手架工具

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

### 2. 创建一个项目

使用命令行进行初始化。

```bash
vue create antd-demo
```

### 3. 使用组件

```bash
npm i antd-vue-wrapper -S
```

#### 全局使用

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import AVW from 'antd-vue-wrapper';
import 'antd-vue-wrapper/dist/antd-vue-wrapper.css'

const app = createApp(App);
app.use(AVW);

app.mount('#app');
```

#### 按需使用

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import { Container } from 'antd-vue-wrapper';
import 'antd-vue-wrapper/dist/antd-vue-wrapper.css'

const app = createApp(App);
app.component(Container);

app.mount('#app');
```
