import React from 'react'

const page = () => {
    const pageContent = `
    
    <section class="page-header">
  <div class="page-header__bg" style="background-image: url(/assets/img/slider.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
  <div class="container">
    <div class="page-header__inner">
      <h2>Vacuum-Contactors</h2>
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
          <li>Vacuum-Contactors</li>
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
                <img src="/assets/img/vacuum-contactors.jpg" class="img-thumbnail img-fluid" alt="">
              </div>
            </div>
            <div class="blog-details__content">
              <h3 class="blog-details__title-1">Vacuum-Contactors</h3>
              <p class="blog-details__text-1">We offer Joslyn Clark's Vacuum Contactors and Starters, renowned for their excellence in tough industrial environments. These products are specially designed to meet the demands of challenging applications, ensuring reliable performance and durability.</p>
              <p class="blog-details__text-1">Our Vacuum Contactors and Starters feature a compact design that provides exceptional flexibility for retrofitting air break contactors. This means that existing applications can seamlessly transition to our products without the need for extensive modifications, saving both time and money on maintenance costs and downtime.</p>
              <!-- accordion-section -->
              <button class="accordion">
              <h4>Key Features<i class="fas fa-angle-down"></i>
              </h4>
              </button>
              <div class="panel">
                <ul class="product_list_items">
                  <li> <i class="fas fa-angle-double-right"></i> <strong>Front Accessible </strong> Easy access for maintenance and servicing.</li>

                  <li> <i class="fas fa-angle-double-right"></i> <strong> Quiet, Rugged Design</strong> Ensures smooth and reliable operation in demanding industrial settings.</li>

                  <li> <i class="fas fa-angle-double-right"></i> <strong>Long Mechanical & Electrical Life</strong> Built to withstand the rigors of continuous use, providing years of reliable service.</li>

                  <li> <i class="fas fa-angle-double-right"></i> <strong>Standard with On/OFF Indicator</strong> Offers visual indication of operation status for added convenience.</li>

                  <li> <i class="fas fa-angle-double-right"></i> <strong>Mounts in any plane:</strong> Versatile mounting options for easy integration into existing systems.</li>

                  <li> <i class="fas fa-angle-double-right"></i> <strong>Compact, Lightweight</strong> Space-saving design without compromising on performance.</li>

                  <li> <i class="fas fa-angle-double-right"></i> <strong>Class 20 Bi-metallic overload relays</strong> Ensures protection against overloads for enhanced safety.</li>

                  <li class="align_text"> <i class="fas fa-angle-double-right"></i> <strong>Side mounted auxiliary contacts</strong> Additional contact options for increased flexibility in control circuitry.</li>
                  
                </ul>
              </div>
              <!-- end-accordion-section -->
              
              
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
                                      <a href="/assets/img/vacuum-contactors.pdf" target="_blank" class="services-details__sidebar-btn thm-btn">View Catalogue <span class="icon-dabble-arrow-right"></span>
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
