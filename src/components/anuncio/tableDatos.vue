<template>
  <div class="q-pa-md">
    <q-table
      :rows="rows"
      row-key="name"
      flat bordered
      hide-bottom
    />

  </div>
</template>

<script>
const rows = [
  {
    N: 1,
    Tamaño: 159,
    tipo: "jpg",

  },
  {
    N: 2,
    Tamaño: 159,
    tipo: "jpg",

  },
  {
    N: 3,
    Tamaño: 237,
    tipo: "png",

  },

]
export default {
  setup() {
    return {rows}
  }
}
</script>
