<template>
  <article class="product">
    <router-link tag="a" to="/single-page">
      <img
        :src="require('../assets/image/productImages/' + product_data.image)"
        alt="photo-product"
        class="product__img"
      />
    </router-link>
    <div class="product__text">
      <h2>
        <a href="#" class="product__name">{{ product_data.title }}</a>
      </h2>
      <p class="product__price">&#36;{{ product_data.price }}</p>
    </div>
    <router-link tag="button" to="/checkout" type="button" class="product__add"
      >Add to Cart</router-link
    >
  </article>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },

};
</script>

<style lang="sass">
.product__add
  cursor: pointer
</style>
