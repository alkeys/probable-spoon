


<!--
<div class="q-pa-md row items-start q-gutter-md text-center">-->
<template>

    <div class="q-gutter-md q-mb-md text-center " style="width: 100%; padding: 1vh">
      <q-card class="q-mb-md " style="background-color: #fffffe">
        <q-img :src="urlImg" class="q-pa-md" style="height: 30vh;">
          <div class="absolute-bottom text-h6">
            {{ title }}
          </div>
        </q-img>
        <q-card-section>
          <p style="color: #2e2f3e">{{ precio }}</p>
          {{ data }}
        </q-card-section>
      </q-card>
    </div>

</template>


<script >
export default {
  name: 'CardsImg',props: {
    title: {
      type: String,
      default: 'Title'
    },
    data: {
      type: String,
      default: 'caracteristicas'
    },
    precio: {
      type: String,
      default: 'precio'
    },
    urlImg:{
      type: String,
      default: "https://cdn.quasar.dev/img/parallax2.jpg"
    }
  }
}
</script>
