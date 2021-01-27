<template>
  <section class="testimonial-area section" id="testimonial">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h2 class="title">What Our Client says</h2>
            <p class="sub-title">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="content-height">
            <VueSlickCarousel v-bind="settings">
            <div class="sigle-testimonial text-center">
              <div class="quote-iocn">
                <i class="fas fa-quote-left"></i>
              </div>
              <div class="clint-image">
                <img src="assets/images/testimonial/1.png" alt="testimonial" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, kasd gubergren, no sea takimata
                dolores et ea rebum. Stet clita
              </p>
              <div class="clinmg-info">
                <h4><a href="#">Ronald Richards</a></h4>
                <span>CEO, Angular Corporation</span>
              </div>
            </div>
            <div class="sigle-testimonial text-center">
              <div class="quote-iocn">
                <i class="fas fa-quote-left"></i>
              </div>
              <div class="clint-image">
                <img src="assets/images/testimonial/2.png" alt="testimonial" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, kasd gubergren, no sea takimata
                dolores et ea rebum. Stet clita
              </p>
              <div class="clinmg-info">
                <h4><a href="#">Jerome Bell</a></h4>
                <span>CEO, Angular Corporation</span>
              </div>
            </div>
            <div class="sigle-testimonial text-center">
              <div class="quote-iocn">
                <i class="fas fa-quote-left"></i>
              </div>
              <div class="clint-image">
                <img src="assets/images/testimonial/3.png" alt="testimonial" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, kasd gubergren, no sea takimata
                dolores et ea rebum. Stet clita
              </p>
              <div class="clinmg-info">
                <h4><a href="#">Savannah Nguyen</a></h4>
                <span>CEO, Angular Corporation</span>
              </div>
            </div>
            <div class="sigle-testimonial text-center">
              <div class="quote-iocn">
                <i class="fas fa-quote-left"></i>
              </div>
              <div class="clint-image">
                <img src="assets/images/testimonial/3.png" alt="testimonial" />
              </div>
              <p>
                “Lorem ipsum dolor sit amet, kasd gubergren, no sea takimata
                dolores et ea rebum. Stet clita
              </p>
              <div class="clinmg-info">
                <h4><a href="#">Savannah Nguyen</a></h4>
                <span>CEO, Angular Corporation</span>
              </div>
            </div>
          </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "AppTestimonial1",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
        speed: 500,
      },
    };
  },
};
</script>
