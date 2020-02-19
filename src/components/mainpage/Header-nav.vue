<template>
  <nav class="header__nav container">
    <ul class="menu">
      <router-link
        v-for="link in links"
        :key="link.title"
        tag="li"
        :to="link.url"
        :exact="link.exact"
        class="menu__link"
      >
        {{ link.title }}
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "header-nav",
  data() {
    return {
      links: [
        { title: "Home", url: "/", exact: true },
        { title: "Man", url: "/" },
        { title: "Women", url: "/" },
        { title: "Kids", url: "/" },
        { title: "Accessories", url: "/" },
        { title: "Featured", url: "/" },
        { title: "Hot Deals", url: "/" }
      ]
    };
  }
};
</script>
