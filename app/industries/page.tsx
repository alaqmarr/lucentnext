import React from 'react'

const page = () => {
    const pageContent = `
    <section class="page-header">
    <div class="page-header__bg" style="background-image: url(/assets/img/slider.jpg); background-size: cover; background-position: center; background-repeat: no-repeat;">
    </div>
    <div class="container">
        <div class="page-header__inner">
            <h2>Industries</h2>
            <div class="thm-breadcrumb__box">
                <ul class="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span class="icon-angle-left"></span></li>
                    <li>Industries</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="gallery-page">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="gallery-page__single">
                            <div class="gallery-page__img">
                                <div class="gallery-page__img-box">
                                    <img src="/assets/img/oil-gas.jpeg" alt="">
                                    <h3>Oil and Gas</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="gallery-page__single">
                            <div class="gallery-page__img">
                                <div class="gallery-page__img-box">
                                    <img src="/assets/img/water-process.jpg" alt="">
                                    <h3>Water Process</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="gallery-page__single">
                            <div class="gallery-page__img">
                                <div class="gallery-page__img-box">
                                    <img src="/assets/img/3.jpg" alt="">
                                    <h3>Food & Beverage</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="gallery-page__single">
                            <div class="gallery-page__img">
                                <div class="gallery-page__img-box">
                                    <img src="/assets/img/4.jpg" alt="">
                                    <h3>Metals and minerals</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="gallery-page__single">
                            <div class="gallery-page__img">
                                <div class="gallery-page__img-box">
                                    <img src="/assets/img/power-generation.png" alt="">
                                    <h3>Power Generation</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="gallery-page__single">
                            <div class="gallery-page__img">
                                <div class="gallery-page__img-box">
                                    <img src="/assets/img/11.jpg" alt="">
                                    <h3>Renewables</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="gallery-page__single">
                            <div class="gallery-page__img">
                                <div class="gallery-page__img-box">
                                    <img src="/assets/img/6.jpg" alt="">
                                    <h3>Marine</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="gallery-page__single">
                            <div class="gallery-page__img">
                                <div class="gallery-page__img-box">
                                    <img src="/assets/img/7.jpg" alt="">
                                    <h3>Rail</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="gallery-page__single">
                            <div class="gallery-page__img">
                                <div class="gallery-page__img-box">
                                    <img src="/assets/img/8.jpg" alt="">
                                    <h3>HVAC</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="gallery-page__single">
                            <div class="gallery-page__img">
                                <div class="gallery-page__img-box">
                                    <img src="/assets/img/9.jpg" alt="">
                                    <h3>Construction</h3>
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
