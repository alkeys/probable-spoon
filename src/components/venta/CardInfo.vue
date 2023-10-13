<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card card1">
      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>
    <q-card class="my-card card2">
      <q-card-section>
        {{ otherContent }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      otherContent: "Contenido diferente para la segunda tarjeta...",
    };
  },
};
</script>

<style lang="sass" scoped>
.card1
  margin-top: 10px
  margin-left: 640px
  width: 300%
  height: 250px
  max-width: 300px

.card2
  /* Estilos específicos para la segunda tarjeta */
  margin-top: 10px
  margin-left: 25px
  width: 300%
  height: 250px
  max-width: 300px
</style>
