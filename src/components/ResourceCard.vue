<template>
  <div class="proj-card-main" @click="openURL">
    <img v-if="src" class="proj-bg-img" :src="src" />
    <span>{{ title }}</span>
    <div class="slot-description flex-v"><slot></slot></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_colors.scss';
.proj-card-main {
  overflow: hidden;
  display: flex;
  flex-direction: column;

  height: 10rem;
  width: 20rem;
  user-select: none;
  filter: drop-shadow(0.2rem 0.2rem 0.25rem black);
  border-radius: 1rem;
  background-color: $c-background-3;

  background-position: top right;
  background-size: cover;
  background-repeat: no-repeat;

  cursor: pointer;
  transition: 0.3s ease-in-out;

  img {
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 1rem;
    opacity: 0.8;
    transition: 0.2s ease-in-out;
    background-color: $c-background-3;
  }

  span {
    transition: 0.2s ease-in-out;
    text-align: center;
    top: 1.5rem;
    font-size: 2rem;
    background: rgba($c-background, 0.95);
  }
}

.proj-card-main {
  &:hover {
    transform: translate(-0.25rem, -0.25rem);
    filter: drop-shadow(0.45rem 0.45rem 0.5rem black);
    background: $c-background-highlight;
    img {
      opacity: 0.2;
      filter: blur(3px);
      -webkit-filter: blur(3px);
    }
    span {
      background: rgba($c-background, 0);
    }
    .slot-description {
      color: $c-text;
      top: 20%;
    }
  }
}
.slot-description {
  margin: 0 1.5rem;
  font-size: 1.2rem;
  text-align: center;
  transition: color 0.2s ease-in-out, top 0.2s ease-in-out;
  top: 35%;
  color: #0000;
}

@media (max-width: 720px) {
  .proj-card-main {
    min-width: max(30ch, 80%);
  }
}
</style>

<script lang="ts">
export default {
  props: {
    title: String,
    src: String,
    url: String,
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
