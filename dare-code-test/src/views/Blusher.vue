<template class="blusher">
  <Hero image="blusher.jpg" title="Blusher" alt="Image of blusher and blush" />
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
