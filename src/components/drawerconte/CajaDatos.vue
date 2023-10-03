




<template>

  <q-card  style="background-color: #fffffe;color: #2e2f3e;margin-top: 3vh;border-radius: 5px
;max-width: 30vh;">

    <fieldset style="border: 2px solid green; border-color: white; border-radius: 5px;">
    <legend>{{nombre}}</legend>
      <q-option-group
        v-model="group"
        :options="options"
        color="green"
        type="checkbox"
      />
    </fieldset>

  </q-card>

</template>


<script>
import {ref} from 'vue';

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

