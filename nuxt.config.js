import webpack from 'webpack';
import purge from './configs/purge.conf';
import cache_config from "./configs/cache.conf";

const cache_expire_time_stamp = cache_config.expire_timestamp;

export default {
      target: 'static',
      server: {
            port: 3333,
            host: '0.0.0.0', // default: localhost,
      },
      baseUrl: '/',
      router: {
            base: '/',
            extendRoutes(routes, resolve) {

            }
      },
      axios: {
            // proxy: true
      },
      htmlAttrs: {
            //lang: 'fa',
            //dir: 'rtl',
            //translate: "no"
      },
      pageTransition: 'fade',
      layoutTransition: 'fade',
      head: {
            meta: [
                  { charset: 'utf-8' },
                  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
      },
      loading: '~/components/loading/loading.vue',
      css: ['./scss-utils/main.scss'],
      plugins: [
            { src: '~/plugins/carousel', mode: 'client', ssr: false },
      ],
      buildModules: ['@nuxtjs/style-resources'],
      modules: [
            'nuxt-purgecss',
            '@nuxtjs/axios',
            ['nuxt-i18n', {
                  locales: [
                        {
                              name: 'فارسی',
                              code: 'fa',
                              iso: 'fa-IR',
                              file: 'fa-IR.js'
                        },
                        {
                              name: 'English',
                              code: 'en',
                              iso: 'en-US',
                              file: 'en-US.js'
                        },
                  ],
                  lazy: true,
                  langDir: 'lang/',
                  defaultLocale: 'fa',
            }]
      ],
      styleResources: {
            scss: ['~scss-utils/_variables/_vars.scss', '~scss-utils/mixins/_mixins.scss']
      },
      purgeCSS: purge,
      loading: false,
      pwa: {
            manifest: {

            }
      },
      build: {
            extend(config, { isDev, isClient }) {
                  config.module.rules.forEach(rule => {
                        if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
                              // add a second loader when loading images
                              rule.use.push({
                                    loader: 'image-webpack-loader',
                                    options: {
                                          svgo: {
                                                plugins: [
                                                      // use these settings for internet explorer for proper scalable SVGs
                                                      // https://css-tricks.com/scale-svg/
                                                      { removeViewBox: false },
                                                      { removeDimensions: true }
                                                ]
                                          }
                                    }
                              })
                        }
                  })
            },
            extractCSS: { allChunks: true },
            // publicPath: 'https://cdn.nuxtjs.org',    
            plugins: [
                  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /fa/),
            ],
            filenames: {
                  app: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js?expires=' + cache_expire_time_stamp,
                  chunk: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js?expires=' + cache_expire_time_stamp,
                  css: ({ isDev }) => isDev ? '[name].css' : '[contenthash].css?expires=' + cache_expire_time_stamp,
                  img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]?expires=' + cache_expire_time_stamp,
                  font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]?expires=' + cache_expire_time_stamp,
                  video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ex]?expires=' + cache_expire_time_stamp
            }
      }
}
