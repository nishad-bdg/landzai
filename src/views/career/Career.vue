<template>
  <div>
    <AppLoader />
    <PageNavbar />
    <AppBreadcrumb currentPage="Career" />
    <AppCareer />
    <AppCounter />
    <AppRequirement />
    <AppFooter />
  </div>
</template>
<script>
import AppLoader from "@/components/AppLoader";
import PageNavbar from "@/components/navbar/PageNavbar";
import AppBreadcrumb from "@/components/AppBreadcrumb.vue";
import AppFooter from "@/components/footer/AppFooterCommon.vue";
import AppCareer from '@/components/career/AppCareer.vue';
import AppCounter from '@/components/counter/AppCounter.vue';
import AppRequirement from '@/components/requirement/AppRequirement.vue';


export default {
  name: "Career",
  components: {
    AppLoader,
    PageNavbar,
    AppBreadcrumb,
    AppFooter,
    AppCareer,
    AppCounter,
    AppRequirement,
  },
};
</script>
