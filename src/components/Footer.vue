<template>
  <footer class="pt-4 pt-md-5 border-top bg-light fixed-bottom">
    <div class="row">
      <div class="col-12 col-md">
        <img class="mb-2" src="../assets/logo.png" alt width="48" height="48" />
        <small class="d-block text-muted">Copyright &copy; 2019 Rorenge. All Rights Reserved.</small>
        <small class="d-block mb-3 text-muted">Updated at {{updatedAtStr}}</small>
      </div>
      <div class="col-12 col-md">
        <h5>
          <router-link to="/" class="text-muted">Rorenge Portfolio</router-link>
        </h5>
        <ul class="list-unstyled text-small">
          <li>
            <router-link to="/profile" class="text-muted">Profile</router-link>
          </li>
          <li>
            <router-link to="/skill" class="text-muted">Skill</router-link>
          </li>
          <li>
            <router-link to="/work" class="text-muted">Work</router-link>
          </li>
          <li>
            <router-link to="/contact" class="text-muted">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>


<script>
import Vue from "vue";
import moment from "moment";
import { Constants } from "../libs";

export default Vue.extend({
  computed: {
    updatedAtStr() {
      return `${moment(Constants.updatedAt).format("YYYY/MM")}`;
    }
  }
});
</script>
