






<template>
  <div>
    <front-granderanuncio class="ocultarCosa"></front-granderanuncio>
    <front-pequeno class="ocultarCosa2"></front-pequeno>
  </div>

</template>

<style>
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

<script>
import {defineComponent} from "vue";
import FrontGranderanuncio from "components/anuncio/frontGranderanuncio.vue";
import FrontPequeno from "components/anuncio/frontPequeno.vue";

export default defineComponent({
  components: {FrontPequeno, FrontGranderanuncio}
})
</script>
