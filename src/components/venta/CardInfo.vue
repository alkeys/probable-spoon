<template>
  <div class="q-pa-md row justify-center items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        {{ card1Content }}
      </q-card-section>
    </q-card>
    <q-card class="my-card">
      <q-card-section>
        {{ card2Content }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      card1Content: "Contenido de la primera tarjeta...",
      card2Content: "Contenido de la segunda tarjeta...",
    };
  },
};
</script>

<style scoped>
.my-card {
  margin-top: 10px;
  width: 100%;
  max-width: 100%;
  height: 250px;
}

@media (min-width: 768px) {
  .my-card {
    width: 48%; /* Reduzco el ancho para dar espacio entre las tarjetas en pantallas grandes */
    margin: 1%; /* Agrego un margen entre las tarjetas */
  }
}
</style>
