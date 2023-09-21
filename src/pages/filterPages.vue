





<template>
  <div class="flex flex-center ocultarCosa">
    <div>
      <filto-busqueda></filto-busqueda>
    </div>
    <div>
      <filtrobotones></filtrobotones>
    </div>
  </div>
<div class="ocultarCosa2 flex q-ma-sm flex no-wrap" >
  <P class="text-h8 q-ma-sm">Ordenar Por:</P>
  <boton-desplegable></boton-desplegable>
<boton-tarjecta nombre="" tipo-icono="filter_alt" ></boton-tarjecta>

</div>


</template>
<script setup>
import FiltoBusqueda from "components/filtros/FiltoBusqueda.vue";
import Filtrobotones from "components/filtros/FiltroPor.vue";
import BotonDesplegable from "components/botones/botonDesplegable.vue";
import BotonPro from "components/botones/BotonPro.vue";
import BotonTarjecta from "components/botonTarjecta.vue";

</script>
<style scoped>
@media (max-width: 770px) {
  .ocultarCosa{
    display: none;
  }
  }
@media (min-width: 770px) {
  .ocultarCosa2{
    display: none;
  }
}

</style>
