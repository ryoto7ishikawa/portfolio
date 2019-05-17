<template>
  <div class="home">
    <b-jumbotron text-variant="dark">
      <template slot="header">
        Home
        <i class="fas fa-home"></i>
      </template>
      <b-card-text>
        <strong>Rorenge</strong>のポートフォリオサイトです．
      </b-card-text>
    </b-jumbotron>
    <div class="row">
      <div class="col-sm-6 mb-3">
        <router-link to="/profile" class="card-link">
          <b-card bg-variant="light">
            <h2>
              Profile
              <i class="fas fa-id-card"></i>
            </h2>
            <b-card-text>Rorengeについて</b-card-text>
          </b-card>
        </router-link>
      </div>
      <div class="col-sm-6 mb-3">
        <router-link to="/skill" class="card-link">
          <b-card bg-variant="light">
            <h2>
              Skill
              <i class="fas fa-star"></i>
            </h2>
            <b-card-text>できること</b-card-text>
          </b-card>
        </router-link>
      </div>
      <div class="col-sm-6 mb-3">
        <router-link to="/work" class="card-link">
          <b-card bg-variant="light">
            <h2>
              Work
              <i class="fas fa-business-time"></i>
            </h2>
            <b-card-text>やってきたこと</b-card-text>
          </b-card>
        </router-link>
      </div>
      <div class="col-sm-6 mb-3">
        <router-link to="/contact" class="card-link">
          <b-card bg-variant="light">
            <h2>
              Contact
              <i class="fas fa-paper-plane"></i>
            </h2>
            <b-card-text>れんらくしたいとき</b-card-text>
          </b-card>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>


<style lang="scss" scoped>
@import "../styles/app.scss";

a {
  .card {
    color: $dark;
    border-bottom: solid 2px $dark;
  }
  .card:hover {
    color: $orange;
    border: solid 1px $orange;
  }
}

.card-link:hover {
  text-decoration: none;
}

@media (min-width: 576px) {
  a:hover {
    color: $orange;
  }
}
</style>
