<template>
  <div>
    <div class="card">
      <RouterLink :to="/home/ + car.id">
        <img :src="`img/${car.images}`" alt="" class="card-img" />
        <p>{{ car.title }}</p>
        <span class="span"
          >Цена:
          <span class="span-sum"> {{ car.price }} руб </span>
        </span>
      </RouterLink>

      <button @click="inCardBtn" class="icon-top">
        <img v-if="inCart" src="@/assets/img/heart-icon-white.svg" alt="" />
        <img v-else src="@/assets/img/heart-icon-red.svg" alt="" />
      </button>
      <button @click="inLikeBtn" class="icon-botton">
        <img v-if="inLike" src="@/assets/img/add.svg" alt="" />
        <img v-else src="@/assets/img/completed.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    car: { typeof: Array, Object },
  },
  data() {
    return {
      inLike: true,
      inCart: true,
    };
  },
  computed: {},
  methods: {
    inLikeBtn() {
      this.inLike = !this.inLike;
      this.$emit("inLikeBtn", this.car);
    },
    inCardBtn() {
      this.inCart = !this.inCart;
      this.$emit("inCardBtn", this.car);
    },
  },
};
</script>
