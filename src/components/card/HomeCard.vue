<template>
  <router-link :to="'/'" class="back">
    <img src="../../assets/img/back-btn.svg" alt="" />Вернуться назад</router-link
  >
  <div class="home" v-if="card.length">
    <div class="home-card">
      <img :src="'/img/' + getCard.images" class="home-card-img" alt="" />
      <h3>{{ getCard.title }}</h3>
      <p>Цена: {{ getCard.price }}</p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inLike: true,
      inCart: true,
      cardId: null,
      card: this.$store.state.card,
    };
  },
  computed: {
    getCard() {
      return this.card.find((car) => car.id == this.cardId);
    },
  },
  created() {
    this.card = this.$store.state.card;
    this.cardId = this.$route.params.id;
  },
};
</script>
