<template>
  <div class="basket-card">
    <img :src="`img/${prodBuy.images}`" alt="" class="basket-card-img" />
    <span class="basket-card-span">
      <h3>{{ prodBuy.title }}</h3>
      <p>{{ prodBuy.price }} руб.</p>
    </span>
    <button @click="inLikeDelite">
      <img src="@/assets/img/cancel.svg" alt="" />
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    prodBuy: { typeof: Array, Object },
  },
  methods: {
    ...mapActions(["btnActive"]),
    inLikeDelite() {
      this.$emit("inLikeDelite", this.prodBuy);
    },
  },
};
</script>

<style lang="scss" scoped></style>
