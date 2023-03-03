<template>
  <div id="page-top">
    <div id="wrapper">
      <sliderBar />
      <div id="content">
        <headeradmin />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headeradmin from "../components/Admin/header.vue";
import sliderBar from "../components/Admin/slideBar.vue";

export default {
  name: "AdminView",
  data() {
    return {};
  },
  components: {
    headeradmin,
    sliderBar,
  },
  methods: {},
};
</script>
