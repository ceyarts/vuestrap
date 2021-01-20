<template>
  <button v-bind="bindings">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    color: { type: String, default: "primary" },
  },
  computed: {
    classes() {
      return ["btn", `btn-${this.color}`];
    },
    bindings() {
      return {
        ...this.$attrs,
        class: this.classes,
      };
    },
  },
};
</script>

<style>
  .btn-primary {
    padding: 10px;
    color: white;
    background-color: blue;
  }
</style>