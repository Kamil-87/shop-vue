<template>
  <section class="footer__top">
    <div class="footer__top__flex container">
      <div class="comment__figure">
        <a href="#"
          ><img
            alt="avatar"
            class="comment__avatar"
            src="@/assets/image/subscribe-face.png"
        /></a>
        <div class="comment__text">
          <p class="comment__blockquote">
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar
            purus condimentum a. Aliquam condimentum mattis neque sed pretium”
          </p>
          <p class="comment__figcaption">
            Bin Burhan
            <span>Dhaka, Bd</span>
          </p>
          <ul class="pagination">
            <li class="pagination__link">
              <a href="#" class="pagination_list"></a>
            </li>
            <li class="pagination__link pagination__link__active">
              <a href="#" class="pagination_list"></a>
            </li>
            <li class="pagination__link">
              <a href="#" class="pagination_list"></a>
            </li>
          </ul>
        </div>
      </div>

      <form action="#" class="footer__subscribe">
        <div class="subscribe__legend">
          <h3>Subscribe</h3>
          <p>FOR OUR NEWLETTER AND PROMOTION</p>
        </div>
        <div class="form__input">
          <label>
            <input
              type="email"
              class="subscribe__input"
              placeholder="Enter Your Email"
              required
            />
          </label>
          <input type="submit" class="subscribe__btn" value="Subscribe" />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "header-top",
  data() {
    return {};
  }
};
</script>
