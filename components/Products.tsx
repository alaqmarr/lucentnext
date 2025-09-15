'use client'
import React from 'react'

const Products = ({ products }: { products: any }) => {
  const html = `
  <section class="services-eight">
    <div class="container">
      <div class="section-title text-center sec-title-animation animation-style1">
        <h2 class="section-title__title title-animation">
          Lucent Industrial Solutions <br> 
          <span>Our Products</span>
        </h2>
      </div>
      <div class="services-eight__carousel-box">
        <!-- Use only the grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${products.map(
            (product: any) => `
            <div class="services-eight__single rounded-xl shadow hover:shadow-lg transition p-4 bg-white">
              <div class="services-eight__img-box">
                <div class="services-eight__img">
                  <img src="${product.imagePath}" alt="${product.name}" class="w-full h-48 object-cover rounded-lg"/>
                </div>
              </div>
              <div class="services-eight__content mt-4">
                <div class="services-eight__title-box">
                  <h4 class="services-eight__title text-lg font-semibold">
                    <a href="${product.href}" class="hover:text-blue-600">${product.name}</a>
                  </h4>
                </div>
                <div class="services-eight__btn-box mt-2">
                  <a href="${product.href}" class="services-eight__btn thm-btn">Read more<span class="icon-dabble-arrow-right"></span></a>
                </div>
              </div>
            </div>
          `
          ).join('')}
        </div>
      </div>
    </div>
  </section>
  `
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default Products
