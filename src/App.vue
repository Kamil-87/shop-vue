<template>
  <div id="app">
    <mainLayout>
      <router-view />
    </mainLayout>
  </div>
</template>
<script>
import mainLayout from "./views/MainLayout.vue";
export default {
  components: {
    mainLayout
  }
};
</script>

<style lang="sass"></style>
