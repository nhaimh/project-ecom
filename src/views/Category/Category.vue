<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h3 class="pt-3">Our Category</h3>
          <router-link :to="{ name: 'AddCategory' }">
            Add Category
          </router-link>
        </div>
      </div>
      <div class="row">
        <div
          v-for="category of categories"
          :key="category.id"
          class="col-xl-4 col-md-6 col-12 pt-3 d-flex"
        >
          <CategoryBox :category="category" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBox from "../../components/Category/CategoryBox.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "EcmmerceUiCategory",
  components: {
    CategoryBox,
  },

  data() {
    return {};
  },
  computed: {
    ...mapGetters(["categories"]),
  },
  created() {
    this.getCategory();
  },

  methods: {
    ...mapActions(["getCategory"]),
  },
};
</script>

<style scoped>
</style>
