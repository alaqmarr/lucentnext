import React from 'react'

const page = () => {
  const pageContent = `
  
  <section class="page-header">
  <div class="page-header__bg" style="background-image: url(/assets/img/slider.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
  <div class="container">
    <div class="page-header__inner">
      <h2>Commissioning</h2>
      <div class="thm-breadcrumb__box">
        <ul class="thm-breadcrumb list-unstyled">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <span class="icon-angle-left"></span>
          </li>
          <li>Services</li>
          
          <li>
            <span class="icon-angle-left"></span>
          </li>
          <li>Commissioning</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section class="blog-details service_details">
  <div class="container">
    <div class="main--content">
      <div class="row">
        <div class="col-xl-8 col-lg-8">
          <div class="blog-details__left">
            <div class="blog-details__img-box">
              <div class="blog-details__img">
                <img src="/assets/img/s2.jpg" class="img-thumbnail img-fluid" alt="">
              </div>
            </div>
            <div class="blog-details__content">
              <h3 class="blog-details__title-1">Commissioning</h3>
              <p class="blog-details__text-1">Lucent Industrial Solutions offers expert commissioning services designed to ensure your systems and equipment are installed, tested, and fully operational to meet your specific requirements. Our comprehensive approach sets the foundation by verifying that all components and systems are functioning optimally from the start.</p>
              <h4 class="mt-3 mb-3">Our Commissioning Services Include</h4>
              <ul>
                <li><strong>Initial Setup and Installation</strong>
                  <ol>
                    <li>Equipment installation per specifications and standards.</li>
                    <li>Integration with existing infrastructure.</li>
                  </ol>
                </li>
                <li> <strong>System Testing and Calibration</strong>
                  <ol>
                    <li>Thorough component testing.</li>
                    <li>Equipment calibration for accuracy.</li>
                  </ol>
                </li>
                <li><strong>Functional Verification</strong>
                  <ol>
                    <li>Performance verification under real-world conditions.</li>
                    <li>Scenario simulations to identify issues.</li>
                  </ol>
                </li>
                <li> <strong>Documentation and Reporting</strong>
                  <ol>
                    <li>Comprehensive commissioning documentation.</li>
                    <li>Detailed activity and outcome reports.</li>
                  </ol>
                </li>
                <li> <strong>Training and Handover</strong>
                  <ol>
                    <li>Operational staff training.</li>
                    <li>Formal system handover.</li>
                  </ol>
                </li>
                <li> <strong>Post-Commissioning Support</strong>
                  <ol>
                    <li>Ongoing support for initial issues.</li>
                    <li>Periodic performance reviews.</li>
                  </ol>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 fixcontent">
          <div class="sidebar">
            <div class="sidebar__single sidebar__category">
              <h3 class="sidebar__title">Related Services</h3>
              <ul class="sidebar__category-list list-unstyled">
                <li>
                  <a href="maintenance-repairs">
                    <span>
                      <i class="fas fa-angle-double-right"></i>
                    </span>Maintenance & repairs </a>
                  </li>
                  <li>
                    <a href="commissioning">
                      <span>
                        <i class="fas fa-angle-double-right"></i>
                      </span>Commissioning </a>
                    </li>
                    <li>
                      <a href="data-analytics-predictive-maintenance">
                        <span>
                          <i class="fas fa-angle-double-right"></i>
                        </span>Data Analytics & Predictive Maintenance </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- <div class="sidebar mt-5">
                  <div class="sidebar__single sidebar__category">
                    <h3 class="sidebar__title">Pressure transmitters catlog</h3>
                    <ul class="sidebar__category-list list-unstyled">
                      <div class="services-details__sidebar-btn-box">
                        <a href="javascript:void(0);" target="_blank" class="services-details__sidebar-btn thm-btn">View Catlog <span class="icon-dabble-arrow-right"></span>
                      </a>
                    </div>
                  </ul>
                </div>
              </div> -->
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
