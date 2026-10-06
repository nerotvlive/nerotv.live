import { createApp } from 'vue'
import './assets/nerotv.live/css/shared.css'
import App from './App.vue'
import router from './assets/nerotv.live/script/router'
import { i18n } from './assets/nerotv.live/script/i18n'

if(window.location.href.toLowerCase().includes("nerotvlive.github.io/nerotv.live")) {
    window.location.href = "https://nerotv.live" + window.location.pathname
}

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
