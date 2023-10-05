<template>
  <div>
    <div class="card">
      <img :src="`img/${prodBuy.images}`" alt="" class="card-img" />
      <p>{{ prodBuy.title }}</p>
      <span class="span"
        >Цена:
        <span class="span-sum"> {{ prodBuy.price }} руб </span>
      </span>

      <button @click="inLikeDelite" class="icon-botton">
        <img src="@/assets/img/cancel.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prodBuy: { typeof: Array, Object },
  },
  data() {
    return {
      inLike: true,
      inCart: true,
    };
  },
  methods: {
    inLikeDelite() {
      this.$emit("inLikeDelite", this.prodBuy);
    },
  },
};
</script>
