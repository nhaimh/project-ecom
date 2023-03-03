<template>
  <div class="card h-100 w-100">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="product.imageURL"
        alt="Card image cap"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <router-link
        :to="{ name: 'editproduct', params: { id: product.id } }"
        v-show="$route.name === 'product'"
      >
        <button class="btn btn-primary">Edit</button>
      </router-link>
      <router-link
        :to="{ name: 'detail', params: { id: product.id } }"
        v-show="$route.name === 'home'"
      >
        <button class="btn btn-primary">Detail</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductBox",
  props: ["product"],
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>
