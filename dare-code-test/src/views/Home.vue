<template class="home">
  <Hero
    image="index.jpg"
    title="Enhancing your beauty experience"
    alt="Hero Image"
  />
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";

export default {
  name: "Home",
  components: {
    Hero
  }
};
</script>
