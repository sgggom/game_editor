import { defineConfig } from 'vite';

export default defineConfig({
  base: '/game_editor/',
  server: {
    host: '127.0.0.1',
    port: 8787
  },
  preview: {
    host: '127.0.0.1',
    port: 8787
  }
});
