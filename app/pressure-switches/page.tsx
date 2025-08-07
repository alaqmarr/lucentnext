import React from 'react'

const page = () => {
    const pageContent = `
    <section class="page-header">
  <div class="page-header__bg" style="background-image: url(/assets/img/slider.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
  <div class="container">
    <div class="page-header__inner">
      <h2>Pressure-switches</h2>
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
          <li>Pressure-switches</li>
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
                <img src="/assets/img/pressure-switches.jpg" class="img-thumbnail img-fluid" alt="">
              </div>
            </div>
            <div class="blog-details__content">
              <h3 class="blog-details__title-1">Pressure-switches</h3>
              <p class="blog-details__text-1">Our range of pressure switches are designed to accurately measure and control the pressure of air and liquids, ensuring reliable performance in a variety of applications. Built for durability and longevity, they operate flawlessly day after day, even in the harshest conditions.</p>

              <p class="blog-details__text-1">Our range of pressure switches are designed to accurately measure and control the pressure of air and liquids, ensuring reliable performance in a variety of applications.</p>

              <!-- <p class="blog-details__text-1">A key feature of Danfoss pressure switches is their unique "snap-action" contact system. Unlike competitors that use micro switches, the Danfoss design maintains contact force until the exact moment of contact break. This innovative system ensures greater reliability and performance, setting Danfoss products apart in the market.</p> -->

              <p class="blog-details__text-1">Whether you need robust pressure control for industrial machinery, HVAC systems, or fluid management, our range of Danfoss pressure switches delivers unmatched accuracy and dependability. Trust Lucent Industrial Solutions to provide the high-quality pressure control solutions you need to keep your operations running smoothly.</p>
              <!-- accordion-start -->
              <button class="accordion">
              <h4>Features and benefits <i class="fas fa-angle-down"></i>
              </h4>
              </button>
              <div class="panel">
                <ul class="product_list_items">
                  <li> <i class="fas fa-angle-double-right"></i> Low differential switching </li>
                  <li> <i class="fas fa-angle-double-right"></i> Bellows technology </li>
                  <li> <i class="fas fa-angle-double-right"></i>  Designed for various applications </li>
                  <li> <i class="fas fa-angle-double-right"></i> Snap action contacts  </li>
                  <li> <i class="fas fa-angle-double-right"></i> 15 international approvals     </li>
                  <li> <i class="fas fa-angle-double-right"></i> High vibration stability</li>
                  <li> <i class="fas fa-angle-double-right"></i> Different sensing elements </li>
                </ul>
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
                      <a href="solenoid-valves">
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
                                      <a href="/assets/img/pressure-switches.pdf" target="_blank" class="services-details__sidebar-btn thm-btn">View Catalogue <span class="icon-dabble-arrow-right"></span>
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
