import React from 'react'

const page = () => {
    const pageContent = `
    <section class="page-header">
  <div class="page-header__bg" style="background-image: url(/assets/img/slider.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
  <div class="container">
    <div class="page-header__inner">
      <h2>Maintenance & repairs</h2>
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
          <li>Maintenance & repairs</li>
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
              <img src="/assets/img/s1.jpg" class="img-thumbnail img-fluid" alt="">
            </div>
          </div>
          <div class="blog-details__content">
            <h3 class="blog-details__title-1">Maintenance & repairs</h3>

            <p class="blog-details__text-1">Lucent Industrial Solutions is dedicated to providing top-notch maintenance and repair services to ensure your systems operate smoothly and efficiently. Our team of skilled technicians offers prompt and reliable service, minimizing downtime and maximising the performance of your equipment. With a comprehensive approach to maintenance and repair, we cover a wide range of needs to keep your operations seamless and worry-free.</p>

            
            <p class="blog-details__text-1">Trust Lucent Industrial Solutions to keep your operations running seamlessly and worry-free. Our comprehensive maintenance and repair services are designed to maximize the performance and reliability of your equipment, ensuring that your systems operate efficiently and effectively.
            </p>

            <h4 class="mt-3 mb-3">Our Services Include </h4>

            <ul>
              <li><strong>Preventive Maintenance</strong></li>
              <li><strong>Corrective Maintenance</strong></li>
              <li><strong>Comprehensive Inspections</strong></li>
              <li><strong>Parts Replacement</strong></li>
              <li><strong>System Upgrades</strong></li>
              <li><strong>Technical Support</strong></li>
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
