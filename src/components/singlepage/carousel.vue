<template>
  <div class="carousel__inner container">
    <div
      class="carousel__item"
      :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
    >
      <carousel-item
        v-for="item in carousel_data"
        :key="item.id"
        :item_data="item"
      />
    </div>
    <button @click="prevSlide" class="carousel__control_prev bg__control">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button @click="nextSlide" class="carousel__control_next bg__control">
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>
import carouselItem from "./carousel-item";
export default {
  name: "carousel",
  components: {
    carouselItem
  },
  props: {
    carousel_data: {
      type: Array,
      default: () => []
    },
    interval: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentSlideIndex: 0
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.carousel_data.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    }
  },
  mounted() {
    if (this.interval > 0) {
      setInterval(() => {
        this.nextSlide();
      }, this.interval);
    }
  }
};
</script>

<style lang="sass">
$widthSite: 1140px
$colorSite: #f16d7f

.carousel__inner
  max-width: 597px
  overflow: hidden
.carousel__item
  display: flex
  align-items: center
  transition: all ease .75s

.bg__control
  color: #ffffff
  font-size: 24px
  font-weight: 400
  background-color: #d8d8d8
  padding: 18px
  &:hover
    background-color: $colorSite
  &:active
    background-color: #d8d8d8

.carousel__control_prev
  position: absolute
  left: 0
  top: 50%

.carousel__control_next
  position: absolute
  right: 0
  top: 50%
</style>
