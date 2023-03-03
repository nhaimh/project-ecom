<template>
  <div id="home">
    <div id="background-div" class="page-holder bg-cover">
      <div class="container py-5">
        <header class="text-left text-white py-5">
          <h3 class="mb-4 rounded" id="heading">
            <a href="#start" class="bg-white px-2 py-2 rounded"
              >Start shoping</a
            >
          </h3>
          <p class="lead mb-0 bg-dark p-1 rounded">Demo Ecommerce</p>
        </header>
        <hr />
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top Category</h2>
        </div>
      </div>
      <div class="row" v-if="category_size">
        <div
          v-for="index in this.category_size"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <CategoryBox :category="categories[index - 1]" />
        </div>
      </div>
    </div>
    <hr />
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top Product</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.product_size"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <ProductBox :product="products[index - 1]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBox from "@/components/Category/CategoryBox.vue";
import ProductBox from "@/components/Product/ProductBox.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "EcmmerceUiHome",
  components: {
    CategoryBox,
    ProductBox,
  },
  data() {
    return {
      // category_size: 0,
      // product_size: 0,
    };
  },
  created() {
    this.getCategory();
    this.getProduct();
  },
  computed: {
    ...mapGetters(["categories", "products"]),
    category_size() {
      return Math.min(6, this.categories.length);
    },
    product_size() {
      return Math.min(8, this.products.length);
    },
    // this.category_size = Math.min(6, this.categories.length);
    // this.product_size = Math.min(8, this.products.length);
  },
  mounted() {
    // lấy dữ liệu xong gán
    // setTimeout(() => {
    //   debugger;
    //   this.test = this.categories.length;
    // }, 2000);
    {
      totalrow: 1;
      items: [1, 2, 3, 4, 5];
    }
  },

  methods: {
    ...mapActions(["getCategory", "getProduct"]),
  },
};
</script>

<style>
.page-holder {
  min-height: 100vh;
}

.bg-cover {
  background-size: cover !important;
}

#background-div {
  background: url("../assets/home.png");
}

#heading {
  font-weight: 400;
}
</style>
