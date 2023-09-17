





<template>
  <div class=" q-gutter-sm">
    <q-btn color="primary"  :icon="tipoIcono" :label="nombre" />
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

    }
  }
}
</script>

