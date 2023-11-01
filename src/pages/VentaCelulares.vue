


<template>
  <q-page>
    <CarruselVin :images="objData.images" :precio="objData.Precio"
    :telefono="objData.Tel" :titulo="objData.Titulo" :vendedor="objData.Vendedor"
    ></CarruselVin>
    <div class="custom-text">
      <h5>{{objData.Descrip}}</h5>
    </div>
    <CardInfo></CardInfo>
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


import CarruselVin from "components/venta/carruselVin.vue";
import CardInfo from "components/venta/CardInfo.vue";
import {onMounted, ref} from "vue";
import Swal from "sweetalert2";
import {LocalStorage} from "quasar";

export default {
  components: {CardInfo, CarruselVin},
  setup() {
    const objData = ref({
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
        const data = LocalStorage.getItem('dataTel');
        console.log('Data from LocalStorage:', data); // Agrega este log
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
  }
};
</script>
