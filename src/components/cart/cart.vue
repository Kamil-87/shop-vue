<template>
  <div>
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
        <cartItem />
      </tbody>
    </table>
    <div class="shopping__table__link">
      <button class="clear__shopping__cart">CLEAR SHOPPING CART</button>
      <button class="continue__shopping">CONTINUE SHOPPING</button>
    </div>
  </div>
</template>

<script>
import cartItem from "./cart-item";
export default {
  name: "cart",
  components: {
    cartItem
  }
};
</script>

<style scoped></style>
