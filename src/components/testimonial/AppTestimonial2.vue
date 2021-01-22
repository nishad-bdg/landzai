<template>
  <section class="testimonial-two-area section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title-two text-center">
            <h2 class="title">What Our Client says</h2>
            <span class="section-divider"></span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <VueSlickCarousel v-bind="settings" class="testimonial-slide-two">
            <div class="sigle-testimonial text-center">
              <div class="quote-iocn">
                <i class="fas fa-quote-left"></i>
              </div>
              <div class="clint-image">
                <img src="images/testimonial/3.png" alt="testimonial" />
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
                <img src="images/testimonial/2.png" alt="testimonial" />
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
                <img src="images/testimonial/1.png" alt="testimonial" />
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
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "AppTestimonial2",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            },
          },
          {
            breakpoint: 667,
            settings: {
              slidesToShow: 1,
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