<template>
  <tr class="product__tr">
    <th scope="row" class="first__th">
      <img src="cart__product.jpg" alt="product" />
    </th>
    <th scope="row" class="first__th">
      <p class="h4">Mango People T-shirt</p>
      <p>Color: <span>Red</span></p>
      <p>Size: <span>Xll</span></p>
    </th>
    <td class="cart__td">&#36;150</td>
    <td class="cart__td">
      <label>
        <input
          type="number"
          min="1"
          max="1000"
          value="2"
          class="quantity__product"
        />
      </label>
    </td>
    <td class="cart__td">FREE</td>
    <td class="cart__td">&#36;300</td>
    <td class="cart__td">
      <a href="#" class="action__product"
        ><i class="fas fa-times-circle"></i
      ></a>
    </td>
  </tr>
</template>

<script>
export default {
  name: "cart-item"
};
</script>

<style scoped></style>
