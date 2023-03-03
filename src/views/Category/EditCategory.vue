<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edit Category</h4>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <form v-if="category">
            <div class="form-group">
              <label>CategoryName</label>
              <input
                type="text"
                class="form-control"
                v-model="category.categoryName"
              />
            </div>
            <div class="form-group">
              <label>Descripstion</label>
              <textarea
                type="text"
                class="form-control"
                v-model="category.description"
              />
            </div>
            <div class="form-group">
              <label>Image</label>
              <input
                type="text"
                class="form-control"
                v-model="category.imageUrl"
              />
            </div>
            <button type="button" class="btn btn-primary" @click="submit()">
              Submit
            </button>
          </form>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "EcmmerceUiEditCategory",

  data() {
    return {
      category: null,
      id: null,
    };
  },
  computed: {
    ...mapGetters(["categories"]),
  },
  mounted() {
    this.id = this.$route.params.id;
    this.category = this.categories.find((category) => category.id == this.id);
  },

  methods: {
    async submit() {
      console.log("category", this.category);
      delete this.category["products"];
      await axios
        .post(
          `https://limitless-lake-55070.herokuapp.com/category/update/${this.id}`,
          this.category
        )
        .then(() => {
          swal({
            text: "category has been updated successfully",
            icon: "success",
          });
        })
        .catch((err) => console.log("err", err));
      this.$router.push({ name: "Category" });
    },
    // this.editCategory(this.category, this.id);
    // ...mapActions(["editCategory"]),
  },
};
</script>

<style lang="scss" scoped>
</style>