import React from 'react'

const page = () => {
    const pageContent = `
    <section class="page-header">
  <div class="page-header__bg" style="background-image: url(/assets/img/slider.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
  <div class="container">
    <div class="page-header__inner">
      <h2>Temperature-sensors</h2>
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
          <li>Temperature-sensors</li>
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
              <img src="/assets/img/temperature-sensors.jpg" class="img-thumbnail img-fluid" alt="">
            </div>
          </div>
          <div class="blog-details__content">
            <h3 class="blog-details__title-1">Industrial temperature sensors</h3>

            <p class="blog-details__text-1">Industrial temperature sensors play a critical role in maintaining the efficiency and safety of a wide range of industrial processes. Our range of sensors are designed to withstand harsh conditions and deliver accurate temperature measurements, ensuring optimal performance and reliability.</p>

             <p class="blog-details__text-1">High accuracy ensures that processes run efficiently and safely, minimising the risk of errors and defects. Built to endure extreme temperatures, mechanical stress, and corrosive environments, these industrial temperature sensors are made from robust materials. This durability ensures a long operational life and reduces the need for frequent replacements, thus lowering maintenance costs.</p>



              <button class="accordion">
                <h4>Our range <i class="fas fa-angle-down"></i>
                </h4>
              </button>
              <div class="panel">
                <p class="blog-details__text-2"> <strong>Slot resistance thermometer</strong> to measure and/or control the winding temperature of electrical motors and generators.</p>

            <p class="blog-details__text-2"> <strong>Screw-in thermometer</strong> for each thread, the sensors can be screwed directly into a threaded hole with screw-in housing, clamp screw connections or protective fitting and installed safely at the measuring point.
          
          </p>  
            <p class="blog-details__text-2"> <strong>Semiconductors and thermistors</strong> predestined for thermal monitoring of electrical machinery, especially limit temperatures.</p>

            <p class="blog-details__text-2"> <strong>Thermocouples</strong> Measure the temperature across the very large temperature range of -200°C to +1700°C. They are used in plant construction, mechanical engineering and apparatus engineering, as well as for temperature determination in molten salt and metal.</p>

            <p class="blog-details__text-2"> <strong>Temperature sensors for rail</strong> used all over the world in high-speed trains, cargo and regional trains, metros and trams, as well as hybrid buses and fuel cell trains.</p>
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
                <a href="/assets/img/temperature-sensors.pdf" target="_blank" class="services-details__sidebar-btn thm-btn">View Catalogue <span class="icon-dabble-arrow-right"></span>
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
