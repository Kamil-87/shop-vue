<template>
  <div class="header__top">
    <div class="header__flex">
      <div class="header__top__left">
        <router-link to="/" class="logo">
          <img
            src="@/assets/image/logo.png"
            alt="brand"
            class="logo__img"
          /><span>bran<span class="logo__d">d</span></span>
        </router-link>

        <details class="browse">
          <summary class="browse__summary">Browse</summary>
        </details>
        <form action="#" class="header__form">
          <label>
            <input
              type="text"
              class="header__input"
              placeholder="Search for Item..."
            />
          </label>
          <a href="#" class="header__search"
            ><i class="fas fa-search header__search_icon"></i
          ></a>
        </form>
      </div>

      <div class="header__top__right">
        <div class="cart-block">
          <router-link to="/shopping-cart">
            <img alt="basket" class="cart__icon" src="@/assets/image/cart.svg" />
          </router-link>
        </div>
        <a class="header__btn">My Account </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-top",
  data() {
    return {
      title: "header"
    };
  }
};
</script>
