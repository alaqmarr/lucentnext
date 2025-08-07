import React from 'react'

const page = () => {
    const pageContent = `
    <section class="page-header">
  <div class="page-header__bg" style="background-image: url(/assets/img/slider.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>
  <div class="container">
    <div class="page-header__inner">
      <h2>Solenoid-Valves</h2>
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
          <li>Valves</li>
          <li>
            <span class="icon-angle-left"></span>
          </li>
          <li>Solenoid-Valves</li>
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
                <img src="/assets/img/solenoid-valves.jpg" class="img-thumbnail img-fluid" alt="">
              </div>
            </div>
            <div class="blog-details__content">
              <h3 class="blog-details__title-1">Solenoid-Valves</h3>
              <p class="blog-details__text-1">Solenoid valves are electromechanical devices used to control the flow of fluids, such as liquids and gases, in a wide range of industrial applications. These valves offer precise control and automation, making them indispensable components in numerous industries.</p>
              <!-- accordion-section-start -->
              <!-- accordion-section-end -->
              <button class="accordion">
                <h4>Key Features and Benefits <i class="fas fa-angle-down"></i>
                </h4>
              </button>
              <div class="panel">
                <ul class="product_list_items">
                  <li>
                    <strong>
                      <i class="fas fa-angle-double-right"></i> Precision Control: </strong> Solenoid valves offer precise fluid flow control, ensuring operational consistency, waste reduction, and maximum efficiency in industrial processes.
                  </li>
                  <li>
                    <strong>
                      <i class="fas fa-angle-double-right"></i> Fast Response Time: </strong> Solenoid valves offer rapid actuation for swift flow adjustments, vital for applications requiring immediate response or emergency shutdowns.
                  </li>
                  <li>
                    <strong>
                      <i class="fas fa-angle-double-right"></i> Versatility: </strong> Whether it's controlling water, air, gas, or corrosive chemicals, there's a solenoid valve designed to meet specific requirements.
                  </li>
                  <li>
                    <strong>
                      <i class="fas fa-angle-double-right"></i> Energy Efficiency: </strong> Solenoid valves consume minimal energy during operation, making them cost-effective solutions for automation and control systems.
                  </li>
                  <li>
                    <strong>
                      <i class="fas fa-angle-double-right"></i> Reliability and Durability: </strong> Constructed from robust materials and designed for long-term performance, this reliability minimises downtime and maintenance costs, ensuring uninterrupted operation.
                  </li>
                </ul>
              </div>


              <button class="accordion"><h4> Applications <i class="fas fa-angle-down"></i>
                </h4></button>
              <div class="panel">
               <ul class="product_list_items">
                <li>
                  <strong> <i class="fas fa-angle-double-right"></i> Manufacturing:</strong> Used in pneumatic and hydraulic systems for controlling the flow of compressed air, lubricants, and coolants in machinery and equipment.
                </li>
                <li>
                  <strong> <i class="fas fa-angle-double-right"></i> Oil and Gas:</strong> Employed in drilling operations, pipeline control, and refining processes for regulating the flow of oil, gas, and various chemicals.
                </li>
                <li>
                  <strong> <i class="fas fa-angle-double-right"></i> Water and Wastewater Treatment:</strong> Integral components in water purification, irrigation systems, and sewage treatment plants for managing the flow of water and chemicals.
                </li>
                <li>
                  <strong> <i class="fas fa-angle-double-right"></i> HVAC and Refrigeration:</strong> Utilised in heating, ventilation, air conditioning, and refrigeration systems to control the flow of refrigerants, water, and other fluids.
                </li>
                <li>
                  <strong> <i class="fas fa-angle-double-right"></i> Food and Beverage:</strong> Essential for controlling the flow of liquids and gases in processing, packaging, and dispensing operations, ensuring product quality and safety.
                </li>
              </ul>
              </div>
              
             
              <!-- <p class="blog-details__text-1 pt-3">Our range of solenoid valves play a crucial role in fluid control and automation across a multitude of industries. Their precision, reliability, and versatility make them indispensable components in modern industrial processes, contributing to improved efficiency, productivity, and safety.</p> -->
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
                  <a href="/assets/img/solenoid-valves.pdf" target="_blank" class="services-details__sidebar-btn thm-btn">View Catalogue <span class="icon-dabble-arrow-right"></span>
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
