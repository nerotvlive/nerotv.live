<script setup lang="ts">
import {onMounted} from "vue";
import {useI18n} from "vue-i18n";
const { t } = useI18n()
onMounted(() => {
  const header = document.querySelector('.header');
  if(header) {
    header.classList.add('active');
    const headerText = header.querySelector('.header h1');
    if (headerText) {
      if (headerText.querySelector('.gray-text')) {
        headerText.querySelector('.gray-text')?.classList.add('active');
      }
      if (headerText.querySelector('.special-text')) {
        headerText.querySelector('.special-text')?.classList.add('active');
      }
    }
  }
})

const startSearch = () => {
  const searchbar = document.getElementById('search-bar');
  if(searchbar) {
    const query = searchbar.value;
    const formattedQuery = encodeURIComponent(query);
    const searchUrl = "https://google.com/search?q=%s"
    window.location.href = searchUrl.replace('%s', formattedQuery);
  }
}
</script>

<template>
  <div class="header relative min-h-[50vh] flex flex-col">
    <div class="header-overlay"></div>
    <div class="header-content max-w-6xl mx-auto w-full py-4 grow flex flex-col justify-between items-center text-center">
      <div></div>
      <div class="flex flex-col items-center">
        <input @keydown.enter="startSearch();" id="search-bar" ref="searchInput" type="text" class="bg-zinc-400/25 backdrop-blur-2xl text-white px-8 py-4 rounded-full text-xl w-[50vw] max-w-5xl" :placeholder="t('startpage.search.placeholder')" autofocus>
      </div>
      <div>
        <button class="p-2 hover:cursor-pointer bg-transparent hover:text-white transition-all hover:scale-110 hidden">
          <i class="bi bi-caret-down-fill text-2xl"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  opacity: 0;
  background: var(--n-bg-body-alt);
  border-bottom: 1px solid #ffffff15;
  overflow: hidden;

  h1 {
    transform: translateY(2rem);
    animation: textIn 1s ease-in-out forwards;
  }

  .header-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: linear-gradient(to right, #d1d5db20 1px, transparent 1px), linear-gradient(to bottom, #d1d5db20 1px, transparent 1px);
    background-size: 64px 64px;
    -webkit-mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%);
    mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%);
    animation: fadeIn 5s ease-in-out forwards;
  }

  .header-content {
    z-index: 2;
  }

  .gray-text, .special-text {
    background: -webkit-linear-gradient(#fff, #333);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    opacity: 0;
  }

  .special-text {
    background: -webkit-linear-gradient(#dabaff, #7200ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .gray-text.active {
    animation: fadeIn 2s ease-in-out forwards;
  }

  .special-text.active {
    animation: specialIn 3s ease-in-out forwards;
  }
}

.header.active {
  animation: fadeIn 1s ease-in-out forwards;
}

@keyframes textIn {
  from {
    transform: translateY(2rem);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes specialIn {
  0% {
    filter: blur(32px) grayscale(100%);
    opacity: 0;
  }
  33% {
    filter: blur(4px) grayscale(100%);
  }
  66% {
    filter: blur(0) grayscale(100%);
  }
  100% {
    filter: blur(0) grayscale(0);
    opacity: 1;
  }
}
</style>