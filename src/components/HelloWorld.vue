<script setup lang="ts">
import { ref } from 'vue'
import heroImg from '@/assets/hero.png'
import viteLogo from '@/assets/vite.svg'
import vueLogo from '@/assets/vue.svg'

const count = ref(0)
</script>

<template>
  <section id="center">
    <div class="hero">
      <img :src="heroImg" class="base" width="170" height="179" alt="" />
      <img :src="vueLogo" class="framework" alt="Vue logo" />
      <img :src="viteLogo" class="vite" alt="Vite logo" />
    </div>
    <div>
      <h1>nerotv.live</h1>
      <p>If <code>this page</code> is the same at <code>https://nerotv.live</code> and <code>https://nerotvlive.github.io/nerotv.live/</code> everything is correct!</p>
    </div>
    <button type="button" class="counter" @click="count++">
      Count is {{ count }}
    </button>
  </section>

  <div class="ticks"></div>

  <section id="next-steps">

  </section>

  <div class="ticks"></div>
  <section id="spacer"></section>
</template>
