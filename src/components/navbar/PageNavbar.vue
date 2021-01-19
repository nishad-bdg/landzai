<template>
  <div>
    <header class="header-v5 transparent-header header-md-none" id="sticky">
      <div class="container">
        <div class="menu-wrap">
          <div class="brand-area text-left">
            <a href="index.html"><img src="assets/images/logo4.png" alt="quirky" /></a>
          </div>
          <nav class="main-menu">
            <ul>
              <li class="current-menu-item"><a href="#pagetop">home</a></li>
              <li><a href="#about">Pages</a></li>
              <li><a href="#category">Portfolio</a></li>
              <li><a href="#price">Blog</a></li>
              <li><a href="#testimonial">Shop</a></li>
              <li><a href="#elements">Elements</a></li>
            </ul>
          </nav>
          <div class="header-rgiht text-right">
            <a href="#" class="register-btn">Get In Touch</a>
          </div>
        </div>
      </div>
    </header>
    <!-- header area end here  -->
    <!-- mobile menu are start here  -->
    <div class="mobile-menu-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6">
            <div class="logo-area">
              <a href="index.html"
                ><img src="images/logo4.png" alt="quirky"
              /></a>
            </div>
          </div>
          <div class="col-6">
            <div class="menu-bar text-right">
              <span class="fas fa-bars"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-menu">
        <nav>
          <ul>
            <li class="current-menu-item"><a href="#pagetop">home</a></li>
            <li><a href="#about">Pages</a></li>
            <li><a href="#category">Portfolio</a></li>
            <li><a href="#price">Blog</a></li>
            <li><a href="#testimonial">Shop</a></li>
            <li><a href="#elements">Elements</a></li>
            <li><a href="#">Sing In</a></li>
            <li><a href="#">Sing Up</a></li>
          </ul>
        </nav>
        <div class="close-btn">
          <i class="far fa-times-circle"></i>
        </div>
      </div>
    </div>
    <!-- mobile menu are end here  -->
  </div>
</template>
<script>
export default {
    name: "PageNavbar"
}
</script>