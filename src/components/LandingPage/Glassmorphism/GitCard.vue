<template>
  <div class="proj-card-main glass" @click="openURL">
    <img v-if="src" class="proj-bg-img" :src="src" />
    <img v-else-if="imgSrc" class="proj-bg-img" :src="imgSrc" />
    <span class="proj-row">
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
      <p>{{ title }}</p>
    </span>
    <div class="slot-description"><slot></slot></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_glass.scss';
.proj-card-main {
  font-family: 'Jura', sans-serif;
  user-select: none;
  cursor: pointer;
  transition: transform 0.2s;

  display: flex;
  flex-direction: column;
  min-height: 7rem;
  width: min(100%, 70ch);

  border-radius: 1rem;
  background-position: top right;
  background-size: cover;
  background-repeat: no-repeat;
  img {
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    opacity: 1;
    -webkit-mask-image: -webkit-gradient(
      linear,
      right top,
      left top,
      from(rgba(0, 0, 0, 0.9)),
      to(rgba(0, 0, 0, 0))
    );
  }
}
.proj-row {
  display: flex;
  align-items: center;
  margin: 0.75rem 0 0 0.75rem;

  svg {
    fill: white;
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.4rem;
    margin-bottom: -0.1rem;
  }
}

.slot-description {
  margin: 0.75rem;
  font-size: 1.2rem;

  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  border-radius: 1rem;
}
p {
  font-weight: 700;
  transition: color 0.2s linear;
  background: $glass-gradient-1;
  background-clip: text;
  -webkit-background-clip: text;
}

.proj-card-main:hover {
  transform: translate(-0.3rem, -0.3rem);
  p {
    color: transparent;
  }
}
</style>

<script>
export default {
  props: {
    title: String,
    src: String,
    url: String,
    gitName: String,
    ignorePreview: Boolean,
  },
  data() {
    return {
      imgSrc: null,
    }
  },
  async created() {
    if (!this.ignorePreview && !this.src) {
      const md = await fetch(
        'https://raw.githubusercontent.com/' +
          this.gitName +
          '/' +
          this.title +
          '/master/README.md'
      )
        .then((data) => {
          return data.text()
        })
        .catch((err) => {
          console.log('Error fetching image:', err)
          return err
        })
      let src = md.match(/https:\/\/i\.imgur\.com\/.*\.[^\)]*/)
      if (src) {
        this.imgSrc = src
      }
    }
  },
  methods: {
    openURL() {
      if (this.url) {
        window.open(this.url, '_blank')
      }
    },
  },
}
</script>
