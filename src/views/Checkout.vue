<template>
  <section class="checkout__accordion container">
    <details class="accordion accordion__address" open>
      <summary class="accordion__summary"
        >&nbsp;&nbsp;&nbsp;Shipping Address</summary
      >
      <form action="#" class="address__form">
        <div class="address__form__left">
          <article>
            <h4 class="address__form__h4">Check as a guest or register</h4>
            <p class="address__form__p">
              Register with us for future convenience
            </p>
            <div class="address__form__radio">
              <input
                type="radio"
                name="radioRegister"
                class="radio"
                id="radioGuest"
              />
              <label for="radioGuest">checkout as guest</label>
            </div>
            <div class="address__form__radio">
              <input
                type="radio"
                name="radioRegister"
                class="radio"
                id="radioAccount"
              />
              <label for="radioAccount">register</label>
            </div>
          </article>
          <article>
            <h4 class="address__form__h4">register and save time!</h4>
            <p class="address__form__p">
              Register with us for future convenience
            </p>
            <div class="address__form_infoRegister">
              <p class="address__form__p">
                <i class="fal fa-angle-double-right mr-4"></i>Fast and easy
                checkout
              </p>
              <p class="address__form__p">
                <i class="fal fa-angle-double-right mr-4"></i>Easy access to
                your order history and status
              </p>
            </div>
            <a href="#" class="btn__address__form">Continue</a>
          </article>
        </div>
        <div class="address__form__right">
          <article>
            <h4 class="address__form__h4">Already registed?</h4>
            <p class="address__form__p">Please log in below</p>
            <div class="address__form__mail">
              <label for="email"
                >EMAIL ADDRESS<em class="mail__required">*</em></label
              >
              <input
                type="email"
                name="mail"
                id="email"
                class="registerEmail"
                required
                aria-required="true"
              />
            </div>
            <div class="address__form__mail">
              <label for="pass"
                >PASSWORD<em class="mail__required">*</em></label
              >
              <input
                type="password"
                name="password"
                id="pass"
                class="registerEmail"
                required
                aria-required="true"
              />
            </div>
            <p class="mail__required">* Required Fields</p>
            <div class="address__form__log">
              <a href="#" class="btn__address__form">Log in</a>
              <a href="#" class="btn__address__forgotPass">Forgot Password ?</a>
            </div>
          </article>
        </div>
      </form>
    </details>

    <details class="accordion">
      <summary class="accordion__summary"
        >&nbsp;&nbsp;&nbsp;BILLING INFORMATION</summary
      >
      <div class="accordion__content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
        debitis!
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion__summary"
        >&nbsp;&nbsp;&nbsp;SHIPPING INFORMATION</summary
      >
      <div class="accordion__content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
        debitis!
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion__summary"
        >&nbsp;&nbsp;&nbsp;SHIPPING METHOD</summary
      >
      <div class="accordion__content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
        debitis!
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion__summary"
        >&nbsp;&nbsp;&nbsp;PAYMENT METHOD</summary
      >
      <div class="accordion__content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
        debitis!
      </div>
    </details>

    <details class="accordion">
      <summary class="accordion__summary"
        >&nbsp;&nbsp;&nbsp;ORDER REVIEW</summary
      >
      <div class="accordion__content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
        debitis!
      </div>
    </details>
  </section>
</template>

<script>
export default {
  name: "checkout"
};
</script>

<style lang="sass">
$widthSite: 1140px
$colorSite: #f16d7f
.checkout__accordion
  margin-top: 90px
  margin-bottom: 125px
  counter-reset: section

.accordion
  margin-left: 9px
  cursor: pointer
  border-bottom: 1px solid #e8e8e8
  margin-bottom: 30px
  &__summary
    margin-bottom: 39px
    color: #222222
    font-size: 16px
    font-weight: 700
    text-transform: uppercase
    &::after
      content: ''
  &__content
    padding-left: 35px
    padding-bottom: 30px

.accordion[open] > .accordion__summary::after
  content: ''

.accordion__summary:before
  counter-increment: section
  content: "0" counter(section) "."

.address__form
  display: flex
  margin-left: 35px
  &__h4
    color: #222222
    font-size: 13px
    font-weight: 400
    text-transform: uppercase
    margin-bottom: 15px
  &__p
    color: #b3b2b2
    font-size: 13px
    font-weight: 400
    margin-bottom: 15px
    & .mr-4
      margin-right: 4px
  & article
    display: flex
    flex-direction: column
    justify-content: space-between
  &__radio
    display: flex
    align-items: center
    color: #222222
    font-size: 12px
    font-weight: 400
    text-transform: uppercase
    margin-top: 15px
    margin-bottom: 15px
    label
      margin-left: 14px
  &__left
    width: 50%
    display: flex
    flex-direction: column
    justify-content: space-between
    padding-bottom: 30px
  &__right
    @extend .address__form__left

.address__form__mail
  display: flex
  flex-direction: column
  color: #222222
  font-size: 12px
  font-weight: 400
  text-transform: uppercase
  & .registerEmail
    border: 1px solid #eaeaea
    background-color: #ffffff
    height: 45px
    width: 390px
    padding: 0 15px
    margin-top: 15px

.mail__required
  color: #ff0d0d
  font-size: 17px
  font-weight: 400

p.mail__required
  margin-top: 22px
  margin-bottom: 32px

.address__form__log
  display: flex
  align-items: center

.btn__address__form
  color: #4a4a4a
  font-size: 14px
  font-weight: 700
  text-transform: uppercase
  border: 1px solid #eaeaea
  background-color: #ffffff
  width: 180px
  height: 50px
  display: block
  text-align: center
  line-height: 50px
  &:hover
    background-color: $colorSite
    color: #ffffff
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3)
  &:active
    background-color: #ededed
    box-shadow: none

.btn__address__forgotPass
  color: #222222
  font-size: 14px
  font-weight: 400
  margin-left: 32px
</style>
