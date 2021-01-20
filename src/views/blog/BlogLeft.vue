<template>
  <div>
    <AppLoader />
    <PageNavbar />
    <AppBreadcrumb currentPage="Blog Left Sidebar" />
    <PageBlog />
    <AppFooter />
  </div>
</template>
<script>
import AppLoader from "@/components/AppLoader";
import PageNavbar from "@/components/navbar/PageNavbar";
import AppBreadcrumb from "@/components/AppBreadcrumb.vue";
import AppFooter from "@/components/footer/AppFooterCommon.vue";
import PageBlog from '@/components/blog/BlogLeftSide.vue';


export default {
  name: "BlogLeft",
  components: {
    AppLoader,
    PageNavbar,
    AppBreadcrumb,
    AppFooter,
    PageBlog,
  },
};
</script>