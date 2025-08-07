import React from 'react'

const page = () => {
    const pageContent = `
    <section class="page-header">
  <div class="page-header__bg" style="background-image: url(/assets/img/slider.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
  <div class="container">
    <div class="page-header__inner">
      <h2>Pressure-transmitters</h2>
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
          <li>Pressure-transmitters</li>
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
                <img src="/assets/img/pressure-transmitters.jpg" class="img-thumbnail img-fluid" alt="">
              </div>
            </div>
            <div class="blog-details__content">
              <h3 class="blog-details__title-1">Pressure transmitters</h3>
              <p class="blog-details__text-1">Our pressure transmitters ensure precise control of demanding industrial processes. Engineered for accuracy, durability, and long-term reliability, they perform consistently even in the most challenging environments. Our sensors are versatile, suitable for applications in water, marine, engines, mobile hydraulics, and HVAC, effectively bringing the advantages of IoT to life. With pressure ranges reaching up to 10,000 psig (689 bar), our portfolio of high-accuracy, robust pressure sensors provide industries with the flexibility to choose the perfect sensor for their specific needs.</p>
              
              <!-- <section class="faq-page">
                <div class="faq-page__left">
                  <div class="faq-one__right">
                    <div class="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                      <div class="accrodion">
                        <div class="accrodion-title">
                          <h4>Our pressure sensing product range</h4>
                        </div>
                        <div class="accrodion-content">
                          <div class="inner">
                            <ul class="product_list_items">
                              <li> <i class="fas fa-angle-double-right"></i> Differential Pressure Sensors </li>
                              <li>Barometric Pressure Sensors </li>
                              <li>Absolute Pressure Sensors  </li>
                              <li>Compound Pressure Sensors  </li>
                              <li>Gauge Pressure Sensors     </li>
                              <li>Vacuum Pressure Sensors</li>
                              <li>UHP Pressure Sensors </li>
                              <li>Submersible Pressure Transducers</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> -->
              

               <button class="accordion"><h4> Our pressure sensing product range <i class="fas fa-angle-down"></i>
                </h4></button>
              <div class="panel">
               <ul class="product_list_items">
             <li> <i class="fas fa-angle-double-right"></i> Differential Pressure Sensors </li>
             <li> <i class="fas fa-angle-double-right"></i> Barometric Pressure Sensors </li>
             <li> <i class="fas fa-angle-double-right"></i> Absolute Pressure Sensors  </li>
             <li> <i class="fas fa-angle-double-right"></i> Compound Pressure Sensors  </li>
             <li> <i class="fas fa-angle-double-right"></i> Gauge Pressure Sensors     </li>
             <li> <i class="fas fa-angle-double-right"></i> Vacuum Pressure Sensors</li>
             <li> <i class="fas fa-angle-double-right"></i> UHP Pressure Sensors </li>
             <li> <i class="fas fa-angle-double-right"></i> Submersible Pressure Transducers</li>
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
                    </span>Sensors & Transmitters
                  </a>
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
                                    <a href="/assets/img/pressure- transmitters.pdf" target="_blank" class="services-details__sidebar-btn thm-btn">View Catalogue <span class="icon-dabble-arrow-right"></span>
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

