import React from 'react'

const page = () => {
  const pageContent = `
  <section class="page-header">
    <div class="page-header__bg" style="background-image: url(/assets/img/slider.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;">
    </div>
    <div class="container">
        <div class="page-header__inner">
            <h2>Contact Us</h2>
            <div class="thm-breadcrumb__box">
                <ul class="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span class="icon-angle-left"></span></li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    </div>
</section>
<section class="contact-page">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 d-lg-block d-md-none d-none">
                        <div class="contact-page__left">
                            <div class="contact-page__img">
                                <img src="/assets/img/contact-us-image.jpg" alt="" style="object-fit: cover; height:573px;">
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="contact-page__right">
                            <h3 class="contact-page__title">Contact Us</h3>
                            <ul class="contact-page__contact-list list-unstyled">
                                <li>
                                    <div class="icon">
                                        <span class="icon-location"></span>
                                    </div>
                                    <div class="content">
                                        <h3>Location</h3>
                                        <p>827, Business Village - A,<br/>Port Saeed, Dubai, United Arab Emirates</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-call"></span>
                                    </div>
                                    <div class="content">
                                        <h3>Phone number</h3>
                                        <p><a href="tel:+97142542350">+971 4 254 2350</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-email"></span>
                                    </div>
                                    <div class="content">
                                        <h3>Email</h3>
                                        <p><a href="mailto:office@lucent-is.com">office@lucent-is.com</a></p>
                                    </div>
                                </li>
                                    <li style="margin-top: 40px;">
                                    <div class="icon">
                                        <span ><i class="fab fa-linkedin-in"></i></span>
                                    </div>
                                    <div class="content">
                                       <h3>Follow Us</h3>
                                        <p><a href="https://www.linkedin.com/company/lucent-is/" target="_blank">linkedin.com/company/lucent-is</a></p>
                                    </div>
                                </li>
                            </ul>
                            <!-- <div class="contact-page__social">
                                <a href="#"><i class="icon-facebook"></i></a>
                                <a href="#"><i class="icon-twitter"></i></a>
                                <a href="#"><i class="icon-instagram"></i></a>
                                <a href="#"><i class="icon-link-in"></i></a>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact-three">
            <div class="container">
                <div class="row">
                    <div class="section-title text-center sec-title-animation animation-style1">
                        <div class="section-title__tagline-box">
                            <span class="section-title__tagline">Get in touch</span>
                        </div>
                        <h2 class="section-title__title title-animation">Send us a message</h2>
                    </div>
                    <div class="col-lg-6">
                        <form class="contact-three__form">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6">
                                <div class="contact-three__input-box">
                                    <div class="form-floating mb-3">
                                         <input type="text" placeholder="Your Name" name="name" class="form-control" id="floatingInput">
                                         <label for="floatingInput">Name</label>
                                    </div>
                                   
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6">
                                <div class="contact-three__input-box">
                                    <div class="form-floating mb-3">
                                         <input type="email" placeholder="Email" name="email" class="form-control" id="floatingInput">
                                         <label for="floatingInput">E-mail</label>
                                    </div>
                                   
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6">
                                <div class="contact-three__input-box">
                                    <div class="form-floating mb-3">
                                        <input type="text" placeholder="Phone Number" name="Phone" class="form-control" id="floatingInput">
                                        <label for="floatingInput">Phone number</label>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6">
                                <div class="contact-three__input-box">
                                    <div class="form-floating mb-3">
                                         <input type="text" placeholder="Your Subject" name="Subject" class="form-control" id="floatingInput">
                                         <label for="floatingInput">Subject</label>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-12 col-lg-12">
                                <div class="contact-three__input-box text-message-box">
                                    <textarea name="message" placeholder="Write your Message"></textarea>
                                </div>
                                <div class="contact-three__btn-box">
                                    <button type="submit" class="thm-btn contact-three__btn">Send message<span
                                            class="icon-dabble-arrow-right"></span></button>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
                    <div class="col-xl-6 d-lg-block d-xl-block d-md-none d-none">
                                <div class="about-two__right">
                                    <div class="about-two__img wow slideInRight" data-wow-delay="100ms"
                                        data-wow-duration="2500ms">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57734.0470069248!2d55.2860076!3d25.2578688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f73e3bad2fe17%3A0x4c7af668c3dad328!2sLucent%20Industrial%20Solutions%20L.L.C!5e0!3m2!1sen!2sin!4v1741600126887!5m2!1sen!2sin" style="border:0; height:431px; width:100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                    <div class="result"></div>
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
