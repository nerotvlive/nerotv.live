import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

if(window.location.href.toLowerCase().includes("nerotvlive.github.io/nerotv.live/")) {
    window.location.href = "https://nerotv.live"+window.location.pathname
}

createApp(App).mount('#app')
