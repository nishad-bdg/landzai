<template>
  <div class="mobile-menu-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6">
          <div class="logo-area">
            <a href="index.html"><img src="images/logo2.png" alt="unique" /></a>
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
</template>
<script>
export default {
    name: "AppNavbarMobile2"
}
</script>