<template>
  <div class="brands-area">
    <div class="container">
      <VueSlickCarousel class="brand-list slide-brands" v-bind="settings">
        <div class="single-brand">
          <a href="#"
            ><img src="assets/images/brand/1.png" alt="brand anme"
          /></a>
        </div>
        <div class="single-brand">
          <a href="#"
            ><img src="assets/images/brand/2.png" alt="brand anme"
          /></a>
        </div>
        <div class="single-brand">
          <a href="#"
            ><a href="#"
              ><img src="assets/images/brand/3.png" alt="brand anme" /></a
          ></a>
        </div>
        <div class="single-brand">
          <a href="#"
            ><img src="assets/images/brand/4.png" alt="brand anme"
          /></a>
        </div>
        <div class="single-brand">
          <a href="#"
            ><img src="assets/images/brand/5.png" alt="brand anme"
          /></a>
        </div>
        <div class="single-brand">
          <a href="#"
            ><img src="assets/images/brand/6.png" alt="brand anme"
          /></a>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "AppBrand1",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 6,
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
              slidesToShow: 3,
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