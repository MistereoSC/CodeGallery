<template>
  <div class="nav-main">
    <nav id="skinner" theme="Aurora">
      <span>{{ Themes[theme] }}</span>
      <RouterLink v-for="itm in navItems" :to="itm.to">
        <i class="material-icons">{{ itm.icon }}</i>
      </RouterLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_glass.scss';
.nav-main {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
nav {
  margin: 1rem;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 1.5rem;

  border-radius: 1rem;
  transition: 0.4s;
  p,
  a {
    color: white;
    padding: 0.5rem 0.8rem 0.55rem 0.8rem;
    .material-icons {
      margin: 0;
    }
    &:hover {
      background: transparent;
      color: hsl(160deg, 100%, 37%);
    }
  }

  span {
    width: 10ch;
  }
}

nav {
  a.router-link-exact-active {
    color: $glass-grn-1;
    cursor: default;
  }
  a.router-link-exact-active:hover {
    background-color: transparent;
  }
}

#skinner[theme='Aurora'],
#skinner[theme='Glass'] {
  background: rgba(239, 239, 239, 0.05);
  background: linear-gradient(
    137deg,
    rgba(239, 239, 239, 0.1) 0%,
    rgba(239, 239, 239, 0.03) 100%
  );
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(14px);
}
#skinner[theme='Aurora'] {
  a.router-link-exact-active {
    color: #1a99e6;
  }
}

#skinner[theme='Neumorph'] {
  border: 2px solid black;
  span,
  p,
  a {
    color: black;
  }
}
#skinner[theme='Material'] {
  border-radius: 4px;
  background: rgb(64, 64, 64);
}

@media (max-width: 720px) {
  nav {
    margin: 0.5rem 0 0 0;
    span {
      display: none;
    }
    a {
      padding: 0.5rem 0.25rem 0.55rem 0.25rem;
    }
  }
}
</style>

<script setup>
import {watch, onMounted} from 'vue'
import navItems from '@/assets/json/nav-links.json'

const props = defineProps({
  theme: String,
})

let themeContainer
onMounted(() => {
  themeContainer = document.getElementById('skinner')
})

watch(
  () => props.theme,
  (newValue, oldValue) => {
    themeContainer.setAttribute('theme', Themes[newValue])
  }
)

const Themes = {
  1: 'Aurora',
  2: 'Glass',
  3: 'Neumorph',
  4: 'Material',
}
</script>
