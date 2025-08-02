'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AICamerasPage() {
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
            <h2>AI Cameras</h2>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-angle-left"></span>
                </li>
                <li>Products</li>
                <li>
                  <span className="icon-angle-left"></span>
                </li>
                <li>AI Cameras</li>
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
                        src="/assets/img/driver-fatigue-monitoring.jpg"
                        alt="Driver Fatigue Monitoring"
                        className="img-thumbnail img-fluid"
                        width={800}
                        height={500}
                      />
                    </div>
                  </div>
                  <div className="blog-details__content">
                    <h3 className="blog-details__title-1">AI Cameras</h3>
                    <p className="blog-details__text-1">
                      Discover Lambert&apos;s advanced AI Cameras, featuring fully in-house software development and integration of cutting-edge visual imaging and deep learning technologies. Our driver status monitoring system employs facial recognition, head gesture analysis, and facial feature detection to assess driver behavior in real-time. By utilizing an aberrant driving behavior detection model, our system can identify signs of fatigue, distraction, smoking, phone usage, lack of seat belt, or absence of a driver.
                    </p>
                    <p className="blog-details__text-1">
                      In the event of any abnormal driving behavior, our system promptly issues audible and visual alarms, ensuring immediate attention to potential safety risks. Ideal for logistics, freight, public transportation, and intelligent driving applications, Lambert&apos;s AI Cameras are designed to enhance driving safety and streamline fleet management processes. Experience increased safety and efficiency with Lambert&apos;s innovative solutions for driver monitoring and fleet management.
                    </p>
                    <Image
                      src="/assets/img/ai.png"
                      alt="AI Camera Features"
                      width={350}
                      height={300}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 fixcontent">
                <div className="sidebar">
                  <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Related Products</h3>
                    <ul className="sidebar__category-list list-unstyled">
                      {[
                        { name: 'Sensors & Transmitters', href: '/pressure-transmitters' },
                        { name: 'Switches', href: '/pressure-switches' },
                        { name: 'Valves', href: '/industrial-valves' },
                        { name: 'Encoders & Resolvers', href: '/encoders-resolvers' },
                        { name: 'Counters', href: '/counters' },
                        { name: 'Industrial Printers and Cutters', href: '/industrial_printers_cutters' },
                        { name: 'Vacuum Contactors', href: '/vacuum-contactors' },
                        { name: 'Servo Motors & Drives', href: '/servo-motors-drives' },
                        { name: 'AI Cameras', href: '/ai-cameras' },
                        { name: 'Engine & Powerpack spares', href: '/engine-powerpack-spares' },
                      ].map((item, idx) => (
                        <li key={idx}>
                          <Link href={item.href}>
                            <span>
                              <i className="fas fa-angle-double-right"></i>
                            </span>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="sidebar mt-5">
                  <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Product Catalogue</h3>
                    <ul className="sidebar__category-list list-unstyled">
                      <div className="services-details__sidebar-btn-box">
                        <a
                          href="/assets/img/ai-camers.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
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
    </>
  )
}
