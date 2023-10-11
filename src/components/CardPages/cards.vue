


<!-- en esta cosa se resive para las card de los anuncios
<div class="q-pa-md row items-start q-gutter-md text-center">-->
<template>
  <div class="q-gutter-md q-mb-md text-center" style="width: 100%; padding: 1vh">
    <q-card class="q-mb-md q-mb-auto" style="background-color: #fffffe; max-height: 100vh; height: 50vh" @click="hacerAlgo(title)">
      <q-img :src="urlImg" class="q-pa-md image-size" style="object-fit: cover;max-height: 100vh; height: 30vh">
        <div class="absolute-bottom text-h6">
          {{ title }}
        </div>
      </q-img>
      <q-card-section>
        <p style="color: #2e2f3e">{{ precio }}</p>
        {{ data }}
      </q-card-section>
      <q-tooltip class="bg-accent" :offset="[10, 10]">
        Ver más
      </q-tooltip>
    </q-card>
  </div>
</template>

<style scoped>
.image-size {
  width: 100%;
  height: 200px; /* Ajusta el tamaño deseado */
}
</style>


<script >
export default {
  name: 'CardsImg',props: {
    title: {
      type: String,
      default: 'Title'
    },
    data: {
      type: String,
      default: 'caracteristicas'
    },
    precio: {
      type: String,
      default: 'precio'
    },
    urlImg:{
      type: String,
      default: "https://cdn.quasar.dev/img/parallax2.jpg"
    }
  }
  ,
  methods: {
    hacerAlgo(nombre) {
      console.log(`Has hecho clic en el tarjecta ${nombre}`);
      this.$router.push('ventascelulares');
    }
  }
}
</script>
