<template>
  <div class="catalog">
    <div class="breadcrumbs">
      <div class="breadcrumbs__flex">
        <h2 class="breadcrumbs__h2">New Arrivals</h2>
        <nav class="breadcrumbs__shopping">
          <ul class="breadcrumbs__menu">
            <li class="breadcrumbs__list">
              <router-link to="/" class="breadcrumbs__link"
                >Home&nbsp;/&nbsp;</router-link
              >
            </li>
            <li class="breadcrumbs__list">
              <a href="#" class="breadcrumbs__link">Men&nbsp;/&nbsp;</a>
            </li>
            <li class="breadcrumbs__list">
              <a href="#" class="breadcrumbs__link breadcrumbs__link_active"
                >New Arrivals</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="main container">
      <AsideMenu />

      <div class="content">
        <CatalogParameters />
        <CatalogProducts />
      </div>
    </div>

    <FeatureBox />
  </div>
</template>

<script>
import AsideMenu from "../components/catalog/aside-menu";
import CatalogParameters from "../components/catalog/catalog-parameters";
import CatalogProducts from "../components/catalog/catalog-products";
import FeatureBox from "../components/catalog/feature-box";
export default {
  name: "catalog",
  components: {
    AsideMenu,
    CatalogParameters,
    CatalogProducts,
    FeatureBox
  }
};
</script>

<style lang="sass">
$widthSite: 1140px
$colorSite: #f16d7f
.main
  display: flex
  justify-content: space-between
  margin: 59px auto 110px

.aside__menu
  margin-right: 50px
  &__drop
    margin-bottom: 18px
  &__summary
    font-size: 14px
    font-weight: 700
    text-transform: uppercase
    padding-top: 14px
    padding-left: 16px
    padding-bottom: 14px
    border-bottom: 1px solid #ebebeb
    border-left: 5px solid #ef5b70
    width: 243px
    &:after
      position: relative
      float: right
      padding-right: 6px
      font-size: 12px
      font-weight: 400


.content__parameters
  display: flex
  justify-content: space-between
  color: #6f6e6e

.parameters
  &__flex
    display: flex
    flex-wrap: wrap
  &__h5
    font-size: 14px
    font-weight: 700
    text-transform: uppercase
    margin-bottom: 25px
  &__trending
    display: flex
    flex-direction: column
    width: 265px
    &__ul
      display: flex
      flex-wrap: wrap
    &__list
      padding-right: 12px
      margin-right: 12px
      border-right: 1px solid #dfdfdf
      margin-bottom: 15px
      &:nth-child(3n)
        border-right: none
    &__link
      color: #6f6e6e
  &__size
    width: 265px
  &__price
    display: flex
    flex-direction: column
    width: 262px
    &__label
      margin-bottom: 15px
    &__flex
      display: flex
      justify-content: space-between
    &__range
      width: 262px


.content__products__top
  background-color: #f3f3f3
  height: 50px
  display: flex
  align-items: center
  margin-top: 26px
  &__label
    background-color: #ffffff
    color: #6f6e6e
    font-size: 14px
    font-weight: 400
    margin-left: 10px
    display: flex
    align-items: center
    padding-left: 13px
  &__select
    padding: 10px
    border: none
    border-left: 1px solid #ebebeb
    margin-left: 10px
    color: #6f6e6e
    font-size: 14px
    font-weight: 400


.paginator
  display: flex
  justify-content: space-between
  align-items: center
  &__flex
    border-radius: 3px
    border: 1px solid #ebebeb
    background-color: #ffffff
    color: #c4c4c4
    font-size: 16px
    font-weight: bold
    padding: 16px 31px
  &__control
    padding: 8px
    cursor: pointer
    &:hover
      color: $colorSite
    &:active
      color: #ededed
  &__num
    color: #c4c4c4
    font-size: 16px
    font-weight: bold
    padding: 8px
    &_active
      color: $colorSite
    &:hover
      color: $colorSite
    &:active
      color: #ededed
  &__viewAll
    border-radius: 3px
    background-color: #ffffff
    color: $colorSite
    font-size: 16px
    font-weight: bold
    padding: 16px 46px
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.5)
    transition: .3s
    &:hover
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16)
      transform: scale(1.05)


.feature__box
  background-color: #222224
  &__flex
    display: flex
    align-items: center
    justify-content: space-between
    min-height: 341px
  &__cart
    display: flex
    flex-direction: column
    justify-content: center
    text-align: center
  &__h4
    color: #fbfbfb
    font-size: 20px
    font-weight: 700
    letter-spacing: 0.5px
    margin-top: 32px
  &__p
    color: #fbfbfb
    font-size: 14px
    font-weight: 300
    letter-spacing: 0.35px
    margin-top: 17px
</style>
