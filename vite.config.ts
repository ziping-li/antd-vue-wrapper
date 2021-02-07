import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vitePluginVuedoc from 'vite-plugin-vuedoc';

export default defineConfig({
  root: 'docs/',
  plugins: [
    vitePluginVuedoc({
      highlight: {
        theme: 'one-dark',
      },
    }),
    vue(),
    vueJsx(),
  ],
});
