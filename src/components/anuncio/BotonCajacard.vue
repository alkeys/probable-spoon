<template>

  <q-card style="background-color: #fffffe;color: #2e2f3e;margin-top: 3vh;border-radius: 5px
;max-width: 30vh;">

    <fieldset style="border: 2px solid green; border-color: white; border-radius: 5px;">
      <legend>{{ }}</legend>
      <input-data :on-changes="emitValor"
                  style="text-align: center" nombre="Precio" sufijo-tipo="$" info=""></input-data>
    </fieldset>

  </q-card>

</template>
<script>

import InputData from "components/anuncio/inputData.vue";

export default {
  name: "BotonCajacard",
  components: {InputData},
  props: {
    funcion: {
      type: Function
    },
    id: {
      type: String
    },
    nombre: {
      type: String,
    }
  }, methods: {
    emitValor(valor, name) {
      this.funcion(valor, name);
    },
  },
};
</script>
