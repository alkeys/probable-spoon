




<template>
  <q-layout view="hHh lpR lFf" style="background-color: #fffffe">
    <q-header elevated class="bg-primary text-white ocultarCosa2">
      <q-toolbar>
        <q-btn class="" dense flat round icon="menu" @click="toggleDrawer" />

        <div class="flex flex-center">
          <BarraBusqueda></BarraBusqueda>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Utiliza v-if y v-else para mostrar u ocultar el drawer -->
    <q-drawer v-if="showDrawer" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <drawer-desicion></drawer-desicion>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { ref, watch } from 'vue';
import BarraBusqueda from "components/componetesVarios/barraBusqueda.vue";
import DrawerDesicion from "pages/drawerDesicion.vue";

export default {
  components: { DrawerDesicion, BarraBusqueda },
  setup() {
    const leftDrawerOpen = ref(false);
    const showDrawer = ref(false); // Inicialmente muestra el drawer

    // Función para manejar el cambio en el tamaño de la pantalla
    const handleResize = () => {
      showDrawer.value = window.innerWidth <= 770;
      console.log("handleResize called. showDrawer:", showDrawer.value);
    };


    // Escucha cambios en el tamaño de la pantalla
    watch(() => window.innerWidth, handleResize);

    return {
      leftDrawerOpen,
      showDrawer,
      toggleDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
        showDrawer.value=true;
      }
    };
  }
};
</script>


<style scoped>
@media (min-width: 770px) {
  .ocultarCosa2{
    display: none;
  }
}
</style>
