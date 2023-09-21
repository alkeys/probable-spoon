<template>
  <q-layout view="hHh lpR lFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>

        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer"/>

        <div class="flex flex-center">
          <titulo-ico></titulo-ico>
          <BarraBusqueda></BarraBusqueda>
          <botones-utilies></botones-utilies>
        </div>


      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <drawer-desicion></drawer-desicion>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer elevated class="bg-primary text-white " :justify="'center'">
      <q-toolbar>

        <borones-grupo nombres="<123456789>">
        </borones-grupo>

        <articulo-p-agina></articulo-p-agina>

      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import {ref} from 'vue'
import BarraBusqueda from "components/barraBusqueda.vue";
import BotonPro from "components/botones/BotonPro.vue";

import ArticuloPAgina from "components/footersPro/articuloPAgina.vue";
import ObcionesDrawer from "pages/obcionesDrawer.vue";
import BoronesGrupo from "components/botones/botonesGrupo.vue";
import BotonesUtilies from "components/botonesUtilies.vue";
import TituloIco from "components/tituloIco.vue";
import DrawerDesicion from "pages/drawerDesicion.vue";


export default {
  components: {DrawerDesicion, TituloIco, BotonesUtilies, BoronesGrupo, ArticuloPAgina, BarraBusqueda},
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
