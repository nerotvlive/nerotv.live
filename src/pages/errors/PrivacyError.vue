<script setup>
  import ErrorPage from "./ErrorPage.vue";

  window.location.href = "/privacy"
</script>

<template>
  <div class="flex flex-col grow justify-items-center justify-center align-middle">
    <ErrorPage>
      <template #error>Fehler 404</template>
      <template #message>Wir konnten diese Seite leider nicht finden...<br>Suchen Sie die Datenschutzerklärung?</template>
      <template #buttons>
        <a href="/privacy"><button class="border-2 border-white hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded cursor-pointer shadow-lg transition">Zur Datenschutzerklärung</button></a>
      </template>
    </ErrorPage>
  </div>
</template>

<style scoped>

</style>