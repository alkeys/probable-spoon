<template>
  <q-page>
    <div class="q-ma-md text-center">
      <div class="background-image">
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.background-image {
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/SITIO-EN-CONSTRUCCION.jpg/1200px-SITIO-EN-CONSTRUCCION.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh; /* Altura predeterminada */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
}

@media (max-width: 770px) {
  .background-image {
    height: 50vh;
  }
}
</style>
