const state = {
  items: [],
  checkoutStatus: null
};

// getters
const getters = {};

// actions
const actions = {
  addProductToCard({ commit }, product) {
    if (product.inventory > 0) {
      commit(
        "products/deleteProductInventory",
        { id: product.id },
        { root: true },
      );
      state.items.push(product);
    }
  },
  delProductToCard({ commit }, product,index) {
      commit(
          "products/addProductInventory",
          { id: product.id },
          { root: true },
      );
    state.items.splice(index,1);
  }
};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
