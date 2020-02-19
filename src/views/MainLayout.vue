<template>
  <div class="app-main-layout">
    <header class="header">
      <HeaderTop />
      <HeaderNav />
    </header>

    <div class="app-page">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>

    <footer class="footer">
      <FooterTop />
      <FooterCenter />
      <FooterBottom />
    </footer>
  </div>
</template>

<script>
import HeaderTop from "../components/mainpage/Header-top";
import HeaderNav from "../components/mainpage/Header-nav";

import FooterTop from "../components/mainpage/Footer-top";
import FooterCenter from "../components/mainpage/Footer-center";
import FooterBottom from "../components/mainpage/Footer-bottom";
export default {
  name: "main-layout",
  components: {
    HeaderTop,
    HeaderNav,
    FooterTop,
    FooterCenter,
    FooterBottom
  }
};
</script>
