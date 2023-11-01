
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
              v-for="(image, index) in images"
              :key="index"
              :name="index + 1"
              :img-src="image"
          />
        </q-carousel>
      </div>
      <div class="col-4">
        <!-- Contenido de la segunda columna -->
        <h6>{{ titulo }}</h6>

        <h4><strong>{{ precio }}</strong></h4>

        <q-btn color="primary">Comprar</q-btn>

        <q-card style="outline: auto" class="q-ma-md">
          <h5>Vendedor: {{ vendedor }} Teléfono: {{ telefono }}</h5>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineProps } from "vue";

export default {
  props: {
    images: Array, // Propiedad para el objeto de imágenes
    titulo: String,
    precio: String,
    vendedor: String,
    telefono: String,
  },
  setup() {
    const slide = ref(1); // Definimos la variable 'slide'

    return {
      slide,
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

