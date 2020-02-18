<template>
  <div>
    <div class="cart-item">
      <div class="product-bio">
        <img
          :src="
            require('../../assets/image/productImages/' + cart_item_data.image)
          "
          alt="Some image"
          class="drop_cart_img"
        />
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
          @click="deleteFromCart"
        >
          <i class="fas fa-times-circle"></i>
        </button>
      </div>
    </div>

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
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    }
  },
  mounted() {
    this.$set(this.cart_item_data, "quantity", 1)
  }
};
</script>

<style lang="sass">
.cart-item
  display: flex
  justify-content: space-between
  border-bottom: 1px solid #eaeaea
  margin-bottom: 10px
  width: 262px
  padding: 20px 0

.product-bio
  display: flex

.product-bio img
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
    /*&:before*/
    /*content: "\2605"*/
  &_cost
    font-size: 12px
    font-weight: 400
    text-transform: uppercase
    color: $colorSite
    span
      font-size: 10px



</style>
