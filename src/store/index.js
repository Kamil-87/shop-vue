import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },

  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
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
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    }
  },

  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("http://localhost:3000/products", {
        method: "GET"
      })
        .then(products => {
          commit("SET_PRODUCTS_TO_STATE", products);
          return products;
        })
        .catch(error => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    }
  },

  getters: {
    PRODUCTS(state) {
      return state.products.data;
    },
    CART(state) {
      return state.cart;
    }
  }
});
