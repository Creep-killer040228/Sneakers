<template>
  <div class="div container">
    <Header :pages="pages" />
    <RouterView />
    <Basket />
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import Basket from "./components/basket/Basket.vue";
import heartImg from "./assets/img/heart.svg";
import userImg from "./assets/img/user.svg";
import Loader from "./components/loader.vue";
export default {
  data() {
    return {
      search: "",
      pages: [
        {
          path: "/",
          name: "Home ",
        },
        {
          path: "/bookmarks",
          name: "Bookmarks",
          img: heartImg,
        },
        {
          path: "/purchases",
          name: "Purchases",
          img: userImg,
        },
      ],
    };
  },
  components: { Header, Basket, Loader },
};
</script>

<style lang="scss" scoped>
.div {
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 0 42px 42px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
</style>
