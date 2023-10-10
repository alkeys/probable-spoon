<template>
  <q-page class="q-pa-md flex" style="justify-content: center">
    <div class="background-image">
    </div>
    <q-btn
      class="q-mt-xl "
      color="secondary"
      text-color="white"
      unelevated
      to="/"
      label="Go Home"
      no-caps style="width: 100%"
    />
  </q-page>
</template>

<style scoped>
.background-image {
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/SITIO-EN-CONSTRUCCION.jpg/1200px-SITIO-EN-CONSTRUCCION.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
}


/* Cambiar la altura a 50vh cuando la resolución sea 770px o menos */
@media (max-width: 770px) {
  .background-image {
    height: 40vh;
  }
}
</style>
<script setup>
</script>
