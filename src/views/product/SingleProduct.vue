<template>
  <div>
    <AppLoader />
    <PageNavbar />
    <AppBreadcrumb currentPage="Product Details" />
    <ProductDetails />
    <RelatedProducts />
    <AppFooter />
  </div>
</template>
<script>
import AppLoader from "@/components/AppLoader";
import PageNavbar from "@/components/navbar/PageNavbar";
import AppBreadcrumb from "@/components/AppBreadcrumb.vue";
import AppFooter from "@/components/footer/AppFooterCommon.vue";
import ProductDetails from '@/components/product/ProductDetails.vue';
import RelatedProducts from '@/components/product/RelatedProducts.vue';




export default {
  name: "SingleProduct",
  components: {
    AppLoader,
    PageNavbar,
    AppBreadcrumb,
    AppFooter,
    ProductDetails,
    RelatedProducts,
  },
};
</script>