import React from 'react'

const page = () => {
    const pageContent = `
    <section class="page-header">
  <div class="page-header__bg" style="background-image: url(/assets/img/slider.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
  <div class="container">
    <div class="page-header__inner">
      <h2>Servo-Motors & Drives</h2>
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
          <li>Servo-Motors & Drives</li>
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
              <img src="/assets/img/servo-moters.png" class="img-thumbnail img-fluid" alt="">
            </div>
          </div>
          <div class="blog-details__content">
            <h3 class="blog-details__title-1">Servo-Motors & Drives</h3>

            <p class="blog-details__text-1">Servo motors and drives are integral components in modern automation systems, providing precise control over speed, position, and torque. These devices are essential for applications requiring high performance and accuracy, such as robotics, CNC machinery, and automated manufacturing processes. Servo motors, paired with their corresponding drives, offer exceptional responsiveness and efficiency, enabling smooth and controlled movements. They are designed to handle dynamic loads and rapid changes in motion, making them ideal for complex and demanding tasks. By utilising advanced feedback mechanisms, servo systems ensure consistent performance and adaptability to varying operational conditions, thereby enhancing the overall productivity and reliability of industrial applications. </p>

            
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
                <a href="/assets/img/servo-motors-drives.pdf" target="_blank" class="services-details__sidebar-btn thm-btn">View Catalogue <span class="icon-dabble-arrow-right"></span>
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
