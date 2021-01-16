export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    mode: 'spa', // TODO
    title: 'ternsite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
      // { name: 'csrf-token', content: '{{ csrf_token() }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/tailwind.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'https://api.te-rent.com'
      },
      local: {
        token: {
          property: 'token'
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user'
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          // logout: { url: '/logout', method: 'post' },
          user: { url: '/auth/user', method: 'get' }
        }
      },
      github: { /* ... */ },
      cookie: {
        cookie: {
          // (optional) If set we check this cookie exsistence for loggedIn check
          name: 'XSRF-TOKEN'
        },
        endpoints: {
          // (optional) If set, we send a get request to this endpoint before login
          csrf: {
            url: ''
          }
        }
      }
    }
  },

  router: {
    middleware: ['auth']
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    credentials: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
