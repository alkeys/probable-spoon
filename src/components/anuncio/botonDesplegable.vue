



<template>
  <div class="q-pa-md">
    <label for="text-input" style="margin-right: 10px;">{{ nombre }}</label>
    <q-btn-dropdown color="secondary" :label="labelLocal">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick('Ios')">
          <q-item-section>
            <q-item-label>Ios</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick('Android')">
          <q-item-section>
            <q-item-label>Android</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick('EMUI')">
          <q-item-section>
            <q-item-label>EMUI</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>

export default {
  props: {
    nombre: {
      type: String,
      default: "",
    }, nombrecaja: {
      type: String,
      default: "Selecciona un sistema",
    },
  },
  data() {
    return {
      sistemaSeleccionado: "",
      labelLocal: this.nombrecaja, // Copia local de la prop
    };
  },
  methods: {
    onItemClick(sistema) {
      this.sistemaSeleccionado = sistema;
      this.labelLocal = sistema; // Modificar la copia local en lugar de la prop
    },
  },
};
</script>

