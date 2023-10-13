<script setup>
import CarruselVin from "components/venta/carruselVin.vue";
import CardInfo from "components/venta/CardInfo.vue";
</script>

<template>
  <q-page>
    <CarruselVin></CarruselVin>
    <div class="custom-text">
      <h5>DESCRIPCION</h5>
    </div>
    <CardInfo></CardInfo>
  </q-page>
</template>

<style>
.custom-text {
  text-align: center; /* Centra el texto horizontalmente */
  margin-top: 10px;
  padding: 10px;
  display: flex;
  justify-content: center; /* Centra verticalmente el contenido */
  align-items: center; /* Centra verticalmente el contenido */
}
</style>
