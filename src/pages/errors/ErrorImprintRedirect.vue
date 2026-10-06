<script setup lang="ts">
  import ErrorPage from "@/pages/errors/ErrorPage.vue";
  import {useI18n} from "vue-i18n";
  window.location.href = "https://zyneoncollective.com/impressum"
  const { t } = useI18n()
</script>

<template>
  <ErrorPage>
    <template #error>{{ t('errors.error') }}</template>
    <template #error-code>404</template>
    <template #message>{{ t('errors.notFound') }}<br>{{ t('errors.imprint') }}</template>
    <template #buttons>
      <a href="https://zyneoncollective.com/impressum" class="rounded-full text-white px-4 py-2 border border-red-400 bg-red-500 hover:transition-all shadow-lg shadow-black hover:bg-red-400 hover:shadow-red-400 hover:shadow-sm">
        <i class="bi bi-box-arrow-up-right mr-0.5"></i>
        {{ t('errors.openImprint') }}
      </a>
    </template>
  </ErrorPage>
</template>