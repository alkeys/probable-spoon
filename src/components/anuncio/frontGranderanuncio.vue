<script setup>

import CheckboxGrupo from "components/botones/checkboxGrupo.vue";
import InputData from "components/anuncio/inputData.vue";
import BotonDesplegable from "components/anuncio/botonDesplegable.vue";
import BotonPro from "components/botones/BotonPro.vue";
import TableDatos from "components/anuncio/tableDatos.vue";
import CarruselImg from "components/anuncio/CarruselImg.vue";
import InputAnuncio from "components/anuncio/inputAnuncio.vue";
import TextArea from "components/anuncio/textAreaxd.vue";
import BotonCajacard from "components/anuncio/BotonCajacard.vue";
import CaracteristicasyEstados from "components/anuncio/caracteristicasyEstados.vue";


</script>
<template>
  <q-page class="flex bg-primary" style="flex-direction: column; width: 100%">
    <h3 class="text-center" style="color: #fffffe">Nuevo Anuncio</h3>
    <div class="q-gutter-md flex">
      <div class="q-mb-md q-mb-md-md"> <!-- Agregamos clases de margen inferior responsivo -->
   <caracteristicasy-estados></caracteristicasy-estados>
        <q-card class="q-mt-md flex" style="max-width: 600px; flex-direction: row">

          <div class="q-pb-md q-ml-lg">
            Imágenes
            <div class="q-mt-md">
              <boton-pro tipo-icono="add_circle" nombre="" figura="q-btn--round" width="50px" height="50px"></boton-pro>
              <boton-pro class="q-mt-md" figura="q-btn--round" tipo-icono="do_not_disturb_on" nombre=""></boton-pro>
            </div>
          </div>
          <table-datos></table-datos>
          <div style="max-height: 20vh">
            <CarruselImg></CarruselImg>
          </div>
        </q-card>
      </div>

      <div class="q-mb-md q-mb-md-md q-ml-lg-lg " style="width: 100vh;max-width: 50%"> <!-- Agregamos clases de margen responsivo -->

        <div  class="q-mt-md q-mt-md-md q-gutter-md">
          <div class="q-col-md-6 q-sm-col-12">
            <input-anuncio flextipo="column" color="#fffffe" tamano="100%" nombre2="Título breve del anuncio:"></input-anuncio>
          </div>

          <div class="q-col-md-6 q-sm-col-12">
            <input-anuncio flextipo="column"  color="#fffffe" tamano="100%" nombre2="Vendedor:"></input-anuncio>
          </div>
          <div class="q-col-md-6 q-sm-col-12 q-mt-md">
            <input-anuncio  flextipo="column" color="#fffffe" tamano="100%" nombre2="Teléfono:"></input-anuncio>
          </div>
        </div>
        <text-area  color="#fffffe"  class="q-mt-md q-mt-md-md" nombre="Descripción"></text-area>
        <div class="q-col-md-6 q-sm-col-12 text-center flex flex-center " style="flex-direction: column" >
          <BotonCajacard nombre="Precio"></BotonCajacard>
          <div class="flex q-mt-md q-mt-md-md text-center q-ml-lg"> <!-- Agregamos clases de margen responsivo -->
            <boton-pro  tipo-icono="cancel" :funcion="inicio" color="secondary" nombre="Cancelar"></boton-pro>
            <boton-pro  tipo-icono="save" :funcion="inicio" color="secondary" class="q-ml-md" nombre="Crear"></boton-pro>
          </div>
        </div>
      </div>


    </div>
  </q-page>
</template>


<style scoped>

</style>
<script>
export default {
  name: "frontGranderanuncio",
  methods: {
    inicio(){
      this.$router.push('/');
    }

  },
  data() {
    return {
      datosEstado: [
        {
          label: 'Nuevo',
          value: 'new',
          color: 'orange' // Color para pantalla de 6 pulgadas (puedes usar cualquier color)
        },
        {
          label: 'Usado',
          value: 'usado',
          color: 'red' // Color para pantalla de 5.5 pulgadas (puedes usar cualquier color)
        },
      ],

    }
  },
}
</script>
