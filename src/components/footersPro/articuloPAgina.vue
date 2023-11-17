


<template>
  <div style="display: flex;flex-direction: column">
    <h6>Participantes:

      Avilés Morán Ernesto Alexánder - AM18007,Alarcón Martínez José Armando - AM19133

    </h6>
    <div class="flex text-white ocultarCosa">

      <p class="q-pt-md q-pr-lg q-pl-lg ">Articulo por pagina</p>
      <q-select
        class="q-pr-lg"
        filled
        v-model="selectedValue"
        :options="options"
        style="width: 100px"

      />

    </div>
  </div>

</template>

<style scoped>
@media (max-width: 770px) {
  .ocultarCosa {
    display: none;
  }
}
</style>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const selectedValue = ref("10"); // Valor inicial de selectedValue

    const options = ["10", "15", "25", "50", "100"];

    return {
      selectedValue,
      options,
    }
  }
}
</script>
