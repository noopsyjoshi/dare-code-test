<template class="mascara">
  <Hero image="mascara.jpg" title="Mascara" alt="Image of mascara makeup" />
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
