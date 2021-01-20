<template>
  <h1>Icons</h1>

  <section>
    <h5>basic usage</h5>

    <div class="sample">
      normal
      <v-icon name="flag" />

      fixed-width
      <v-icon name="flag" fixed />
    </div>
  </section>

  <section>
    <h3>Colors</h3>

    <div class="sample fa-3x">
      <v-icon
        v-for="(color, i) in colors"
        :key="i"
        :color="color"
        name="camera"
      />
    </div>
  </section>

  <section>
    <h3>Sizes</h3>

    <div class="sample">
      <v-icon
        v-for="(size, i) in iconSizes"
        :key="i"
        :size="size"
        name="camera"
      />
    </div>
  </section>

  <section>
    <h3>Rotating Icons</h3>

    <div class="sample fa-3x">
      <v-icon
        v-for="(grade, i) in rotations"
        :key="i"
        :rotate="grade"
        name="snowboarding"
      />
    </div>
  </section>

  <section>
    <h3>Flipping Icons</h3>

    <div class="sample fa-3x">
      <v-icon flip="horizontal" name="snowboarding" />
      <v-icon flip="vertical" name="snowboarding" />
      <v-icon flip="both" name="snowboarding" />
    </div>
  </section>

  <section>
    <h3>Animating Icons</h3>

    <div class="sample fa-3x">
      <v-icon v-for="(name, i) in animatedIcons" :key="i" :name="name" spin />
      
      pulse
      <v-icon name="spinner" pulse/>
    </div>
  </section>
</template>

<script>
import mixin from "../mixin";

export default {
  mixins: [mixin],
  data() {
    return {
      iconSizes: ["1x", "2x", "3x", "5x", "7x", "10x"],
      rotations: ["90", "180", "270"],
      animatedIcons: ["spinner", "circle-notch", "sync", "cog"],
    };
  },
};
</script>

