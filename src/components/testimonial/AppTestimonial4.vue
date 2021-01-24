<template>
  <section class="testimonial-four-area section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="section-title-four mb-45 text-center">
            <h2 class="title">
              What <span class="color-two">Clients Says</span> about Us
            </h2>
            <p class="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,,
              lacus non massa id amet tincidunt. Lacus ut integer blandit diam.
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <VueSlickCarousel v-bind="settings" class="testimonial-slide-four">
          <div class="sngle-testimonial">
            <div class="testimonial-content">
              <div class="quote-icon">
                <i class="fas fa-quote-right"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Venenatis, quis est est aliquam. Odio gravida cras viverra
                cursus pellentesque. Semper velit rutrum dictum nunc tincidunt
                massa. Diam vitae, orci nulla hac quam adipiscing lacinia id
                vel. Posuere euismod faucibus volutpat dapibus convallis. Varius
                enim scelerisque vel, ridiculus tortor.
              </p>
            </div>
            <div class="clint-info">
              <div class="media">
                <img
                  src="assets/images/testimonial/7.png"
                  class="testimonial-img mr-4"
                  alt="testimonial image"
                />
                <div class="media-body align-self-center">
                  <h3 class="clint-name"><a href="#">Maria Angelo</a></h3>
                  <span class="clipnt-profesion"
                    >Marketing Director @F.Tech</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="sngle-testimonial">
            <div class="testimonial-content">
              <div class="quote-icon">
                <i class="fas fa-quote-right"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Venenatis, quis est est aliquam. Odio gravida cras viverra
                cursus pellentesque. Semper velit rutrum dictum nunc tincidunt
                massa. Diam vitae, orci nulla hac quam adipiscing lacinia id
                vel. Posuere euismod faucibus volutpat dapibus convallis. Varius
                enim scelerisque vel, ridiculus tortor.
              </p>
            </div>
            <div class="clint-info">
              <div class="media">
                <img
                  src="assets/images/testimonial/7.png"
                  class="testimonial-img mr-4"
                  alt="testimonial image"
                />
                <div class="media-body align-self-center">
                  <h3 class="clint-name"><a href="#">Maria Angelo</a></h3>
                  <span class="clipnt-profesion"
                    >Marketing Director @F.Tech</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="sngle-testimonial">
            <div class="testimonial-content">
              <div class="quote-icon">
                <i class="fas fa-quote-right"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Venenatis, quis est est aliquam. Odio gravida cras viverra
                cursus pellentesque. Semper velit rutrum dictum nunc tincidunt
                massa. Diam vitae, orci nulla hac quam adipiscing lacinia id
                vel. Posuere euismod faucibus volutpat dapibus convallis. Varius
                enim scelerisque vel, ridiculus tortor.
              </p>
            </div>
            <div class="clint-info">
              <div class="media">
                <img
                  src="assets/images/testimonial/7.png"
                  class="testimonial-img mr-4"
                  alt="testimonial image"
                />
                <div class="media-body align-self-center">
                  <h3 class="clint-name"><a href="#">Maria Angelo</a></h3>
                  <span class="clipnt-profesion"
                    >Marketing Director @F.Tech</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="sngle-testimonial">
            <div class="testimonial-content">
              <div class="quote-icon">
                <i class="fas fa-quote-right"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Venenatis, quis est est aliquam. Odio gravida cras viverra
                cursus pellentesque. Semper velit rutrum dictum nunc tincidunt
                massa. Diam vitae, orci nulla hac quam adipiscing lacinia id
                vel. Posuere euismod faucibus volutpat dapibus convallis. Varius
                enim scelerisque vel, ridiculus tortor.
              </p>
            </div>
            <div class="clint-info">
              <div class="media">
                <img
                  src="assets/images/testimonial/7.png"
                  class="testimonial-img mr-4"
                  alt="testimonial image"
                />
                <div class="media-body align-self-center">
                  <h3 class="clint-name"><a href="#">Maria Angelo</a></h3>
                  <span class="clipnt-profesion"
                    >Marketing Director @F.Tech</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="sngle-testimonial">
            <div class="testimonial-content">
              <div class="quote-icon">
                <i class="fas fa-quote-right"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Venenatis, quis est est aliquam. Odio gravida cras viverra
                cursus pellentesque. Semper velit rutrum dictum nunc tincidunt
                massa. Diam vitae, orci nulla hac quam adipiscing lacinia id
                vel. Posuere euismod faucibus volutpat dapibus convallis. Varius
                enim scelerisque vel, ridiculus tortor.
              </p>
            </div>
            <div class="clint-info">
              <div class="media">
                <img
                  src="assets/images/testimonial/7.png"
                  class="testimonial-img mr-4"
                  alt="testimonial image"
                />
                <div class="media-body align-self-center">
                  <h3 class="clint-name"><a href="#">Maria Angelo</a></h3>
                  <span class="clipnt-profesion"
                    >Marketing Director @F.Tech</span
                  >
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "AppTestimonial4",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        slidesToShow:1,
        slidesToScroll: 1,
        autoplay: true,
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