<template>
  <div class="nav-main">
    <div class="pips">
      <div></div>
      <div></div>
    </div>
    <nav class="glass">
      <RouterLink to="/">
        <i class="material-icons">home</i>
      </RouterLink>
      <RouterLink to="/cssgallery">
        <i class="material-icons">code</i>
      </RouterLink>
      <RouterLink to="/contact">
        <i class="material-icons">mail</i>
      </RouterLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_glass.scss';
.nav-main {
  z-index: 1;
}
nav {
  margin: 0.5rem;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  font-size: 1.5rem;

  a {
    color: white;
    padding: 0.5rem 0.8rem 0.55rem 0.8rem;
    .material-icons {
      margin: 0;
    }
    &:hover {
      background: transparent;
      color: $glass-grn-1;
    }
  }
}
.pips {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  div {
    position: absolute;
    width: 2.8rem;
    height: 3px;
    background: $glass-grn-1;
    z-index: -1;
    right: 1.88rem;
  }

  div:nth-child(1) {
    top: 0;
  }
  div:nth-child(2) {
    bottom: 0;
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
</style>
