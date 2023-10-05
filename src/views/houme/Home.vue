<template>
  <div>
    <Main @searchVal="search = $event" />
    <div class="grid" v-if="card">
      <CardInner
        v-for="car in filterCard"
        :key="car"
        :car="car"
        @inLikeBtn="inLikeBtn"
        @inLikeDelite="inLikeDelite"
        @inCardBtn="inCardBtn"
        @inCardDelite="inCardDelite"
      />
    </div>
    <Loader v-else />
  </div>
</template>

<script>
import CardInner from "@/components/card/CardInner.vue";
import Loader from "@/components/loader.vue";
import Main from "@/components/main/Main.vue";
import { mapState, mapActions } from "vuex";
import HomeCard from "../../components/card/HomeCard.vue";
export default {
  components: { CardInner, Loader, Main, HomeCard },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(["card"]),
    ...mapActions(["getData"]),
    filterCard() {
      return this.search ? this.card.filter((car) => car.title.toLowerCase().includes(this.search.toLowerCase())) : this.card;
    },
  },
  methods: {
    inLikeBtn(car) {
      this.$store.dispatch("inLikeBtn", car);
    },
    inCardBtn(car) {
      this.$store.dispatch("inCardBtn", car);
    },
    inLikeDelite(prodBuy) {
      this.$store.dispatch("inLikeDelite", prodBuy);
    },
    inCardDelite(prodBuy) {
      this.$store.dispatch("inCardDelite", prodBuy);
    },
  },
  mounted() {
    this.$store.dispatch("getData");
  },
};
</script>

<style lang="scss" scoped></style>
