<template>
  <section class="hero">
    <figure class="hero__figure">
      <img
        :src="require(`@/assets/images/${image}`)"
        :alt="imageAlt"
        class="hero__image"
      />
    </figure>
    <div class="hero__title-container">
      <h1 class="hero__title">{{ title }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "", required: true },
    image: {
      type: String,
      default: null
    },
    imageAlt: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_hero.scss";
</style>
