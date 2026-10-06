<script setup lang="ts">
import ErrorPage from "@/pages/errors/ErrorPage.vue";
</script>

<template>
  <div class="flex flex-col grow justify-items-center justify-center align-middle">
    <ErrorPage>
      <template #error>Error 404</template>
      <template #message>This page could not be found...</template>
    </ErrorPage>
  </div>
</template>