



<template>
  <div>
    <q-toggle
        v-model="dense"
        label="nuevo"
        @change="animateToggle"
        @click="toggleChange"
        :class="{ 'animate': isAnimating }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dense: false,
      isAnimating: false,
    };
  },
  methods: {
    toggleChange() {
      if (!this.dense) {
        // La función se activa cuando el toggle se desactiva
        this.desactivado();
      } else {
        // La función se activa cuando el toggle se activa
        this.activado();
      }
    },
    activado() {
      const filtrolocal = {
        marca: "",
        sistema: "",
        estado: "",
        pantalla: "",
      };
      filtrolocal["estado"] = "nuevo";
      this.$store.dispatch('emitFiltrarDatos', filtrolocal);
    },
    desactivado() {
      const filtrolocal = {
        marca: "",
        sistema: "",
        estado: "",
        pantalla: "",
      };
      filtrolocal["estado"] = "";
      this.$store.dispatch('emitFiltrarDatos', filtrolocal);
    },
    animateToggle() {
      this.isAnimating = true;
      setTimeout(() => {
        this.isAnimating = false;
      }, 1000); // Cambia esto al valor deseado para la duración de la animación en milisegundos
    },
  },
};
</script>

<style>
.animate {
  transition: transform 0.5s ease; /* Ajusta la duración y la función de la transición según tus necesidades */
}

.animate.q-toggle__thumb {
  transform: translateX(30px); /* Ajusta la cantidad de desplazamiento según tus necesidades */
}
</style>
