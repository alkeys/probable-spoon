



<template>
  <q-drawer v-model="leftDrawerOpen" side="right" bordered>
    <obciones-drawer></obciones-drawer>
  </q-drawer>
  <div class="q-ml-md bg-primary text-white">
    <boton-pro @click="openDrawer" tipo-icono="filter_alt" nombre="" width="200%"></boton-pro>
  </div>

</template>

<script setup>
import {ref} from "vue";
import BotonPro from "components/botones/BotonPro.vue";
import ObcionesDrawer from "pages/obcionesDrawer.vue";

const leftDrawerOpen = ref(false);

const openDrawer = () => {
  leftDrawerOpen.value = true;
};
</script>
