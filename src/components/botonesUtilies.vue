



<!--parte de botones de inicio y estadistica-->
<template>
  <div class="flex flex-center q-ma-lg ocultarCosa">
    <BotonPro style="padding: 5px" nombre="Inicio " tipo-icono="navigation" color="secondary"></BotonPro>
    <BotonPro nombre="Estadisticas" color="secondary"></BotonPro>
    <BotonPro  class="q-ml-md " nombre="" tipo-icono="add_circle" figura="q-btn--round"
               width="60px" height="60px" color="secondary"></BotonPro>
    <BotonPro  class="q-ml-md " nombre="" tipo-icono="add_shopping_cart" figura="q-btn--round"
               width="60px" height="60px" color="secondary"></BotonPro>
  </div>



</template>

<style scoped>
@media (max-width: 770px) {
  .ocultarCosa{
    display: none;
  }


}
</style>
<script setup>
import BotonPro from "components/botones/BotonPro.vue";
</script>
