import React from 'react';

const DataAnalyticsPredictiveMaintenancePage: React.FC = () => {
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
            <h2>Data-Analytics & Predictive-Maintenance</h2>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <span className="icon-angle-left"></span>
                </li>
                <li>Services</li>
                <li>
                  <span className="icon-angle-left"></span>
                </li>
                <li>Data-Analytics & Predictive-Maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="blog-details service_details">
        <div className="container">
          <div className="main--content">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="blog-details__left">
                  <div className="blog-details__img-box">
                    <div className="blog-details__img">
                      <img
                        src="/assets/img/s3.jpg"
                        className="img-thumbnail img-fluid"
                        alt="Data Analytics"
                      />
                    </div>
                  </div>
                  <div className="blog-details__content">
                    <h3 className="blog-details__title-1">
                      Data-Analytics & Predictive-Maintenance
                    </h3>

                    <p className="blog-details__text-1">
                      Lucent Industrial Solutions offers comprehensive solutions, including a dedicated data analytics team, to meet your business needs. Our team, led by experienced professionals, is equipped with the latest tools and techniques to analyze and interpret complex datasets. Whether you're seeking valuable insights, process optimization, or data-driven decision-making, our experts are here to help.
                    </p>

                    <p className="blog-details__text-1">
                      In collaboration with our sister group, Lambert Analytics Technology, we bring a wealth of expertise in data analytics. Notable projects include real-time locomotive health monitoring and AI-powered driver fatigue monitoring in the mobility segment. From predictive analytics to performance monitoring, our data analytics services are tailored to meet your specific requirements, delivering actionable insights that drive success for your business.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 fixcontent">
                <div className="sidebar">
                  <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Related Services</h3>
                    <ul className="sidebar__category-list list-unstyled">
                      <li>
                        <a href="maintenance-repairs">
                          <i className="fas fa-angle-double-right"></i> Maintenance & repairs
                        </a>
                      </li>
                      <li>
                        <a href="commissioning">
                          <i className="fas fa-angle-double-right"></i> Commissioning
                        </a>
                      </li>
                      <li>
                        <a href="data-analytics-predictive-maintenance">
                          <i className="fas fa-angle-double-right"></i> Data Analytics & Predictive Maintenance
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
    </div>
  );
};

export default DataAnalyticsPredictiveMaintenancePage;
