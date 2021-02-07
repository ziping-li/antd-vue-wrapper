import { createApp } from 'vue';
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App';
import router from './router';
import 'vite-plugin-vuedoc/style.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import AVW from '../../src/main';

const app = createApp(App);

app.use(router);
app.use(Antd);
app.use(AVW);
console.log(app.config.globalProperties);
app.mount('#app');
