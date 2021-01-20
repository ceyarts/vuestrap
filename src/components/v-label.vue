<template>
  <component :is="tag" v-bind="bindings">
    <slot>{{ __(text) }}</slot>
  </component>
</template>

<script>
export default {
  props: {
    required: Boolean,
    text: { type: String },
  },
  computed: {
    tag() {
      return this.$attrs.for ? "label" : "span";
    },
    classes() {
      return [
        "v-label",
        {
          required: this.required,
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
.v-label {
  text-transform: capitalize;

  &.required:after {
    color: #ff0000;
    margin-left: 5px;
    content: "*";
  }
}
</style>
