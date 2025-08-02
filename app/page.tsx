import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="stricky-header stricked-menu main-menu main-menu-two">
        <div className="sticky-header__content"></div>
      </div>
      <section className="main-slider-four">
        <div className="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 1, "loop": true, "effect": "fade", "pagination": { "el": "#main-slider-pagination", "type": "bullets", "clickable": true }, "navigation": { "nextEl": "#main-slider__swiper-button-next", "prevEl": "#main-slider__swiper-button-prev" }, "autoplay": { "delay": 9000 } }'>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              {/* Fixed: Use Next.js public folder path */}
              <div className="main-slider-four__bg bg1" style={{ backgroundImage: "url('/assets/img/slider.jpg')" }}></div>
              <div className="main-slider-four__shape-1"></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider-four__content">
                      <h2 className="main-slider-four__title"> Measurement and <br /> Control Automation</h2>
                      <p className="main-slider-four__text"> we offer a comprehensive range of measuring solutions designed to capture <br /> critical data points accurately and reliably. Whether it's temperature, pressure, <br /> angle, flow, level, or any other parameter, our advanced measuring systems <br /> provide real-time insights that empower informed decision-making.</p>
                      <div className="main-slider-four__btn-and-call-box">
                        <div className="main-slider-four__btn-box">
                          <a href="pressure-transmitters" className="main-slider-four__btn thm-btn"> Explore products<span className="icon-dabble-arrow-right"></span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              {/* Fixed: Use Next.js public folder path */}
              <div className="main-slider-four__bg bg2" style={{ backgroundImage: "url('/assets/img/slider-2.jpg')" }}></div>
              <div className="main-slider-four__shape-1"></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider-four__content">
                      <h2 className="main-slider-four__title"> Industrial Instrumentation </h2>
                      <p className="main-slider-four__text"> Our instruments are engineered to optimise processes, streamline operations, <br /> and ensure consistent performance across industrial environments. We deliver <br /> robust solutions that enable precise control and monitoring of industrial processes.</p>
                      <div className="main-slider-four__btn-and-call-box">
                        <div className="main-slider-four__btn-box">
                          <a href="pressure-transmitters" className="main-slider-four__btn thm-btn"> Explore products<span className="icon-dabble-arrow-right"></span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-slider-three__nav">
            <div className="swiper-button-prev" id="main-slider__swiper-button-next">
              <i className="icon-arrow-left"></i>
            </div>
            <div className="swiper-button-next" id="main-slider__swiper-button-prev">
              <i className="icon-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="about-two__left">
                <div className="section-title text-left sec-title-animation animation-style1">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">ABOUT US</span>
                  </div>
                  <h2 className="section-title__title title-animation"> Welcome to <span>Lucent Industrial Solutions L.L.C.</span></h2>
                </div>
                <p className="about-two__text">
                  We are a dynamic instrumentation and control automation company, established in 2024 in the Emirate of Dubai, United Arab Emirates. We specialise in providing cutting-edge solutions in measuring and controlling systems, catering to a wide range of industries.
                </p>
                <p className="about-two__text">
                  Our company is proud to be a sister company to <a href="https://oasis-group.co.in/" target="_blank" rel="noopener noreferrer"> Oasis Group,</a> a renowned business based in Hyderabad, India, known for its expertise and excellence in the field...
                </p>
                <div className="services-seven__btn-box">
                  <a href="about" className="services-seven__btn thm-btn">Read More<span className="icon-dabble-arrow-right"></span></a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 d-lg-block d-xl-block d-md-none d-none">
              <div className="about-two__right">
                <div className="about-two__img wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                  {/* Fixed: Use Next.js Image component for better optimization */}
                  <Image 
                    src="/assets/img/abt.jpeg" 
                    alt="About Lucent Industrial Solutions" 
                    width={600} 
                    height={400}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="counter-two d-none">
        <div className="counter-two__bg-box">
          {/* Fixed: Use Next.js public folder path */}
          <div className="counter-two__bg bg1" style={{ backgroundImage: "url('/assets/img/slider.jpg')" }}></div>
        </div>
        <div className="container">
          <div className="counter-two__top">
            <div className="section-title text-left sec-title-animation animation-style1">
              <h2 className="section-title__title title-animation">Lucent Industrial Solutions L.L.C.</h2>
            </div>
            <p className="counter-two__top-text">We are a dynamic instrumentation and control automation company that was established in 2024 in the Emirate of Dubai, United Arab Emirates.</p>
          </div>
          <div className="counter-two__bottom">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                <div className="counter-two__single">
                  <div className="counter-two__icon">
                    <span className="icon-settings"></span>
                  </div>
                  <div className="counter-two__count count-box">
                    <h3 className="count-text" data-stop="200" data-speed="1500">00</h3>
                    <span className="counter-two__plus">+</span>
                  </div>
                  <p className="counter-two__count-text">Team member</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                <div className="counter-two__single">
                  <div className="counter-two__icon">
                    <span className="icon-paint"></span>
                  </div>
                  <div className="counter-two__count count-box">
                    <h3 className="count-text" data-stop="20" data-speed="1500">00</h3>
                    <span className="counter-two__plus">+</span>
                  </div>
                  <p className="counter-two__count-text">Team member</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                <div className="counter-two__single">
                  <div className="counter-two__icon">
                    <span className="icon-mechanic-2"></span>
                  </div>
                  <div className="counter-two__count count-box">
                    <h3 className="count-text" data-stop="10" data-speed="1500">00</h3>
                    <span className="counter-two__plus">k+</span>
                  </div>
                  <p className="counter-two__count-text">Complete project</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                <div className="counter-two__single">
                  <div className="counter-two__icon">
                    <span className="icon-analytics"></span>
                  </div>
                  <div className="counter-two__count count-box">
                    <h3 className="count-text" data-stop="900" data-speed="1500">00</h3>
                    <span className="counter-two__plus">+</span>
                  </div>
                  <p className="counter-two__count-text">Client review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="project-two">
        <div className="container">
          <div className="project-two__top">
            <div className="section-title text-left sec-title-animation animation-style1">
              <h2 className="section-title__title title-animation">Our <span>Products</span></h2>
            </div>
            <div className="project-two__nav">
              <div className="swiper-button-prev1">
                <i className="icon-arrow-left"></i>
              </div>
              <div className="swiper-button-next1">
                <i className="icon-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="project-two__bottom">
            <div className="thm-swiper__slider swiper-container" data-swiper-options='{"slidesPerView": 1, "spaceBetween": 0, "speed": 2000, "loop": true, "pagination": { "el": ".swiper-dot-style1", "type": "bullets", "clickable": true }, "navigation": { "nextEl": ".swiper-button-prev1", "prevEl": ".swiper-button-next1" }, "autoplay": { "delay": 9000 }, "breakpoints": { "0": { "spaceBetween": 0, "slidesPerView": 1 }, "375": { "spaceBetween": 0, "slidesPerView": 1 }, "575": { "spaceBetween": 0, "slidesPerView": 1 }, "768": { "spaceBetween": 30, "slidesPerView": 2 }, "992": { "spaceBetween": 30, "slidesPerView": 2 }, "1200": { "spaceBetween": 30, "slidesPerView":4 } } }'>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="project-two__single">
                    <div className="project-two__img">
                      {/* Fixed: Use Next.js Image component */}
                      <Image src="/assets/img/p1.jpg" alt="Sensors & Transmitters" width={300} height={200} />
                      <div className="project-two__content">
                        <div className="project-two__title-box">
                          <h5 className="project-two__title">
                            <a href="pressure-transmitters">Sensors & Transmitters</a>
                          </h5>
                        </div>
                        <div className="project-two__arrow">
                          <a href="pressure-transmitters"><span className="icon-dabble-arrow-right"></span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Continue with other slides using Image component... */}
                <div className="swiper-slide">
                  <div className="project-two__single">
                    <div className="project-two__img">
                      <Image src="/assets/img/p2.jpg" alt="Switches" width={300} height={200} />
                      <div className="project-two__content">
                        <div className="project-two__title-box">
                          <h5 className="project-two__title">
                            <a href="pressure-switches"> Switches</a>
                          </h5>
                        </div>
                        <div className="project-two__arrow">
                          <a href="pressure-switches"><span className="icon-dabble-arrow-right"></span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Rest of the slides... */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="contact-and-team">
        {/* Fixed: Use Next.js public folder path */}
        <div className="contact-and-team__bg-shape" style={{ backgroundImage: "url('/assets/img/contact-bg.png')" }}></div>
        <div className="contact-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-7">
                <div className="form-floating mb-3"></div>
                <div className="contact-one__left">
                  <form className="contact-one__form contact-form-validated" noValidate>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-one__input-box form-floating">
                          <input type="text" placeholder="Name" name="name" id="floatingInput1" className="form-control" />
                          <label htmlFor="floatingInput1">Name</label>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-one__input-box form-floating">
                          <input type="email" placeholder="E-mail" name="email" id="floatingInput2" className="form-control" />
                          <label htmlFor="floatingInput2">E-mail</label>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-one__input-box form-floating">
                          <input type="text" placeholder="Phone" name="phone" id="floatingInput3" className="form-control" />
                          <label htmlFor="floatingInput3">Phone</label>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-one__input-box form-floating">
                          <input type="text" placeholder="Subject" name="subject" id="floatingInput4" className="form-control" />
                          <label htmlFor="floatingInput4">Subject</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12">
                        <div className="contact-one__input-box text-message-box">
                          <textarea name="message" placeholder="Type Here..."></textarea>
                        </div>
                        <div className="contact-one__btn-box">
                          <button type="submit" className="contact-one__btn">Submit Now<span className="icon-dabble-arrow-right"></span></button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="result"></div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="contact-one__right">
                  <div className="section-title text-left sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">Talk to us</span>
                    </div>
                    <h2 className="section-title__title title-animation">Get in touch</h2>
                  </div>
                  <p className="contact-one__text">
                    Contact us today to learn more about our solutions and how we can help drive success for your business.
                  </p>
                  <ul className="contact-one__call-box list-unstyled">
                    <li>
                      <h4 className="contact-one__call-title">Call Us</h4>
                      <div className="contact-one__call-number">
                        <div className="icon">
                          <span className="icon-call"></span>
                        </div>
                        <p><a href="tel:+97142542350">+971 4 254 2350</a></p>
                      </div>
                    </li>
                    <li>
                      <h4 className="contact-one__call-title">Mail Us</h4>
                      <div className="contact-one__call-number">
                        <div className="icon">
                          <span className="icon-email"></span>
                        </div>
                        <p><a href="mailto:office@lucent-is.com">office@lucent-is.com</a></p>
                      </div>
                    </li>
                  </ul>
                  <ul className="contact-one__call-box list-unstyled">
                    <li>
                      <h4 className="contact-one__call-title">Follow Us</h4>
                      <div className="contact-one__call-number">
                        <div className="icon">
                          <span><i className="fab fa-linkedin-in"></i></span>
                        </div>
                        <p><a href="https://www.linkedin.com/company/lucent-is/" target="_blank" rel="noopener noreferrer">linkedin.com/company/lucent-is</a></p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      <section className="services-eight">
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <h2 className="section-title__title title-animation">Lucent Industrial Solutions <br /> <span>Our Best Services</span></h2>
          </div>
          <div className="services-eight__carousel-box">
            <div className="thm-swiper__slider swiper-container" data-swiper-options='{"slidesPerView": 2, "spaceBetween": 0, "speed": 2000, "loop": true, "pagination": { "el": ".swiper-dot-style1", "type": "bullets", "clickable": true }, "navigation": { "nextEl": ".swiper-button-prev1", "prevEl": ".swiper-button-next1" }, "autoplay": { "delay": 9000 }, "breakpoints": { "0": { "spaceBetween": 0, "slidesPerView": 1 }, "375": { "spaceBetween": 0, "slidesPerView": 1 }, "575": { "spaceBetween": 0, "slidesPerView": 1 }, "768": { "spaceBetween": 30, "slidesPerView": 2 }, "992": { "spaceBetween": 30, "slidesPerView": 2 }, "1200": { "spaceBetween": 30, "slidesPerView": 3 } } }'>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="services-eight__single">
                    <div className="services-eight__img-box">
                      <div className="services-eight__img">
                        <img src="/assets/img/s1.jpg" alt="" />
                      </div>
                    </div>
                    <div className="services-eight__content">
                      <div className="services-eight__title-box">
                        <h4 className="services-eight__title">
                          <a href="maintenance-repairs">Maintenance and repairs</a>
                        </h4>
                      </div>
                      <p className="services-eight__text">Lucent Industrial Solutions is dedicated to providing top-notch maintenance and repair services...</p>
                      <div className="services-eight__btn-box">
                        <a href="maintenance-repairs" className="services-eight__btn thm-btn">Read more<span className="icon-dabble-arrow-right"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="services-eight__single">
                    <div className="services-eight__img-box">
                      <div className="services-eight__img">
                        <img src="/assets/img/s2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="services-eight__content">
                      <div className="services-eight__title-box">
                        <h4 className="services-eight__title">
                          <a href="commissioning">Commissioning</a>
                        </h4>
                      </div>
                      <p className="services-eight__text">Lucent Industrial Solutions offers expert commissioning services designed to ensure your systems and equipment...</p>
                      <div className="services-eight__btn-box">
                        <a href="commissioning" className="services-eight__btn thm-btn">Read more<span className="icon-dabble-arrow-right"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="services-eight__single">
                    <div className="services-eight__img-box">
                      <div className="services-eight__img">
                        <img src="/assets/img/s3.jpg" alt="" />
                      </div>
                    </div>
                    <div className="services-eight__content">
                      <div className="services-eight__title-box">
                        <h4 className="services-eight__title">
                          <a href="data-analytics-predictive-maintenance">Data Analytics & Predictive Maint...</a>
                        </h4>
                      </div>
                      <p className="services-eight__text">Lucent Industrial Solution offers comprehensive solutions to customers, including a ...</p>
                      <div className="services-eight__btn-box">
                        <a href="data-analytics-predictive-maintenance" className="services-eight__btn thm-btn">Read more<span className="icon-dabble-arrow-right"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="services-eight__dot-style">
                <div className="swiper-dot-style1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-two">
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <h2 className="section-title__title title-animation">Our <span> Associations</span></h2>
          </div>
          <div className="row"></div>
        </div>
      </section>
      <div className="brand-one">
        <div className="container">
          <div className="thm-swiper__slider swiper-container" data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "loop": true, "navigation": { "nextEl": "#brand-one__swiper-button-next", "prevEl": "#brand-one__swiper-button-prev" }, "autoplay": { "delay": 5000 }, "breakpoints": { "0": { "spaceBetween": 30, "slidesPerView": 1 }, "375": { "spaceBetween": 30, "slidesPerView": 2 }, "575": { "spaceBetween": 30, "slidesPerView": 3 }, "767": { "spaceBetween": 50, "slidesPerView": 3 }, "991": { "spaceBetween": 50, "slidesPerView": 4 }, "1199": { "spaceBetween": 100, "slidesPerView": 5 } }}'>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="/assets/img/1.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/2.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/3.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/4.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/5.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/6.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/7.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/8.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/9.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/10.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/11.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}