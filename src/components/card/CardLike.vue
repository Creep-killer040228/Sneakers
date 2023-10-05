<template>
  <div>
    <div class="card">
      <img :src="`img/${prodLike.images}`" alt="" class="card-img" />
      <p>{{ prodLike.title }}</p>
      <span class="span"
        >Цена: <span class="span-sum">{{ prodLike.price }} руб</span></span
      >
      <button @click="inCardDelite" class="icon-top">
        <img src="@/assets/img/cancel.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prodLike:  { typeof: Array, Object },
  },
  data() {
    return {
      inLike: true,
    };
  },
  methods: {
    inCardDelite() {
      this.$emit("inCardDelite", this.prodLike);
    },
  },
};
</script>
