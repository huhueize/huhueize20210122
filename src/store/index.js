import Vue from "vue";
import Vuex from "vuex";
import products from "./products.js";
import cart from "./cart.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      username: "胡惠泽"
    }
  },
  modules: {
    products,
    cart
  }
});
