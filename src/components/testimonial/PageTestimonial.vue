<template>
  <section class="testimonial-five-area section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="section-title-five mb-45 text-center">
            <h2 class="title">What Our Client says</h2>
            <p class="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,,
              lacus non massa id amet tincidunt. Lacus ut integer blandit diam.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <VueSlickCarousel class="testimonial-slide-five" v-bind="settings">
            <div class="sigle-testimonial text-center">
              <div class="quote-iocn">
                <i class="fas fa-quote-left"></i>
              </div>
              <div class="clint-image">
                <img src="assets/images/testimonial/3.png" alt="testimonial" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                feugiat , bibendum massa tempus. Feugiat neque aliquet mauris
                vitae sit elementum. Maecenas ultrices viverra sollicitudin id
                pellentesque at pellentesque.
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
                <img src="assets/images/testimonial/2.png" alt="testimonial" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                feugiat , bibendum massa tempus. Feugiat neque aliquet mauris
                vitae sit elementum. Maecenas ultrices viverra sollicitudin id
                pellentesque at pellentesque.
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
                <img src="assets/images/testimonial/1.png" alt="testimonial" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                feugiat , bibendum massa tempus. Feugiat neque aliquet mauris
                vitae sit elementum. Maecenas ultrices viverra sollicitudin id
                pellentesque at pellentesque.
              </p>
              <div class="clinmg-info">
                <h4><a href="#">Jerome Bell</a></h4>
                <span>CEO, Angular Corporation</span>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  name: "PageTestimonial",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
    };
  },
};
</script>
