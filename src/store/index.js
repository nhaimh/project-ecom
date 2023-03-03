import Vue from "vue";
import Vuex from "vuex";
import category from "./modules/category";
import product from "./modules/product"
Vue.use(Vuex);

const storeData = {
  modules: {
    category,
    product,
  },
};
const store = new Vuex.Store(storeData);
export default store;
