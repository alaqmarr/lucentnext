import React from 'react'

const page = () => {
    const pageContent = `
    <section class="page-header">
  <div class="page-header__bg" style="background-image: url(/assets/img/slider.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
  <div class="container">
    <div class="page-header__inner">
      <h2>Position & Angle-sensors</h2>
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
          <li>Sensors & Transmitters</li>
          <li>
            <span class="icon-angle-left"></span>
          </li>
          <li>Position & Angle-sensors</li>
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
                <img src="/assets/img/encoders.jpg" class="img-thumbnail img-fluid" alt="">
              </div>
            </div>
            <div class="blog-details__content">
              <h3 class="blog-details__title-1">Position & Angle-sensors</h3>
              <p class="blog-details__text-1">A rotary encoder, commonly known as a shaft encoder, is an electro-mechanical device that translates angular positioning into output signals. This technology is critical for precise control and measurement in various applications. Through our partnership with industry leaders Hengstler and Dynapar, we offer a comprehensive range of encoders and resolvers designed to meet diverse operational needs. These high-quality devices are essential for applications in automation, robotics, industrial machinery, and more, providing exceptional accuracy and reliability. Whether you require incremental or absolute encoders, our products ensure optimal performance and efficiency in your systems.</p>




                              <!-- accordion-start -->
              <button class="accordion">
              <h4>Our Range <i class="fas fa-angle-down"></i>
              </h4>
              </button>
              <div class="panel">
                <ul class="product_list_items">
                  <li> <i class="fas fa-angle-double-right"></i> Rotary encoder</li>
                  <li> <i class="fas fa-angle-double-right"></i> Absolute encoder</li>
                  <li> <i class="fas fa-angle-double-right"></i> Incremental encoder</li>
                  <li> <i class="fas fa-angle-double-right"></i> Ex rotary encoder (ATEX / IECEx)</li>
                  <li> <i class="fas fa-angle-double-right"></i> Sin/Cos rotary encoder</li>
                  <li> <i class="fas fa-angle-double-right"></i> Profinet encoder</li>
                  <li> <i class="fas fa-angle-double-right"></i> Profibus encoder</li>
                </ul>
              </div>
              <!-- accordion-start -->
              <button class="accordion">
              <h4>Applications <i class="fas fa-angle-down"></i>
              </h4>
              </button>
              <div class="panel">
                <ul class="product_list_items">
                  <li> <i class="fas fa-angle-double-right"></i> Factory Automation</li>
                  <li> <i class="fas fa-angle-double-right"></i> Wind Energy</li>
                  <li> <i class="fas fa-angle-double-right"></i> Heavy Duty</li>
                  <li> <i class="fas fa-angle-double-right"></i> Oil & Gas</li>
                </ul>
              </div>
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
                                      <a href="/assets/img/encoders.pdf" target="_blank" class="services-details__sidebar-btn thm-btn">View Catalogue <span class="icon-dabble-arrow-right"></span>
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
