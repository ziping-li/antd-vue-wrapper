# antd-vue-wrapper

Common collection based on Vue3 and Ant Design Vue package.

### Document
[https://ziping-li.github.io/antd-vue-wrapper](https://ziping-li.github.io/antd-vue-wrapper/)

### Main features:

- Ant Design Vue theme presets
- Atomized css tool style library
- Common tools and methods
- Some enhanced components that support responsiveness

### Get started

```
npm i antd-vue-wrapper -S
```

Introduced in main.js

```js
import { createApp } from 'vue';
import App from './App.vue';
import AVW from 'antd-vue-wrapper';
import 'antd-vue-wrapper/dist/antd-vue-wrapper.css'

const app = createApp(App);
app.use(AVW);

app.mount('#app');
```

Support on-demand introduction

```js
import { createApp } from 'vue';
import App from './App.vue';
import { Container } from 'antd-vue-wrapper';
import 'antd-vue-wrapper/dist/antd-vue-wrapper.css'

const app = createApp(App);
app.component(Container);

app.mount('#app');
```

### Development Environment

- vite
- Typescript
- jsx
- Vue3
- Ant Design Vue
