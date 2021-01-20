<template>
  <section class="career-page section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="section-title-five mb-45 text-center">
            <h2 class="title">Showing Current Vacancies</h2>
            <p class="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,,
              lacus non massa id amet tincidunt. Lacus ut integer blandit diam.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 order-1 order-md-0">
          <div class="career-left-sidebar">
            <div class="single-widget job-search-widget">
              <form action="#">
                <div class="form-group">
                  <label class="search" for="search"
                    ><i class="fas fa-search"></i
                  ></label>
                  <input
                    type="text"
                    class="form-control"
                    id="search"
                    placeholder="Search Keyword"
                  />
                </div>
                <div class="form-group">
                  <select class="form-control wide" id="job-types">
                    <option>Job Types</option>
                    <option>Job Types</option>
                    <option>Job Types</option>
                    <option>Job Types</option>
                    <option>Job Types</option>
                  </select>
                </div>
                <div class="form-group">
                  <select class="form-control wide" id="category">
                    <option>Category</option>
                    <option>Category</option>
                    <option>Category</option>
                    <option>Category</option>
                    <option>Category</option>
                  </select>
                </div>
                <div class="form-group">
                  <select class="form-control wide" id="location">
                    <option>Location</option>
                    <option>Location</option>
                    <option>Location</option>
                    <option>Location</option>
                    <option>Location</option>
                  </select>
                </div>
                <button type="submit" class="search-job-btn">Search Job</button>
              </form>
            </div>
            <div class="single-widget">
              <h3 class="widget-title">Type of Employement</h3>
              <ul>
                <li>
                  <label for="fulltime"
                    ><span class="work-type">Full time</span>
                    <span class="work-count">52</span></label
                  >
                  <input
                    class="check-box"
                    type="checkbox"
                    name="fulltime"
                    id="fulltime"
                  />
                </li>
                <li>
                  <label for="parttime"
                    ><span class="work-type">Part time</span>
                    <span class="work-count">52</span></label
                  >
                  <input
                    class="check-box"
                    type="checkbox"
                    name="parttime"
                    id="parttime"
                  />
                </li>
                <li>
                  <label for="contract"
                    ><span class="work-type">Contract</span>
                    <span class="work-count">52</span></label
                  >
                  <input
                    class="check-box"
                    type="checkbox"
                    name="contract"
                    id="contract"
                  />
                </li>
                <li>
                  <label for="freelance"
                    ><span class="work-type">Freelance</span>
                    <span class="work-count">52</span></label
                  >
                  <input
                    class="check-box"
                    type="checkbox"
                    name="freelance"
                    id="freelance"
                  />
                </li>
                <li>
                  <label for="remote"
                    ><span class="work-type">Remote</span>
                    <span class="work-count">52</span></label
                  >
                  <input
                    class="check-box"
                    type="checkbox"
                    name="remote"
                    id="remote"
                  />
                </li>
              </ul>
            </div>
            <div class="single-widget">
              <h3 class="widget-title">Seniority Level</h3>
              <ul>
                <li>
                  <label for="enterlevel"
                    ><span class="work-type">Entry Level</span>
                    <span class="work-count">52</span></label
                  >
                  <input
                    class="check-box"
                    type="checkbox"
                    name="enterlevel"
                    id="enterlevel"
                  />
                </li>
                <li>
                  <label for="midlevel"
                    ><span class="work-type">Mid Level</span>
                    <span class="work-count">52</span></label
                  >
                  <input
                    class="check-box"
                    type="checkbox"
                    name="midlevel"
                    id="midlevel"
                  />
                </li>
                <li>
                  <label for="senior_level"
                    ><span class="work-type">Senior Level</span>
                    <span class="work-count">52</span></label
                  >
                  <input
                    class="check-box"
                    type="checkbox"
                    name="senior_level"
                    id="senior_level"
                  />
                </li>
                <li>
                  <label for="management "
                    ><span class="work-type">Management </span>
                    <span class="work-count">52</span></label
                  >
                  <input
                    class="check-box"
                    type="checkbox"
                    name="management "
                    id="management "
                  />
                </li>
                <li>
                  <label for="internship_level"
                    ><span class="work-type">Internship Level</span>
                    <span class="work-count">52</span></label
                  >
                  <input
                    class="check-box"
                    type="checkbox"
                    name="internship_level"
                    id="internship_level"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-8 order-0 order-md-1">
          <div class="job-post-list">
            <div
              class="single-job d-flex justify-content-between align-items-center"
            >
              <div class="singl-job-left d-flex align-items-center">
                <div class="brand-image">
                  <img src="images/brand-icon-1.png" alt="brand-icon" />
                </div>
                <div class="job-decription">
                  <h3 class="job-name">Visual Designer</h3>
                  <ul class="company-info">
                    <li><a href="#">@Zainiklab Inc.</a></li>
                    <li>Los Angelos, California</li>
                  </ul>
                  <ul class="post-meta">
                    <li><i class="fas fa-clock"></i> 2 days Ago</li>
                    <li>Full Time Job</li>
                  </ul>
                </div>
              </div>
              <div class="button-area">
                <a class="applay-btn" href="career-details.html">Apply</a>
              </div>
            </div>
            <div
              class="single-job d-flex justify-content-between align-items-center"
            >
              <div class="singl-job-left d-flex align-items-center">
                <div class="brand-image">
                  <img src="images/brand-icon-2.png" alt="brand-icon" />
                </div>
                <div class="job-decription">
                  <h3 class="job-name">Graphic Designer</h3>
                  <ul class="company-info">
                    <li><a href="#">@Zainiklab Inc.</a></li>
                    <li>Los Angelos, California</li>
                  </ul>
                  <ul class="post-meta">
                    <li><i class="fas fa-clock"></i> 2 days Ago</li>
                    <li>Full Time Job</li>
                  </ul>
                </div>
              </div>
              <div class="button-area">
                <a class="applay-btn" href="career-details.html">Apply</a>
              </div>
            </div>
            <div
              class="single-job d-flex justify-content-between align-items-center"
            >
              <div class="singl-job-left d-flex align-items-center">
                <div class="brand-image">
                  <img src="images/brand-icon-1.png" alt="brand-icon" />
                </div>
                <div class="job-decription">
                  <h3 class="job-name">UX Researcher</h3>
                  <ul class="company-info">
                    <li><a href="#">@Zainiklab Inc.</a></li>
                    <li>Los Angelos, California</li>
                  </ul>
                  <ul class="post-meta">
                    <li><i class="fas fa-clock"></i> 2 days Ago</li>
                    <li>Full Time Job</li>
                  </ul>
                </div>
              </div>
              <div class="button-area">
                <a class="applay-btn" href="career-details.html">Apply</a>
              </div>
            </div>
            <div
              class="single-job d-flex justify-content-between align-items-center"
            >
              <div class="singl-job-left d-flex align-items-center">
                <div class="brand-image">
                  <img src="images/brand-icon-3.png" alt="brand-icon" />
                </div>
                <div class="job-decription">
                  <h3 class="job-name">UI Designer</h3>
                  <ul class="company-info">
                    <li><a href="#">@Zainiklab Inc.</a></li>
                    <li>Los Angelos, California</li>
                  </ul>
                  <ul class="post-meta">
                    <li><i class="fas fa-clock"></i> 2 days Ago</li>
                    <li>Full Time Job</li>
                  </ul>
                </div>
              </div>
              <div class="button-area">
                <a class="applay-btn" href="career-details.html">Apply</a>
              </div>
            </div>
            <div
              class="single-job d-flex justify-content-between align-items-center"
            >
              <div class="singl-job-left d-flex align-items-center">
                <div class="brand-image">
                  <img src="images/brand-icon-1.png" alt="brand-icon" />
                </div>
                <div class="job-decription">
                  <h3 class="job-name">Product Designer</h3>
                  <ul class="company-info">
                    <li><a href="#">@Zainiklab Inc.</a></li>
                    <li>Los Angelos, California</li>
                  </ul>
                  <ul class="post-meta">
                    <li><i class="fas fa-clock"></i> 2 days Ago</li>
                    <li>Full Time Job</li>
                  </ul>
                </div>
              </div>
              <div class="button-area">
                <a class="applay-btn" href="career-details.html">Apply</a>
              </div>
            </div>
            <div
              class="single-job d-flex justify-content-between align-items-center"
            >
              <div class="singl-job-left d-flex align-items-center">
                <div class="brand-image">
                  <img src="images/brand-icon-1.png" alt="brand-icon" />
                </div>
                <div class="job-decription">
                  <h3 class="job-name">Visual Designer</h3>
                  <ul class="company-info">
                    <li><a href="#">@Zainiklab Inc.</a></li>
                    <li>Los Angelos, California</li>
                  </ul>
                  <ul class="post-meta">
                    <li><i class="fas fa-clock"></i> 2 days Ago</li>
                    <li>Full Time Job</li>
                  </ul>
                </div>
              </div>
              <div class="button-area">
                <a class="applay-btn" href="career-details.html">Apply</a>
              </div>
            </div>
            <div
              class="single-job d-flex justify-content-between align-items-center"
            >
              <div class="singl-job-left d-flex align-items-center">
                <div class="brand-image">
                  <img src="images/brand-icon-3.png" alt="brand-icon" />
                </div>
                <div class="job-decription">
                  <h3 class="job-name">Junior Designer</h3>
                  <ul class="company-info">
                    <li><a href="#">@Zainiklab Inc.</a></li>
                    <li>Los Angelos, California</li>
                  </ul>
                  <ul class="post-meta">
                    <li><i class="fas fa-clock"></i> 2 days Ago</li>
                    <li>Full Time Job</li>
                  </ul>
                </div>
              </div>
              <div class="button-area">
                <a class="applay-btn" href="career-details.html">Apply</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    name: "AppCareer"
}
</script>