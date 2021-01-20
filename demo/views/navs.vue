<template>
  <div>
    <h1>navs</h1>

    <section>
      <div class="sample">
        <v-nav>
          <v-nav-link active>Active</v-nav-link>
          <v-nav-link>Link</v-nav-link>
          <v-nav-link>Link</v-nav-link>
          <v-nav-link disabled>Disabled</v-nav-link>
        </v-nav>
      </div>
    </section>

    <section>
      <h3>horizontal alignment</h3>

      <div class="sample">
        <v-nav class="justify-content-center">
          <v-nav-link active>Active</v-nav-link>
          <v-nav-link>Link</v-nav-link>
          <v-nav-link>Link</v-nav-link>
          <v-nav-link disabled>Disabled</v-nav-link>
        </v-nav>
      </div>
    </section>

    <section>
      <h3>vertical alignment</h3>

      <div class="sample">
        <v-nav class="flex-column">
          <v-nav-link active>Active</v-nav-link>
          <v-nav-link>Link</v-nav-link>
          <v-nav-link>Link</v-nav-link>
          <v-nav-link disabled>Disabled</v-nav-link>
        </v-nav>
      </div>
    </section>

    <section>
      <h3>tabs</h3>

      <div class="sample">
        <v-nav tabs>
          <v-nav-link active>Active</v-nav-link>
          <v-nav-link>Link</v-nav-link>
          <v-nav-link>Link</v-nav-link>
          <v-nav-link disabled>Disabled</v-nav-link>
        </v-nav>
      </div>
    </section>

    <section>
      <h3>pills</h3>

      <div class="sample">
        <v-nav pills>
          <v-nav-link active>Active</v-nav-link>
          <v-nav-link>Link</v-nav-link>
          <v-nav-link>Link</v-nav-link>
          <v-nav-link disabled>Disabled</v-nav-link>
        </v-nav>
      </div>
    </section>

    <section>
      <h3>Fill and justify</h3>
      <br />

      <h6>fill</h6>

      <div class="sample">
        <v-nav fill tabs>
          <v-nav-link active>Active</v-nav-link>
          <v-nav-link>Much longer nav link</v-nav-link>
          <v-nav-link>Link</v-nav-link>
          <v-nav-link disabled>Disabled</v-nav-link>
        </v-nav>
      </div>

      <h6>justify</h6>

      <div class="sample">
        <v-nav justify tabs>
          <v-nav-link active>Active</v-nav-link>
          <v-nav-link>Much longer nav link</v-nav-link>
          <v-nav-link>Link</v-nav-link>
          <v-nav-link disabled>Disabled</v-nav-link>
        </v-nav>
      </div>
    </section>
  </div>
</template>
