



<template>
  <q-btn-group spread class="bg-secondary q-ma-sm">
    <q-btn
      v-for="nombre in nombres"
      :key="nombre"
      :label="nombre"
      @click="hacerAlgo(nombre)"
      class="mi-boton-personalizado"
    />
  </q-btn-group>
</template>

<style scoped>
.mi-boton-personalizado {
  padding: 1.4vh; /* Ajusta el espaciado según tus preferencias */
}
</style>

<script>
export default {
  name: 'BotonesGrupo',
  props: {
    nombres: {
      type: Array,
      required: true
    }
  },
  methods: {
    hacerAlgo(nombre) {
      console.log(`Has hecho clic en el botón ${nombre}`);
    }
  }
}
</script>
