



<template>
  <div class="q-pl-md flex" style="display: flex; align-items: center;flex-direction: row">
    <label for="text-input" style="margin-right: 10px;">{{ nombre }}</label>
    <q-input :type="tipoData" v-model="text" :onchange="emitValor" :suffix="sufijoTipo" :bg-color="colorbg">
      <template v-slot:after>
        <span style="font-size: 15px">{{ info }}</span>
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
    }, colorbg: {
      type: String,
      default: 'white',
    }, flextipo: {
      type: String,

    }, onChanges: {
      type: Function,
      required: false,
    },
  },
  methods: {
    emitValor() {
      const text = this.text;
      this.onChanges(text,this.nombre);
    },
  },
  data() {
    return {
      text: "",
    };
  },
};
</script>
