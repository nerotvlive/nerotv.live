<script setup lang="ts">
import {onMounted} from "vue";
import {useI18n} from "vue-i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
const { t } = useI18n()
onMounted(() => {
  document.body.classList.add("active");
})
</script>

<template>
  <div class="border-b fixed top-0 left-0 right-0 shadow-lg shadow-black/50" style="backdrop-filter: blur(16px); background: #ffffff10; border-color: #ffffff10">
    <div class="min-w-7xl max-w-7xl mx-auto p-4 select-none">
      <router-link to="/" class="hover:text-white hover:transition-all">
        nerotv.live
      </router-link>
    </div>
  </div>
  <main class="min-w-7xl max-w-7xl min-h-screen mx-auto border-x" style="border-color: #ffffff10">
    <router-view/>
  </main>
  <div class="bg-black border-t" style="border-color: #ffffff10">
    <div class="max-w-7xl mx-auto p-4 py-6 select-none text-center flex flex-col text-sm">
      <span class="mb-4">
        {{ t('footer.language') }} <LanguageSwitcher/>
      </span>
      <span>{{ t('footer.collective') }}<a class="text-white hover:cursor-pointer hover:text-blue-500 hover:transition-all" href="https://www.zyneoncollective.com/" target="_blank">Zyneon Collective</a></span>
      <span>{{ t('footer.studios') }}<a class="text-white hover:cursor-pointer hover:text-blue-500 hover:transition-all" href="https://www.zyneonstudios.com/" target="_blank">Zyneon Studios</a></span>
      <span class="mt-3 hidden flex-col sm:flex-row gap-3 justify-center">
        <router-link to="/imprint" class="hover:text-white hover:cursor-pointer hover:transition-colors" active-class="text-white font-bold">{{ t('footer.imprint') }}</router-link>
        <router-link to="/privacy" class="hover:text-white hover:cursor-pointer hover:transition-colors" active-class="text-white font-bold">{{ t('footer.privacy') }}</router-link>
        <a class="hover:text-white hover:cursor-pointer hover:transition-colors" href="https://github.com/nerotvlive/nerotv.live" target="_blank">GitHub/Source code</a>
      </span>
      <span class="mt-3 flex flex-col sm:flex-row gap-3 justify-center">
        <a class="hover:text-white hover:cursor-pointer hover:transition-colors" href="https://zyneoncollective.com/impressum" target="_blank">{{ t('footer.imprint') }}</a>
        <a class="hover:text-white hover:cursor-pointer hover:transition-colors" href="https://zyneoncollective.com/datenschutz" target="_blank">{{ t('footer.privacy') }}</a>
        <a class="hover:text-white hover:cursor-pointer hover:transition-colors" href="https://github.com/nerotvlive/nerotv.live" target="_blank">GitHub/Source code</a>
      </span>
      <span class="mt-3 opacity-50">{{ t('footer.copyright') }}</span>
    </div>
  </div>
</template>