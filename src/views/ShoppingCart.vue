<template>
  <section class="shopping__cart">
    <div class="container" v-if="!CART.length">
      <p class="cart__empty-title">Ваша корзина пока пуста</p><br>
      <p class="cart__empty-text">
        Акции, специальные предложения и обзоры самых интересных товаров на
        главной странице помогут вам определиться с выбором!
      </p>
    </div>
    <div v-else>
      <div class="container">
        <table class="shopping__cart__table ">
          <tbody>
            <tr>
              <th scope="col" class="first__th" colspan="2">Product Details</th>
              <th scope="col" class="cart__th">unite Price</th>
              <th scope="col" class="cart__th">Quantity</th>
              <th scope="col" class="cart__th">shipping</th>
              <th scope="col" class="cart__th">Subtotal</th>
              <th scope="col" class="cart__th">ACTION</th>
            </tr>
            <cartItem
              v-for="(item, index) of CART"
              :key="item.id"
              :cart_item_data="item"
              @deleteFromCart="deleteFromCart(index)"
            />
          </tbody>
        </table>
        <div class="shopping__table__link">
          <vButton @click="clickButton" title="CLEAR SHOPPING CART"></vButton>
          <vButton @click="clickButton" title="CONTINUE SHOPPING"></vButton>
        </div>
      </div>

      <article class="checkout container">
        <form action="#" class="shipping__address">
          <h2 class="shipping__address__h2">Shipping Address</h2>
          <label for="select"></label>
          <select class="shipping__address__form__control" id="select">
            <option value="AX">ALAND ISLANDS</option>
            <option value="AM">ARMENIA</option>
            <option value="AW">ARUBA</option>
            <option selected value="RU">RUSSIAN FEDERATION</option>
          </select>
          <label>
            <input type="text" placeholder="State" class="shipping__input" />
          </label>
          <label>
            <input
              type="text"
              placeholder="Postcode / Zip"
              class="shipping__input"
            />
          </label>
        </form>

        <form action="#" class="coupon__discount">
          <h2 class="shipping__address__h2">coupon discount</h2>
          <label for="coupon__code" class="shipping__label"
            >Enter your coupon code if you have one</label
          >
          <input type="text" id="coupon__code" class="shipping__input" />
          <a href="#" class="apply_coupon">Apply coupon</a>
        </form>

        <div class="total__checkout">
          <div class="shipping__cost">
            <p class="sub__total">
              Sub total &nbsp;&nbsp;&nbsp;&#36;<span id="subCost">900</span>
            </p>
            <p class="grand__total">
              GRAND TOTAL &nbsp;&nbsp;&nbsp;<span
                id="grandCost"
                class="color__red"
                >&#36;{{totalPrice}}</span
              >
            </p>
          </div>
          <router-link to="/checkout" class="proceed__checkout"
            >proceed to checkout</router-link
          >
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import vButton from "../components/app/v-button";
import cartItem from "../components/cart/cart-item";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "shopping-cart",
  components: {
    cartItem,
    vButton
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    clickButton() {
      console.log("BTN");
    }
  },
  computed: {
    ...mapGetters(["CART"])
  }
};
</script>

<style lang="sass">

.shopping__cart
  margin-bottom: 80px

/* ------------------table------------------------- */

table
  box-sizing: border-box
  width: 100%
  max-width: 100%
  margin-top: 70px


.product__tr
  height: 145px


.shopping__cart__table th, td
  border-bottom: 1px solid #eaeaea


.shopping__cart__table tr:first-child th
  color: #222222
  font-size: 13px
  font-weight: 700
  text-transform: uppercase
  letter-spacing: -0.2px


.first__th
  text-align: left


.cart__th, .cart__td
  text-align: center


.cart__th
  color: #222222
  font-size: 13px
  font-weight: 700
  text-transform: uppercase
  letter-spacing: -0.2px
  padding: 20px 0

.shopping__cart__table tr
  border: 1px solid #eaeaea


.shopping__cart__table td
  color: #656565
  font-size: 13px
  font-weight: 400


.first__th>.h4
  color: #222222
  font-size: 13px
  font-weight: 700
  text-transform: uppercase
  margin-bottom: 38px


.first__th p
  color: #6f6e6e
  font-size: 13px
  font-weight: 400

.first__th p>span
  color: #575757
  font-weight: 300


.quantity__product
  width: 54px
  height: 30px
  border: 1px solid #eaeaea
  color: #656565
  font-size: 13px
  font-weight: 400
  text-align: center


.action__product
  color: #c0c0c0
  font-size: 16px
  font-weight: 400
  text-transform: uppercase

.action__product:hover
  color: $colorSite

.action__product:active
  color: #ededed

.shopping__table__link
  display: flex
  justify-content: space-between
  margin-top: 44px
  margin-bottom: 63px


.clear__shopping__cart, .continue__shopping
  color: #4a4a4a
  font-size: 14px
  font-weight: 700
  text-transform: uppercase
  padding: 19px 39px
  border: 1px solid #eaeaea

.clear__shopping__cart:hover, .continue__shopping:hover
  color: #fff
  background-color: $colorSite


.clear__shopping__cart:active, .continue__shopping:active
  color: #4a4a4a
  background-color: #ededed


/* -------------------------------shopping__cart------------------------------- */

.shopping__cart
  margin-bottom: 80px


.shopping__cart_header
  height: 148px
  background-color: #f8f3f4


.shopping__cart_bg
  display: flex
  justify-content: space-between
  align-items: center
  height: 148px


.shopping__h2
  font-size: 24px
  font-weight: 400
  text-transform: uppercase

.cart__empty-title
  margin-top: 50px
  font-size: 1.6rem
  line-height: 1.3rem
  margin-bottom: 1.2rem
  display: block
  color: #333
.cart__empty-text
  font-size: 1.1rem
  line-height: 1.5rem
  width: 50%
</style>
