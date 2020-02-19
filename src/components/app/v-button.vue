<template>
  <div
    class="v-button"
    @click="click"
    :class="className"
  >
    <i class="material-icons" v-if="prependIcon">{{ prependIcon }}</i>
    <span>
      {{ title }}
    </span>
    <i class="material-icons" v-if="appendIcon">{{ appendIcon }}</i>
  </div>
</template>

<script>
export default {
  name: "v-button",
  props: {
    title: {
      type: String,
      default: "Press"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    appendIcon: {
      type: String,
      default: ""
    },
    prependIcon: {
      type: String,
      default: ""
    }
  },
  computed: {
    className() {
      return {
        "v-button__disabled": this.disabled,
        "v-button__error": this.error,
        "v-button__success": this.success
      };
    }
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="sass">
.v-button
    display: flex
    align-items: center
    justify-content: center
    font-size: 14px
    text-transform: uppercase
    font-weight: 700
    color: #4a4a4a
    padding: 19px 39px
    cursor: pointer
    border: 1px solid #eaeaea
    transition: all ease-in-out 0.2s
    &:hover
        border: 1px solid #f16d7f
        color: #f16d7f
    &__disabled
        pointer-events: none
        background-color: initial
    &__error
        background-color: red
    &__success
        background-color: green
.material-icons
  margin-right: 8px
  &:last-of-type
    margin-left: 8px
</style>
