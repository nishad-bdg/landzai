<template>
  <section class="contact-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="contact-area-top">
            <ul class="box-lst">
              <li class="single-box">
                <i class="fas fa-map-marker-alt"></i>
                <span>125 Street West LN</span>
                <span>Las Vegas, NY 15236</span>
              </li>
              <li class="single-box">
                <i class="fas fa-phone-alt"></i>
                <span>+321 5263 258</span>
                <span>(521) 2563 658</span>
              </li>
              <li class="single-box">
                <i class="fas fa-envelope"></i>
                <span>support@landzai.com</span>
                <span>admin@team.com</span>
              </li>
            </ul>
          </div>
          <div class="section-title-five mb-45 text-center">
            <h2 class="title">Get in Touch</h2>
            <p class="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,,
              lacus non massa id amet tincidunt. Lacus ut integer blandit diam.
            </p>
          </div>
          <div class="contact-area-bottom">
            <div class="map-area">
              <div id="gmap" class="google-map"></div>
            </div>
            <div class="contact-form">
              <form action="#">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="your_name"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="your_email"
                        placeholder="Your Email "
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <textarea
                        class="form-control message"
                        id="message"
                        rows="3"
                        placeholder="Your Message here..."
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12 text-center">
                    <button type="submit" class="send-btn">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    name: "AppContact"
}
</script>