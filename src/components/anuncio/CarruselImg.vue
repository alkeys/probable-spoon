


<template>
  <div>
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      class="carousel-pequeno"
    >
    <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
    <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1)
    }
  }
}
</script>

<style>
.carousel-pequeno {
  margin-top: 10px;
  width: 230px; /* Personaliza el ancho según tus necesidades */
  max-height: 210px; /* Personaliza el alto según tus necesidades */
}
</style>
