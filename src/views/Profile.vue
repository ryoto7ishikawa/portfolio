<template>
  <div class="profile">
    <b-jumbotron text-variant="dark">
      <template slot="header">
        Profile
        <i class="fas fa-id-card"></i>
      </template>
    </b-jumbotron>
    <div class="media">
      <img class="mr-3" src="../assets/logo.png" alt="Rorenge">
      <div class="media-body">
        <h1>Rorenge</h1>
        <b-form>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">出身地</label>
            <div class="col-sm-8">
              <b-form-input type="text" readonly value="東京" class="bg-light"></b-form-input>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">生年</label>
            <div class="col-sm-8">
              <b-form-input type="text" readonly value="1995" class="bg-light"></b-form-input>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">役割</label>
            <div class="col-sm-8">
              <b-form-input type="text" readonly value="Webエンジニア" class="bg-light"></b-form-input>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">身分</label>
            <div class="col-sm-8">
              <b-form-input type="text" readonly value="フリーランス" class="bg-light"></b-form-input>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label">できること</label>
            <div class="col-sm-8">
              <b-form-input type="text" readonly value="Webサービス開発・運用" class="bg-light"></b-form-input>
            </div>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss">
</style>
