'use client'
import React from 'react'

const Home = () => {
  const html = `
  <div class="stricky-header stricked-menu main-menu main-menu-two">
    <div class="sticky-header__content"></div>
</div>
<!--Main Slider-Start-->
<section class="main-slider-four">
    <div class="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 1, "loop": true,
            "effect": "fade",
            "pagination": {
            "el": "#main-slider-pagination",
            "type": "bullets",
            "clickable": true
            },
            "navigation": {
            "nextEl": "#main-slider__swiper-button-next",
            "prevEl": "#main-slider__swiper-button-prev"
            },
            "autoplay": {
            "delay": 9000
            }
            }'>
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="main-slider-four__bg"
                    style="background-image: url(/assets/img/slider.jpg);"></div>
                <!-- <div class="main-slider-four__img-1">
                        <img src="/assets/img/slider.jpg" alt="">
                    </div> -->
                <!-- <div class="main-slider-four__img-2">
                        <img src="/assets/img/slider.jpg" alt="">
                    </div> -->
                <div class="main-slider-four__shape-1"></div>
                <!-- <div class="main-slider-four__shape-2"></div>
                    <div class="main-slider-four__shape-3"></div> -->
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="main-slider-four__content">
                                <h2 class="main-slider-four__title"> Measurement and <br> Control Automation</h2>

                                <p class="main-slider-four__text"> we offer a comprehensive range of measuring solutions designed to capture <br> critical data points accurately and reliably. Whether it's temperature, pressure, <br> angle, flow, level, or any other parameter, our advanced measuring systems <br> provide real-time insights that empower informed decision-making.
                                </p>
                                <div class="main-slider-four__btn-and-call-box">
                                    <div class="main-slider-four__btn-box">
                                        <a href="pressure-transmitters" class="main-slider-four__btn thm-btn"> Explore products<span class="icon-dabble-arrow-right"></span></a>
                                    </div>
                                    <!-- <div class="main-slider-four__call">
                                                <div class="main-slider-four__call-icon">
                                                    <span class="icon-call"></span>
                                                </div>
                                                <div class="main-slider-four__call-number">
                                                    <p>Reach Us</p>
                                                    <h5><a href="tel:+971505750802">+971 505750802</a></h5>
                                                </div>
                                            </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="main-slider-four__bg"
                    style="background-image: url(/assets/img/slider-2.jpg);"></div>
                <!-- <div class="main-slider-four__img-1">
                            <img src="/assets/img/slider.jpg" alt="">
                        </div> -->
                <!-- <div class="main-slider-four__img-2">
                            <img src="/assets/img/slider.jpg" alt="">
                        </div> -->
                <div class="main-slider-four__shape-1"></div>
                <!-- <div class="main-slider-four__shape-2"></div>
                        <div class="main-slider-four__shape-3"></div> -->
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="main-slider-four__content">
                                <h2 class="main-slider-four__title"> Industrial Instrumentation </h2>

                                <p class="main-slider-four__text"> Our instruments are engineered to optimise processes, streamline operations, <br> and ensure consistent performance across industrial environments. We deliver <br> robust solutions that enable precise control and monitoring of industrial processes.
                                </p>
                                <div class="main-slider-four__btn-and-call-box">
                                    <div class="main-slider-four__btn-box">
                                        <a href="pressure-transmitters" class="main-slider-four__btn thm-btn"> Explore products<span class="icon-dabble-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- If we need navigation buttons -->
        <div class="main-slider-three__nav">
            <div class="swiper-button-prev" id="main-slider__swiper-button-next">
                <i class="icon-arrow-left"></i>
            </div>
            <div class="swiper-button-next" id="main-slider__swiper-button-prev">
                <i class="icon-arrow-right"></i>
            </div>
        </div>
    </div>
</section>
<!--About-section-start -->
<section class="about-two">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-6">
                <div class="about-two__left">
                    <div class="section-title text-left sec-title-animation animation-style1">
                        <div class="section-title__tagline-box">
                            <span class="section-title__tagline">ABOUT US</span>
                        </div>
                        <h2 class="section-title__title title-animation"> Welcome to <span>Lucent Industrial Solutions L.L.C.</span></h2>
                    </div>
                    <p class="about-two__text">
                        We are a dynamic instrumentation and control automation company, established in 2024 in the Emirate of Dubai, United Arab Emirates. We specialise in providing cutting-edge solutions in measuring and controlling systems, catering to a wide range of industries.
                    </p>



                    <p class="about-two__text">
                        Our company is proud to be a sister company to <a href="https://oasis-group.co.in/" target="_blank"> Oasis Group,</a> a renowned business based in Hyderabad, India, known for its expertise and excellence in the field...
                    </p>
                    <div class="services-seven__btn-box">
                        <a href="about" class="services-seven__btn thm-btn">Read More<span class="icon-dabble-arrow-right"></span></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 d-lg-block d-xl-block d-md-none d-none">
                <div class="about-two__right">
                    <div class="about-two__img wow slideInRight" data-wow-delay="100ms"
                        data-wow-duration="2500ms">
                        <img src="/assets/img/abt.jpeg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--About Two End -->
<section class="counter-two d-none">
    <div class="counter-two__bg-box">
        <div class="counter-two__bg"
            style="background-image: url(/assets/img/slider.jpg);"></div>
    </div>
    <div class="container">
        <div class="counter-two__top">
            <div class="section-title text-left sec-title-animation animation-style1">
                <!-- <div class="section-title__tagline-box">
                                    <span class="section-title__tagline">Best Roof rapairing</span>
                                </div> -->
                <h2 class="section-title__title title-animation">Lucent Industrial Solutions L.L.C.</h2>
            </div>
            <p class="counter-two__top-text">We are a dynamic instrumentation and control automation company that was established in 2024 in the Emirate of Dubai, United Arab Emirates.</p>
        </div>
        <div class="counter-two__bottom">
            <div class="row">
                <!-- Counter Two Single Start -->
                <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                    <div class="counter-two__single">
                        <div class="counter-two__icon">
                            <span class="icon-settings"></span>
                        </div>
                        <div class="counter-two__count count-box">
                            <h3 class="count-text" data-stop="200" data-speed="1500">00</h3>
                            <span class="counter-two__plus">+</span>
                        </div>
                        <p class="counter-two__count-text">Team member</p>
                    </div>
                </div>
                <!-- Counter Two Single End -->
                <!-- Counter Two Single Start -->
                <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                    <div class="counter-two__single">
                        <div class="counter-two__icon">
                            <span class="icon-paint"></span>
                        </div>
                        <div class="counter-two__count count-box">
                            <h3 class="count-text" data-stop="20" data-speed="1500">00</h3>
                            <span class="counter-two__plus">+</span>
                        </div>
                        <p class="counter-two__count-text">Team member</p>
                    </div>
                </div>
                <!-- Counter Two Single End -->
                <!-- Counter Two Single Start -->
                <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                    <div class="counter-two__single">
                        <div class="counter-two__icon">
                            <span class="icon-mechanic-2"></span>
                        </div>
                        <div class="counter-two__count count-box">
                            <h3 class="count-text" data-stop="10" data-speed="1500">00</h3>
                            <span class="counter-two__plus">k+</span>
                        </div>
                        <p class="counter-two__count-text">Complete project</p>
                    </div>
                </div>
                <!-- Counter Two Single End -->
                <!-- Counter Two Single Start -->
                <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                    <div class="counter-two__single">
                        <div class="counter-two__icon">
                            <span class="icon-analytics"></span>
                        </div>
                        <div class="counter-two__count count-box">
                            <h3 class="count-text" data-stop="900" data-speed="1500">00</h3>
                            <span class="counter-two__plus">+</span>
                        </div>
                        <p class="counter-two__count-text">Client review</p>
                    </div>
                </div>
                <!-- Counter Two Single End -->
            </div>
        </div>
    </div>
</section>
<!--Counter Section Start -->

<!--Counter Section End -->
<!-- Products Section Start -->
<section class="project-two">
    <div class="container">
        <div class="project-two__top">
            <div class="section-title text-left sec-title-animation animation-style1">
                <!-- <div class="section-title__tagline-box">
                                    <span class="section-title__tagline">Our Services</span>
                                </div> -->
                <h2 class="section-title__title title-animation">Our <span>Products</span></h2>
            </div>
            <div class="project-two__nav">
                <div class="swiper-button-prev1">
                    <i class="icon-arrow-left"></i>
                </div>
                <div class="swiper-button-next1">
                    <i class="icon-arrow-right"></i>
                </div>
            </div>
        </div>
        <div class="project-two__bottom">
            <div class="thm-swiper__slider swiper-container" data-swiper-options='{
                                "slidesPerView": 1,
                                "spaceBetween": 0,
                                "speed": 2000,
                                "loop": true,
                                "pagination": {
                                "el": ".swiper-dot-style1",
                                "type": "bullets",
                                "clickable": true
                                },
                                
                                "navigation": {
                                "nextEl": ".swiper-button-prev1",
                                "prevEl": ".swiper-button-next1"
                                },
                                "autoplay": { "delay": 9000 },
                                "breakpoints": {
                                "0": {
                                "spaceBetween": 0,
                                "slidesPerView": 1
                                },
                                "375": {
                                "spaceBetween": 0,
                                "slidesPerView": 1
                                },
                                "575": {
                                "spaceBetween": 0,
                                "slidesPerView": 1
                                },
                                "768": {
                                "spaceBetween": 30,
                                "slidesPerView": 2
                                },
                                "992": {
                                "spaceBetween": 30,
                                "slidesPerView": 2
                                },
                                "1200": {
                                "spaceBetween": 30,
                                "slidesPerView":4
                                }
                                }
                                }'>
                <div class="swiper-wrapper">
                    <!--Services One Single Start-->
                    <div class="swiper-slide">
                        <div class="project-two__single">
                            <div class="project-two__img">
                                <img src="/assets/img/p1.jpg" alt="">
                                <div class="project-two__content">
                                    <div class="project-two__title-box">
                                        <h5 class="project-two__title">
                                            <a href="pressure-transmitters">Sensors & Transmitters</a>
                                        </h5>
                                    </div>
                                    <div class="project-two__arrow">
                                        <a href="pressure-transmitters"><span
                                                class="icon-dabble-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Services One Single End-->
                    <!--Services One Single Start-->
                    <div class="swiper-slide">
                        <div class="project-two__single">
                            <div class="project-two__img">
                                <img src="/assets/img/p2.jpg" alt="">
                                <div class="project-two__content">
                                    <div class="project-two__title-box">
                                        <h5 class="project-two__title">
                                            <a href="pressure-switches"> Switches</a>
                                        </h5>
                                    </div>
                                    <div class="project-two__arrow">
                                        <a href="pressure-switches"><span
                                                class="icon-dabble-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Services One Single End-->
                    <!--Services One Single Start-->
                    <div class="swiper-slide">
                        <div class="project-two__single">
                            <div class="project-two__img">
                                <img src="/assets/img/product.jpg" alt="">
                                <div class="project-two__content">
                                    <div class="project-two__title-box">
                                        <h5 class="project-two__title">
                                            <a href="encoders-resolvers">Encoders & Resolvers</a>
                                        </h5>
                                    </div>
                                    <div class="project-two__arrow">
                                        <a href="encoders-resolvers"><span
                                                class="icon-dabble-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="project-two__single">
                            <div class="project-two__img">
                                <img src="/assets/img/counters.jpg" alt="">
                                <div class="project-two__content">
                                    <div class="project-two__title-box">
                                        <h5 class="project-two__title">
                                            <a href="counters">Counters</a>
                                        </h5>
                                    </div>
                                    <div class="project-two__arrow">
                                        <a href="counters"><span
                                                class="icon-dabble-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="project-two__single">
                            <div class="project-two__img">
                                <img src="/assets/img/industrial-printers-cutters.jpg" alt="">
                                <div class="project-two__content">
                                    <div class="project-two__title-box">
                                        <h5 class="project-two__title">
                                            <a href="industrial_printers_cutters">Industrial Printers & Cutters</a>
                                        </h5>
                                    </div>
                                    <div class="project-two__arrow">
                                        <a href="industrial_printers_cutters"><span
                                                class="icon-dabble-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="project-two__single">
                            <div class="project-two__img">
                                <img src="/assets/img/vacuum-contactors.jpg" alt="">
                                <div class="project-two__content">
                                    <div class="project-two__title-box">
                                        <h5 class="project-two__title">
                                            <a href="vacuum-contactors">Vacuum Contactors</a>
                                        </h5>
                                    </div>
                                    <div class="project-two__arrow">
                                        <a href="vacuum-contactors"><span
                                                class="icon-dabble-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="project-two__single">
                            <div class="project-two__img">
                                <img src="/assets/img/valves-new.jpg" alt="">
                                <div class="project-two__content">
                                    <div class="project-two__title-box">
                                        <h5 class="project-two__title">
                                            <a href="industrial-valves">Valves</a>
                                        </h5>
                                    </div>
                                    <div class="project-two__arrow">
                                        <a href="industrial-valves"><span
                                                class="icon-dabble-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="project-two__single">
                            <div class="project-two__img">
                                <img src="/assets/img/servo-moters.png" alt="">
                                <div class="project-two__content">
                                    <div class="project-two__title-box">
                                        <h5 class="project-two__title">
                                            <a href="servo-motors-drives">Servo Motors & Drives</a>
                                        </h5>
                                    </div>
                                    <div class="project-two__arrow">
                                        <a href="servo-motors-drives"><span
                                                class="icon-dabble-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="project-two__single">
                            <div class="project-two__img">
                                <img src="/assets/img/driver-fatigue-monitoring.jpg" alt="">
                                <div class="project-two__content">
                                    <div class="project-two__title-box">
                                        <h5 class="project-two__title">
                                            <a href="ai-cameras">AI Cameras</a>
                                        </h5>
                                    </div>
                                    <div class="project-two__arrow">
                                        <a href="ai-cameras"><span
                                                class="icon-dabble-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="project-two__single">
                            <div class="project-two__img">
                                <img src="/assets/img/engineering-new-img.jpg" alt="">
                                <div class="project-two__content">
                                    <div class="project-two__title-box">
                                        <h5 class="project-two__title">
                                            <a href="engine-powerpack-spares">Engine & Powerpack spares</a>
                                        </h5>
                                    </div>
                                    <div class="project-two__arrow">
                                        <a href="engine-powerpack-spares"><span
                                                class="icon-dabble-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Products One Single End-->
                </div>
            </div>
        </div>
        <!-- <a href="#" class="success-one__btn thm-btn" style="margin: 0 auto; display: block; width:200px; text-align: center; margin-top: 50px;">View All<span class="icon-dabble-arrow-right" style="margin-left: 10px;"></span></a> -->
    </div>
</section>
<!-- Products Section End -->
<section class="contact-and-team">
    <div class="contact-and-team__bg-shape"
        style="background-image: url(/assets/img/contact-bg.png);"></div>
    <div class="contact-one">
        <div class="container">
            <div class="row">
                <div class="col-xl-7">
                    <div class="form-floating mb-3"></div>
                    <div class="contact-one__left">
                        <form class="contact-one__form contact-form-validated"
                            novalidate="novalidate">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6">
                                    <div class="contact-one__input-box form-floating">
                                        <input type="text" placeholder="Name" name="name" id="floatingInput" class="form-control">
                                        <label for="floatingInput">Name</label>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6">
                                    <div class="contact-one__input-box form-floating">
                                        <input type="email" placeholder="E-mail" name="email" id="floatingInput" class="form-control">
                                        <label for="floatingInput">E-mail</label>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6">
                                    <div class="contact-one__input-box form-floating">
                                        <input type="text" placeholder="Phone" name="phone" id="floatingInput" class="form-control">
                                        <label for="floatingInput">Phone</label>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6">
                                    <div class="contact-one__input-box form-floating">
                                        <input type="text" placeholder="Subject" name="subject" id="floatingInput" class="form-control">
                                        <label for="floatingInput">Subject</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-12 col-lg-12">
                                    <div class="contact-one__input-box text-message-box">
                                        <textarea name="message" placeholder="Type Here..."></textarea>

                                    </div>
                                    <div class="contact-one__btn-box">
                                        <button type="submit" class="contact-one__btn">Submit
                                            Now<span class="icon-dabble-arrow-right"></span></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="result"></div>
                    </div>
                </div>
                <div class="col-xl-5">
                    <div class="contact-one__right">
                        <div class="section-title text-left sec-title-animation animation-style1">
                            <div class="section-title__tagline-box">
                                <span class="section-title__tagline">Talk to us</span>
                            </div>
                            <h2 class="section-title__title title-animation">Get in touch
                            </h2>
                        </div>
                        <p class="contact-one__text">
                            Contact us today to learn more about our solutions and how we can help drive success for your business.
                        </p>
                        <ul class="contact-one__call-box list-unstyled">
                            <li>
                                <h4 class="contact-one__call-title">Call Us</h4>
                                <div class="contact-one__call-number">
                                    <div class="icon">
                                        <span class="icon-call"></span>
                                    </div>
                                    <p><a href="tel:+97142542350">+971 4 254 2350</a></p>
                                </div>
                            </li>
                            <li>
                                <h4 class="contact-one__call-title">Mail Us</h4>
                                <div class="contact-one__call-number">
                                    <div class="icon">
                                        <span class="icon-email"></span>
                                    </div>
                                    <p><a href="mailto:office@lucent-is.com">office@lucent-is.com</a></p>
                                </div>
                            </li>
                        </ul>
                        <ul class="contact-one__call-box list-unstyled">
                            <li>
                                <h4 class="contact-one__call-title">Follow Us</h4>
                                <div class="contact-one__call-number">
                                    <div class="icon">
                                        <span><i class="fab fa-linkedin-in"></i></span>
                                    </div>
                                    <p><a href="https://www.linkedin.com/company/lucent-is/" target="_blank">linkedin.com/company/lucent-is</a></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

<section class="services-eight">
    <div class="container">
        <div class="section-title text-center sec-title-animation animation-style1">
            <!-- <div class="section-title__tagline-box">
                        <span class="section-title__tagline">Best Service</span>
                    </div> -->
            <h2 class="section-title__title title-animation">Lucent Industrial Solutions <br> <span>Our Best Services</span></h2>
        </div>
        <div class="services-eight__carousel-box">
            <div class="thm-swiper__slider swiper-container" data-swiper-options='{
                        "slidesPerView": 2, 
                        "spaceBetween": 0,
                        "speed": 2000,
                        "loop": true,
                        "pagination": {
                            "el": ".swiper-dot-style1",
                            "type": "bullets",
                            "clickable": true
                        },
    
                        
    
                        "navigation": {
                            "nextEl": ".swiper-button-prev1",
                            "prevEl": ".swiper-button-next1"
                        },
                        "autoplay": { "delay": 9000 },
                        "breakpoints": {
                                "0": {
                                    "spaceBetween": 0,
                                    "slidesPerView": 1
                                },
                                "375": {
                                    "spaceBetween": 0,
                                    "slidesPerView": 1
                                },
                                "575": {
                                    "spaceBetween": 0,
                                    "slidesPerView": 1
                                },
                                "768": {
                                    "spaceBetween": 30,
                                    "slidesPerView": 2
                                },
                                "992": {
                                    "spaceBetween": 30,
                                    "slidesPerView": 2
                                },
                                "1200": {
                                    "spaceBetween": 30,
                                    "slidesPerView": 3
                                }
                            }
                    }'>
                <div class="swiper-wrapper">

                    <!--Services Eight Single Start-->
                    <div class="swiper-slide">
                        <div class="services-eight__single">
                            <div class="services-eight__img-box">
                                <div class="services-eight__img">
                                    <img src="/assets/img/s1.jpg" alt="">
                                </div>
                            </div>
                            <div class="services-eight__content">
                                <div class="services-eight__title-box">

                                    <h4 class="services-eight__title">
                                        <a href="maintenance-repairs">Maintenance and repairs</a>
                                    </h4>
                                </div>
                                <p class="services-eight__text">Lucent Industrial Solutions is dedicated to providing top-notch maintenance and repair services...</p>
                                <div class="services-eight__btn-box">
                                    <a href="maintenance-repairs" class="services-eight__btn thm-btn">Read
                                        more<span class="icon-dabble-arrow-right"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Services Eight Single End-->
                    <!--Services Eight Single Start-->
                    <div class="swiper-slide">
                        <div class="services-eight__single">
                            <div class="services-eight__img-box">
                                <div class="services-eight__img">
                                    <img src="/assets/img/s2.jpg" alt="">
                                </div>
                            </div>
                            <div class="services-eight__content">
                                <div class="services-eight__title-box">

                                    <h4 class="services-eight__title">
                                        <a href="commissioning">Commissioning</a>
                                    </h4>
                                </div>
                                <p class="services-eight__text">Lucent Industrial Solutions offers expert commissioning services designed to ensure your systems and equipment...</p>
                                <div class="services-eight__btn-box">
                                    <a href="commissioning" class="services-eight__btn thm-btn">Read
                                        more<span class="icon-dabble-arrow-right"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Services Eight Single End-->
                    <!--Services Eight Single Start-->
                    <div class="swiper-slide">
                        <div class="services-eight__single">
                            <div class="services-eight__img-box">
                                <div class="services-eight__img">
                                    <img src="/assets/img/s3.jpg" alt="">
                                </div>
                            </div>
                            <div class="services-eight__content">
                                <div class="services-eight__title-box">
                                    <h4 class="services-eight__title">
                                        <a href="data-analytics-predictive-maintenance">Data Analytics & Predictive Maint...</a>
                                    </h4>
                                </div>
                                <p class="services-eight__text">Lucent Industrial Solution offers comprehensive solutions to customers, including a ...</p>
                                <div class="services-eight__btn-box">
                                    <a href="data-analytics-predictive-maintenance" class="services-eight__btn thm-btn">Read
                                        more<span class="icon-dabble-arrow-right"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Services Eight Single End-->
                </div>
                <!-- If we need navigation buttons -->
                <div class="services-eight__dot-style">
                    <div class="swiper-dot-style1"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Our brands -->
<section class="testimonial-two">
    <div class="container">
        <div class="section-title text-center sec-title-animation animation-style1">
            <!-- <div class="section-title__tagline-box">
                                <span class="section-title__tagline">Cliens testimonial</span>
                            </div> -->
            <h2 class="section-title__title title-animation">Our <span> Associations</span></h2>
        </div>
        <div class="row">
            <!-- <div class="col-xl-6">
                                <div class="testimonial-two__left">
                                    <div class="testimonial-two__img d-lg-block d-xl-block d-md-none d-none">
                                        <img src="/assets/img/testimonials-bg.jpg" alt="">
                                    </div>
                                </div>
                            </div> -->

        </div>
    </div>
</section>
<!-- Testimonial Two End -->
<!--Brand One Start-->
<div class="brand-one">
    <div class="container">
        <div class="thm-swiper__slider swiper-container" data-swiper-options='{"spaceBetween": 100,
                            "slidesPerView": 5,
                            "loop": true,
                            "navigation": {
                            "nextEl": "#brand-one__swiper-button-next",
                            "prevEl": "#brand-one__swiper-button-prev"
                            },
                            "autoplay": { "delay": 5000 },
                            "breakpoints": {
                            "0": {
                            "spaceBetween": 30,
                            "slidesPerView": 1
                            },
                            "375": {
                            "spaceBetween": 30,
                            "slidesPerView": 2
                            },
                            "575": {
                            "spaceBetween": 30,
                            "slidesPerView": 3
                            },
                            "767": {
                            "spaceBetween": 50,
                            "slidesPerView": 3
                            },
                            "991": {
                            "spaceBetween": 50,
                            "slidesPerView": 4
                            },
                            "1199": {
                            "spaceBetween": 100,
                            "slidesPerView": 5
                            }
                            }}'>
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="/assets/img/1.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="/assets/img/2.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="/assets/img/3.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="/assets/img/4.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="/assets/img/5.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="/assets/img/6.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="/assets/img/7.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="/assets/img/8.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="/assets/img/9.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="/assets/img/10.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="/assets/img/11.png" alt="">
                </div>

            </div>
        </div>
    </div>
</div>
  `
  return (
    <div dangerouslySetInnerHTML={{ __html: html }}>
      
    </div>
  )
}

export default Home
