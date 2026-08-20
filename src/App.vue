<script setup>
  import { onMounted } from 'vue'

  onMounted(async () => {

  })
</script>

<template>
  <div class="min-h-screen bg-neutral-950 text-white font-sans flex flex-col">
    <nav class="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-md sticky top-0">
      <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold tracking-wider text-white flex items-center gap-2">
          <img src="/logo.png" alt="nerotv.live Logo" class="w-7 h-7 mr-2">
          <span style="color: #b087ff;">nerotv.live</span>
        </router-link>

        <div class="space-x-6">
          <router-link to="/" class="text-neutral-400 hover:text-purple-100 transition" active-class="text-purple-100">Start</router-link>
          <router-link to="/zyneon" class="text-neutral-400 hover:text-white transition" active-class="text-white">Zyneon Studios</router-link>
          <router-link to="/services" class="text-neutral-400 hover:text-sky-300 transition" active-class="text-sky-300">Alle Dienste</router-link>
        </div>
      </div>
    </nav>

    <main class="flex grow max-w-6xl mx-auto px-4 py-12 w-full h-full">
      <router-view></router-view>
    </main>

    <footer class="border-t border-neutral-800 py-6 text-center text-sm text-neutral-500">
      <div class="flex items-center justify-center gap-2 mb-2">
        <router-link to="/imprint" class="text-neutral-400 hover:text-white transition" active-class="text-white">Impressum</router-link>
        <router-link to="/privacy" class="text-neutral-400 hover:text-white transition" active-class="text-white">Datenschutzerklärung</router-link>
      </div>
      <div class="flex items-center justify-center gap-2 mb-2">
        <a class="text-neutral-400 hover:text-white transition" href="https://github.com/nerotvlive" target="_blank">GitHub</a>
        <a class="text-neutral-400 hover:text-white transition" href="https://github.com/nerotvlive/nerotv.live" target="_blank">Source</a>
        <a class="text-neutral-400 hover:text-white transition" href="https://b.nerotv.live/public/" target="_blank">Files</a>
      </div>
      <br>
      <strong>Diese Seite ist Teil des <a class="text-neutral-400 hover:text-white transition" href="https://www.zyneoncollective.com" target="_blank">Zyneon Collective</a></strong>
      <p>&copy; 2026 <a class="text-neutral-400 hover:text-white transition" href="https://www.zyneonstudios.com" target="_blank">Zyneon Studios</a>. Alle Rechte vorbehalten.</p>
    </footer>

  </div>
</template>