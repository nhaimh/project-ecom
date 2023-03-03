<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edit product</h4>
      </div>
      <div class="row">
        <div class="vol-3"></div>
        <div class="vol-6">
          <form v-if="product">
            <div class="form-group">
              <label> Category</label>
              <select
                class="form-control"
                v-model="product.categoryId"
                required
              >
                <option
                  v-for="category of categories"
                  :key="category.id"
                  :value="category.id"
                >
                  {{ category.categoryName }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label>productName</label>
              <input type="text" class="form-control" v-model="product.name" />
            </div>
            <div class="form-group">
              <label>Descripstion</label>
              <textarea
                type="text"
                class="form-control"
                v-model="product.description"
              />
            </div>
            <div class="form-group">
              <label>Image</label>
              <input
                type="text"
                class="form-control"
                v-model="product.imageURL"
              />
            </div>
            <div class="form-group">
              <label>Price</label>
              <input
                type="number"
                class="form-control"
                v-model="product.price"
                required
              />
            </div>
            <button type="button" class="btn btn-primary" @click="submit()">
              Submit
            </button>
          </form>
        </div>
        <div class="vol-3"></div>
      </div>
    </div>
  </div>
</template>

  
<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "EcmmerceUiEditProduct",
  data() {
    return {
      product: null,
      id: null,
    };
  },
  computed: {
    ...mapGetters(["products", "categories"]),
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);
  },
  methods: {
    async submit() {
      console.log("product", this.product);
      await axios
        .post(
          `https://limitless-lake-55070.herokuapp.com/product/update/${this.id}`,
          this.product
        )
        .then(() => {
          swal({
            text: "product has been updated successfully",
            icon: "success",
          });
        })
        .catch((err) => console.log("err", err));
      this.$router.push({
        name: "product",
      });
    },
    // this.editproduct(this.product, this.id);
    // ...mapActions(["editproduct"]),
  },
};
</script>

  
<style lang="scss" scoped>
</style>
