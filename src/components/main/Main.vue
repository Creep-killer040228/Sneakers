<template>
  <div class="main container">
    <MainSort />
    <input type="text" placeholder="Поиск..." v-model="search" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import MainSort from "./MainSort.vue";
export default {
  components: { MainSort },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(["respons", "getCard"]),
  },
  watch: {
    search(val) {
      this.$emit("searchVal", val);
    },
  },
};
</script>
