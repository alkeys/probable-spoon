<template>
  <q-page>
    <FilterPages></FilterPages>
    <CardPages :mi-objeto="objDataFiltrado" class="mobi"></CardPages>
  </q-page>
</template>

<script>
import {ref, onMounted, onBeforeUnmount, computed} from 'vue';
import {SitesServices} from "src/services/SitesServices";
import Swal from 'sweetalert2';
import CardPages from "pages/CardPages.vue";
import FilterPages from "pages/filterPages.vue";
import store from "src/store";
import {LocalStorage} from "quasar";

export default {
  components: {FilterPages, CardPages},
  setup() {

    const objData = ref({
      filter: {
        marca: "",
        sistema: "",
        estado: "",
        pantalla: "",
      },
    });

    const objDataFiltrado = ref({});
    const loading = ref(true);

    const filtrarDatos = () => {
      console.clear()
      const filtro = {  };
      filtro["marca"] = store.state.filteredData.marca
      filtro["sistema"] = store.state.filteredData.sistema
      filtro["estado"] = store.state.filteredData.estado
      filtro["pantalla"] = store.state.filteredData.pantalla


      const datosFiltrados = Object.values(objData.value).filter((item) => {
        return (
            (!filtro.marca || item.Marca.toLowerCase().includes(filtro.marca.toLowerCase())) &&
            (!filtro.sistema || item.Sistema.toLowerCase().includes(filtro.sistema.toLowerCase())) &&
            (!filtro.estado || item.Estado.toLowerCase().includes(filtro.estado.toLowerCase())) &&
            (!filtro.pantalla || item.Pantalla.toLowerCase().includes(filtro.pantalla.toLowerCase()))
        );
      });
      const pantallasFiltradas = [...new Set(datosFiltrados.map(item => item.Pantalla))];
      objDataFiltrado.value = datosFiltrados;
    };

    onMounted(async () => {
      LocalStorage.clear()

      const intervalId = setInterval(filtrarDatos, 2000);
      try {
        Swal.fire({
          title: 'Cargando...',
          allowOutsideClick: false,
          onBeforeOpen: () => {
            Swal.showLoading();
          },
        });

        const data = await SitesServices().getAllDocs("DataTelefonos");
        objData.value = data;
        objDataFiltrado.value = data;

        Swal.close();
        loading.value = false;
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        Swal.close();
      }

      // Limpiar el intervalo cuando el componente se destruye
      onBeforeUnmount(() => {
        clearInterval(intervalId);
      });
    });


    return {
      objData,
      objDataFiltrado,
      loading,
    };
  }
};
</script>
