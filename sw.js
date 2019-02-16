importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07b513b4b2386325bd55.js",
    "revision": "4086fb38e278e53cb4ad7e55f00d5c28"
  },
  {
    "url": "/_nuxt/170eabd0fc9515414642.js",
    "revision": "a09c569c85a6bf2f81300febda9da8cc"
  },
  {
    "url": "/_nuxt/1f2bada922a4741b78d5.js",
    "revision": "76ccf2de3e39ff131b979197110d3e57"
  },
  {
    "url": "/_nuxt/4b44579382cbddbf408b.js",
    "revision": "5d1c1047a8214bd4b572b8ab6b479b36"
  },
  {
    "url": "/_nuxt/81b940fa969c4d5b2908.js",
    "revision": "3a382a1f3373180b4b1c59c5ae1a5e0c"
  },
  {
    "url": "/_nuxt/92ab9a21f05b0861a680.js",
    "revision": "9c4e8724a6010f5aa1cdbc936d0dc2c4"
  }
], {
  "cacheId": "testsite",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
