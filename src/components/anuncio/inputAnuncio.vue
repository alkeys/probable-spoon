


<template>
  <div class="q-pl-md flex" style="display: flex; align-items: center;">
    <label class="text-h6" for="text-input" style="margin-right: 10px;">{{ nombre2 }}</label>
    <q-input color="black" :style="{ width: tamano, height: tamano2 }" clearable filled bg-color="white" v-model="text"
             :label="nombre"/>
  </div>
</template>


<script>
export default {
  props: {
    nombre2: {
      type: String,
    },
    nombre: {
      type: String,
    },
    tamano: {
      type: String,
      default: '500px',
    }, tamano2: {
      type: String,

    },
  },
  data() {
    return {
      text: '',
    };
  },
};
</script>
