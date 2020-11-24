<template>
  <div id="app">
    <BannerPage msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import BannerPage from "./components/BannerPage.vue";

export default {
  name: "App",
  components: {
    BannerPage
  }
};
</script>

<style>
@import "./assets/css/normalize.css";
@import "./assets/css/banner.css";
</style>
