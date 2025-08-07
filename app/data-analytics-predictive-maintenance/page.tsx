import React from 'react'

const page = () => {
  const pageContent = `
  <section class="page-header">
  <div class="page-header__bg" style="background-image: url(/assets/img/slider.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
  <div class="container">
    <div class="page-header__inner">
      <h2>Data-Analytics & Predictive-Maintenance</h2>
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
          <li>Data-Analytics & Predictive-Maintenance</li>
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
              <img src="/assets/img/s3.jpg" class="img-thumbnail img-fluid" alt="">
            </div>
          </div>
          <div class="blog-details__content">
            <h3 class="blog-details__title-1">Data-Analytics & Predictive-Maintenance</h3>

            <p class="blog-details__text-1">Lucent Industrial Solutions offers comprehensive solutions, including a dedicated data analytics team, to meet your business needs. Our team, led by experienced professionals, is equipped with the latest tools and techniques to analyze and interpret complex datasets. Whether you're seeking valuable insights, process optimization, or data-driven decision-making, our experts are here to help.</p>

            <p class="blog-details__text-1">
            In collaboration with our sister group, Lambert Analytics Technology, we bring a wealth of expertise in data analytics. Notable projects include real-time locomotive health monitoring and AI-powered driver fatigue monitoring in the mobility segment. From predictive analytics to performance monitoring, our data analytics services are tailored to meet your specific requirements, delivering actionable insights that drive success for your business.

            </p>
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
