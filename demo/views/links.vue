<template>
  <div>
    <h1>links</h1>

    <section>
      <div class="sample">
        <v-link label="default link" />
        <v-link to="/" label="router link" />
        <v-link class="text-uppercase">slot link</v-link>
      </div>
    </section>

    <section>
      <h3>active/disabled states</h3>
      <div class="sample">
        <v-link>Link</v-link>
        <v-link active>Active</v-link>
        <v-link disabled>Disabled</v-link>
      </div>
    </section>

    <section>
      <h3>colored links</h3>
      <div class="sample">
        <v-link v-for="color in colors" :key="color" :color="color">
          {{ color }} link
        </v-link>
      </div>
    </section>
  </div>
</template>

<script>
import mixin from "../mixin";

export default {
  mixins: [mixin],
};
</script>
