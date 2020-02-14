<template>
  <div class="footer__center">
    <div class="footer__column container">
      <div class="footer__description__company">
        <router-link to="/" class="logo footer__brand">
          <img
            src="@/assets/image/logo.png"
            alt="brand"
            class="logo__img"
          /><span>bran<span class="logo__d color__red">d</span></span>
        </router-link>
        <div class="footer__description__text">
          <p class="description__text">
            Objectively transition extensive data rather than cross functional
            solutions. Monotonectally syndicate multidisciplinary materials
            before go forward benefits. Intrinsicly syndicate an expanded array
            of processes and cross-unit partnerships.
          </p>
          <p class="description__text">
            Efficiently plagiarize 24/365 action items and focused
            infomediaries. Distinctively seize superior initiatives for wireless
            technologies. Dynamically optimize.
          </p>
        </div>
      </div>

      <ul class="footer__menu">
        <li class="footer__menu__link">
          <h3 class="footer__menu__h3">COMPANY</h3>
        </li>
        <li
          v-for="item in companyMenuItems"
          :to="item.url"
          class="footer_menu__link"
          v-bind:key="item.id"
        >
          {{ item.title }}
        </li>
      </ul>

      <ul class="footer__menu">
        <li class="footer__menu__link">
          <h3 class="footer__menu__h3">INFORMATION</h3>
        </li>
        <li
          v-for="item in informationMenuItems"
          :to="item.url"
          class="footer_menu__link"
          v-bind:key="item.id"
        >
          {{ item.title }}
        </li>
      </ul>

      <ul class="footer__menu">
        <li class="footer__menu__link">
          <h3 class="footer__menu__h3">SHOP CATEGORY</h3>
        </li>
        <li
          v-for="item in shopCategoryMenuItems"
          :to="item.url"
          class="footer_menu__link"
          v-bind:key="item.id"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-top",
  data() {
    return {
      companyMenuItems: [
        { id: "nav1", title: "Home", url: "/home" },
        { id: "nav2", title: "Shop", url: "/" },
        { id: "nav3", title: "About", url: "/" },
        { id: "nav4", title: "Hot it Works", url: "/" },
        { id: "nav5", title: "Contact", url: "/" }
      ],
      informationMenuItems: [
        { id: "nav6", title: "Terms & Condition", url: "/" },
        { id: "nav7", title: "Privacy Policy", url: "/" },
        { id: "nav8", title: "How to Buy", url: "/" },
        { id: "nav9", title: "How to Sell", url: "/" },
        { id: "nav10", title: "Promotion", url: "/" }
      ],
      shopCategoryMenuItems: [
        { id: "nav11", title: "Men", url: "/" },
        { id: "nav12", title: "Women", url: "/" },
        { id: "nav13", title: "Child", url: "/" },
        { id: "nav14", title: "Apparel", url: "/" },
        { id: "nav15", title: "Brows All", url: "/" }
      ]
    };
  }
};
</script>
