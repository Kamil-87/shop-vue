<template>
  <div>
    <div
      @click="showCart = !showCart"
      class="btn-cart"
      :to="{ name: 'shopping-cart' }"
    >
      <img
        alt="basket"
        class="cart__icon"
        src="@/assets/image/cart.svg"
      />
    </div>

    <div class="cart-block" v-show="showCart">
      <p v-if="!cart_data.length">Корзина пуста</p>
      <cartItemMin

      />
    </div>
  </div>
</template>

<script>
import cartItemMin from "./cart-item-min";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "cart",
  components: {
    cartItemMin
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      showCart: false
    };
  },

};
</script>

<style lang="sass">
.cart-block
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.62)
  border-radius: 5px
  box-sizing: border-box
  right: 0
  top: 130%
  position: absolute
  background-color: white
  padding: 20px
  color: black
  width: 300px

.btn-cart
  transition: all ease-in-out 0.4s
  cursor: pointer
</style>
