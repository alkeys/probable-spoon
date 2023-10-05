




<template>
  <div class="flex-center">
    <q-toolbar-title class="ocultarCosa flex" style="max-width: 500px;width: 400px">
      <q-avatar class="q-pr-md">
        <img
          src="https://png.pngtree.com/png-clipart/20221001/original/pngtree-smartphone-online-shop-logo-design-with-click-icon-png-image_8647135.png">
      </q-avatar>
      <p>Tienda Online</p>
    </q-toolbar-title>
  </div>
  <div class="q-mt-lg">
    <q-btn-group push style="flex-direction: column;width: 100%">
      <q-btn push @click="inicio" label="Inicio" icon="home"/>
      <q-btn push @click="agregarAnuncio" label="Nuevo Anuncio" icon="add_circle"/>
      <q-btn push label="Carrito" icon="shopping_cart"/>
      <q-btn push label="Estadisticas " icon="update"/>
    </q-btn-group>
  </div>
</template>


<script >
export default {
  methods: {
    agregarAnuncio() {
      this.$router.push('nuevoanuncio');
    },
    inicio(){
      this.$router.push('/');
    }

  },
}
</script>
