<template>
  <div>
    <section class="purchases" v-if="productsLike.length">
      <div class="purchases__title">
        <router-link :to="'/'">
          <img src="@/assets/img/back.svg" alt="" />
        </router-link>
        <span>Мои закладки</span>
      </div>
      <div class="purchases__wrapper grid">
        <CardLike
          v-for="prodLike in productsLike"
          :key="prodLike"
          :prodLike="prodLike"
          @inCardDelite="inCardDelite"
        />
      </div>
    </section>
    <section class="purchases__productNo" v-else>
      <div class="purchases__productNo_title">
        <img src="../../assets/img/bookmarks__productNo-img.svg" alt="" />
        Закладок нет :&#40;
        <span>Вы ничего не добавляли в закладки</span>
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
import CardLike from "@/components/card/CardLike.vue";
import { mapGetters, mapState } from "vuex";
export default {
  components: { Header, CardLike },
  computed: {
    ...mapGetters(["productsLike"]),
  },
  methods: {
    addToCart(card) {
      this.$store.dispatch("inCardBtn", card);
    },
    inCardDelite(index) {
      this.$store.dispatch("inCardDelite", index);
    },
    foundProduct() {
      mapState.products.find((product) => product.id === state.selectedProduct.id);
    },
  },
};
</script>
