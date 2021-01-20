<template>
  <div>
    <div class="contact-top-v2 section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="section-title-five">
              <h2 class="title">Contact Info</h2>
              <p class="sub-title w-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris
                quis sed felis amet mattis habitasse adipiscing id. Mattis sed
                semper viverra
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact-info-wrap">
              <ul class="contact-box-list">
                <li>
                  <i class="fas fa-phone-alt"></i>
                  <h4>Phone</h4>
                  <span>+321 5263 258</span>
                  <span>(521) 2563 658</span>
                </li>
                <li>
                  <i class="fas fa-envelope"></i>
                  <h4>Email</h4>
                  <span>support@landzai.com</span>
                  <span>admin@team.com</span>
                </li>
              </ul>
              <ul class="contact-box-list">
                <li>
                  <i class="fas fa-map-marker-alt"></i>
                  <h4>Texas Office</h4>
                  <span>3526 Whitestone Dr, </span>
                  <span>Pearland, TX 77584</span>
                </li>
                <li>
                  <i class="fas fa-map-marker-alt"></i>
                  <h4>Nevada</h4>
                  <span>1150 N Buffalo Dr,</span>
                  <span>Las Vegas, NV 89128</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="contact-area-v2">
      <div class="container">
        <div class="contact-wrap">
          <div class="contact-wrap-inner">
            <div class="row">
              <div class="col-lg-6">
                <div class="section-title-five mb-45">
                  <h2 class="title">Get in Touch</h2>
                  <p class="sub-title w-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet,, lacus non massa id amet tincidunt. Lacus ut integer
                    blandit diam.
                  </p>
                </div>
                <div class="map-area">
                  <div id="gmap" class="google-map"></div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="contact-form">
                  <h2 class="contact-title">Send us a message</h2>
                  <form action="#">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="first_name"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="last_name"
                            placeholder="Last Name"
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
                      <div class="col-lg-6">
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
                        <button type="submit" class="send-btn">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: "AppContact2"
}
</script>