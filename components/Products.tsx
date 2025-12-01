'use client'
import React from 'react'

const Products = ({ products }: { products: any }) => {
  const html = `
  <!-- Page Title -->
  <section class="page-header">
    <div class="page-header__bg" style="background-image: url(/assets/img/slider.jpg);"></div>
    <div class="container">
      <div class="page-header__inner">
        <h2>Our Products</h2>
        <ul class="thm-breadcrumb list-unstyled">
          <li><a href="/">Home</a></li>
          <li><span>/</span></li>
          <li>Products</li>
        </ul>
      </div>
    </div>
  </section>
  
  <!-- Products Grid Section -->
  <section class="services-eight" style="padding: 80px 0;">
    <div class="container">
      <div class="section-title text-center sec-title-animation animation-style1" style="margin-bottom: 60px;">
        <h2 class="section-title__title title-animation">
          Lucent Industrial Solutions <br> 
          <span>Our Products</span>
        </h2>
      </div>
      
      <div class="row">
        ${products.map(
          (product: any) => `
          <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms" style="margin-bottom: 30px;">
            <div class="services-eight__single">
              <div class="services-eight__img-box">
                <div class="services-eight__img">
                  <img src="${product.imagePath}" alt="${product.name}" style="width: 100%; height: 300px; object-fit: cover;"/>
                </div>
              </div>
              <div class="services-eight__content">
                <div class="services-eight__title-box">
                  <h4 class="services-eight__title">
                    <a href="${product.href}">${product.name}</a>
                  </h4>
                </div>
                <div class="services-eight__btn-box">
                  <a href="${product.href}" class="services-eight__btn thm-btn">View Details<span class="icon-dabble-arrow-right"></span></a>
                </div>
              </div>
            </div>
          </div>
        `
        ).join('')}
      </div>
    </div>
  </section>
  `
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default Products
