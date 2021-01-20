<template>
  <div v-bind="bindings">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    size: { type: String },
    vertical: { type: Boolean },
  },
  computed: {
    classes() {
      return [
        {
          "btn-group": !this.vertical,
          "btn-group-vertical": this.vertical,
          [`btn-group-${this.size}`]: this.size,
        },
      ];
    },
    bindings() {
      return {
        role: "group",
        class: this.classes,
      };
    },
  },
};
</script>
