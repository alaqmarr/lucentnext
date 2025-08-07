import React from 'react'

const page = () => {
    const pageContent = `
    <section class="page-header">
  <div class="page-header__bg" style="background-image: url(/assets/img/slider.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
  <div class="container">
    <div class="page-header__inner">
      <h2>Heavy-Duty-limit-switches</h2>
      <div class="thm-breadcrumb__box">
        <ul class="thm-breadcrumb list-unstyled">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <span class="icon-angle-left"></span>
          </li>
          <li>Products</li>
          <li>
            <span class="icon-angle-left"></span>
          </li>
          <li>Switches</li>
          <li>
            <span class="icon-angle-left"></span>
          </li>
          <li>Heavy-Duty-limit-switches</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section class="blog-details">
  <div class="container">
    <div class="main--content">
      <div class="row">
        <div class="col-xl-8 col-lg-8">
          <div class="blog-details__left">
            <div class="blog-details__img-box">
              <div class="blog-details__img">
                <img src="/assets/img/heavy-duty-limit-switches.jpg" class="img-thumbnail img-fluid" alt="">
              </div>
            </div>
            <div class="blog-details__content">
              <h3 class="blog-details__title-1">Heavy-Duty-limit-switches</h3>
              <p class="blog-details__text-1">Discover unparalleled reliability in the toughest environments with Lucent Industrial Solutions supply of Namco heavy-duty limit switches. With multiple sizes, housing options, lever materials, and actuation methods available, Lucent Industrial Solutions offers a versatile range of NAMCO heavy-duty limit switches to meet the demands of your application. Our NEMA-rated designs ensure suitability for hazardous environments, providing peace of mind in challenging conditions.</p>
              <p class="pb-4">Explore answers to commonly asked questions about heavy-duty limit switches:</p>
              <!-- accordion-section -->
              <button class="accordion">
              <h4>What is a heavy-duty limit switch ? 
              </h4>
              </button>
              <div class="panel">
                <p class="blog-details__text-2">A heavy-duty limit switch is used for position indication and over travel protection in harsh and abrasive environments. Robust features such as die-cast housing, heavy-duty mechanisms, and industrial grade contacts allow a heavy-duty limit switch to withstand hazardous applications with a long mechanical life.</p>
              </div>
              <!-- accordion-section-end -->

              <!-- accordion-section -->
              <button class="accordion">
              <h4>When should a heavy-duty limit switch be used ?
              </h4>
              </button>
              <div class="panel">
               <p class="blog-details__text-2">
                Heavy-duty limit switches are recommended for applications exposed to harsh environmental factors like extreme temperatures, vibration, shock, and corrosive/hazardous substances. In hazardous environments, NEMA-rated heavy-duty limit switches are essential, offering protection against dust, water, and oil.
              </p>
              </div>
              <!-- accordion-section-end -->


              <!-- accordion-section -->
              <button class="accordion">
              <h4>What are the types of heavy-duty limit switches ?
              </h4>
              </button>
              <div class="panel">
                <p class="blog-details__text-2">
                There are three main types of heavy-duty limit switches: lever actuated, proximity, and reed switches. Lever actuated switches, including cam type and rocker type mechanisms, are particularly popular for heavy-duty applications, providing versatile solutions for various industrial needs.
              </p>
              </div>
              <!-- accordion-section-end -->
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 fixcontent">
          <div class="sidebar">
            <div class="sidebar__single sidebar__category">
              <h3 class="sidebar__title">Related Products</h3>
              <ul class="sidebar__category-list list-unstyled">
                <li>
                  <a href="pressure-transmitters">
                    <span>
                      <i class="fas fa-angle-double-right"></i>
                    </span>Sensors & Transmitters </a>
                  </li>
                  <li>
                    <a href="pressure-switches">
                      <span>
                        <i class="fas fa-angle-double-right"></i>
                      </span>Switches </a>
                    </li>
                    <li>
                      <a href="industrial-valves">
                        <span>
                          <i class="fas fa-angle-double-right"></i>
                        </span>Valves </a>
                      </li>
                      <li>
                        <a href="encoders-resolvers">
                          <span>
                            <i class="fas fa-angle-double-right"></i>
                          </span>Encoders & Resolvers </a>
                        </li>
                        <li>
                          <a href="counters">
                            <span>
                              <i class="fas fa-angle-double-right"></i>
                            </span>Counters </a>
                          </li>
                          <li>
                            <a href="industrial_printers_cutters">
                              <span>
                                <i class="fas fa-angle-double-right"></i>
                              </span>Industrial Printers and Cutters </a>
                            </li>
                            <li>
                              <a href="vacuum-contactors">
                                <span>
                                  <i class="fas fa-angle-double-right"></i>
                                </span>Vacuum Contactors </a>
                              </li>
                              <li>
                                <a href="servo-motors-drives">
                                  <span>
                                    <i class="fas fa-angle-double-right"></i>
                                  </span>Servo Motors & Drives </a>
                                </li>
                                <li>
                                  <a href="ai-cameras">
                                    <span>
                                      <i class="fas fa-angle-double-right"></i>
                                    </span>AI Cameras </a>
                                  </li>
                                  <li>
                                    <a href="engine-powerpack-spares">
                                      <span>
                                        <i class="fas fa-angle-double-right"></i>
                                      </span>Engine & Powerpack spares </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="sidebar mt-5">
                                <div class="sidebar__single sidebar__category">
                                  <h3 class="sidebar__title">Product Catalogue</h3>
                                  <ul class="sidebar__category-list list-unstyled">
                                    <div class="services-details__sidebar-btn-box">
                                      <a href="/assets/img/heavy-duty-limit-switches.pdf" target="_blank" class="services-details__sidebar-btn thm-btn">View Catalogue <span class="icon-dabble-arrow-right"></span>
                                    </a>
                                  </div>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </section>
    `
  return (
    <div dangerouslySetInnerHTML={{ __html: pageContent }} >
      
    </div>
  )
}

export default page
