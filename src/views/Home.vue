<template>
  <div class="home">
<!--    <section class="promo">
      <div class="container promo__content">
        <div class="promo__text">
          <h2 class="promo__h2">THE BRAND</h2>
          <h3 class="promo__h3">OF LUXURIOUS <span>FASHION</span></h3>
        </div>
      </div>
    </section>-->

    <section class="products container">
      <h2 class="products__h2">Featured Items</h2>
      <p class="products__p">
        Shop for items based on what we featured in this week
      </p>

      <div class="products__box">
        <ProductItem
          v-for="product of PRODUCTS"
          :key="product.id"
          :product_data="product"
          @addProductToCart="addProductToCart"
        />
      </div>
      <div class="products__bottom">
        <router-link to="/catalog" class="products__button"
          >Browse All Product
          <i class="fas fa-long-arrow-alt-right products__button__arrow"></i>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import ProductItem from "../components/ProductItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    ProductItem
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS"])
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_PRODUCT_TO_CART"]),
    addProductToCart(data) {
      this.ADD_PRODUCT_TO_CART(data);
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  }
};
</script>

<style lang="sass">

.promo__content
  background-image: url("../assets/image/promo_back.jpg")
</style>
