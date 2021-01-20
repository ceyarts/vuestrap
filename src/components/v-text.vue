<template>
  <component :is="tag" v-bind="bindings">
    <slot>{{ raw }}</slot>
  </component>
</template>

<script>
export default {
  props: {
    muted: Boolean,
    lower: Boolean,
    upper: Boolean,
    capital: Boolean,
    nowrap: Boolean,
    truncate: Boolean,
    raw: { type: String },
    color: { type: String },
    tag: { type: String, default: "p" },
  },
  computed: {
    classes() {
      return [
        "v-text",
        {
          "text-muted": this.muted,
          "text-lowercase": this.lower,
          "text-uppercase": this.upper,
          "text-capitalize": this.capital,
          "text-nowrap": this.nowrap,
          "text-truncate": this.truncate,
          [`text-${this.color}`]: this.color,
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

<style lang="scss">
.v-text {
  /**
   * bugfix: <slot>&#8203;{{ __(label) }}</slot>
   * @see: https://stackoverflow.com/questions/49783681/text-transform-capitalize-css-not-working-correctly
   */
  &:before {
    display: inline-block;
    content: "";
  }
}
</style>