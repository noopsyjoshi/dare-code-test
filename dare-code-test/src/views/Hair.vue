<template class="hair">
  <Hero image="hair.jpg" title="Hair" alt="Image of hair products" />
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
