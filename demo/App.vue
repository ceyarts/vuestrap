<template>
  <div class="container-fluid py-5">
    <div class="row gx-5">
      <!-- navigation -->
      <div class="col-3 border-end">
        <v-nav class="flex-column" pills>
          <v-nav-link v-for="(link, i) in links" :key="i" v-bind="link" />
        </v-nav>
      </div>

      <!-- contents -->
      <div class="col">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { links } from "./router";

export default {
  data() {
    return { links };
  },
};
</script>