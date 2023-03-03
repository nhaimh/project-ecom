<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Add Category</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form action="">
          <div class="form-group">
            <label> Name</label>
            <input type="text" class="form-control" v-model="categoryName" />
          </div>
          <div class="form-group">
            <label> Description</label>
            <textarea type="text" class="form-control" v-model="description" />
          </div>
          <div class="form-group">
            <label> Image</label>
            <input type="text" class="form-control" v-model="imageUrl" />
          </div>
          <button type="button" class="btn btn-primary" @click="addCategory">
            Submit
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "EcmmerceUiAddCategory",

  data() {
    return {
      categoryName: "",
      description: "",
      imageUrl: "",
      product: [],
    };
  },

  mounted() {},
  // computed: {
  //     ...mapGetters(["category"])
  // },
  // created() {
  //     this.getCategory();
  // },

  methods: {
    addCategory() {
      const newCategory = {
        categoryName: this.categoryName,
        description: this.description,
        imageUrl: this.imageUrl,
        product: this.product,
      };
      // this.addCategory(newCategory)
      const baseURL = "https://limitless-lake-55070.herokuapp.com";

      axios({
        method: "post",
        url: `${baseURL}/category/create`,
        data: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          // this.$route.push({
          //   name: "category",
          // });
          swal({
            text: "Category added successfully",
            icon: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
      this.$router.push({
        name: "Category",
      });
    },
    // ...mapActions(["addCategory", "getCategory"])
  },
};
</script>

<style lang="scss" scoped>
</style>
