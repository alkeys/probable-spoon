<script setup>

import TituloIco from "components/componetesVarios/tituloIco.vue";
import BarraBusqueda from "components/componetesVarios/barraBusqueda.vue";
import BotonesUtilies from "components/componetesVarios/botonesUtilies.vue";
</script>

<template>
  <div class="q-gutter-md flex flex-center"
       style="flex-direction: row;height: auto;width: 100%">


    <div class="barra">
      <BarraBusqueda style="width: 100%"></BarraBusqueda>
    </div>
    <div class="q-ml-auto flex" style="flex-direction: row;max-width: 100%">

      <botones-utilies></botones-utilies>
    </div>
  </div>
</template>

<style scoped>

  /* Estilo predeterminado para pantallas mayores o iguales a 770px */
.barra{
  display: flex;
  width: 100%;
  max-width: 44%;
}

/* Estilo para pantallas menores a 770px */
@media (max-width: 770px) {
  .barra {
    display: flex;
    max-width: 100%;
  }
}


</style>
<script>
import {ref} from "vue";

export default {

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
