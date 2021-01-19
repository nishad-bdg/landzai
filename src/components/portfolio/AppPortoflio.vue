<template>
  <section class="portfolio-area section-top pb-90">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="section-title-four mb-45 text-center">
            <h2 class="title">
              Compleate <span class="color-two">Projects</span> By Our Team
            </h2>
            <p class="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,,
              lacus non massa id amet tincidunt. Lacus ut integer blandit diam.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="filtering-menu-area">
            <ul class="filtering-button">
              <li class="active" data-filter="*">All Work</li>
              <li data-filter=".architecture">Architecture</li>
              <li data-filter=".technology">Technology</li>
              <li data-filter=".animal">Animal</li>
              <li data-filter=".portrait">Portrait</li>
              <li data-filter=".business">Business</li>
              <li data-filter=".plant">Plant</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row grid fix">
        <div
          class="grid-item col-lg-4 col-md-6 architecture animal portrait business"
        >
          <div class="single-portfolio">
            <a href="#" class="single-image">
              <img src="assets/images/portfolio/1.jpg" alt="portfolio" />
            </a>
            <div class="portfolio-content">
              <h3><a href="#">Latest Projects 1</a></h3>
              <p>
                Bibendum mattis non id turpis. Cursus adipiscing viverra sodales
                aliquet
              </p>
              <a class="explore-btn" href="#"
                >Explore <i class="fas fa-long-arrow-alt-right"></i
              ></a>
            </div>
          </div>
        </div>
        <div
          class="grid-item col-lg-4 col-md-6 architecture plant technology portrait"
        >
          <div class="single-portfolio">
            <a href="#" class="single-image">
              <img src="assets/images/portfolio/2.jpg" alt="portfolio" />
            </a>
            <div class="portfolio-content">
              <h3><a href="#">Latest Projects 2</a></h3>
              <p>
                Bibendum mattis non id turpis. Cursus adipiscing viverra sodales
                aliquet
              </p>
              <a class="explore-btn" href="#"
                >Explore <i class="fas fa-long-arrow-alt-right"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="grid-item col-lg-4 col-md-6 technology plant animal">
          <div class="single-portfolio">
            <a href="#" class="single-image">
              <img src="assets/images/portfolio/3.jpg" alt="portfolio" />
            </a>
            <div class="portfolio-content">
              <h3><a href="#">Latest Projects 3</a></h3>
              <p>
                Bibendum mattis non id turpis. Cursus adipiscing viverra sodales
                aliquet
              </p>
              <a class="explore-btn" href="#"
                >Explore <i class="fas fa-long-arrow-alt-right"></i
              ></a>
            </div>
          </div>
        </div>
        <div
          class="grid-item col-lg-4 col-md-6 animal portrait business technology"
        >
          <div class="single-portfolio">
            <a href="#" class="single-image">
              <img src="assets/images/portfolio/4.jpg" alt="portfolio" />
            </a>
            <div class="portfolio-content">
              <h3><a href="#">Latest Projects 4</a></h3>
              <p>
                Bibendum mattis non id turpis. Cursus adipiscing viverra sodales
                aliquet
              </p>
              <a class="explore-btn" href="#"
                >Explore <i class="fas fa-long-arrow-alt-right"></i
              ></a>
            </div>
          </div>
        </div>
        <div
          class="grid-item col-lg-4 col-md-6 architecture business plant animal"
        >
          <div class="single-portfolio">
            <a href="#" class="single-image">
              <img src="assets/images/portfolio/5.jpg" alt="portfolio" />
            </a>
            <div class="portfolio-content">
              <h3><a href="#">Latest Projects 5</a></h3>
              <p>
                Bibendum mattis non id turpis. Cursus adipiscing viverra sodales
                aliquet
              </p>
              <a class="explore-btn" href="#"
                >Explore <i class="fas fa-long-arrow-alt-right"></i
              ></a>
            </div>
          </div>
        </div>
        <div
          class="grid-item col-lg-4 col-md-6 technology architecture portrait business plant"
        >
          <div class="single-portfolio">
            <a href="#" class="single-image">
              <img src="assets/images/portfolio/6.jpg" alt="portfolio" />
            </a>
            <div class="portfolio-content">
              <h3><a href="#">Latest Projects 6</a></h3>
              <p>
                Bibendum mattis non id turpis. Cursus adipiscing viverra sodales
                aliquet
              </p>
              <a class="explore-btn" href="#"
                >Explore <i class="fas fa-long-arrow-alt-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    name: "AppPortfolio"
}
</script>