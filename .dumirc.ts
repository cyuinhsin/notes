import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/notes/',
  publicPath: '/notes/',
  themeConfig: {
    name: 'notes',
  },
});
