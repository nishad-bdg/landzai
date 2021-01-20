<template>
    <section class="career-page section-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4">
                        <div class="career-details-left-sidebar">
                            <div class="single-widget">
                                <ul>
                                    <li>
                                        <span class="quality-name">Experience :</span>
                                        <span class="quality-dsc">Minimum 2 years</span>
                                    </li>
                                    <li>
                                        <span class="quality-name">Work Level :</span>
                                        <span class="quality-dsc">Senior Level</span>
                                    </li>
                                    <li>
                                        <span class="quality-name">Employeee Type :</span> 
                                        <span class="quality-dsc">Full Time</span>
                                    </li>
                                    <li>
                                        <span class="quality-name">Job Vacancies :</span> 
                                        <span class="quality-dsc">5</span>
                                    </li>
                                    <li>
                                        <span class="quality-name">Qualification :</span> 
                                        <span class="quality-dsc">Bechelor</span>
                                    </li>
                                    <li>
                                        <span class="quality-name">Job Location :</span> 
                                        <span class="quality-dsc">Las Vegas, CA</span>
                                    </li>
                                    <li>
                                        <span class="quality-name">Offer Sallery :</span> 
                                        <span class="quality-dsc">$1250 / Month</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-8">
                        <div class="apply-form">
                            <h2 class="form-title">Apply Now</h2>
                            <form action="#">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="first_name" name="first_name" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="last_name" name="last_name" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" id="email_address" name="email_address" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="phone_humber" name="phone_humber" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="address" name="address" placeholder="Address" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="city" name="city" placeholder="City / State" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <textarea class="form-control coverletter" id="coverletter" name="coverletter" rows="3" placeholder="Cover Letter"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group resume-group">
                                            <label for="resume" class="uplode-file">Upload your Resume :</label>
                                            <input type="file" class="form-control-file" id="resume" name="resume" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                                <label class="form-check-label" for="exampleCheck1">By clicking apply job you should read & agree to our Terms & Conditions.
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <button type="submit" class="apply-job border-0">Apply Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
export default {
    name: "AppApplyForm"
}
</script>