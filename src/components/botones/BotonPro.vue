





<template>
  <div class="q-gutter-sm">
    <q-btn @click="funcion" :class="figura" :style="{ width: width, height: height }"
           :color="color" :icon="tipoIcono" :label="nombre"  />
  </div>
</template>



<script >
export default {
  name: 'BotonPro',
  props: {
    tipo: {
      type: String,
      default: 'button'
    }
    ,
    nombre: {
      type: String,
      default: 'boton pro'
    },
    tipoIcono: {
      type: String,

    },
    figura:{
      type:String,
      default:""
    },
    color:{
      type:String,
     default: "primary"
    },width:{
      type:String,

    },height:{
      type:String,

    },funcion:{
      type:Function,
      default:()=>{}
    }

  }
}
</script>

