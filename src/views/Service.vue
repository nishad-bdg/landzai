<template>
    <div>
        <PageNavbar />
        <AppBreadcrumb currentPage = "Service" />
        <AppServices />
        <AppExceptional />
        <WorkArea />
        <AppFooter />

    </div>
</template>
<script>
import PageNavbar from '@/components/navbar/PageNavbar'
import AppBreadcrumb from '@/components/AppBreadcrumb.vue'
import AppServices from '@/components/service/AppService4'
import AppExceptional from '@/components/exceptional/AppExceptional.vue'
import WorkArea from '@/components/work_area/WorkArea2.vue'
import AppFooter from '@/components/footer/AppFooterCommon.vue'


export default {
    name: "Service",
    components:{
        PageNavbar,
        AppBreadcrumb,
        AppServices,
        AppExceptional,
        WorkArea,
        AppFooter,
    }
    
}
</script>