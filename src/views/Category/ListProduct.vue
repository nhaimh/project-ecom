<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">{{ category.categoryName }}</h4>
        <h5 style="font-weight: 300; color: #686868">{{ msg }}</h5>
      </div>
    </div>

    <div class="row">
      <div
        v-for="product of category.products"
        :key="product.id"
        class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
      >
        <ProductBox :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductBox from "@/components/Product/ProductBox.vue";
import { mapGetters } from "vuex";
export default {
  components: { ProductBox },
  name: "EcmmerceUiListProduct",

  data() {
    return {
      id: null,
      category: {},
    };
  },
  computed: { ...mapGetters(["categories"]) },
  mounted() {
    this.id = this.$route.params.id;
    this.category = this.categories.find((category) => category.id === this.id);
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>