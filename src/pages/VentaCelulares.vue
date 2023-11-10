

<template>
  <q-page>
    <CarruselVin v-bind="objData"></CarruselVin>
    <div class="custom-text">
      <h5>DESCRIPCION</h5>
    </div>
    <CardInfo v-bind="objData"></CardInfo>

  </q-page>
</template>

<style>
.custom-text {
  text-align: center; /* Centra el texto horizontalmente */
  margin-top: 10px;
  padding: 10px;
  display: flex;
  justify-content: center; /* Centra verticalmente el contenido */
  align-items: center; /* Centra verticalmente el contenido */
}
</style>

<script>


import {LocalStorage} from "quasar";
import {onMounted, ref} from "vue";
import Swal from "sweetalert2";
import CardInfo from "components/venta/CardInfo.vue";
import CarruselVin from "components/venta/carruselVin.vue";

export default {
  components: {CarruselVin, CardInfo},

  setup() {
    const objData = ref({
      Estado:"",
      Marca: "",
      Modelo: "",
      Pantalla: "",
      Sistema: "",
      Rom: "",
      RAM: "",
      Titulo: "",
      Vendedor: "",
      Tel: "",
      Descrip: "",
      Precio: "",
      images: [],
    });

    onMounted(async () => {
      try {
        const data = LocalStorage.getItem("dataTel");
        if (data) {
          objData.value = data;
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        Swal.close();
      }
    });

    return {
      objData,
    };
  },
};
</script>
