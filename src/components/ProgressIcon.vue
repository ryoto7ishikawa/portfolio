<template>
  <div class="progress-icon">
    <span>
      <i
        v-for="(value,index) in active_range"
        v-bind:key="index"
        :class="`active fas fa-chevron-right ${icon_size}`"
        props
      />
      <i
        v-for="(value,index) in inactive_range"
        v-bind:key="index+val"
        :class="`inactive fas fa-chevron-right ${icon_size}`"
        props
      />
    </span>
  </div>
</template>

<script>
import Vue from "vue";

const ProgressIcon = Vue.extend({
  name: "ProgressIcon",
  props: {
    val: { type: Number },
    max: { type: Number, default: 4 },
    iconsize: { type: String, default: "" }
  },
  computed: {
    active_range() {
      return Array.from(Array(this.val), (v, k) => k);
    },
    inactive_range() {
      return Array.from(Array(this.max - this.val), (v, k) => k);
    },
    icon_size() {
      return `size-${this.iconsize}`;
    }
  }
});
export default ProgressIcon;
</script>

<style lang="scss" scoped>
@import "../styles/app.scss";
.fa-chevron-right.size- {
  &lg {
    font-size: 60px;
  }
  &md {
    font-size: 40px;
  }
  &sm {
    font-size: 20px;
  }
}

@media (max-width: 991.98px) {
  .fa-chevron-right.size- {
    &lg {
      font-size: 30px;
    }
    &md {
      font-size: 20px;
    }
    &sm {
      font-size: 10px;
    }
  }
}
</style>
