<template>
  <div>
    <h1>contents</h1>

    <section>
      <h3>text types</h3>

      <div class="sample">
        <v-text raw="normal text" />
        <v-text raw="muted text" muted />
        <v-text>slot text</v-text>
      </div>
    </section>

    <section>
      <h3>text-nowrap</h3>

      <div class="sample">
        <v-text style="width: 100px" nowrap>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ad
          doloribus, fugiat laudantium nesciunt fuga quia, quae iusto iure
          voluptates, optio ab? Officia quibusdam architecto, necessitatibus
          pariatur voluptas iure veritatis?
        </v-text>
      </div>

      <h3>text truncating</h3>
      <div class="sample">
        <v-text style="width: 200px" truncate>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quam
          modi soluta tempora fugit autem blanditiis eius minima, repellendus
          cum fuga iusto nisi corporis mollitia hic! Placeat dolore ipsam
          doloremque.
        </v-text>
      </div>
    </section>

    <section>
      <h3>text transformations</h3>

      <div class="sample">
        <v-text raw="LOWER text" lower />
        <v-text raw="upper text" upper />
        <v-text raw="capital text" capital />
      </div>
    </section>

    <section>
      <h3>text colors</h3>

      <div class="sample">
        <v-text v-for="color in colors" :key="color" :color="color">
          .text-{{ color }}
        </v-text>
      </div>
    </section>

    <hr />

    <section>
      <h3>div variation</h3>

      <div class="sample flex-column">
        <v-div color="dark" class="text-white p-2">
          dark color with white text
        </v-div>
        <v-div class="p-2" shadow> div with shadow </v-div>
      </div>
    </section>

    <section>
      <h3>div colors</h3>

      <div class="sample flex-column">
        <v-div v-for="color in colors" :key="color" :color="color" class="p-2">
          .bg-{{ color }}
        </v-div>
      </div>
    </section>

    <section>
      <h3>gradient div colors</h3>

      <div class="sample flex-column">
        <v-div
          v-for="color in colors"
          :key="color"
          :color="color"
          gradient
          class="p-2"
        >
          .bg-{{ color }}
        </v-div>
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
