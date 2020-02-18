<template>
  <tr class="product__tr">
    <th scope="row" class="first__th">
      <img
        :src="
          require('../../assets/image/productImages/' + cart_item_data.image)
        "
        alt="product"
        class="cart-item__img"
      />
    </th>
    <th scope="row" class="first__th">
      <h4 class="h4">{{ cart_item_data.title }}</h4>
      <p>Color: <span>Red</span></p>
      <p>Size: <span>Xll</span></p>
    </th>
    <td class="cart__td">&#36;{{ cart_item_data.price }}</td>
    <td class="cart__td">
      <label>
        <input
          v-model.number.trim="cart_item_data.quantity"
          type="number"
          min="1"
          max="1000"
          class="quantity__product"
        />
      </label>
    </td>
    <td class="cart__td">FREE</td>
    <td class="cart__td">&#36;{{ subTotalProductPrice }}</td>
    <td class="cart__td">
      <button @click="deleteFromCart" class="action__product">
        <i class="fas fa-times-circle"></i>
      </button>
    </td>
  </tr>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    ...mapGetters(["subTotalProduct"]),
    subTotalProductPrice() {
      return this.cart_item_data.price * this.cart_item_data.quantity;
    }
  },
  mounted() {
    this.$set(this.cart_item_data, "quantity", 1);
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart() {
      this.$emit("deleteFromCart");
    }
  }
};
</script>

<style lang="sass">
.cart-item__img
    height: 115px
</style>
