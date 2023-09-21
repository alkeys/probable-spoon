<script setup>

import BotonPro from "components/botones/BotonPro.vue";
</script>

<template>
  <div class="row" style="max-width: 400px;margin: 10px;height: 5vh;
width: 300px;border-radius: 5px">
    <p style="padding-top: 9px ;padding-right: 5px">Ordenar Por  </p>
    <div class="flex flex-center text-center justify-center " style="padding-right: 10px" >

      <boton-pro nombre="Precio" tipo-icono="navigation"></boton-pro>
    </div>
    <div class="flex flex-center text-center justify-center "  >
      <boton-pro nombre="Fecha" ></boton-pro>
    </div>

  </div>
</template>

