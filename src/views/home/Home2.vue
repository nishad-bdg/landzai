<template>
  <div class="home">
    <!-- pre-loder-area area start here  -->
    <app-loader></app-loader>
    <!-- pre-loder-area area start here  -->
    <!-- header area start here  -->
    <app-navbar-2></app-navbar-2>
    <!-- header area end here  -->
    <!-- mobile menu are start here  -->
    <app-navbar-mobile-2></app-navbar-mobile-2>
    <!-- mobile menu are end here  -->
    <!-- banner area start here  -->
    <app-banner-2></app-banner-2>
    <!-- banner area end here  -->
    <!-- brands area start here  -->
    <app-brand-1></app-brand-1>
    <!-- brands area end here  -->
    <!-- Features -->
    <app-feature></app-feature>
    <!-- Features -->

    <!--  about -->
    <app-about></app-about>
    <!-- about -->

    <!-- support -->
    <app-support></app-support>
    <!-- support -->

    <!-- feedback -->
    <app-feedback></app-feedback>
    <!-- feedback -->

    <!-- testimonial area start here  -->
    <app-testimonial-2></app-testimonial-2>
    <!-- testimonial area end here  -->

    <!-- app pricing -->
    <app-pricing-2></app-pricing-2>
    <!-- app pricing -->

    <!-- app fantastic -->
    <app-fantastic></app-fantastic>
    <!-- app fantastic -->

    <!-- blog ara start here  -->
    <app-blog-2></app-blog-2>
    <!-- blog ara end here  -->

    <call-action></call-action>

    <!-- footer area start here  -->
    <app-footer-2></app-footer-2>
    <!-- footer area end here  -->
  </div>
</template>

<script>
// @ is an alias to /src

import AppLoader from "@/components/AppLoader";
import AppNavbarMobile2 from "@/components/navbar/AppNavbarMobile2.vue";
import AppBanner2 from "@/components/banner/AppBanner2.vue";
import AppBrand1 from "@/components/brand/AppBrand1.vue";
import AppBlog2 from "@/components/blog/AppBlog2.vue";
import AppNavbar2 from "@/components/navbar/AppNavbar2.vue";
import AppFeature from "@/components/feature/AppFeature";
import AppAbout from "@/components/about/AppAbout.vue";
import AppSupport from "@/components/support/AppSupport.vue";
import AppFeedback from "@/components/feedback/AppFeedback.vue";
import AppTestimonial2 from "@/components/testimonial/AppTestimonial2.vue";
import AppPricing2 from "@/components/pricing/AppPricing2.vue";
import AppFantastic from "@/components/fantastic/AppFantastic.vue";
import CallAction from "@/components/call_action/CallAction.vue";
import AppFooter2 from "@/components/footer/AppFooter2.vue";
export default {
  name: "Home2",
  components: {
    AppLoader,
    AppNavbarMobile2,
    AppBanner2,
    AppBrand1,
    AppBlog2,
    AppNavbar2,
    AppFeature,
    AppAbout,
    AppSupport,
    AppFeedback,
    AppTestimonial2,
    AppPricing2,
    AppFantastic,
    CallAction,
    AppFooter2,
  },
};
</script>

