

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
      <q-carousel-slide
        v-for="(image, index) in images"
        :key="index"
        :name="index"
        :img-src="image"
      />
    </q-carousel>
  </div>
</template>

<script>
import { ref, defineProps } from 'vue'

export default {
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const slide = ref(0); // Inicializa el índice de diapositivas en 0 o cualquier otro valor por defecto
    return {
      slide
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
