<template>
  <div class="cart-min">
    <img alt="basket" class="cart__icon" src="../../assets/image/cart.svg" @click="showCart = !showCart" />
    <div class="cart-block" v-show="showCart">
      <p v-if="!cart_data.length">Корзина пуста</p>
      <div v-else>
        <cartItemMin
          v-for="(item, index) of cart_data"
          :key="item.id"
          :cart_item_data="item"
          @deleteFromCart="deleteFromCart(index)"
        />
        <div class="cart_total_price">
          <p>TOTAL</p>
          <p>${{grandTotalPrice}}</p>
        </div>
        <router-link to="/checkout" class="btn-cart">
          Checkout
        </router-link>
        <router-link to="/shopping-cart" class="btn-cart">
          Go to cart
        </router-link>
    </div>
    </div>
  </div>
</template>

<script>
import cartItemMin from "./cart-item-min";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "cart-min",
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
  computed: {
    grandTotalPrice() {
      let arrCart = [];
      for (let item of this.cart_data) {
        arrCart.push(item.price * item.quantity);
      }
      return arrCart.reduce((sum, el) => {
        return sum + el;
      });
    }
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    }
  }
};
</script>

<style lang="sass">
.cart-min
  display: flex
  position: relative

.cart-block
  z-index: 100
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.62)
  border-radius: 5px
  box-sizing: border-box
  right: 0
  top: 130%
  position: absolute
  background-color: white
  padding: 20px
  color: black
  min-width: 302px
  &:before
    content: ''
    width: 0
    height: 0
    position: absolute
    top: -10px
    right: 35px
    border-left: 10px solid transparent
    border-right: 10px solid transparent
    border-bottom: 10px solid white

.cart_total_price
  display: flex
  justify-content: space-between
  color: #222222
  font-size: 16px
  font-weight: 700
  text-transform: uppercase
  margin-top: 19px
  margin-bottom: 32px

.btn-cart
  font-size: 14px
  font-weight: 700
  text-transform: uppercase
  display: block
  text-align: center
  height: 50px
  line-height: 50px
  border: 1px solid #eaeaea
  color: #4a4a4a
  margin-bottom: 11px
  transition: all ease-in-out 0.2s
  cursor: pointer
  &:hover
    border: 1px solid $colorSite
    color: $colorSite

</style>
