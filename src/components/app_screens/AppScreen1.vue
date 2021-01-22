<template>
  <section class="app-screens-area section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h2 class="title">All App Screen’s</h2>
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
          <VueSlickCarousel v-bind="settings" class="app-screens-slide">
            <div class="single-screen">
              <img src="assets/images/app-screens/1.png" alt="screens" />
            </div>
            <div class="single-screen">
              <img src="assets/images/app-screens/2.png" alt="screens" />
            </div>
            <div class="single-screen">
              <img src="assets/images/app-screens/3.png" alt="screens" />
            </div>
            <div class="single-screen">
              <img src="assets/images/app-screens/4.png" alt="screens" />
            </div>
            <div class="single-screen">
              <img src="assets/images/app-screens/5.png" alt="screens" />
            </div>
            <div class="single-screen">
              <img src="assets/images/app-screens/5.png" alt="screens" />
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "AppScreen1",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: true,
            },
          },
          {
            breakpoint: 667,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
            },
          },
        ],
      },
    };
  },
};
</script>
