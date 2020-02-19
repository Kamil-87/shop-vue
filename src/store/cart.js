export default {
  state: {
    cart: []
  },
  mutations: {
    SET_CART: (state, product) => {
      let isProductExists = false;
      if (state.cart.length) {
        state.cart.map(function(item) {
          if (item.id === product.id) {
            isProductExists = true;
            item.quantity++;
          }
        });
        if (!isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    DELETE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    }
  },
  actions: {
    ADD_PRODUCT_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("DELETE_FROM_CART", index);
    }
  },

  getters: {
    CART(state) {
      return state.cart;
    }
  }
};
