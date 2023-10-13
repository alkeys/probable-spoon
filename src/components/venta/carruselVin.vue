

<template>
  <div class="q-pa-md">
    <div class="row justify-around">
      <div class="col-4">
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
      <div class="col-4">
        <!-- Contenido de la segunda columna -->
        <h6>titulo del celular</h6>

        <h4><strong> precio del celular </strong></h4>

        <q-btn color="primary">Comprar</q-btn>

        <q-card style="outline: auto" class="q-ma-md">
          <h5>Vendedor: Jose Alarcon Teléfono: 6054-4147</h5>
        </q-card>
      </div>
    </div>
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
  width: 700px; /* Personaliza el ancho según tus necesidades */
  max-height: 700px; /* Personaliza el alto según tus necesidades */
}
</style>
