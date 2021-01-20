<template>
  <section class="breadcrumb-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-wrap text-center">
            <h2 class="page-title">{{ currentPage }}</h2>
            <ul class="breadcrumb-page">
              <li><a href="/">Home</a></li>
              <li class="current-page">{{ currentPage }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    name: "AppBreadcrumb",
    props:{
        currentPage:{
            type:String
        }
    }
}
</script>