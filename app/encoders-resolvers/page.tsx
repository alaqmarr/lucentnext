import React from 'react';

const EncodersResolversPage: React.FC = () => {
  return (
    <div>
      {/* Page Header Section */}
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: 'url(/assets/img/slider.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>Encoders & Resolvers</h2>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <span className="icon-angle-left"></span>
                </li>
                <li>Products</li>
                <li>
                  <span className="icon-angle-left"></span>
                </li>
                <li>Encoders & Resolvers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="blog-details">
        <div className="container">
          <div className="main--content">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="blog-details__left">
                  <div className="blog-details__img-box">
                    <div className="blog-details__img">
                      <img
                        src="/assets/img/encoders.jpg"
                        className="img-thumbnail img-fluid"
                        alt="Encoders & Resolvers"
                      />
                    </div>
                  </div>
                  <div className="blog-details__content">
                    <h3 className="blog-details__title-1">Encoders & Resolvers</h3>
                    <p className="blog-details__text-1">
                      A rotary encoder, commonly known as a shaft encoder, is an electro-mechanical device that translates angular positioning into output signals. This technology is critical for precise control and measurement in various applications. Through our partnership with industry leaders Hengstler and Dynapar, we offer a comprehensive range of encoders and resolvers designed to meet diverse operational needs. These high-quality devices are essential for applications in automation, robotics, industrial machinery, and more, providing exceptional accuracy and reliability. Whether you require incremental or absolute encoders, our products ensure optimal performance and efficiency in your systems.
                    </p>

                    {/* Accordion Section: Applications */}
                    <button className="accordion">
                      <h4>
                        Applications <i className="fas fa-angle-down"></i>
                      </h4>
                    </button>
                    <div className="panel">
                      <ul className="product_list_items">
                        <li> <i className="fas fa-angle-double-right"></i> Factory Automation</li>
                        <li> <i className="fas fa-angle-double-right"></i> Motorfeedback</li>
                        <li> <i className="fas fa-angle-double-right"></i> Wind Energy</li>
                        <li> <i className="fas fa-angle-double-right"></i> Heavy Duty</li>
                        <li> <i className="fas fa-angle-double-right"></i> Oil & Gas</li>
                      </ul>
                    </div>

                    {/* Accordion Section: Our Range */}
                    <button className="accordion">
                      <h4>
                        Our Range <i className="fas fa-angle-down"></i>
                      </h4>
                    </button>
                    <div className="panel">
                      <ul className="product_list_items">
                        <li> <i className="fas fa-angle-double-right"></i> Rotary encoder</li>
                        <li> <i className="fas fa-angle-double-right"></i> Absolute encoder</li>
                        <li> <i className="fas fa-angle-double-right"></i> Incremental encoder</li>
                        <li> <i className="fas fa-angle-double-right"></i> Ex rotary encoder (ATEX / IECEx)</li>
                        <li> <i className="fas fa-angle-double-right"></i> Sin/Cos rotary encoder</li>
                        <li> <i className="fas fa-angle-double-right"></i> Profinet encoder</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Section */}
              <div className="col-xl-4 col-lg-4 fixcontent">
                <div className="sidebar">
                  <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Related Products</h3>
                    <ul className="sidebar__category-list list-unstyled">
                      <li>
                        <a href="pressure-transmitters">
                          <i className="fas fa-angle-double-right"></i> Sensors & Transmitters
                        </a>
                      </li>
                      <li>
                        <a href="pressure-switches">
                          <i className="fas fa-angle-double-right"></i> Switches
                        </a>
                      </li>
                      <li>
                        <a href="industrial-valves">
                          <i className="fas fa-angle-double-right"></i> Valves
                        </a>
                      </li>
                      <li>
                        <a href="encoders-resolvers">
                          <i className="fas fa-angle-double-right"></i> Encoders & Resolvers
                        </a>
                      </li>
                      <li>
                        <a href="counters">
                          <i className="fas fa-angle-double-right"></i> Counters
                        </a>
                      </li>
                      <li>
                        <a href="industrial_printers_cutters">
                          <i className="fas fa-angle-double-right"></i> Industrial Printers and Cutters
                        </a>
                      </li>
                      <li>
                        <a href="vacuum-contactors">
                          <i className="fas fa-angle-double-right"></i> Vacuum Contactors
                        </a>
                      </li>
                      <li>
                        <a href="servo-motors-drives">
                          <i className="fas fa-angle-double-right"></i> Servo Motors & Drives
                        </a>
                      </li>
                      <li>
                        <a href="ai-cameras">
                          <i className="fas fa-angle-double-right"></i> AI Cameras
                        </a>
                      </li>
                      <li>
                        <a href="engine-powerpack-spares">
                          <i className="fas fa-angle-double-right"></i> Engine & Powerpack spares
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Product Catalogue Section */}
                <div className="sidebar mt-5">
                  <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Product Catalogue</h3>
                    <ul className="sidebar__category-list list-unstyled">
                      <div className="services-details__sidebar-btn-box">
                        <a
                          href="/assets/img/encoders.pdf"
                          target="_blank"
                          className="services-details__sidebar-btn thm-btn"
                        >
                          View Catalogue <span className="icon-dabble-arrow-right"></span>
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
    </div>
  );
};

export default EncodersResolversPage;
