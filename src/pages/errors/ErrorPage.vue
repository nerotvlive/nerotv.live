<script setup>

</script>

<template>
  <div class="w-full flex flex-col justify-center align-middle text-center">
    <div class="flex justify-around">
      <div class="border w-fit border-zinc-700 px-8 py-4 rounded-2xl bg-zinc-900 shadow-xl">
        <h1 class="text-4xl font-bold text-red-300"><slot name="error"></slot></h1>
        <p><slot name="message"></slot></p>
        <div class="pt-4 pb-1 flex gap-2 text-center align-items-center justify-center">
          <a href="/"><button class="bg-purple-300 hover:bg-purple-400 border-2 border-purple-300 text-black font-bold py-2 px-4 rounded cursor-pointer shadow-lg transition">Zurück zur Startseite</button></a>
          <slot name="buttons"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>