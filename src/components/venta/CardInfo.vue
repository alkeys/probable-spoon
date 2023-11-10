<template>
  <div class="q-pa-md row justify-center items-start q-gutter-md">
    <q-card class="my-card" style="height: auto;">
      <q-card-section>
        <CaracteristicasTelefono :estado="Estado"
                                 :marca="Marca"
                                 :modelo="Modelo"
                                 :pantalla="Pantalla"
                                 :ram="RAM"
                                 :rom="Rom"
                                 :sistema="Sistema"
        ></CaracteristicasTelefono>
      </q-card-section>
    </q-card>
    <q-card class="my-card">
      <q-card-section>
        {{ Descrip }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import CaracteristicasTelefono from "components/venta/CaracteristicasTel.vue";

export default {
  components: {CaracteristicasTelefono},
  props: {
    Estado: String,
    Marca: String,
    Modelo: String,
    Pantalla: String,
    Sistema: String,
    Rom: String,
    RAM: String,
    Descrip: String,
  }
};
</script>


<style scoped>
.my-card {
  margin-top: 10px;
  width: 100%;
  max-width: 100%;
  height: 250px;
}

@media (min-width: 768px) {
  .my-card {
    width: 48%;
    margin: 1%;
  }
}
</style>
