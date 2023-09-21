



<script setup>
import ObcionesDrawer from "pages/obcionesDrawer.vue";
import DrawerChiquito from "components/drawerconte/drawerChiquito.vue";

</script>

<template>
<div>
  <obciones-drawer class="ocultarCosa"></obciones-drawer>
</div>
  <div class="ocultarCosa2">
    <drawer-chiquito ></drawer-chiquito>
  </div>
</template>


<style scoped>
@media (max-width: 770px) {
  .ocultarCosa{
    display: none;
  }
}
@media (min-width: 770px) {
  .ocultarCosa2{
    display: none;
  }
}
</style>
