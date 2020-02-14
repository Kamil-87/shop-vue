<template>
  <div class="single__page">
    <div class="single__page_slider">
      <carousel
              :carousel_data="sliderItems"
              :interval="3000"
      />
    </div>
    <section class="product__description container">
      <a href="#" class="product__collection">WOMEN COLLECTION</a>
      <h2 class="product__name__h2">
        <a href="#">Moschino Cheap And Chic</a>
      </h2>

      <p class="description__text">
        Compellingly actualize fully researched processes before proactive
        outsourcing. Progressively syndicate collaborative architectures before
        cutting-edge services. Completely visualize parallel core competencies
        rather than exceptional portals.
      </p>

      <ul class="description__characteristic">
        <li class="description__characteristic__list">
          MATERIAL: <a href="#">&nbsp;COTTON</a>
        </li>
        <li class="description__characteristic__list">
          DESIGNER:<a href="#">&nbsp;BINBURHAN</a>
        </li>
      </ul>

      <p class="description__cost color__red">&#36;561</p>

      <div class="description__parameter__flex">
        <article class="description__parameter">
          <h6 class="parameter__h6">CHOOSE COLOR</h6>
          <form action="#">
            <label for="chooise__color"></label
            ><select
              name="parameter__color"
              id="chooise__color"
              class="parameter__select"
            >
              <option value="c-red">Red</option>
              <option value="c-green">Green</option>
            </select>
          </form>
        </article>
        <article class="description__parameter">
          <h6 class="parameter__h6">CHOOSE SIZE</h6>
          <form action="#">
            <label for="parameter__size"></label
            ><select name="size" id="parameter__size" class="parameter__select">
              <option value="XXL">XXL</option>
              <option value="XL">XL</option>
              <option value="L">L</option>
              <option value="XS">XS</option>
            </select>
          </form>
        </article>
        <article class="description__parameter">
          <h6 class="parameter__h6">CHOOSE COLOR</h6>
          <form action="#">
            <label>
              <input
                type="number"
                min="1"
                max="1000"
                value="2"
                class="parameter__select_input"
              />
            </label>
          </form>
        </article>
      </div>

      <button class="add__cart__single">
        <img
          src="../assets/image/cart-red.svg"
          alt="basket"
          class="cart__red"
        />Add to Cart
      </button>
    </section>

    <section class="like__products container">
      <h2 class="like__products__h2">you may like also</h2>
      <div class="products__box">
        <article class="product">
          <a href="#"
            ><img
              class="product__img"
              src="img/product-women-img1.png"
              alt="photo product"
          /></a>
          <div class="product__text">
            <h2>
              <a href="#" class="product__name">Mango People T-shirt</a>
            </h2>
            <p class="product__price">&#36;52.00</p>
          </div>
          <a href="#" class="product__add">Add to Cart</a>
        </article>
        <article class="product">
          <a href="#"
            ><img
              class="product__img"
              src="img/product-women-img2.jpg"
              alt="photo product"
          /></a>
          <div class="product__text">
            <h2>
              <a href="#" class="product__name">Mango People T-shirt</a>
            </h2>
            <p class="product__price">&#36;52.00</p>
          </div>
          <a href="#" class="product__add">Add to Cart</a>
        </article>
        <article class="product">
          <a href="#"
            ><img
              class="product__img"
              src="img/product-women-img3.png"
              alt="photo product"
          /></a>
          <div class="product__text">
            <h2>
              <a href="#" class="product__name">Mango People T-shirt</a>
            </h2>
            <p class="product__price">&#36;52.00</p>
          </div>
          <a href="#" class="product__add">Add to Cart</a>
        </article>
        <article class="product">
          <a href="#"
            ><img
              class="product__img"
              src="img/product-women-img4.jpg"
              alt="photo product"
          /></a>
          <div class="product__text">
            <h2>
              <a href="#" class="product__name">Mango People T-shirt</a>
            </h2>
            <p class="product__price">&#36;52.00</p>
          </div>
          <a href="#" class="product__add">Add to Cart</a>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import carousel from "../components/singlepage/carousel";
export default {
  name: "single-page",
  components: {
    carousel
  },
  data() {
    return {
      sliderItems: [
        { id: "s1", name: "img1", img: "slider-goods1.jpg" },
        { id: "s2", name: "img1", img: "slider-goods2.jpg" },
        { id: "s3", name: "img1", img: "slider-goods3.jpg" }
      ]
    };
  }
};
</script>

<style lang="sass">
$widthSite: 1140px
$colorSite: #f16d7f
/* -------------------------------single__page------------------------------- */

.single__page
  padding-bottom: 32px

.single__page_slider
  position: relative
  background-color: #f7f7f7
  height: 777px

/* -------------------------------product__description------------------------------- */

.product__description
  text-align: center
  width: 1140px
  border: 1px solid #eaeaea
  background-color: #ffffff
  position: relative
  top: -85px
  padding: 73px 260px 94px 260px
  box-sizing: border-box


.product__collection
  color: $colorSite
  font-size: 14px
  font-weight: 700
  text-transform: uppercase
  margin-bottom: 17px
  padding-bottom: 14px
  display: inline-block
  border-bottom: 2px solid $colorSite


.product__name__h2
  color: #4d4d4d
  font-size: 18px
  font-weight: 400
  text-transform: uppercase
  margin-bottom: 67px


.description__text
  color: #5e5e5e
  font-size: 14px
  font-weight: 300
  margin-bottom: 28px


.description__characteristic
  display: flex
  justify-content: space-around

  .description__characteristic__list
    color: #b9b9b9
    font-size: 14px
    font-weight: 700
    text-transform: uppercase
    margin-bottom: 37px

    a
      color: #2f2f2f

.description__cost
  font-size: 24px
  font-weight: 700
  margin-bottom: 47px


.description__parameter__flex
  display: flex
  justify-content: space-between

.parameter__h6
  color: #2f2f2f
  font-size: 14px
  font-weight: 700
  text-transform: uppercase


.parameter__select
  color: #bcbcbc
  font-size: 13px
  font-weight: 400
  width: 144px
  height: 35px
  border: 1px solid #eaeaea
  background-color: #ffffff
  padding: 0 15px

.parameter__select_input
  color: #bcbcbc
  font-size: 13px
  font-weight: 400
  width: 144px
  height: 35px
  border: 1px solid #eaeaea
  background-color: #ffffff
  padding: 0 15px


.add__cart__single
  border: 1px solid $colorSite
  color: $colorSite
  font-size: 15px
  font-weight: 700
  padding: 16px 206px
  display: flex
  align-items: center
  margin: 28px 40px

  .cart__red
    margin-right: 15px


  &:hover
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3)

  &:active
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.15)


.like__products__h2
  color: #4d4d4d
  font-size: 24px
  font-weight: 400
  text-transform: uppercase
  text-align: center
  margin-bottom: 71px
</style>
