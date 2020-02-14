<template>
  <div class="carousel-item">
    <img
      :src="require('../../assets/image/slider/' + item_data.img)"
      alt="carousel-img"
    />
  </div>
</template>

<script>
export default {
  name: "carousel-item",
  props: {
    item_data: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style></style>
