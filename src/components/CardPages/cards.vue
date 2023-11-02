




<template>
  <div class="q-gutter-md q-mb-md text-center" style="width: 100%; padding: 1vh" @click="hacerAlgo(pos)">
    <div class="card-container">
      <q-card class="q-mb-md q-mb-auto small-card card-container" style="background-color: #fffffe;">
        <q-img :src="urlImg" class="q-pa-md image-size">
          <div class="absolute-bottom text-h6" :style="textSize">
            {{ title }}
          </div>
        </q-img>
        <q-card-section>
          <p style="color: #2e2f3e">${{ precio }}</p>
          {{ data }}
        </q-card-section>
        <q-tooltip class="bg-accent" :offset="[10, 10]">
          Ver más
        </q-tooltip>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
.image-size {
  width: 200px;
  height: 200px; /* Establece la altura deseada para todas las imágenes */
  object-fit: cover;
}

.textSize {
  font-size: 10vh; /* Ajusta el tamaño del texto según tu preferencia */
}

/* Clases CSS para el tamaño de las tarjetas */
.small-card {
  width: 400px; /* Tamaño pequeño */
}

.medium-card {
  width: 300px; /* Tamaño mediano */
}

.large-card {
  width: 400px; /* Tamaño grande */
}

/* Contenedor de tarjetas con altura mínima */
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  min-height: 400px; /* Ajusta la altura mínima según tu necesidad */
}
</style>


<script>
import {LocalStorage} from "quasar";

export default {
  name: 'CardsImg',
  props: {
    pos:{
      type: Number,
      default: 0
    }
    ,
    title: {
      type: String,
      default: 'Title'
    },
    data: {
      type: String,
      default: 'características'
    },
    precio: {
      type: String,
      default: 'precio'
    },
    urlImg: {
      type: String,
      default: "https://cdn.quasar.dev/img/parallax2.jpg"
    },
    objtelefono: {
      type: Object,
    }
  },
  computed: {
    textSize() {
      // Ajusta el tamaño del texto según la altura de la tarjeta
      return {
        fontSize: `${this.$el.clientHeight * 0.06}px` // Ajusta el factor de escala según tu preferencia
      };
    }
  },
  methods: {
    hacerAlgo(i) {
      const dato=this.objtelefono[i];
      LocalStorage.set('dataTel',dato);
      this.$router.push('ventascelulares');
    }
  }
};
</script>
