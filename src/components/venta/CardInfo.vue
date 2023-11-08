<template>
  <div class="q-pa-md row justify-center items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        {{ card1Content }}
      </q-card-section>
    </q-card>
    <q-card class="my-card">
      <q-card-section>
        {{ objData.Descrip }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { LocalStorage } from "quasar";
import Swal from "sweetalert2";

export default {
  setup() {
    const objData = ref({
      Marca: "",
      Modelo: "",
      Pantalla: "",
      Sistema: "",
      Rom: "",
      RAM: "",
      Descrip: "Contenido de la segunda tarjeta dinámico...",
    });

    onMounted(async () => {
      try {
        const data = LocalStorage.getItem("dataTel");
        console.log("Data from LocalStorage:", data);
        if (data) {
          objData.value = data;
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        Swal.close();
      }
    });

    const card1Content = `
  Marca: ${objData.value.Marca}<br>
  Modelo: ${objData.value.Modelo}<br>
  Pantalla: ${objData.value.Pantalla}<br>
  Sistema: ${objData.value.Sistema}<br>
  Rom: ${objData.value.Rom}<br>
  RAM: ${objData.value.RAM}
`;

    return {
      objData,
      card1Content,
    };
  },
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
