<template>
  <div>
    <div class="cart-item">
      <div class="product-bio">
      <!--  <img
              :src="require('../../assets/image/productImages/' + cart_item_data.image)"
              alt="Some image"
              class="drop_cart_img"
      />-->
        <div class="product-desc">
          <h4 class="drop__cart_h4">{{ cart_item_data.title }}</h4>
          <p class="drop__cart_evaluation">☆☆☆☆☆</p>
          <p class="drop__cart_cost">
            {{ cart_item_data.quantity }} <span>x</span>
            {{ cart_item_data.price }}
          </p>
        </div>
      </div>
      <div class="right-block">
        <button
          class="action__product"
          @click="$emit('remove', cart_item_data)"
        >
          <i class="fas fa-times-circle"></i>
        </button>
      </div>
    </div>
    <div class="cart__total__cost">
      <p>TOTAL</p>
      <p>${{ cart_item_data.quantity * cart_item_data.price }}</p>
    </div>
    <router-link tag="a" to="/checkout" class="btn__drop__cart cart_red">
      Checkout
    </router-link>
    <router-link tag="a" to="/single_page" class="btn__drop__cart cart_black">
      Go to cart
    </router-link>
  </div>
</template>

<script>
export default {
  name: "cart-item-min",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
};
</script>

<style lang="sass">
.product-item
  display: flex
  flex-direction: column
  width: 200px
  border-radius: 5px
  overflow: hidden
  margin: 20px 0

.product-bio
  display: flex

.cart-item
  display: flex
  justify-content: space-between
  border-color: grey

.cart-item img
  align-self: flex-start
  margin-right: 15px
  height: 100px

.product-desc
  display: flex
  flex-direction: column
  justify-content: space-between

.right-block
  display: flex
  flex-direction: column
  justify-content: center

.action__product
  color: #c0c0c0
  font-size: 16px
  font-weight: 400
  background-color: transparent
  border: none
  cursor: pointer
  &:hover
    background-color: transparent
    border: none
    color: #f16d7f
  &:active, &:focus
    background-color: transparent
    border: none
  &:focus
    background-color: initial
    border: none

.drop__flex__cart
  width: 262px
  padding: 20px 15px
  background: #fff
  border-radius: 5px

.drop__cart
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.62)
  border-radius: 5px
  box-sizing: border-box
  right: 0
  top: 130%
  position: absolute
  background-color: white
  padding: 20px
  color: black
  width: 262px
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

  &_img
    margin-right: 15px
    border-bottom: 1px solid #eaeaea
  &_info
    margin-right: 55px
  &_h4
    color: #222222
    font-size: 12px
    font-weight: 700
    text-transform: uppercase
  &_evaluation
    color: #e4af48
    font-size: 16px
    font-weight: 400
    text-transform: uppercase
    &:before
    content: "\2605"
  &_cost
    font-size: 12px
    font-weight: 400
    text-transform: uppercase
    color: $colorSite
    span
      font-size: 10px


.cart__total__cost
  display: flex
  justify-content: space-between
  color: #222222
  font-size: 16px
  font-weight: 700
  text-transform: uppercase
  margin-top: 19px
  margin-bottom: 32px


.btn__drop__cart
  font-size: 14px
  font-weight: 700
  text-transform: uppercase
  display: block
  text-align: center
  height: 50px
  line-height: 50px


.cart_red
  border: 1px solid $colorSite
  color: $colorSite
  margin-bottom: 11px


.cart_black
  border: 1px solid #eaeaea
  color: #4a4a4a
</style>
