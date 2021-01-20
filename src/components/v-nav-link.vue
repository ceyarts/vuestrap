<template>
  <v-link v-bind="bindings">
    <slot />
  </v-link>
</template>

<script>
export default {
  computed: {
    classes() {
      return ["nav-link"];
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
