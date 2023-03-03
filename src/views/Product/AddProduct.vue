<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4>Add New Product</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group">
            <label>Category</label>
            <select
              class="form-control"
              v-model="newProduct.categoryId"
              required
            >
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.categoryName }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Name</label>
            <input type="text" v-model="newProduct.name" class="form-control" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input
              type="text"
              v-model="newProduct.description"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label>Image Url</label>
            <input
              type="text"
              v-model="newProduct.imageURL"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              type="number"
              v-model="newProduct.price"
              class="form-control"
            />
          </div>
          <button type="button" class="btn btn-primary" @click="submit()">
            Add Product
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["baseURL"],
  data() {
    return {
      newProduct: {
        id: null,
        categoryId: null,
        name: null,
        description: null,
        imageURL: null,
        price: null,
      },
    };
  },
  created() {
    this.getCategory();
  },
  computed: { ...mapGetters(["categories"]) },
  methods: {
    submit() {
      this.addProduct(this.newProduct);
      this.$router.push({
        name: "product",
      });
    },
    ...mapActions(["getCategory", "addProduct"]),
  },
};
</script>
