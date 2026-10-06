<script setup lang="ts">
import ErrorPage from "@/pages/errors/ErrorPage.vue";
import {useI18n} from "vue-i18n";
window.location.href = "/privacy"
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col grow justify-items-center justify-center align-middle">
    <ErrorPage>
      <template #error>{{ t('errors.error') }} 404</template>
      <template #message>{{ t('errors.notFound') }}<br>{{ t('errors.privacy') }}</template>
      <template #buttons>
        <a href="/privacy"><button class="bg-transparent hover:bg-white border border-white text-white hover:text-black py-2 px-4 rounded-xl cursor-pointer shadow-lg transition">{{ t('errors.openPrivacy') }}</button></a>
      </template>
    </ErrorPage>
  </div>
</template>