<script setup>
import InputData from "components/anuncio/inputData.vue";
import BotonDesplegable from "components/anuncio/botonDesplegable.vue";
import CheckboxGrupo from "components/botones/checkboxGrupo.vue";


</script>


<template>

  <q-card style="max-width: 600px; height: auto">

    <div class="flex q-pl-md" style="margin: 0; display: flex; align-items: center">
      <p style="margin: 0">Estado:</p>
      <checkbox-grupo   :onChanges="recolectarValor" class="q-mt-auto" :options="datosEstado"></checkbox-grupo>
    </div>

    <div class="q-pb-md flex" style="flex-direction: row">
      <inputData :onChanges="recolectarValor" nombre="Marca"></inputData>
      <inputData :onChanges="recolectarValor" nombre="Modelo"></inputData>
      <inputData :onChanges="recolectarValor" nombre="Pantalla" info="Pulgadas" tipo-data="number"></inputData>

      <boton-desplegable :onChanges="recolectarValor"  nombre="Sistema:"></boton-desplegable>
      <div class="ocultarCosa">
        <inputData :onChanges="recolectarValor" nombre="Rom" info="Almacenamiento interno" sufijo-tipo="GB"
                   tipo-data="number"></inputData>
        <inputData :onChanges="recolectarValor" nombre="RAM" sufijo-tipo="GB" tipo-data="number"></inputData>
      </div>
      <div class="ocultarCosa2">
        <inputData :onChanges="recolectarValor" nombre="Rom" sufijo-tipo="GB" tipo-data="number"></inputData>
        <inputData :onChanges="recolectarValor" nombre="RAM" sufijo-tipo="GB" tipo-data="number"></inputData>
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
  }
}
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
  data() {
    return {
      formData: {
        Estado:"",
        Marca: "",
        Modelo: "",
        Pantalla: "",
        Sistema: "",
        Rom: "",
        RAM: "",
      },
    };
  },
  methods: {
    recolectarValor(valor, nombre) {
      this.formData[nombre] = valor;
      console.log(`Valor recolectado:${nombre} - ${valor} `);
      localStorage.setItem("formData1", JSON.stringify(this.formData));
    },
  }
};
</script>
