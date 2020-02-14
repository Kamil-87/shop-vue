<template>
  <div class="content__products">
    <div class="content__products__top">
      <label for="sortBy" class="content__products__top__label"
        >Sort By
        <select
          name="sortBy"
          id="sortBy"
          class="content__products__top__select"
        >
          <option value="N" selected>Name</option>
          <option value="N">Name</option>
          <option value="N">Name</option>
        </select>
      </label>
      <label for="showNumber" class="content__products__top__label"
        >Show
        <select
          name="showNumber"
          id="showNumber"
          class="content__products__top__select"
        >
          <option value="7">07</option>
          <option value="8">08</option>
          <option value="9" selected>09</option>
        </select>
      </label>
    </div>
    <div class="products__box">
      <ProductItem
        v-for="product of PRODUCTS"
        :key="product.id"
        :product_data="product"
      />
    </div>
    <div class="paginator">
      <div class="paginator__flex">
        <span class="paginator__control paginator__control__prev"
          ><i class="fas fa-chevron-left" aria-hidden="true"></i
        ></span>
        <span class="paginator__pages">
          <a href="#" class="paginator__num paginator__num_active">1</a>
          <a href="#" class="paginator__num">2</a>
          <a href="#" class="paginator__num">3</a>
          <a href="#" class="paginator__num">4</a>
          <a href="#" class="paginator__num">5</a>
          <a href="#" class="paginator__num">6</a>
          <a href="#" class="paginator__num">7</a>
        </span>
        <span class="paginator__control paginator__control__next"
          ><i class="fas fa-chevron-right" aria-hidden="true"></i
        ></span>
      </div>
      <a href="#" class="paginator__viewAll">View All</a>
    </div>
  </div>
</template>

<script>
import ProductItem from "../ProductItem";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    ProductItem
  },
  computed: {
    ...mapGetters(["PRODUCTS"])
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then(response => {
      this.$store.state.products = response;
    });
  }
};
</script>
