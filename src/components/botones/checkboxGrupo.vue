<script setup>

</script>

<template>
  <div class="q-pa-lg " >
    <q-option-group
      v-model="group"
      :options="options"
      color="green"
      type="checkbox"
      style="display: flex;flex-direction: row"
    />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    nombre: {
      type: String,
      default: () => '',
    },
  },

  setup () {
    return {
      group: ref(['op1']),
    }
  },
}
</script>
