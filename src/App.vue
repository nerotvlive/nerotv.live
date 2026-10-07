<script setup lang="ts">
import { useI18n } from "vue-i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import { ref, onMounted, onUnmounted } from "vue";

const { t } = useI18n();

const menu = ref(false);

const openMenu = () => {
  menu.value = true;
};

const closeMenu = () => {
  menu.value = false;
};

const toggleMenu = () => {
  if (menu.value) closeMenu();
  else openMenu();
};

let mediaQuery: MediaQueryList;

const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
  if (e.matches) {
    closeMenu();
  }
};

onMounted(() => {
  mediaQuery = window.matchMedia("(min-width: 768px)");
  handleResize(mediaQuery);
  mediaQuery.addEventListener("change", handleResize);
});

onUnmounted(() => {
  if (mediaQuery) {
    mediaQuery.removeEventListener("change", handleResize);
  }
});
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-10 select-none" style="backdrop-filter: blur(32px);">
    <div class="mx-auto max-w-7xl p-3 min-h-14 max-h-14 flex justify-between">
      <div class="flex justify-start">
        <router-link to="/" class="hover:text-white hover:transition-all w-fit">
          <img alt="nerotv.live" src="@/assets/nerotv.live/img/text.png" class="h-8 w-fit">
        </router-link>
      </div>
      <div class="grow flex-1 justify-center hidden">

      </div>
      <div class="flex justify-end">
        <div class="menu hidden md:flex gap-2" :class="{open: menu}">
          <button class="text-shadow-zinc-200 px-3 text-lg hover:text-white hover:transition-all hover:cursor-pointer hover:bg-zinc-500/50 rounded-full border border-transparent hover:border-zinc-400/50 close-menu" @click="toggleMenu()">
            <i class="bi bi-x-lg"></i>
            {{ t('nav.close') }}
          </button>
          <router-link to="/" active-class="bg-zinc-500/50 border-zinc-400/50 text-white" class="text-shadow-zinc-200 px-3 text-lg hover:text-white hover:transition-all hover:cursor-pointer hover:bg-zinc-500/50 rounded-full border border-transparent hover:border-zinc-400/50">
            {{ t('nav.home') }}
          </router-link>
        </div>

        <button class="md:hidden text-shadow-zinc-200 px-2 text-xl hover:text-white hover:transition-all hover:cursor-pointer" @click="toggleMenu()">
          <i class="bi bi-list"></i>
        </button>
      </div>
    </div>
  </div>
  <div style="">
    <main class="min-h-screen flex flex-col mx-auto">
      <div class="h-14 p-3"></div>
      <router-view/>
    </main>
    <div class="bg-zinc-950 border-t" style="border-color: #ffffff10">
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
  </div>
</template>

<style scoped>
  .menu {
    .close-menu {
      display: none;
    }

    button.active a.active {

    }
  }

  .menu.open {
    .close-menu {
      display: unset;
    }

    box-shadow: 0 0 1rem black;
    border-left: 1px solid #ffffff15;
    display: flex;
    position: absolute;
    background: black;
    top: 0; right: 0;
    height: 100vh;
    flex-direction: column;
    padding: 1rem 0;
    width: 0;
    overflow: hidden;
    animation: menuIn 0.15s ease forwards;

    button, a {
      text-align: center;
      white-space: nowrap;
      padding: 0.5rem 1.25rem;

      i {
        margin-right: 0.5rem;
      }
    }
  }

  @keyframes menuIn {
    from {
      padding: 1rem 0;
      width: 0;
    }

    to {
      padding: 1rem 1rem;
      width: 16rem;
    }
  }
</style>