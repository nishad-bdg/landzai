<template>
  <section class="work-area section" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h2 class="title">How it Works</h2>
            <p class="sub-title">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5 align-self-center">
          <div class="work-img">
            <img src="assets/images/work-img.png" alt="work-img" />
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1">
          <div class="work-lsit work-slide">
            <VueSlickCarousel v-bind="settings">
              <div class="single-work" v-for="i in 10" :key="i">
                <h3>Task Management</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis viverra aliquam lectus nibh habitant rhoncus
                  pellentesque etiam posuere. Gravida nunc id vulputate mauris
                  amet, varius iuea er.
                </p>
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
  name: "WorkArea1",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
        speed: 500,
        vertical: true,
      },
    };
  },
};
</script>