




<template>
  <div class="q-pl-md flex" style="display: flex; align-items: center;flex-direction: row">
    <label  for="text-input" style="margin-right: 10px;">{{ nombre }}</label>
    <q-input :type="tipoData" v-model="text" :dense="dense" :suffix="sufijoTipo" >
      <template v-slot:after>
        <span>{{info}}</span>
      </template>
    </q-input>

  </div>
</template>

<script>
export default {
  name: "inputData",
  props: {
    nombre: {
      type: String,
      default: "nombre",
    },
    tipoData: {
      type: String,
    },
    info: {
      type: String,
    },
    sufijoTipo: {
      type: String,
    },
  },
  data() {
    return {
      text: "",
    };
  },
};
</script>
