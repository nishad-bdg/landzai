<template>
  <div class="home">
    <!-- pre-loder-area area start here  -->
    <app-loader></app-loader>
    <!-- pre-loder-area area start here  -->
    <!-- header area start here  -->
    <app-navbar></app-navbar>
    <!-- header area end here  -->
    <!-- mobile menu are start here  -->
    <app-navbar-mobile></app-navbar-mobile>
    <!-- mobile menu are end here  -->
    <!-- banner area start here  -->
    <app-banner></app-banner>
    <!-- banner area end here  -->

    <!-- Features -->
    <app-feature></app-feature>
    <!-- Features -->

    <!-- App Product -->
    <app-product-hightlight></app-product-hightlight>
    <!-- App Product -->

    <!--  about -->
    <app-about></app-about>
    <!-- about -->

    <!-- speciality -->
    <app-speciality></app-speciality>
    <!-- speciality -->

    <!-- product -->
    <app-product></app-product>
    <!-- product -->

    <!-- support -->
    <app-support></app-support>
    <!-- support -->

    <!-- feedback -->
    <app-feedback></app-feedback>
    <!-- feedback -->

    <!-- testimonial area start here  -->
    <app-testimonial></app-testimonial>
    <!-- testimonial area end here  -->

    

    <!-- blog ara start here  -->
    <app-blog></app-blog>
    <!-- blog ara end here  -->

    <!-- footer area start here  -->
    <app-footer></app-footer>
    <!-- footer area end here  -->
  </div>
</template>

<script>
// @ is an alias to /src

import AppLoader from "@/components/AppLoader";
import AppNavbarMobile from "@/components/navbar/AppNavbarMobile2.vue";
import AppBanner from "@/components/banner/AppBanner3.vue";
import AppBlog from "@/components/blog/AppBlog3.vue";
import AppNavbar from "@/components/navbar/AppNavbar2.vue";
import AppFeature from "@/components/feature/AppFeature2";
import AppAbout from "@/components/about/AppAbout2.vue";
import AppSupport from "@/components/support/AppSupport.vue";
import AppFeedback from "@/components/feedback/AppFeedback.vue";
import AppTestimonial from "@/components/testimonial/AppTestimonial3.vue";
import AppFooter from "@/components/footer/AppFooter2.vue";
import AppProductHightlight from "@/components/product/AppProductHightlight.vue";
import AppSpeciality from "@/components/speciality/AppSpeciality.vue";
import AppProduct from "@/components/product/AppProduct.vue";
export default {
  name: "Home3",
  components: {
    AppLoader,
    AppNavbarMobile,
    AppBanner,
    AppBlog,
    AppNavbar,
    AppFeature,
    AppAbout,
    AppSupport,
    AppFeedback,
    AppTestimonial,
    AppProductHightlight,
    AppSpeciality,
    AppFooter,
    AppProduct,
  },
};
</script>
    

    

