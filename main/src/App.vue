<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->

  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/app1">app1</RouterLink>
    <RouterLink to="/app2">app2</RouterLink>
  </header>

  <div class="body">
    <div class="left">侧边路由</div>
    <div class="content">
      <RouterView />
      <div id="vue3"></div>
      <!-- <div id="app2"></div> -->
      <!-- <div id="vue3"></div> -->
    </div>
  </div>

</template>

<style scoped>
.body{
  margin-top: 20px;
  border-top: 1px solid #000;
  display: flex;
  >.left{
    padding: 10px;
    text-align: center;
    border-right: 1px solid #000;
    flex: 0 0 100px;
  }

  > .content{
    width: 100%;
    text-align: center;
  }
}
header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
  > a{
    margin: 0 20px;
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
