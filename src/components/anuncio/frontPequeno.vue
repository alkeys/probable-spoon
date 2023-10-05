<script setup>


import CarrucelImagenes from "components/anuncio/carrucelImagenes.vue";
import BotonPro from "components/botones/BotonPro.vue";
import InputAnuncio from "components/anuncio/inputAnuncio.vue";
import CaracteristicasyEstados from "components/anuncio/caracteristicasyEstados.vue";
import TextArea from "components/anuncio/textAreaxd.vue";

</script>

<template>
  <div class="text-center bg-primary flex" style="flex-direction: column;max-height:200vh ">
    <carrucel-imagenes></carrucel-imagenes>
    <boton-pro tipo-icono="add_circle" nombre="" figura="q-btn--round" width="50px"
               height="50px"></boton-pro>


    <div class="text-center flex" style="justify-content: center">
      <input-anuncio class="q-mt-md" tamano="40vh"
                     nombre="Titulo:"></input-anuncio>
      <input-anuncio class="q-mt-md" tamano="15vh" sufijo-tipo="$"
                     nombre="Precio:"></input-anuncio>
    </div>


    <div class="flex " style="flex-direction: row;justify-content: center">
      <input-anuncio color="#fffffe" tamano3="20vh" tamano="100%" nombre="Vendedor:"></input-anuncio>
      <input-anuncio color="#fffffe" tamano3="20vh" tamano="100%" nombre="Teléfono:"></input-anuncio>
    </div>
    <div class="q-mt-md flex">

      <div class="flex" style="justify-content: center">
        <div class="flex-center flex" style="width: 80%; justify-content: center;">
          <caracteristicasy-estados style="text-align: center;"></caracteristicasy-estados>
        </div>
        <div style="width: 100%">
          <text-area  color="#fffffe"  class="q-mt-md q-mt-md-md" nombre="Descripción"></text-area>
        </div>
        <div class="flex q-mt-md q-mt-md-md text-center q-ml-lg"> <!-- Agregamos clases de margen responsivo -->
          <boton-pro  tipo-icono="cancel" :funcion="inicio" color="secondary" nombre="Cancelar"></boton-pro>
          <boton-pro  tipo-icono="save" :funcion="inicio" color="secondary" class="q-ml-md" nombre="Crear"></boton-pro>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    datosEstado: {
      type: Array,
      default: () => [
        {
          label: "Nuevo",
          value: "nuevo",
        },
        {
          label: "Usado",
          value: "usado",
        },
      ],
    },
  },
}
</script>

