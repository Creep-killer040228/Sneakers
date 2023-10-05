import axios from "axios";
import {
  createStore
} from "vuex";

export default createStore({
  state: {
    card: [],
    btn: false,
    productsBuy: [],
    productsLike: [],
    sortBtn: '',

  },
  mutations: {
    getData(state, payload) {
      state.card = payload;
    },
    btnActive(state, payload) {
      state.btn = payload;
    },
    inLikeBtn(state, product) {
      let productIndex = state.productsBuy.findIndex(
        (item) => item.id === product.id
      );
      if (productIndex == -1) {
        state.productsBuy.push(product);
      } else {
        state.productsBuy.splice(productIndex, 1);
      }

    },
    inLikeDelite(state, product) {
      let productIndex = state.productsBuy.findIndex(
        (item) => item.id === product.id
      );
      if (productIndex !== -1) {
        state.productsBuy.splice(productIndex, 1);
      }
    },
    inCardBtn(state, products) {
      let productIndex = state.productsLike.findIndex(
        (item) => item.id === products.id
      );
      if (productIndex == -1) {
        state.productsLike.push(products);
      } else {
        state.productsLike.splice(productIndex, 1);
      }
    },
    inCardDelite(state, product) {
      let productIndex = state.productsLike.findIndex(
        (item) => item.id === product.id
      );
      if (productIndex !== -1) {
        state.productsLike.splice(productIndex, 1);
      }
    },
    setSort(state, payload) {
      state.sortBtn = payload;
    },
  },

  getters: {
    productsBuy(state) {
      return state.productsBuy;
    },
    productsLike(state) {
      return state.productsLike;
    },
    setSort(state) {
      return state.sortBtn;
    },
  },
  actions: {
    inCardDelite({
      commit
    }, index) {
      commit("inCardDelite", index);
    },
    inCardBtn({
      commit
    }, products) {
      commit("inCardBtn", products);
    },
    inLikeDelite({
      commit
    }, index) {
      commit("inLikeDelite", index);
    },
    inLikeBtn({
      commit
    }, product) {
      commit("inLikeBtn", product);
    },
    btnActive(context) {
      context.commit("btnActive", !context.state.btn);
    },
    async getData(context) {
      try {
        const { data } = await axios.get(
          context.state.sortBtn.length ? `https://64d5d92f613ee4426d97abc4.mockapi.io/vue-sneakers?sortBy=${context.state.sortBtn}&order=desc`
            : `https://64d5d92f613ee4426d97abc4.mockapi.io/vue-sneakers`
        );
        context.commit("getData", data);
      } catch (error) {
        console.error("ERROR with get API", error);
      }
    },
  },
});