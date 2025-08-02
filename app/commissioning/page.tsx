'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function CommissioningPage() {
  return (
    <>
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
            <h2>Commissioning</h2>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-angle-left"></span>
                </li>
                <li>Services</li>
                <li>
                  <span className="icon-angle-left"></span>
                </li>
                <li>Commissioning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-details service_details">
        <div className="container">
          <div className="main--content">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="blog-details__left">
                  <div className="blog-details__img-box">
                    <div className="blog-details__img">
                      <Image
                        src="/assets/img/s2.jpg"
                        alt="Commissioning"
                        className="img-thumbnail img-fluid"
                        width={800}
                        height={500}
                      />
                    </div>
                  </div>
                  <div className="blog-details__content">
                    <h3 className="blog-details__title-1">Commissioning</h3>
                    <p className="blog-details__text-1">
                      Lucent Industrial Solutions offers expert commissioning services designed to ensure your systems and equipment are installed, tested, and fully operational to meet your specific requirements. Our comprehensive approach sets the foundation by verifying that all components and systems are functioning optimally from the start.
                    </p>

                    <h4 className="mt-3 mb-3">Our Commissioning Services Include</h4>
                    <ul>
                      <li>
                        <strong>Initial Setup and Installation</strong>
                        <ol>
                          <li>Equipment installation per specifications and standards.</li>
                          <li>Integration with existing infrastructure.</li>
                        </ol>
                      </li>
                      <li>
                        <strong>System Testing and Calibration</strong>
                        <ol>
                          <li>Thorough component testing.</li>
                          <li>Equipment calibration for accuracy.</li>
                        </ol>
                      </li>
                      <li>
                        <strong>Functional Verification</strong>
                        <ol>
                          <li>Performance verification under real-world conditions.</li>
                          <li>Scenario simulations to identify issues.</li>
                        </ol>
                      </li>
                      <li>
                        <strong>Documentation and Reporting</strong>
                        <ol>
                          <li>Comprehensive commissioning documentation.</li>
                          <li>Detailed activity and outcome reports.</li>
                        </ol>
                      </li>
                      <li>
                        <strong>Training and Handover</strong>
                        <ol>
                          <li>Operational staff training.</li>
                          <li>Formal system handover.</li>
                        </ol>
                      </li>
                      <li>
                        <strong>Post-Commissioning Support</strong>
                        <ol>
                          <li>Ongoing support for initial issues.</li>
                          <li>Periodic performance reviews.</li>
                        </ol>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 fixcontent">
                <div className="sidebar">
                  <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Related Services</h3>
                    <ul className="sidebar__category-list list-unstyled">
                      <li>
                        <Link href="/maintenance-repairs">
                          <span>
                            <i className="fas fa-angle-double-right"></i>
                          </span>
                          Maintenance & Repairs
                        </Link>
                      </li>
                      <li>
                        <Link href="/commissioning">
                          <span>
                            <i className="fas fa-angle-double-right"></i>
                          </span>
                          Commissioning
                        </Link>
                      </li>
                      <li>
                        <Link href="/data-analytics-predictive-maintenance">
                          <span>
                            <i className="fas fa-angle-double-right"></i>
                          </span>
                          Data Analytics & Predictive Maintenance
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Optional Section: Uncomment when ready to use
                <div className="sidebar mt-5">
                  <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Pressure Transmitters Catalog</h3>
                    <ul className="sidebar__category-list list-unstyled">
                      <div className="services-details__sidebar-btn-box">
                        <a
                          href="javascript:void(0);"
                          target="_blank"
                          className="services-details__sidebar-btn thm-btn"
                        >
                          View Catalog <span className="icon-dabble-arrow-right"></span>
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
