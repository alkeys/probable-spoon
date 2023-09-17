

<template>
<div class="flex  text-white">
  <p class="q-pt-md q-pr-lg q-pl-lg">Articulo por pagina</p>
  <q-select
    class="q-pr-lg"
    filled
    v-model="single"
    :options="options"
    style="width: 100px"

  />
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      single: ref(null),
      multiple: ref(null),

     options: [
        "10","15","25","50","100"
      ]
    }
  }
}
</script>
