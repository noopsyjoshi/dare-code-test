<template>
  <div id="app">
    <MainNavigation />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import MainNavigation from "@/components/Navigation.vue";

export default {
  name: "App",
  components: {
    MainNavigation
  }
};
</script>
