<template>
  <div class="q-pa-md">
    <div class="row justify-around q-gutter-md">
      <div class="col-12 col-md-6 col-lg-4">
        <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
          :duration="500"
          class="carousel-mediano"
        >
          <q-carousel-slide
            v-for="(image, index) in images"
            :key="index"
            :name="index + 1"
          >
            <img :src="image" class="carousel-image" alt="Carousel Image" />
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <!-- Contenido de la segunda columna -->
        <h6>{{ Titulo }}</h6>
        <h4>
          <strong>${{ Precio }}</strong>
        </h4>
        <q-btn color="primary">Comprar</q-btn>
        <q-card style="outline: auto" class="q-ma-md">
          <h5>Vendedor: {{ Vendedor }} Teléfono: {{ Tel }}</h5>
        </q-card>
      </div>
    </div>
  </div>
</template>

<style>
.carousel-mediano {
  border: 5px solid #ccc; /* Establece el borde según tus preferencias */
  margin-top: 10px;
  width: 700px; /* Personaliza el ancho según tus necesidades */
  max-height: 700px; /* Personaliza el alto según tus necesidades */
}

.carousel-image {
  width: 100%; /* Hace que la imagen ocupe el 100% del contenedor */
  height: 100%; /* Hace que la imagen ocupe el 100% del contenedor */
  object-fit: contain; /* Ajusta la imagen para que se ajuste completamente */
}
</style>

<script>
import { ref, defineProps, watch } from "vue";

export default {
  props: {
    images: Array, // Propiedad para el objeto de imágenes
    Titulo: String,
    Precio: String,
    Vendedor: String,
    Tel: String,
  },
  setup(props) {
    const slide = ref(1); // Definimos la variable 'slide'

    // Configura un temporizador para cambiar automáticamente el carrusel
    const startCarousel = () => {
      setInterval(() => {
        slide.value = (slide.value % props.images.length) + 1;
      }, 3000); // Cambiar cada 3 segundos (ajusta el valor según tus preferencias)
    };

    // Observa cuando las imágenes cambian para reiniciar el temporizador
    watch(props.images, () => {
      clearInterval(startCarousel);
      startCarousel();
    });

    // Inicia el carrusel automáticamente
    startCarousel();

    return {
      slide,
    };
  },
};
</script>

