




<!--
parte donde se progrmara las funciones de los botornes-->

<!--parte de botones de inicio y estadistica-->
<template>
  <div class="flex flex-center  ocultarCosa">
    <BotonPro :funcion="inicio" style="padding: 5px" nombre="Inicio " tipo-icono="home" color="secondary"></BotonPro>
    <BotonPro :funcion="carro" nombre="Estadisticas" color="secondary"></BotonPro>
    <BotonPro :funcion="agregarAnuncio" class="q-ml-md " nombre="" tipo-icono="add_circle" figura="q-btn--round"
               width="60px" height="60px" color="secondary"></BotonPro>
    <BotonPro :funcion="carro"  class="q-ml-md " nombre="" tipo-icono="add_shopping_cart" figura="q-btn--round"
               width="60px" height="60px" color="secondary"   ></BotonPro>
  </div>



</template>

<script>
export  default {
  name: 'botonesUtilies',
  methods: {
    agregarAnuncio() {
      this.$router.push('nuevoanuncio');
    },
    inicio(){
      this.$router.push('/');
    },carro(){
      this.$router.push('construcion');
    },

  }
}


</script>



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
