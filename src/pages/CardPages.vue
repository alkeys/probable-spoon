




<template>
  <q-page >
    <div class="row">
      <div class="col-6 col-sm-3 col-lg-3 text-center" v-for="(card, i) in cardsData" :key="i">
        <CardsImg  class="mobi hover" :title="card.title" :data="card.data" :precio="card.precio" :urlImg="card.urlImg" />
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
  }
};

</script>
