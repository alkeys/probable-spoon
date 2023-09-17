




<template>
  <div>
    <p>{{ nombre }}</p>
    <div class="q-pa-md" style="outline: 2px solid black; max-width: 200px">
      <q-option-group :options="options" type="checkbox" v-model="group" />
    </div>

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'CajaMarcas',
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
  setup(props) {
    const group = ref([]);

    const desmarcarTodo = () => {
      group.value = []; // Establecer el modelo en un arreglo vacío para desmarcar todo
    };

    return {
      group,
      desmarcarTodo,
    };
  },
};
</script>

