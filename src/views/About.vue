<template>
    <div>
        <AppLoader />
        <PageNavbar />
        <AppBreadcrumb currentPage = "About" />
        <BestSolution />
        <BestSolutionVideo />
        <WhyChooseUs />
        <AppTeam />
        <PageTestimonial />
        <AppFaq />
        <AppFooter />

    </div>
</template>
<script>
import AppLoader from '@/components/AppLoader'
import PageNavbar from '@/components/navbar/PageNavbar'
import AppBreadcrumb from '@/components/AppBreadcrumb.vue'
import BestSolution from '@/components/about/BestSolution'
import AppFooter from '@/components/footer/AppFooterCommon.vue'
import BestSolutionVideo from '@/components/about/BestSolutionVideo.vue'
import WhyChooseUs from '@/components/why_choose_us/WhyChooseUs.vue'
import AppTeam from '@/components/team/AppTeam.vue'
import PageTestimonial from '@/components/testimonial/PageTestimonial.vue'
import AppFaq from '@/components/faq/PageFaq.vue'


export default {
    name: "About",
    components:{
        AppLoader,
        PageNavbar,
        AppBreadcrumb,
        BestSolution,
        AppFooter,
        BestSolutionVideo,
        WhyChooseUs,
        AppTeam,
        PageTestimonial,
        AppFaq
    },

}

</script>
