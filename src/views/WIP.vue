<template>
  <div class="main-container">
    <div class="scroll-snap" id="1">
      <ViewAurora></ViewAurora>
    </div>

    <div class="scroll-snap" id="2">
      <ViewGlass></ViewGlass>
    </div>

    <div class="scroll-snap" id="3">
      <ViewNeumorph></ViewNeumorph>
    </div>

    <div class="scroll-snap" id="4">
      <ViewMaterial></ViewMaterial>
    </div>
    <div class="scroll-snap">
      <Footer style="background-color: black"></Footer>
    </div>
  </div>
  <NavTop :theme="currentTheme"></NavTop>
</template>

<style lang="scss" scoped>
.main-container {
  max-height: 100vh;

  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y proximity;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 8px;
    background: black;
  }
  &::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 4px;
  }
}
.scroll-snap {
  scroll-snap-align: start;
}
</style>

<script setup>
import NavTop from '@/components/ThemeGallery/Navs/TopNav.vue'
import Footer from '@/components/Footer.vue'

import ViewGlass from '@/components/ThemeGallery/GlassView.vue'
import ViewAurora from '@/components/ThemeGallery/AuroraView.vue'
import ViewNeumorph from '@/components/ThemeGallery/NeumorphView.vue'
import ViewMaterial from '@/components/ThemeGallery/MaterialView.vue'

import {onMounted, ref} from 'vue'

const currentTheme = ref('1')
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          currentTheme.value = entry.target.getAttribute('id')
        }
      })
    },
    {
      rootMargin: '0px 0px -85% 0px',
      threshold: 0,
    }
  )
  const sections = document.getElementsByClassName('scroll-snap')
  for (let idx = 0; idx < sections.length; idx++) {
    observer.observe(sections[idx])
  }
})
</script>
