<template>
  <div>
    <select name="" id="" class="sort" @change="SortChange">
      <option value="All" class="sort-options">Все кроссовки</option>
      <option value="price" class="sort-options">По цене</option>
      <option value="title" class="sort-options">По названию</option>
    </select>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    SortChange(event) {
      const sortBy = event.target.value;
      this.$store.commit("setSort", sortBy);
      this.$store.dispatch("getData");
    },
  },
  computed: {
    ...mapState(["sortBtn"]),
    ...mapActions(["getData"]),
  },
};
</script>
