<template>
  <div class="container">
    <div id="hover-observer" class="hover-observer"></div>
    <div class="menu">
      <nav>
        <RouterLink to="/">
          <span class="material-icons">home</span>
          <p>Home</p>
        </RouterLink>
        <RouterLink to="/cssgallery">
          <span class="material-icons">code</span>
          <p>CSS Gallery</p>
        </RouterLink>
        <RouterLink to="/contact">
          <span class="material-icons">mail</span>
          <p>About</p>
        </RouterLink>
      </nav>
    </div>
    <div id="content" open="false" class="content-container">
      <div class="content">
        <h1>BRAND.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eos
          ipsam quisquam aspernatur voluptate possimus aliquam recusandae
          expedita, corporis nobis deserunt, dolore tenetur quasi nemo maxime
          sunt. Rem inventore quisquam nobis vel! Aperiam aspernatur quam
          consectetur vero accusantium doloremque corrupti eius optio numquam
          amet assumenda in reiciendis alias, saepe temporibus voluptatem ab ut
          fuga nesciunt! Ea suscipit, sint odio obcaecati architecto consequatur
          aliquid accusamus veniam harum cumque accusantium nobis dolorem, neque
          esse eum at, laborum veritatis deleniti! Commodi possimus praesentium
          accusantium sit, assumenda mollitia fugit. Totam minima temporibus, in
          dignissimos iure fugit officiis vel nisi non nulla voluptates
          accusantium earum enim molestias ab error quis sapiente! Tempora
          possimus mollitia officia nisi doloribus ipsa assumenda ea iusto
          magnam cumque dolor perferendis officiis deserunt quas unde a
          obcaecati, vitae perspiciatis. Recusandae debitis iste minus rerum.
          Eligendi amet temporibus saepe, quia quis voluptatum accusantium sed
          nam!
        </p>
        <i class="material-icons menu-icon">menu</i>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 2rem 2rem 2rem 5rem;
  align-items: center;
  overflow-y: scroll;
  direction: rtl;
  margin-left: 3px;
  * {
    direction: ltr;
  }

  h1 {
    font-size: 8rem;
  }
  p {
    font-size: 2rem;
    line-height: 2;
  }
  .menu-icon {
    position: fixed;
    top: calc(100vh - 5rem);
    left: 0;
    font-size: 3rem;
    padding: 1rem;
  }
}
.content::-webkit-scrollbar {
  width: 12px;
}
.content::-webkit-scrollbar-thumb {
  background: black;
}
.container {
  background: black;
  min-width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.content-container {
  color: black;
  background: #fefff2;
  width: 200vw;
  height: 200vh;

  transform: rotate(0);
  transform-origin: top left;
  transition: transform 0.3s;
  z-index: 2;
}
.content-container[open='true'] {
  transform: translateX(-15vh) rotate(-20deg);
}
.hover-observer[open='true'] {
  pointer-events: none;
}
.menu {
  position: absolute;
  width: 20vh;
  height: 30vh;
  bottom: 0;
  left: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 1.5rem;
  padding-bottom: 2rem;

  a {
    color: white;
    &:hover {
      background: gray;
    }
  }
}

.hover-observer {
  position: absolute;
  width: 20vh;
  height: 30vh;
  bottom: 0;
  left: 0;
  z-index: 100;
  transform: translateX(-5vh) rotate(-20deg);
}
</style>

<script setup>
import {onMounted} from 'vue'

onMounted(() => {
  const content = document.getElementById('content')
  const hoverMenu = document.getElementById('hover-observer')
  let midAnim = false
  let open = false

  content.addEventListener('mousemove', function () {
    if (midAnim || open) {
      return
    }
    midAnim = true
    open = true
    content.setAttribute('open', 'false')
    hoverMenu.setAttribute('open', 'false')
    setTimeout(() => {
      midAnim = false
    }, 300)
  })
  hoverMenu.addEventListener('mousemove', function () {
    if (midAnim || !open) {
      return
    }
    midAnim = true
    open = false
    content.setAttribute('open', 'true')
    hoverMenu.setAttribute('open', 'true')
    setTimeout(() => {
      midAnim = false
    }, 300)
  })
})
</script>
