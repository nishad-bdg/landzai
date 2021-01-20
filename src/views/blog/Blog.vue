<template>
  <div>
    <AppLoader />
    <PageNavbar />
    <AppBreadcrumb currentPage="Blog Details" />
    <MainBlog />
    <RelatedBlog />
    <AppFooter />
  </div>
</template>
<script>
import AppLoader from "@/components/AppLoader";
import PageNavbar from "@/components/navbar/PageNavbar";
import AppBreadcrumb from "@/components/AppBreadcrumb.vue";
import AppFooter from "@/components/footer/AppFooterCommon.vue";
import MainBlog from "@/components/blog/MainBlog.vue";
import RelatedBlog from "@/components/blog/RelatedBlog.vue";

export default {
  name: "Process",
  components: {
    AppLoader,
    PageNavbar,
    AppBreadcrumb,
    AppFooter,
    MainBlog,
    RelatedBlog,
  },
};
</script>
 
      