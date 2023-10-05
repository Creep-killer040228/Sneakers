<template>
  <div>
    <div class="basket" v-if="!btn">
      <div class="basket__wrapper">
        <div class="basket__title">Корзина</div>
        <div class="basket__wrapper_card" v-if="productsBuy.length">
          <BasketCard
            v-for="prodBuy in productsBuy"
            :key="prodBuy"
            :prodBuy="prodBuy"
            @inLikeDelite="inLikeDelite"
          />
        </div>
        <div class="basket__wrapper_empty" v-else>
          <img src="@/assets/img/pannier.svg" alt="" />
          <h3>Корзина пустая</h3>
          <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          <div class="basket__wrapper_btn-empty">
            <RouterLink
              :to="'/'"
              @click="btnActive"
              class="purchases__productNo_title-btn"
            >
              <img src="@/assets/img/back-btn.svg" alt="" />
              Вернуться назад
            </RouterLink>
          </div>
        </div>
        <div class="basket__wrapper_btn" v-if="productsBuy.length">
          <span class="basket__wrapper_btn-span"
            >Итого: <span class="line"></span> 21 498 руб.
          </span>
          <span class="basket__wrapper_btn-span"
            >Налог 5%: <span class="line"></span> 1074 руб.
          </span>
          <button @click="btnActive">
            <span></span>
            Оформить заказ
            <img src="../../assets/img/back-btn-basket.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="basket__opacity" @click="btnActive"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import BasketCard from "./BasketCard.vue";
export default {
  components: { BasketCard },
  data() {
    return {};
  },
  computed: {
    ...mapState(["btn"]),
    ...mapGetters(["productsBuy"]),
  },
  methods: {
    ...mapActions(["btnActive"]),
    inLikeDelite(index) {
      this.$store.dispatch("inLikeDelite", index);
    },
  },
  mounted() {
    this.$store.dispatch("btnActive");
  },
};
</script>
