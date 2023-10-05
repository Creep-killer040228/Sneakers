<template>
  <div>
    <section class="purchases" v-if="productsBuy.length">
      <div class="purchases__title">
        <RouterLink :to="'/'">
          <img src="@/assets/img/back.svg" alt="" />
        </RouterLink>
        <span>Мои покупки</span>
      </div>
      <div class="purchases__wrapper grid">
        <CardBuy v-for="prodBuy in productsBuy" :key="prodBuy" :prodBuy="prodBuy" @inLikeDelite="inLikeDelite" />
      </div>
    </section>
    <section class="purchases__productNo" v-else>
      <div class="purchases__productNo_title">
        <img src="@/assets/img/purchases__productNo-img.svg" alt="" />
        У вас нет заказов
        <span>Вы нищеброд? &#63;Оформите хотя бы один заказ.</span>
        <router-link :to="'/'" class="purchases__productNo_title-btn">
          <img src="@/assets/img/back-btn.svg" alt="" />
          Вернуться назад
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import { mapState, mapGetters } from "vuex";
import CardBuy from "@/components/card/CardBuy.vue";
export default {
  components: { Header, CardBuy },
  data() {
    return {
      product: false,
    };
  },
  computed: {
    ...mapGetters(["productsBuy"]),
  },
  methods: {
    inLikeDelite(index) {
      this.$store.dispatch("inLikeDelite", index);
    },
    foundProduct() {
      mapState.products.find((product) => product.id === state.selectedProduct.id);
    },
  },
};
</script>
