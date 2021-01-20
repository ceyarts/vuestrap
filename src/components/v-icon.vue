<template>
  <i :class="classes" />
</template>

<script>
export default {
  props: {
    fixed: Boolean,
    spin: Boolean,
    pulse: Boolean,
    name: { type: String },
    size: { type: String },
    flip: { type: String },
    rotate: { type: String },
    color: { type: String },
  },
  computed: {
    classes() {
      return [
        "v-icon fas",
        `fa-${this.name}`,
        {
          "fa-fw": this.fixed,
          "fa-spin": this.spin,
          "fa-pulse": this.pulse,
          [`fa-${this.size}`]: this.size,
          [`fa-flip-${this.flip}`]: this.flip,
          [`fa-rotate-${this.rotate}`]: this.rotate,
          [`text-${this.color}`]: this.color,
        },
      ];
    },
  },
};
</script>
