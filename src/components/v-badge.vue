<template>
  <span v-bind="bindings">
    <slot>{{ __(label) }}</slot>
  </span>
</template>

<script>
import { isDark } from "../utils";

export default {
  props: {
    pill: Boolean,
    label: { type: String },
    color: { type: String, default: "primary" },
  },
  computed: {
    classes() {
      return [
        "v-badge badge",
        [`bg-${this.color}`],
        {
          "rounded-pill": this.pill,
          "text-dark": !isDark(this.color),
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
