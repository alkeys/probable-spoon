<script setup>
import BotonPro from "components/botones/BotonPro.vue";
import TableDatos from "components/anuncio/tableDatos.vue";
import CarruselImg from "components/anuncio/CarruselImg.vue";
import InputAnuncio from "components/anuncio/inputAnuncio.vue";
import TextArea from "components/anuncio/textAreaxd.vue";
import BotonCajacard from "components/anuncio/BotonCajacard.vue";
import CaracteristicasyEstados from "components/anuncio/caracteristicasyEstados.vue";


</script>
<template>
  <q-page class="flex bg-primary" style="flex-direction: column; width: 100%">
    <h3 class="text-center" style="color: #fffffe">Nuevo Anuncio</h3>
    <div class="q-gutter-md flex">
      <div class="q-mb-md q-mb-md-md q-ml-lg"> <!-- Agregamos clases de margen inferior responsivo -->
        <caracteristicasy-estados></caracteristicasy-estados>
        <q-card class="q-mt-md flex" style="max-width: 600px; flex-direction: row">

          <div class="q-pb-md q-ml-lg">
            Imágenes
            <div class="q-mt-md flex " style="flex-direction: column">
              <q-btn @click="agregarImagen" type="input" icon="add_circle" class="q-btn--round"
                     style="width:50px;height:50px"></q-btn>
              <!--//agregar imagen -->
              <q-btn @click="quitarImagen" class="q-mt-md q-btn--round" icon="do_not_disturb_on"
                     style="width:50px;height:50px"></q-btn>
              <!--borrar imagen-->
            </div>
          </div>
          <table-datos></table-datos>
          <div style="max-height: 20vh">
            <CarruselImg :images="images"></CarruselImg>
          </div>
        </q-card>
      </div>

      <div class="q-mb-md q-mb-md-md q-ml-lg-lg " style="width: 100vh;max-width: 50%">
        <!-- Agregamos clases de margen responsivo -->

        <div class="q-mt-md q-mt-md-md q-gutter-md">
          <div class="q-col-md-6 q-sm-col-12">
            <input-anuncio :funcion="recolectarValor" id="Titulo" flextipo="column" color="#fffffe" tamano="100%"
                           nombre2="Título breve del anuncio:"></input-anuncio>
          </div>

          <div class="q-col-md-6 q-sm-col-12">
            <input-anuncio :funcion="recolectarValor" id="Vendedor"
                           flextipo="column" color="#fffffe" tamano="100%" nombre2="Vendedor:"></input-anuncio>
          </div>
          <div class="q-col-md-6 q-sm-col-12 q-mt-md">
            <input-anuncio :funcion="recolectarValor" id="Tel"
                           flextipo="column" color="#fffffe" tamano="100%" nombre2="Teléfono:"></input-anuncio>
          </div>
        </div>
        <text-area :on-changes="recolectarValor" id="Descrip" color="#fffffe" class="q-mt-md q-mt-md-md"
                   nombre="Descripción"></text-area>
        <div class="q-col-md-6 q-sm-col-12 text-center flex flex-center " style="flex-direction: column">
          <BotonCajacard :funcion="recolectarValor" nombre="Precio"></BotonCajacard>
          <div class="flex q-mt-md q-mt-md-md text-center q-ml-lg"> <!-- Agregamos clases de margen responsivo -->
            <boton-pro tipo-icono="cancel" :funcion="inicio" color="secondary" nombre="Cancelar"></boton-pro>
            <boton-pro tipo-icono="save" :funcion="mostrarConfirmacion" color="secondary" class="q-ml-md" nombre="Crear"></boton-pro>
          </div>
        </div>
      </div>


    </div>
  </q-page>
</template>

<script>
import {SitesServices} from "src/services/SitesServices";
import Swal from "sweetalert2";

export default {
  name: "frontGranderanuncio",
  props: {
    funcionA: Function, // Declara la función como prop
  },
  methods: {
    async EnviadoPapus() {
     await Swal.fire({
        title: "¡Enviado!",
        text: "Los datos han sido enviados correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar",

      });


      setTimeout(() => {
        this.$router.push('/');
      }, 200);
    },
    async mostrarConfirmacion() {
      const {value: isConfirmed} = await Swal.fire({
        title: "Guardando Anuncio",
        text: "¿Está seguro de que los datos son correctos?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
      });

      if (isConfirmed) {
        this.enviar();
      } else {

      }
    },
    inicio() {

      this.$router.push('/');
    },
    agregarImagen() {

      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";

      input.addEventListener("change", (event) => {
        const files = event.target.files;

        if (files.length > 0) {
          const file = files[0];
          const reader = new FileReader();

          reader.onload = (e) => {
            this.images.push(e.target.result); // Agrega la imagen al arreglo
          };
          reader.readAsDataURL(file);
        }
      });
      input.click(); // Abre el campo de entrada de archivo
    },
    quitarImagen(index) {
      this.images.splice(index, 1);
    },
    /*  recoleta los datos del formulario 2 */
    recolectarValor(valor, id) {
      this.formData2[id] = valor
    },
    traerDatos() {
      const formDataJSON = localStorage.getItem("formData1");
      if (formDataJSON) {
        this.formData1 = JSON.parse(formDataJSON);
      }
    },
    enviar() {
      this.traerDatos()
      this.objData = {...this.formData1, ...this.formData2, images: this.images}//creando objeto para enviar abase de datos xd
      console.log(this.objData)
      SitesServices().nuevoDoc(this.objData, "DataTelefonos")
      //Metodo para subir datos a la base de datos
      this.EnviadoPapus();
    },


  },
  data() {
    return {
      objData: {
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
      },
      formData2: {
        Titulo: "",
        Vendedor: "",
        Tel: "",
        Descrip: "",
        Precio: ""
      },
      formData1: {
        Marca: "",
        Modelo: "",
        Pantalla: "",
        Sistema: "",
        Rom: "",
        RAM: "",
      },
      confirmar: false,
      images: [], // Un arreglo para almacenar las imágenes
      datosEstado: [
        {
          label: 'Nuevo',
          value: 'new',
          color: 'orange' // Color para pantalla de 6 pulgadas (puedes usar cualquier color)
        },
        {
          label: 'Usado',
          value: 'usado',
          color: 'red' // Color para pantalla de 5.5 pulgadas (puedes usar cualquier color)
        },
      ],

    }
  }


}
</script>
