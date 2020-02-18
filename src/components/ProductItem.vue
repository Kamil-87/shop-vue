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
    <button type="button" class="product__add" @click="addProductToCart">Add to Cart</button>
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
  methods: {
    addProductToCart() {
      this.$emit("addProductToCart", this.product_data);
    }
  }
};
</script>

<style lang="sass">
.product__add
  background-color: transparent
  border: none
  cursor: pointer
  &:hover, &:active
    border: none
    background-color: transparent
</style>
