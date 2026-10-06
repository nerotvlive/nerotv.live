<script setup lang="ts">
import ErrorPage from "@/pages/errors/ErrorPage.vue";
window.location.href = "/privacy"
</script>

<template>
  <div class="flex flex-col grow justify-items-center justify-center align-middle">
    <ErrorPage>
      <template #error>Error 404</template>
      <template #message>This page could not be found...<br>Search for the privacy page?</template>
      <template #buttons>
        <a href="/privacy"><button class="bg-transparent hover:bg-white border border-white text-white hover:text-black py-2 px-4 rounded-xl cursor-pointer shadow-lg transition">Open Privacy Page</button></a>
      </template>
    </ErrorPage>
  </div>
</template>