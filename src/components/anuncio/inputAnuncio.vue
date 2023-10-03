





<template>
  <div class="q-pl-md flex" style="align-items: center;" :style="{'flex-direction':flextipo}">
    <div>
      <label  class="text-h6" for="text-input" :style="{color:color}"  style="margin-right: 10px;">{{ nombre2 }}</label>

    </div>

    <q-input :style="{ width: tamano, height: tamano2 }" clearable filled bg-color="white" v-model="text"
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

    },color:{
      type: String,
      default: 'black',
    },flextipo:{
      type: String,

    }
  },
  data() {
    return {
      text: '',
    };
  },
};
</script>
