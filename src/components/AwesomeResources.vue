<template>
  <div class="resources-container">
    <diV class="resources">
      <div class="header">
        <h1>#Awesome resources</h1>
        <span>
          Some awesome and helpful tools I regularly use while programing.
        </span>
        <span> (Aka just a List of Links I want to have fast access to.) </span>
        <br /><br />
      </div>
      <ResourceCard
        title="Codepen"
        url="https://codepen.io/"
        src="https://i.imgur.com/n0bSfY3.png"
      >
        Test your front-end code snippets, or discover cool effects and
        components.
      </ResourceCard>

      <ResourceCard
        title="Omatsuri"
        url="https://omatsuri.app/"
        src="https://i.imgur.com/KEh6FbT.png"
      >
        Discover lots of awesome tools, ranging from Lorem Ipsum generators to
        Gradient generators
      </ResourceCard>

      <ResourceCard
        title="Haikei"
        url="https://haikei.app/"
        src="https://i.imgur.com/mULpEJF.png"
      >
        Generate unique SVG design assets, ready to use with your design tools
        and workflow.
      </ResourceCard>

      <ResourceCard
        title="Font Flipper"
        url="https://fontflipper.com/"
        src="https://i.imgur.com/QQugXdj.png"
      >
        Find your perfect match! Swipe through fonts until you find the perfect
        font combination.
      </ResourceCard>

      <ResourceCard
        title="ColorSpace"
        url="https://mycolor.space/"
        src="https://i.imgur.com/VDvw4P6.png"
      >
        Enter a color, and this site will generate you a long list of fitting
        color pallets.
      </ResourceCard>

      <ResourceCard
        title="Adobe Colors"
        url="https://color.adobe.com/de/create/color-wheel"
        src="https://i.imgur.com/43upjvy.png"
      >
        Create your own color pallet with ease.
      </ResourceCard>

      <ResourceCard
        title="Gradient Magic"
        url="https://www.gradientmagic.com/"
        src="https://i.imgur.com/uEcvLcQ.png"
      >
        This site offers a variety of awesome gradient effects.
      </ResourceCard>

      <ResourceCard
        title="UI Gradients"
        url="https://uigradients.com/"
        src="https://i.imgur.com/vNHofkF.png"
      >
        Browse through lots of different gradients.
      </ResourceCard>

      <ResourceCard
        title="Cubic Bezier"
        url="https://cubic-bezier.com/"
        src="https://i.imgur.com/sdUBz0J.png"
      >
        Create the perfect Cubic Bezier curve for your CSS animations.
      </ResourceCard>

      <ResourceCard
        title="Bundlephobia"
        url="https://bundlephobia.com/"
        src="https://i.imgur.com/9DJZRb8.png"
      >
        Anxious about how large all your NPM packages are ? Find out how massive
        these packages really are.
      </ResourceCard>
    </diV>
  </div>
</template>

<style lang="scss" scoped>
.resources-container {
  justify-content: flex-start;
  margin-bottom: 3rem;
  .resources {
    grid-row-start: 2;
    grid-row-end: 4;
    margin: 1rem 0;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;

    .header {
      flex-basis: 100%;
    }
  }
}

@media (max-width: 1370px) {
  .header {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .resources-container {
    .resources {
      justify-content: center;
    }
  }
}
</style>

<script setup lang="ts">
import ResourceCard from '@/components/ResourceCard.vue'
</script>
