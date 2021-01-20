<template>
  <nav v-bind="bindings">
    <slot />
  </nav>
</template>

<script>
export default {
  props: {
    tabs: Boolean,
    pills: Boolean,
    fill: Boolean,
    justify: Boolean,
  },
  computed: {
    classes() {
      return [
        "v-nav nav",
        {
          "nav-tabs": this.tabs,
          "nav-pills": this.pills,
          "nav-fill": this.fill,
          "nav-justified": this.justify,
        },
      ];
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


