





<template>
  <div class="q-gutter-sm">
    <q-btn :class="figura" :style="{ width: width, height: height }" :color="color" :icon="tipoIcono" :label="nombre" />
  </div>
</template>



<script >
export default {
  name: 'BotonPro',
  props: {
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

    }

  }
}
</script>

