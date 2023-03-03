<template>
  <div class="home">
    <b-row>
      <b-col>
        <NavBar />
      </b-col>
      <b-col>
        <router-view />
      </b-col>
      <b-col>
        <Footer />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import Home from "./Home.vue";
export default {
  name: "HomeView",
  components: {
    NavBar,
    Home,
    Footer,
  },
};
</script>
