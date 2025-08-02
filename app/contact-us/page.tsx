import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Lucent Industrial Solutions</title>
        <meta name="description" content="Get in touch with Lucent Industrial Solutions." />
      </Head>

      {/* Page Header Section */}
      <section className="page-header relative">
        <div
          className="page-header__bg absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/assets/img/slider.jpg)' }}
        ></div>
        <div className="container relative z-10">
          <div className="page-header__inner py-16 text-center">
            <h2 className="text-white text-4xl font-semibold">Contact Us</h2>
            <div className="thm-breadcrumb__box mt-4">
              <ul className="thm-breadcrumb flex justify-center space-x-2 list-none">
                <li><a href="/" className="text-white hover:underline">Home</a></li>
                <li><span className="text-white">/</span></li>
                <li className="text-white">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Page Section */}
      <section className="contact-page py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:flex-nowrap">
            {/* Left Column (Image) */}
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
              <div className="contact-page__left">
                <div className="contact-page__img">
                  <img
                    src="/assets/img/contact-us-image.jpg"
                    alt="Contact Us"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Right Column (Contact Info) */}
            <div className="lg:w-1/2 w-full">
              <div className="contact-page__right">
                <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
                <ul className="contact-page__contact-list space-y-8">
                  <li>
                    <div className="flex items-center space-x-4">
                      <span className="icon-location text-blue-500 text-2xl"><i className="fas fa-map-marker-alt"></i></span>
                      <div>
                        <h3 className="font-semibold">Location</h3>
                        <p>827, Business Village - A,<br />Port Saeed, Dubai, United Arab Emirates</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center space-x-4">
                      <span className="icon-call text-blue-500 text-2xl"><i className="fas fa-phone-alt"></i></span>
                      <div>
                        <h3 className="font-semibold">Phone number</h3>
                        <p><a href="tel:+97142542350" className="text-blue-600">+971 4 254 2350</a></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center space-x-4">
                      <span className="icon-email text-blue-500 text-2xl"><i className="fas fa-envelope"></i></span>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p><a href="mailto:office@lucent-is.com" className="text-blue-600">office@lucent-is.com</a></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center space-x-4">
                      <span className="text-blue-500 text-2xl"><i className="fab fa-linkedin-in"></i></span>
                      <div>
                        <h3 className="font-semibold">Follow Us</h3>
                        <p><a href="https://www.linkedin.com/company/lucent-is/" target="_blank" className="text-blue-600">linkedin.com/company/lucent-is</a></p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Form Section */}
      <section className="contact-three py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-title__tagline-box mb-4">
              <span className="section-title__tagline text-xl">Get in touch</span>
            </div>
            <h2 className="section-title__title text-3xl font-semibold">Send us a message</h2>
          </div>

          <div className="flex flex-wrap">
            {/* Form Section */}
            <div className="lg:w-1/2 w-full">
              <form className="contact-three__form">
                <div className="flex flex-wrap space-x-4">
                  <div className="w-full lg:w-1/2 mb-4">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control w-full py-3 px-4 border border-gray-300 rounded-md"
                        required
                      />
                      <label htmlFor="name">Name</label>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 mb-4">
                    <div className="form-floating">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control w-full py-3 px-4 border border-gray-300 rounded-md"
                        required
                      />
                      <label htmlFor="email">E-mail</label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap space-x-4">
                  <div className="w-full lg:w-1/2 mb-4">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        className="form-control w-full py-3 px-4 border border-gray-300 rounded-md"
                        required
                      />
                      <label htmlFor="phone">Phone Number</label>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 mb-4">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="form-control w-full py-3 px-4 border border-gray-300 rounded-md"
                        required
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                </div>

                <div className="w-full mb-4">
                  <div className="form-floating">
                    <textarea
                      name="message"
                      placeholder="Write your Message"
                      className="w-full py-3 px-4 border border-gray-300 rounded-md"
                      rows={6}
                      required
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="thm-btn contact-three__btn py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Send message
                  <span className="icon-dabble-arrow-right ml-2"></span>
                </button>
              </form>
            </div>

            {/* Google Map Section */}
            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57734.0470069248!2d55.2860076!3d25.2578688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f73e3bad2fe17%3A0x4c7af668c3dad328!2sLucent%20Industrial%20Solutions%20L.L.C!5e0!3m2!1sen!2sin!4v1741600126887!5m2!1sen!2sin"
                className="w-full h-96 border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
