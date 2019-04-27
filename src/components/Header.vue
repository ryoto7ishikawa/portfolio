<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="/">
      <img src="../assets/brand.svg" height="64" alt="logo">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto align-middle">
        <b-nav-item to="/" class="mr-5">
          <h1>Home</h1>
        </b-nav-item>
        <b-nav-item to="/profile" class="mr-5">
          <h1>Profile</h1>
        </b-nav-item>
        <b-nav-item to="/skill" class="mr-5">
          <h1>Skill</h1>
        </b-nav-item>
        <b-nav-item to="/work" class="mr-5">
          <h1>Work</h1>
        </b-nav-item>
        <b-nav-item to="/contact" class="mr-5">
          <h1>Contact</h1>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { Vue } from "vue-property-decorator";

export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.nav-item h1 {
  margin-bottom: 0rem;
}
a.nav-link.router-link-exact-active.router-link-active {
  color: $orange;
}
</style>
