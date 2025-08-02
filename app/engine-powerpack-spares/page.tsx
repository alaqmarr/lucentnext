import Image from "next/image";

export default function EnginePowerpackSpares() {
  return (
    <>
      <section className="page-header">
        <div 
          className="page-header__bg" 
          style={{ 
            backgroundImage: "url(/assets/img/slider.jpg)", 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat" 
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>Engine & Powerpack spares</h2>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <a href="index">Home</a>
                </li>
                <li>
                  <span className="icon-angle-left"></span>
                </li>
                <li>Products</li>
                <li>
                  <span className="icon-angle-left"></span>
                </li>
                <li>Engine & Powerpack spares</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-details">
        <div className="container">
          <div className="main--content">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="blog-details__left">
                  <div className="blog-details__img-box">
                    <div className="blog-details__img">
                      <Image 
                        src="/assets/img/engineering-new-img.jpg" 
                        className="img-thumbnail img-fluid" 
                        alt="Engine and Powerpack spares"
                        width={800}
                        height={600}
                      />
                    </div>
                  </div>
                  <div className="blog-details__content">
                    <h3 className="blog-details__title-1">Engine and Power Pack Spares: Ensuring Continuous Performance</h3>
                    <p className="blog-details__text-1">Maintaining the performance and reliability of engines and power packs is essential for seamless operations across various industries. At our facility, we offer a comprehensive range of high-quality spares designed to keep your equipment running smoothly.</p>

                    <button className="accordion">
                      <h4>Key Components<i className="fas fa-angle-down"></i></h4>
                    </button>
                    <div className="panel">
                      <ul className="product_list_items">
                        <li><strong><i className="fas fa-angle-double-right"></i> Filters:</strong> Vital for maintaining clean fuel, air, and oil systems, our filters prevent contaminants from entering crucial engine components, ensuring optimal performance and longevity.</li>
                        <li><strong><i className="fas fa-angle-double-right"></i> Gaskets and Seals:</strong> Reliable gaskets and seals are essential for preventing fluid leaks and maintaining proper compression within engine cylinders and hydraulic systems.</li>
                        <li><strong><i className="fas fa-angle-double-right"></i> Belts and Pulleys:</strong> These components ensure efficient power transmission within the engine and power pack, contributing to smooth operation and reduced downtime.</li>
                        <li><strong><i className="fas fa-angle-double-right"></i> Fuel Injectors and Pumps:</strong> Our high-performance fuel injectors and pumps ensure precise fuel delivery, enhancing engine efficiency and performance.</li>
                        <li><strong><i className="fas fa-angle-double-right"></i> Cooling System Parts:</strong> From radiators to water pumps, our cooling system parts help regulate engine temperature, preventing overheating and preserving engine health.</li>
                      </ul>
                    </div>

                    <button className="accordion">
                      <h4>Benefits of Choosing Our Spares<i className="fas fa-angle-down"></i></h4>
                    </button>
                    <div className="panel">
                      <ul className="product_list_items">
                        <li><i className="fas fa-angle-double-right"></i> Quality Assurance: Our spares undergo rigorous testing to ensure they meet or exceed industry standards, guaranteeing reliability and durability.</li>
                        <li><i className="fas fa-angle-double-right"></i> Compatibility: Designed to fit seamlessly with a wide range of engine and power pack models, our spares ensure hassle-free installation and optimal performance.</li>
                        <li><i className="fas fa-angle-double-right"></i> Cost-Effectiveness: By investing in high-quality spares, you can minimize the risk of unexpected breakdowns and costly repairs, maximising the lifespan of your equipment and reducing overall maintenance costs.</li>
                      </ul>
                    </div>
                    
                    <p className="blog-details__text-1 pt-5">
                      With our comprehensive range of engine and power pack spares, you can rest assured that your equipment will continue to operate at peak performance levels. Trust us to provide you with the quality spares you need to maintain the reliability and efficiency of your engines and power packs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 fixcontent">
                <div className="sidebar">
                  <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Related Products</h3>
                    <ul className="sidebar__category-list list-unstyled">
                      <li>
                        <a href="pressure-transmitters">
                          <span><i className="fas fa-angle-double-right"></i></span>Sensors & Transmitters
                        </a>
                      </li>
                      <li>
                        <a href="pressure-switches">
                          <span><i className="fas fa-angle-double-right"></i></span>Switches
                        </a>
                      </li>
                      <li>
                        <a href="industrial-valves">
                          <span><i className="fas fa-angle-double-right"></i></span>Valves
                        </a>
                      </li>
                      <li>
                        <a href="encoders-resolvers">
                          <span><i className="fas fa-angle-double-right"></i></span>Encoders & Resolvers
                        </a>
                      </li>
                      <li>
                        <a href="counters">
                          <span><i className="fas fa-angle-double-right"></i></span>Counters
                        </a>
                      </li>
                      <li>
                        <a href="industrial_printers_cutters">
                          <span><i className="fas fa-angle-double-right"></i></span>Industrial Printers and Cutters
                        </a>
                      </li>
                      <li>
                        <a href="vacuum-contactors">
                          <span><i className="fas fa-angle-double-right"></i></span>Vacuum Contactors
                        </a>
                      </li>
                      <li>
                        <a href="servo-motors-drives">
                          <span><i className="fas fa-angle-double-right"></i></span>Servo Motors & Drives
                        </a>
                      </li>
                      <li>
                        <a href="ai-cameras">
                          <span><i className="fas fa-angle-double-right"></i></span>AI cameras
                        </a>
                      </li>
                      <li>
                        <a href="engine-powerpack-spares">
                          <span><i className="fas fa-angle-double-right"></i></span>Engine & Powerpack spares
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}