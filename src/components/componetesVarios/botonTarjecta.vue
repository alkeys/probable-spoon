





<template>
  <div class="q-ml-md bg-primary text-white">
    <q-list   style="max-width: 400px">
      <q-expansion-item
        expand-separator
        :icon="tipoIcono"
        :label="nombre"
        default-opened
      >

        <obciones-drawer class="q-mr-lg"></obciones-drawer>
        </q-expansion-item>




    </q-list>
  </div>
</template>


<script >
import CajaMarcas from "components/drawerconte/CajaDatos.vue";
import {dataTelefonos} from "src/data/dataTelefonos";
import ObcionesDrawer from "pages/obcionesDrawer.vue";

export default {
  computed: {
    dataTelefonos() {
      return dataTelefonos
    }
  },
  components: {ObcionesDrawer},
  props: {
    nombre: {
      type: String,
      default: ''
    },
    tipoIcono: {
      type: String,

    },
    color:{
      type:String,
      default: "primary"
    },
  }
}
</script>
