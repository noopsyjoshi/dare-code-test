<template>
  <section class="blusher">
    <Hero image="blusher.jpg" title="Blusher" alt="Image of blusher" />
    <Accordion />
  </section>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Accordion from "@/components/Accordion.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Accordion
  }
};
</script>
