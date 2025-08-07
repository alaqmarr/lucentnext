import React from 'react'

const page = () => {
  const pageContent = `
  <section class="page-header">
    <div class="page-header__bg" style="background-image: url(/assets/img/slider.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;">
    </div>
    <div class="container">
        <div class="page-header__inner">
            <h2>About Us</h2>
            <div class="thm-breadcrumb__box">
                <ul class="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span class="icon-angle-left"></span></li>
                    <li>About Us</li>
                </ul>
            </div>
        </div>
    </div>
</section>
<section class="about-two">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xl-12">
                                <div class="about-two__left">
                                    <div class="section-title text-left sec-title-animation animation-style1">
                                        <div class="section-title__tagline-box">
                                            <span class="section-title__tagline">ABOUT US</span>
                                        </div>
                                        <h2 class="section-title__title title-animation"> Welcome to <span>Lucent Industrial Solutions L.L.C.</span></h2>
                                    </div>
                                    <p class="about-two__text">
                                        We are a dynamic instrumentation and control automation company that was established in 2024 in the Emirate of Dubai, United Arab Emirates. We specialize in providing cutting-edge solutions in measuring and control systems, catering to a wide range of industries.
                                    </p>
                                    <p class="about-two__text">
                                        Our company is proud to be a sister company to <a href="https://oasis-group.co.in/" target="_blank"> Oasis Group </a> a renowned business based in Hyderabad, India, known for its expertise and excellence in the field This partnership enables us to leverage over 50 years of combined industry experience, allowing us to deliver the best-in-class products and services tailored to meet the unique needs of our customers.
                                    </p>

                                    <p class="about-two__text">At Lucent Industrial Solutions, we understand the importance of precision and reliability in instrumentation and control systems. That's why we are committed to offering top-quality products that adhere to the highest industry standards. Our team of skilled professionals is dedicated to providing innovative solutions that optimise processes, improve efficiency, and drive success for our clients across various industries.</p>
                                </div>
                            </div>
                            <div class="col-xl-12 d-lg-block d-xl-block d-md-none d-none">
                                <div class="about-two__right">
                                    <div class="about-two__img wow slideInRight" data-wow-delay="100ms"
                                        data-wow-duration="2500ms">
                                        <img src="/assets/img/abt-img-2.png" alt="" class="w-100">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
  `
  return (
    <div dangerouslySetInnerHTML={{ __html: pageContent }} />
  )
}

export default page
