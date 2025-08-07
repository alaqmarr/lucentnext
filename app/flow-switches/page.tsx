import React from 'react'

const page = () => {
    const pageContent = `
    <section class="page-header">
  <div class="page-header__bg" style="background-image: url(/assets/img/slider.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
  <div class="container">
    <div class="page-header__inner">
      <h2>Flow-switches</h2>
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
          <li>Flow-switches</li>
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
              <img src="/assets/img/flow-switches.jpg" class="img-thumbnail img-fluid" alt="">
            </div>
          </div>
          <div class="blog-details__content">
            <h3 class="blog-details__title-1">Flow-switches</h3>

            <p class="blog-details__text-1">We provide a diverse selection of flow switch configurations suitable for applications in liquids or gases. These switches are crafted using high-quality, corrosion-resistant materials, ensuring durability in challenging environments.</p>

            <p class="blog-details__text-2">Our product lineup includes piston, shuttle, and paddle type flow switch models, as well as electronic switches. These switches come in different versions, offering fixed or adjustable actuation settings, viscosity compensation, and high-pressure capabilities. We also offer in-line models and designs to accommodate different mounting or space constraints. Whatever your flow monitoring needs, our comprehensive range of flow switches provides reliable solutions for diverse industrial applications.</p>
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
                <a href="/assets/img/flow-switches.pdf" target="_blank" class="services-details__sidebar-btn thm-btn">View Catalogue <span class="icon-dabble-arrow-right"></span>
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
