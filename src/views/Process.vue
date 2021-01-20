<template>
  <div>
    <AppLoader />
    <PageNavbar />
    <AppBreadcrumb currentPage="Shopping Cart" />
    <!-- App Business -->
    <AppBusiness />
    <AppSolution />
    <!-- App Business -->
    <AppFooter />
  </div>
</template>
<script>
import AppLoader from "@/components/AppLoader";
import PageNavbar from "@/components/navbar/PageNavbar";
import AppBreadcrumb from "@/components/AppBreadcrumb.vue";
import AppFooter from "@/components/footer/AppFooterCommon.vue";
import AppBusiness from "@/components/business/AppBusiness.vue";
import AppSolution from "../components/business/AppSolution.vue";

export default {
  name: "Process",
  components: {
    AppLoader,
    PageNavbar,
    AppBreadcrumb,
    AppFooter,
    AppBusiness,
    AppSolution,
  },
};
</script>
    