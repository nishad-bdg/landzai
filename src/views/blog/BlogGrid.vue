<template>
  <div>
    <AppLoader />
    <PageNavbar />
    <AppBreadcrumb currentPage="Blog Grid" />
    <PageBlog />
    <AppFooter />
  </div>
</template>
<script>
import AppLoader from "@/components/AppLoader";
import PageNavbar from "@/components/navbar/PageNavbar";
import AppBreadcrumb from "@/components/AppBreadcrumb.vue";
import AppFooter from "@/components/footer/AppFooterCommon.vue";
import PageBlog from '@/components/blog/PageBlog.vue';


export default {
  name: "BlogGrid",
  components: {
    AppLoader,
    PageNavbar,
    AppBreadcrumb,
    AppFooter,
    PageBlog,
  },
};
</script>