<template>
  <div class="footer-container">
    <div class="footer-line"></div>
    <div class="footer-items">
      <p>Sebastian Lehmann</p>
      <div class="footer-icons">
        <a
          class="material-icons f-icon"
          href="mailto:sol.mistereo@gmail.com"
          target="_blank"
          >mail</a
        >
        <a
          class="f-icon"
          href="http://github.com/MistereoSC/CodeGallery"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
      </div>
      <nav>
        <RouterLink v-for="itm in navItems" :to="itm.to">
          <p>{{ itm.name }}</p>
        </RouterLink>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_colors.scss';
.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  nav {
    display: flex;
    justify-content: flex-end;
    margin: 0.5rem 0 0.3rem 0;
    a {
      font-size: 1.15rem;
      border-left: 1px solid $c-text-very-mute;
      padding: 0 1rem;
      color: $c-text-soft;
    }
    a:first-of-type {
      border: 0;
    }
  }
}
.footer-items {
  max-width: 60ch;
  margin: 1rem 0 1.5rem 0;
  color: $c-text-soft;
  text-align: center;

  p {
    font-size: 1.15rem;
  }
}
.footer-icons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 0.75rem 0;

  a {
    color: $c-text-soft;
    fill: $c-text-soft;
    height: 1.5rem;
    width: 1.5rem;
  }

  .material-icons {
    margin-top: -0.15em;
    font-size: 1.5em;
  }
}

@media (hover: hover) {
  nav {
    a:hover {
      color: $c-accent-lime;
      fill: $c-accent-lime;
      background-color: transparent;
    }
  }
  a:hover {
    color: $c-accent-lime;
    fill: $c-accent-lime;
    background-color: transparent;
  }
}

.footer-line {
  height: 2px;
  background-color: $c-accent-lime;
  width: min(90%, 30ch);
}
</style>

<script setup>
import navItems from '@/assets/json/nav-links.json'
</script>
