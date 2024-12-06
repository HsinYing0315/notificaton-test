// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig, type NuxtConfig } from "nuxt/config"
import path from "path"
import fs from "fs"

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  buildModules: ['@nuxtjs/pwa'],
  pwa: {
    icon: false,
    manifest: {
      name: 'Nuxt Firebase Test',
      startUrl: '/',
      display: 'standalone',
      useWebmanifestExtension: true,
    },
    workbox: {
      autoRegister: true,
      importScripts: ['~/assets/sw.js']
    },
    devOptions: {
      enabled: true,
    }
  },
  runtimeConfig: {
    public: {
      firebaseApiKey: "",
      firebaseAuthDomain: "",
      firebaseProjectId: "",
      firebaseMessagingSenderId: "",
      firebaseAppId: "",
    }
  },
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "localhost-key.pem")),
      cert: fs.readFileSync(path.resolve(__dirname, "localhost.pem")),
    },
  },
  nitro: {
    firebase: {
      gen: 2
    }
  }
} as NuxtConfig)
