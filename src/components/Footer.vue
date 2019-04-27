<template>
  <footer class="pt-4 my-md-5 pt-md-5 border-top bg-light">
    <div class="row">
      <div class="col-12 col-md">
        <img class="mb-2" src="../assets/logo.png" alt width="48" height="48">
        <small class="d-block mb-3 text-muted">Copyright &copy; 2019 Rorange. All Rights Reserved</small>
      </div>
      <div class="col-6 col-md">
        <h5>
          <router-link to="/" class="text-muted">Rorange Portfolio</router-link>
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
