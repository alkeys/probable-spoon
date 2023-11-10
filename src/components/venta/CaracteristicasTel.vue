<template>
  <div>
    <q-list bordered separator>
      <q-item v-for="item in items" :key="item.property" clickable v-ripple>
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>
        <q-item-section >
          <strong>{{ item.label }}: {{ $props[item.property] }} {{ item.unit }}</strong>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  props: {
    estado: String,
    marca: String,
    modelo: String,
    pantalla: String,
    sistema: String,
    rom: String,
    ram: String,
  },
  data() {
    return {
      items: [
        { icon: 'error_outline', label: 'Estado', property: 'estado' ,unit: ''},
        { icon: 'smartphone', label: 'Marca', property: 'marca' ,unit: ''},
        { icon: 'description', label: 'Modelo', property: 'modelo' ,unit: ''},
        { icon: 'fullscreen', label: 'Pantalla', property: 'pantalla',unit: ' PG'},
        { icon: 'settings_suggest', label: 'Sistema', property: 'sistema',unit: '' },
        { icon: 'sd_card', label: 'Rom', property: 'rom',unit: ' Gb' },
        { icon: 'insights', label: 'Ram', property: 'ram',unit: ' GB'},
      ],
    };
  },
};
</script>
