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
    <!--  about -->
    <app-about></app-about>
    <!-- about -->

    <!-- service -->
    <app-service></app-service>
    <!-- service -->

    <!-- Portfolio -->
    <app-portoflio></app-portoflio>
    <!-- Portfolio -->

    <!-- Team -->
    <app-team></app-team>
    <!-- Team -->

    <!-- App Pricing -->
    <app-pricing></app-pricing>
    <!-- App Pricing -->

    <!-- Faq -->
    <app-faq></app-faq>
    <!-- Faq -->

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
import AppNavbarMobile from "@/components/navbar/AppNavbarMobile4.vue";
import AppBanner from "@/components/banner/AppBanner4.vue";
import AppBlog from "@/components/blog/AppBlog4.vue";
import AppNavbar from "@/components/navbar/AppNavbar4.vue";
import AppFeature from "@/components/feature/AppFeature4";
import AppAbout from "@/components/about/AppAbout4.vue";
import AppTestimonial from "@/components/testimonial/AppTestimonial4.vue";
import AppFooter from "@/components/footer/AppFooter4.vue";
import AppService from "@/components/service/AppService4.vue";
import AppPortoflio from "@/components/portfolio/AppPortoflio.vue";
import AppTeam from "@/components/team/AppTeam.vue";
import AppPricing from "@/components/pricing/AppPricing4.vue";
import AppFaq from "@/components/faq/AppFaq4.vue";
export default {
  name: "Home4",
  components: {
    AppLoader,
    AppNavbarMobile,
    AppBanner,
    AppBlog,
    AppNavbar,
    AppFeature,
    AppAbout,
    AppTestimonial,
    AppFooter,
    AppService,
    AppPortoflio,
    AppTeam,
    AppPricing,
    AppFaq,
  },
};
</script>
   
    

    

