<script setup>
import InputData from "components/anuncio/inputData.vue";
import BotonDesplegable from "components/anuncio/botonDesplegable.vue";
import CheckboxGrupo from "components/botones/checkboxGrupo.vue";


</script>


<template>

  <q-card style="max-width: 600px; height: auto">
    <div class="flex q-pl-md" style="margin: 0; display: flex; align-items: center">
      <p style="margin: 0">Estado:</p>
      <checkbox-grupo class="q-mt-auto" :options="datosEstado"></checkbox-grupo>
    </div>

    <div class="q-pb-md flex" style="flex-direction: row">
      <inputData nombre="Marca:"></inputData>
      <inputData nombre="Modelo:"></inputData>
      <inputData nombre="Pantalla:" info="Pulgadas" tipo-data="number"></inputData>

      <boton-desplegable nombre="Sistema:"></boton-desplegable>
      <div class="ocultarCosa">
        <inputData  nombre="Rom:" info="Almacenamiento interno" sufijo-tipo="GB" tipo-data="number"></inputData>
        <inputData nombre="RAM:" sufijo-tipo="GB" tipo-data="number"></inputData>
      </div>
      <div class="ocultarCosa2">
        <inputData  nombre="Rom:"  sufijo-tipo="GB" tipo-data="number"></inputData>
        <inputData nombre="RAM:" sufijo-tipo="GB" tipo-data="number"></inputData>
      </div>
    </div>

  </q-card>
</template>

<style>
@media (max-width: 770px) {
  .ocultarCosa {
    display: none;
  }
}

@media (min-width: 770px) {
  .ocultarCosa2 {
    display: none;
  }}
</style>


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
