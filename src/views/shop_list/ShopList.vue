<template>
  <div>
    <AppLoader />
    <PageNavbar />
    <AppBreadcrumb currentPage="Shop List" />
    <AppShopList />
    <AppFooter />
  </div>
</template>
<script>
import AppLoader from "@/components/AppLoader";
import PageNavbar from "@/components/navbar/PageNavbar";
import AppBreadcrumb from "@/components/AppBreadcrumb.vue";
import AppFooter from "@/components/footer/AppFooterCommon.vue";
import AppShopList from '@/components/shop_list/AppShopList.vue';


export default {
  name: "ShopGrid",
  components: {
    AppLoader,
    PageNavbar,
    AppBreadcrumb,
    AppFooter,
    AppShopList
  },
};
</script>
    