




<template>
  <div class="flex text-white ocultarCosa">
    <p class="q-pt-md q-pr-lg q-pl-lg ">Articulo por pagina</p>
    <q-select
      class="q-pr-lg"
      filled
      v-model="single"
      :options="options"
      style="width: 100px"
    />
  </div>
</template>

<style scoped>
@media (max-width: 770px) {
  .ocultarCosa{
    display: none;
  }


}
</style>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      single: ref(null),
      multiple: ref(null),
      options: ["10", "15", "25", "50", "100"]
    }
  }
}
</script>
