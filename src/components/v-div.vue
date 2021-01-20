<template>
  <div v-bind="bindings">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    shadow: Boolean,
    gradient: Boolean,
    color: { type: String },
  },
  computed: {
    classes() {
      return [
        "v-div",
        {
          shadow: this.shadow,
          "bg-gradient": this.gradient,
          [`bg-${this.color}`]: this.color,
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
