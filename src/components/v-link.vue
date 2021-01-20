<template>
  <component :is="tag" v-bind="bindings">
    <slot>{{ __(label) }}</slot>
  </component>
</template>

<script>
export default {
  props: {
    active: Boolean,
    disabled: Boolean,
    label: { type: String },
    color: { type: String },
  },
  computed: {
    tag() {
      return this.$attrs.to ? "router-link" : "a";
    },
    classes() {
      return [
        "v-link",
        {
          active: this.active,
          disabled: this.disabled,
          [`link-${this.color}`]: this.color,
        },
      ];
    },
    bindings() {
      return {
        href: "#",
        ...this.$attrs,
        class: this.classes,
      };
    },
  },
};
</script>

<style lang="scss">
.v-link {
  text-transform: capitalize;

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
