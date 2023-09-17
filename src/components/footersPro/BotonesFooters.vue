



<template>
  <div class="q-ma-sm ">
    <q-btn
    style="max-width: 25px;width: 25px"

      padding="none"
      color="primary"
      :label="nombre"
    />
  </div>
</template>
<script>
export default {
  name: 'BotonesFooters',
  props: {
    nombre: {
      type: String,
      default: 'boton'
    },
    tipoIcono: {
      type: String,

    }
  }
}
</script>

