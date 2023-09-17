<script setup>

import BotonDrawer from "components/drawerconte/BotonDrawer.vue";
import CajaMarcas from "components/drawerconte/CajaDatos.vue";
import {dataTelefonos} from "src/data/dataTelefonos";
</script>

<template>
  <div>

    <div class="text-left q-pl-md">
      <BotonDrawer></BotonDrawer>
      <caja-marcas nombre="Marcas" :options="dataTelefonos.marcaData"></caja-marcas>
      <caja-marcas nombre="Sistemas" :options="dataTelefonos.sistemasData"></caja-marcas>
      <caja-marcas nombre="Pantalla" :options="dataTelefonos.PantallaData"></caja-marcas>
    </div>
  </div>
</template>

<style scoped>

</style>
