<template>
  <q-layout view="hHh lpR lFf">

    <q-header elevated class="bg-primary text-white">
    <q-toolbar>

        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer"/>

        <div class="flex flex-center">
          <q-toolbar-title>
            <q-avatar>
              <img
                src="https://png.pngtree.com/png-clipart/20221001/original/pngtree-smartphone-online-shop-logo-design-with-click-icon-png-image_8647135.png">
            </q-avatar>
            Tienda Online

          </q-toolbar-title>
          <BarraBusqueda></BarraBusqueda>
          <div class="flex flex-center q-ma-lg" >
            <BotonPro style="padding: 5px" nombre="Inicio"  tipo-icono="navigation"></BotonPro>
            <BotonPro nombre="Estadisticas"></BotonPro>
          </div>

          <div class="flex flex-center q-ma-lg ">
            <BotonPro style="padding: 5px" nombre="" tipo-icono="edit_location"></BotonPro>
            <BotonPro nombre="" tipo-icono="local_grocery_store"></BotonPro>
          </div>

        </div>


      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
   <obciones-drawer></obciones-drawer>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
     <BotonesFooters nombre="<"></BotonesFooters>
        <div v-for="numero in 8" :key="numero"><BotonesFooters :nombre="numero"></BotonesFooters></div>
        <BotonesFooters nombre=">"></BotonesFooters>
        <div>
          <articulo-p-agina></articulo-p-agina>
        </div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import {ref} from 'vue'
import BarraBusqueda from "components/barraBusqueda.vue";
import BotonPro from "components/BotonPro.vue";
import BotonesFooters from "components/footersPro/BotonesFooters.vue";
import ArticuloPAgina from "components/footersPro/articuloPAgina.vue";
import ObcionesDrawer from "pages/obcionesDrawer.vue";


export default {
  components: {ObcionesDrawer, ArticuloPAgina, BotonesFooters, BotonPro, BarraBusqueda},
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
