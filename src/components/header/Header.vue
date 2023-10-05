<template>
  <div>
    <header class="header">
      <nav class="header__nav container">
        <router-link :to="'/'">
          <div class="header__nav_logo">
            <img src="@/assets/img/logo.svg" alt="" />
            <div class="header__nav_logo-title">
              <h1>VUE SNEAKERS</h1>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
        </router-link>
        <div class="header__nav_user">
          <button @click="basketBtn">
            <img src="@/assets/img/basket.svg" alt="" />
            {{ totalCard() }}
          </button>
          <div v-for="page in pages" :key="page.path">
            <router-link class="header__nav_user-img" :to="page.path">
              <img :src="page.img" alt="" />
            </router-link>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    pages: { typeof: Array, Object },
  },
  methods: {
    ...mapActions(["btnActive"]),
    basketBtn() {
      this.btnActive();
    },
    totalCard() {
      let result = 0;
      this.productsBuy.forEach((product) => {
        result += product.price;
      });
      return result;
    },
  },
  computed: {
    ...mapState(["productsBuy"]),
  },
};
</script>
