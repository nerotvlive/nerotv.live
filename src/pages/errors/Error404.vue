<script setup lang="ts">
import ErrorPage from "@/pages/errors/ErrorPage.vue";
import {useI18n} from "vue-i18n";
const { t } = useI18n()
</script>

<template>
    <ErrorPage>
      <template #error>{{ t('errors.error') }}</template>
      <template #error-code>404</template>
      <template #message>{{ t('errors.notFound') }}</template>
    </ErrorPage>
</template>