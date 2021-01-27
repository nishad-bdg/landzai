<template>
  <section class="testimonial-three-area section section-bg-two">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="section-title-three mb-37 text-center">
            <h2 class="title">Satisfied Customer Feedbacks</h2>
          </div>
        </div>
      </div>
      <VueSlickCarousel v-bind="settings" class="">
        <div class="single-testimonial" v-for="i in 6" :key="i" >
          <div class="testimonial-content">
            <p>
              “Lorem ipsum dolor sit amet, connse ctetubfsr adipiscing elit.
              Commodo ferm entgtum aliquam aliquam pos uerere eget. Ultrices
              enim eget sjyit Commodo ferm entg tudgrg aliqaliquam pos uerere
              eget. Ultrices aliquam dfhbyj tyan
            </p>
          </div>
          <div class="clint-info">
            <div class="media">
              <img
                src="assets/images/testimonial/1.png"
                class="clint-img mr-4"
                alt="assets/images"
              />
              <div class="media-body align-self-center">
                <h4 class="clint-name"><a href="#">Jane Cooper</a></h4>
                <span>CEO, Angular Corpor</span>
              </div>
            </div>
          </div>
        </div> 
      </VueSlickCarousel>
    </div>
  </section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "AppTestimonial3",
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
        autoplay: true,
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