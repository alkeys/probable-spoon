







<template>
  <q-card class="" style="background-color: #fffffe;color: #2e2f3e;margin-top: 3vh
;max-width: 30vh">
    <div>
      {{nombre}}
      <q-option-group
        v-model="group"
        :options="options"
        color="green"
        type="checkbox"
      />
    </div>
  </q-card>

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

