



<template>
  <div class="">
    <q-btn-dropdown color="primary" :label="selectedOption">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick('Precio')">
          <q-item-section>
            <q-item-label>Precio</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick('Fecha')">
          <q-item-section>
            <q-item-label>Fecha</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: 'Precio' // Establece el valor inicial del texto del botón
    };
  },
  methods: {
    onItemClick(option) {
      this.selectedOption = option; // Actualiza el texto del botón cuando se hace clic en un elemento
    }
  }
};
</script>
