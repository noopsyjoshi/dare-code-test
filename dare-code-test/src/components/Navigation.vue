<template>
  <nav class="navigation">
    <div class="navigation__toggle">
      <div
        id="open"
        class="navigation__toggle-btn navigation__toggle-btn--open"
      >
        <span>Menu</span>
      </div>
      <div
        id="close"
        class="navigation__toggle-btn navigation__toggle-btn--close"
      >
        <span>Close</span>
      </div>
    </div>
    <div class="navigation__menu">
      <ul class="navigation__list">
        <li>
          <router-link class="navigation__link" to="/blusher"
            >Blusher</router-link
          >
        </li>
        <li>
          <router-link class="navigation__link" to="/brushes"
            >Brushes</router-link
          >
        </li>
        <li>
          <router-link class="navigation__link" to="/mascara"
            >Mascara</router-link
          >
        </li>
        <li>
          <router-link class="navigation__link" to="/perfume"
            >Perfume</router-link
          >
        </li>
        <li>
          <router-link class="navigation__link" to="/hair">Hair</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
@import "@/assets/scss/components/_navigation.scss";
</style>

<script>
export default {};
</script>
