<template>
  <div class="home">
    <!-- pre-loder-area area start here  -->
        <app-loader></app-loader>
        <!-- pre-loder-area area start here  -->
        <!-- header area start here  -->
        <app-navbar-1></app-navbar-1>
        <!-- header area end here  -->
        <!-- mobile menu are start here  -->
        <app-navbar-mobile-1></app-navbar-mobile-1>
        <!-- mobile menu are end here  -->
        <!-- banner area start here  -->
        <app-banner-1></app-banner-1>
        <!-- banner area end here  -->
        <!-- brands area start here  -->
        <app-brand-1></app-brand-1>
        <!-- brands area end here  -->
        <!-- work area start here  -->
        <work-area-1></work-area-1>
        <!-- work area end here  -->
        <!-- service area start here  -->
        <app-services-1></app-services-1>
        <!-- service area end here  -->
        <!-- built app area start here  -->
        <app-built-app-1></app-built-app-1>
        <!-- built app area end here  -->
        <!-- price-table-area  start here  -->
        <app-pricing></app-pricing>
        <!-- price-table-area  end here  -->
        <!-- faq area start here  -->
        <app-faq-1></app-faq-1>
        <!-- faq area end here  -->
        <!-- App Screens area start here  -->
        <app-screen-1></app-screen-1>
        <!-- App Screens area end here  -->
        <!-- testimonial area start here  -->
        <!-- <app-testimonial-1></app-testimonial-1> -->
        <!-- testimonial area end here  -->

        <!-- blog ara start here  -->
        <app-blog-1></app-blog-1>
        <!-- blog ara end here  -->

        <!-- footer area start here  -->
        <app-footer-1></app-footer-1>
        <!-- footer area end here  -->
  </div>
</template>

<script>
// @ is an alias to /src

import AppLoader from '@/components/AppLoader'
import AppPricing from '@/components/pricing/AppPricing1.vue'
import AppNavbar1 from '@/components/navbar/AppNavbar1.vue'
import AppFooter1 from '@/components/footer/AppFooter1.vue'
import AppNavbarMobile1 from '@/components/navbar/AppNavbarMobile1.vue'
import AppBanner1 from '@/components/banner/AppBanner1.vue'
import AppBrand1 from '@/components/brand/AppBrand1.vue'
import WorkArea1 from '@/components/work_area/WorkArea1.vue'
import AppServices1 from '@/components/service/AppServices1.vue'
import AppFaq1 from '@/components/faq/AppFaq1.vue'
// import AppTestimonial1 from '@/components/testimonial/AppTestimonial1.vue'
import AppScreen1 from '@/components/app_screens/AppScreen1.vue'
import AppBlog1 from '@/components/blog/AppBlog1.vue'
import AppBuiltApp1 from '@/components/built_app/AppBuiltApp1.vue'
export default {
  name: 'Home',
  components: {
    AppLoader,
    AppPricing,
    AppNavbar1,
    AppFooter1,
    AppNavbarMobile1,
    AppBanner1,
    AppBrand1,
    WorkArea1,
    AppServices1,
    AppFaq1,
    // AppTestimonial1,
    AppScreen1,
    AppBuiltApp1,
    AppBlog1,
  }
}
</script>
