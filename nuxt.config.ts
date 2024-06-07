// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  dir: {
    public: '../public',
  },
  devtools: { enabled: true },
  alias: {
    "@": "/<srcDir>",
    'types': '/<rooDir>/types',
    'store': '/<rooDir>/store',
  },
  css: ["~/styles/main.scss"],
  components: {
    dirs: [
      { path: '~/components', pathPrefix: false, extensions: ['vue'] },
    ]
  },
  imports: {
    dirs: [
      'assets/**/*.ts', 'assets/*.ts',
    ],
    presets: [
      {
        from: 'clsx',
        imports: ['clsx'],
      },
    ]
  },
  experimental: {
    renderJsonPayloads: false
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL!
    }
  },
})
