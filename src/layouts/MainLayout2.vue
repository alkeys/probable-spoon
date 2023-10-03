<template>
  <q-layout view="hHh lpR lFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>



        <div class="flex flex-center">
          <titulo-ico></titulo-ico>
          <BarraBusqueda></BarraBusqueda>
          <botones-utilies></botones-utilies>
        </div>


      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer elevated class="bg-primary text-white " :justify="'center'">
      <q-toolbar>

      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import {ref} from 'vue'
import BarraBusqueda from "components/componetesVarios/barraBusqueda.vue";
import BotonPro from "components/botones/BotonPro.vue";

import ArticuloPAgina from "components/footersPro/articuloPAgina.vue";
import ObcionesDrawer from "pages/obcionesDrawer.vue";
import BoronesGrupo from "components/botones/botonesGrupo.vue";
import BotonesUtilies from "components/componetesVarios/botonesUtilies.vue";
import TituloIco from "components/componetesVarios/tituloIco.vue";
import DrawerDesicion from "pages/drawerDesicion.vue";


export default {
  components: { TituloIco, BotonesUtilies, BarraBusqueda},
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
