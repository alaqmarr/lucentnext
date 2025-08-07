import React from 'react'

const page = () => {
    const pgeContent = `
    <section class="page-header">
  <div class="page-header__bg" style="background-image: url(/assets/img/slider.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
  <div class="container">
    <div class="page-header__inner">
      <h2>Industrial-Valves</h2>
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
          <li>Valves</li>
          <li>
            <span class="icon-angle-left"></span>
          </li>
          <li>Industrial-Valves</li>
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
                <img src="/assets/img/valves-new.jpg" class="img-thumbnail img-fluid" alt="">
              </div>
            </div>
            <div class="blog-details__content">
              <h3 class="blog-details__title-1">Industrial-Valves</h3>
              <p class="blog-details__text-1">Industrial valves are essential components for regulating fluid flow in various industrial processes. With a diverse range of types, sizes, and materials, our valves provide precise control, ensuring optimal operation and safety in demanding environments.</p>
              <p class="blog-details__text-2">Lucent Industrial Solutions’ industrial valves are trusted for precise fluid control in industrial processes. With our commitment to quality, durability, and safety, our range ensures optimal performance and reliability in diverse applications, contributing to enhanced efficiency and productivity in industrial operations.</p>
              <!-- accordion-section -->
              <button class="accordion">
              <h4>Applications <i class="fas fa-angle-down"></i>
              </h4>
              </button>
              <div class="panel">
                <p class="blog-details__text-2">
                  Our supply spans a diverse array of industries, encompassing oil and gas, chemical processing, water and wastewater treatment, power generation, and food and beverage sectors.
                </p>
              </div>
              <!-- accordion-end -->
              
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
                                    </span>AI cameras </a>
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
                                      <a href="/assets/img/industrial-valves.pdf" target="_blank" class="services-details__sidebar-btn thm-btn">View Catalogue <span class="icon-dabble-arrow-right"></span>
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
    <div dangerouslySetInnerHTML={{ __html: pgeContent }} >
      
    </div>
  )
}

export default page
