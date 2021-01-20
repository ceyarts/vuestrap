<template>
  <component :is="tag" v-bind="bindings">
    <slot>
      <v-icon v-if="icon" :name="icon" />
      <v-label v-if="label" :text="label" />
      <v-badge v-if="badge" :label="badge" pill />
    </slot>
  </component>
</template>

<script>
export default {
  props: {
    icon: { type: String },
    label: { type: String },
    badge: { type: String },
    size: { type: String },
    color: { type: String, default: "primary" },
  },
  computed: {
    url() {
      return this.$attrs.to ?? this.$attrs.href;
    },
    tag() {
      return this.url ? "v-link" : "button";
    },
    classes() {
      return [
        "v-button btn",
        {
          [`btn-${this.size}`]: this.size,
          [`btn-${this.color}`]: this.color,
        },
      ];
    },
    bindings() {
      return {
        ...this.$attrs,
        class: this.classes,
        [this.url ? "role" : "type"]: "button",
      };
    },
  },
};
</script>

<style lang="scss">
.v-button {
  & > .v-badge {
    opacity: 0.8;
    margin-left: 0.5em;
    padding: 0.2em 0.4em;
  }

  & > .v-icon + .v-label {
    margin-left: 0.5em;
  }
}
</style>
