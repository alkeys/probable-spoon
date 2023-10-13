<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      class="carousel-mediano"
    >
      <q-carousel-slide
        :name="1"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
<style>
.carousel-mediano {
  border: 5px solid #ccc; /* Establece el borde según tus preferencias */
  margin-top: 10px;
  margin-left: 100px;
  width: 700px; /* Personaliza el ancho según tus necesidades */
  max-height: 700px; /* Personaliza el alto según tus necesidades */
}
</style>
