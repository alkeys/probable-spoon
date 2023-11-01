




<template>
  <q-page>
    <FilterPages></FilterPages>
    <CardPages :mi-objeto="objData" class="mobi"></CardPages>
  </q-page>
</template>


<script>
import { ref, onMounted } from 'vue';
import { SitesServices } from "src/services/SitesServices";
import Swal from 'sweetalert2'; // Importar SweetAlert2
import CardPages from "pages/CardPages.vue";
import FilterPages from "pages/filterPages.vue";


export default {
  components: {FilterPages, CardPages},
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

    const loading = ref(true); // Variable de carga

    onMounted(async () => {
      try {
        // Mostrar la ventana emergente de carga
        Swal.fire({
          title: 'Cargando...',
          allowOutsideClick: false,
          onBeforeOpen: () => {
            Swal.showLoading();
          },
        });

        const data = await SitesServices().getAllDocs("DataTelefonos");
        objData.value = data;
        console.log(objData.value);

        // Ocultar la ventana emergente de carga una vez que se obtienen los datos
        Swal.close();

        loading.value = false; // Establecer loading en false cuando se obtienen los datos
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        // Cerrar la ventana emergente de carga en caso de error
        Swal.close();
      }
    });

    return {
      objData,
      loading, // Agregar loading a los valores retornados
    };
  }
};
</script>
