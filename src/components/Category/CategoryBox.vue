<template>
  <div class="card w-100 h-100" style="margin-top: 10px">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        :src="category.imageUrl"
        class="card-img-top embed-responsive-item"
        alt="Card image cap"
      />
    </div>
    <div class="card-body">
      <router-link :to="{ name: 'listproduct', params: { id: category.id } }">
        <h5 class="card-title">{{ category.categoryName }}</h5>
      </router-link>
      <p class="card-text">
        {{ category.description }}
      </p>
      <router-link
        :to="{ name: 'editcategory', params: { id: category.id } }"
        v-show="$route.name === 'Category'"
      >
        <button class="btn btn-primary" @click="submit()">
          Edit
        </button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "EcmmerceUiCategory",
  props: ["category"],
  data() {
    return {};
  },

  mounted() {},

  methods: {
    submit() {
      console.log(this.category.id);
    },
  },
};
</script>

<style>
.card-img-top {
  object-fit: cover;
}
</style>
