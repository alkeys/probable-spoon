




<template>
  <q-page>
    <div class="row">
      <div class="col-6 col-sm-3 col-lg-3 text-center" v-for="(card, i) in miObjeto" :key="i">
        <CardsImg v-if="card.images" :objtelefono="miObjeto" :pos="i" class="mobi hover" :title="card.Titulo"
                   :data="card.Descrip" :precio="card.Precio" :urlImg="card.images[0]" />
      </div>
    </div>
  </q-page>
</template>



<script>
import CardsImg from "components/CardPages/cards.vue";
import {DataCard} from "src/data/datacard";

export default {
  components: {CardsImg},
  data() {
    return {
      cardsData: DataCard.cardsData
    };
  },
  props: {
    miObjeto: {
      type: Object,
      required: true
    }
  }
};

</script>
