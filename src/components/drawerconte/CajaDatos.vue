<template>
  <q-card style="background-color: #fffffe;color: #2e2f3e;margin-top: 3vh;border-radius: 5px;max-width: 30vh;">
    <fieldset style="border: 2px solid green; border-color: white; border-radius: 5px;">
      <legend>{{ nombre }}</legend>
      <q-option-group
          v-model="group"
          :options="optionsWithNone"
          color="green"
          type="radio"
          @update:modelValue="Holamundo"
      />
    </fieldset>
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
    const optionsWithNone = [{ label: 'Todos', value: null },...props.options];

    const desmarcarTodo = () => {
      group.value = [];
    };

    return {
      group,
      optionsWithNone,
      desmarcarTodo,
    };
  },

  methods: {
    Holamundo() {

        const filtrolocal = {
          marca: "",
          sistema: "",
          estado: "",
          pantalla: "",
        };
        filtrolocal[this.nombre.toLowerCase()] = this.group;
        const filtroJSON = filtrolocal;
        this.$store.dispatch('emitFiltrarDatos', filtroJSON);

    },
  },
};
</script>


