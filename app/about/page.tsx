'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutUsSection() {
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
            <h2>About Us</h2>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="icon-angle-left"></span>
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <div className="about-two__left">
                <div className="section-title text-left sec-title-animation animation-style1">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">ABOUT US</span>
                  </div>
                  <h2 className="section-title__title title-animation">
                    Welcome to <span>Lucent Industrial Solutions L.L.C.</span>
                  </h2>
                </div>
                <p className="about-two__text">
                  We are a dynamic instrumentation and control automation company established in 2024 in the Emirate of Dubai, United Arab Emirates. We specialize in providing cutting-edge solutions in measuring and control systems, catering to a wide range of industries.
                </p>
                <p className="about-two__text">
                  Our company is proud to be a sister company to{' '}
                  <a href="https://oasis-group.co.in/" target="_blank" rel="noopener noreferrer">
                    Oasis Group
                  </a>, a renowned business based in Hyderabad, India, known for its expertise and excellence in the field. This partnership enables us to leverage over 50 years of combined industry experience, allowing us to deliver best-in-class products and services tailored to meet the unique needs of our customers.
                </p>
                <p className="about-two__text">
                  At Lucent Industrial Solutions, we understand the importance of precision and reliability in instrumentation and control systems. That's why we are committed to offering top-quality products that adhere to the highest industry standards. Our team of skilled professionals is dedicated to providing innovative solutions that optimise processes, improve efficiency, and drive success for our clients across various industries.
                </p>
              </div>
            </div>
            <div className="col-xl-12 d-lg-block d-xl-block d-md-none d-none">
              <div className="about-two__right">
                <div className="about-two__img wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                  <Image
                    src="/assets/img/abt-img-2.png"
                    alt="About Lucent Industrial Solutions"
                    className="w-100"
                    width={1200}
                    height={600}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
