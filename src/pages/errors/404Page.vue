<script setup>
  import ErrorPage from "./ErrorPage.vue";

  const url = window.location.href;
  if(url.toLowerCase().endsWith(".html")) {
    window.location.href = url.toLowerCase().replace(".html", "");
  }
</script>

<template>
  <div class="flex flex-col grow justify-items-center justify-center align-middle">
    <ErrorPage>
      <template #error>Fehler 404</template>
      <template #message>Wir konnten diese Seite leider nicht finden...</template>
    </ErrorPage>
  </div>
</template>

<style scoped>

</style>