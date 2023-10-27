



<template>
  <div class="q-pl-md flex"  :style="{'flex-direction': flextipo,'align-items': alig,width:tamano3}">
    <div>
      <label class="text-h6" for="text-input" :style="{ color: color, marginRight: '10px' }">{{ nombre2 }}</label>
    </div>
    <div style="flex-grow: 1;"> <!-- Agrega flex-grow: 1 para que ocupe todo el ancho disponible -->
      <q-input :onchange="emitValor" :style="{width:tamano}" clearable filled :bg-color="colorbg" v-model="text" :label="nombre" :suffix="sufijoTipo"/>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    funcion:{
      type:Function,
    },
    id:{
      type:String,
    }
    ,
    nombre2: {
      type: String,
    },
    nombre: {
      type: String,
    },
    tamano: {
      type: String,
      default: '500px',
    },
    tamano3: {
      type: String,
    },
    tamano2: {
      type: String,

    }, color: {
      type: String,
      default: 'black',
    }, flextipo: {
      type: String,

    }, colorbg: {
      type: String,
      default: 'white',
    },alig:{
      type: String,
      },sufijoTipo: {
      type: String,
    }
  },methods: {
    emitValor() {
      const text = this.text;
      this.funcion(text,this.id);
    },
  },
  data() {
    return {
      text: '',
    };
  },
};
</script>
