<template>
  <section class="contact-area-v3 section-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="section-title-five mb-45 text-center">
            <h2 class="title">Get in Touch</h2>
            <p class="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,,
              lacus non massa id amet tincidunt. Lacus ut integer blandit diam.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="contact-area-top">
            <ul class="box-lst">
              <li class="single-box">
                <i class="fas fa-phone-alt"></i>
                <h4>Phone</h4>
                <span>+321 5263 258</span>
                <span>(521) 2563 658</span>
              </li>
              <li class="single-box">
                <i class="fas fa-envelope"></i>
                <h4>Email</h4>
                <span>support@landzai.com</span>
                <span>admin@team.com</span>
              </li>
              <li class="single-box">
                <i class="fas fa-map-marker-alt"></i>
                <h4>Address</h4>
                <span>125 Street West LN</span>
                <span>Las Vegas, NY 15236</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="contact-form-wrap">
        <div class="row no-gutters">
          <div class="col-lg-5 offset-lg-7">
            <div class="contact-form">
              <h2 class="contact-title">Send us a message</h2>
              <form action="#">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="your_name"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
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
                      <input
                        type="text"
                        class="form-control"
                        id="phone"
                        placeholder="Phone"
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
                  <div class="col-lg-12">
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
    name: "AppContact3"
}
</script>