<template>
  <div class="progress">
    <div
      class="progress-bar"
      role="progressbar"
      :style="style"
      :aria-valuenow="val"
      :aria-valuemin="min"
      :aria-valuemax="max"
    >{{val}}{{unitStr}}</div>
  </div>
</template>

<script lang='js'>
import Vue from "vue";
const myprogress = Vue.extend({
  name: "myprogress",
  props: {
    val: { type: String },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    unitStr: { type: String, default: "%" }
  },
  computed: {
    style(){
      return `width: ${this.val}%`;
    }
  }
});
export default myprogress;
</script>

<style lang="scss">
</style>

