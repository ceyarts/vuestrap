<template>
  <div>
    <h1>Buttons</h1>

    <br />

    <section>
      <h3>Button tags</h3>

      <div class="sample">
        <v-button label="button" />
        <v-button type="submit" label="submit" />
        <v-button type="reset" label="reset" />
        <v-button href="#" label="link" />
        <v-button to="/users" label="router link" />
      </div>
    </section>

    <section>
      <h3>Content types</h3>

      <div class="sample">
        <v-button icon="home" />
        <v-button label="button" />
        <v-button icon="home" badge="10" />
        <v-button icon="home" label="button with icon" />
        <v-button badge="10" label="button with badge" />
        <v-button icon="home" badge="10" label="button with icon & badge" />
        <v-button class="text-uppercase">custom content</v-button>
      </div>
    </section>

    <section>
      <h3>Solid colors</h3>

      <div class="sample">
        <v-button
          v-for="(color, i) in colors"
          :key="i"
          :color="color"
          :label="color"
        />
      </div>
    </section>

    <section>
      <h3>Outline colors</h3>

      <div class="sample">
        <v-button
          v-for="(color, i) in colors"
          :key="i"
          :color="`outline-${color}`"
          :label="color"
        />
      </div>
    </section>

    <section>
      <h3>Sizes</h3>

      <div class="sample">
        <v-button
          v-for="(size, i) in sizes"
          :key="i"
          :size="size"
          :label="size"
        />
      </div>
    </section>

    <section>
      <h3>Disabled state</h3>

      <div class="sample">
        <v-button label="primary button" disabled />
        <v-button color="secondary" label="button" disabled />
      </div>
    </section>

    <!-- button groups ------------------------------------------------------------------------- -->
    <h1>Button Groups</h1>

    <section>
      <h3>Sizes</h3>

      <div class="sample">
        <v-button-group v-for="size in sizes" :key="size" :size="size">
          <v-button label="left" />
          <v-button label="middle" />
          <v-button label="right" color="danger" />
        </v-button-group>
      </div>
    </section>

    <section>
      <h3>Vertical layout</h3>

      <div class="sample">
        <v-button-group vertical>
          <v-button label="top" />
          <v-button label="middle" />
          <v-button label="end" color="warning" />
        </v-button-group>
      </div>
    </section>

    <section>
      <h3>Button Toolbar</h3>

      <div class="sample">
        <v-button-toolbar>
          <v-button label="edit" />
          <v-button label="save" />
          <v-button label="delete" color="danger" />

          <v-button-group class="ms-5">
            <v-button label="extra button 1" color="outline-primary" />
            <v-button label="extra button 2" color="outline-primary" />
          </v-button-group>

          <v-button-group class="ms-auto">
            <v-button label="print" color="secondary" />
            <v-button label="filter" color="secondary" />
          </v-button-group>
        </v-button-toolbar>
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

<style>
</style>
