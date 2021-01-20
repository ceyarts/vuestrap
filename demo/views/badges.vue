<template>
  <h1>Badges</h1>

  <section>
    <div class="sample">
      <v-badge label="badge" />
      <v-badge label="pilled badge" pill />
      <v-badge class="text-uppercase">slot badge</v-badge>
    </div>
  </section>

  <section>
    <h3>Colored variations</h3>

    <div class="sample">
      <v-badge v-for="(color, i) in colors" :key="i" :color="color">
        {{ color }} badge
      </v-badge>
    </div>
  </section>
</template>

<script>
import mixin from "../mixin";

export default {
  mixins: [mixin],
};
</script>

