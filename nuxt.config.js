
import webpack from 'webpack';
import purge from './configs/purge.conf'

export default {
      server: {
            port: 3333,
            host: '0.0.0.0', // default: localhost,
      },
      // baseUrl: '/',
      router: {
            base: '/',
            extendRoutes(routes, resolve) {

            }
      },
      axios: {
            // proxy: true
      },
      htmlAttrs: {
            lang: 'fa',
            dir: 'rtl',
            translate: "no"
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

      ],
      buildModules: ['@nuxtjs/style-resources'],
      modules: ['nuxt-purgecss', '@nuxtjs/axios'],
      styleResources: {
            scss: ['~scss-utils/_variables/_vars.scss', '~scss-utils/mixins/_mixins.scss']
      },
      purgeCSS: purge,
      loading: { color: '#fff' },
      pwa: {
            manifest: {

            }
      },
      build: {
            extractCSS: {allChunks:true},
            plugins: [
                  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /fa/)
            ]
      }
}
