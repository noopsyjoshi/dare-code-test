<template>
  <section class="image-copy">
    <div class="container">
      <div class="align-items-lg-center row no-gutters">
        <div class="col-10 offset-1 col-lg-5 offset-lg-0">
          <figure class="image-copy__figure image-copy__figure--spacer">
            <img
              :src="require(`@/assets/images/${image}`)"
              :alt="imageAlt"
              class="image-copy__image"
            />
          </figure>
        </div>
        <div class="col-10 offset-1 col-lg-6">
          <div
            class="image-copy__body-container image-copy__body-container--no-spacer"
          >
            <p v-if="body" class="image-copy__body">{{ body }}</p>
            <p v-if="body2" class="image-copy__body">{{ body2 }}</p>
            <p v-if="body3" class="image-copy__body">{{ body3 }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    body: { type: String, default: "", required: true },
    body2: { type: String, default: "", required: true },
    body3: { type: String, default: "", required: true },
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
@import "@/assets/scss/components/_image-copy.scss";
</style>
