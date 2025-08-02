// components/PageHeader.js
import React from 'react';

const PageHeader = () => {
  return (
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
          <h2>Counters</h2>
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
              <li>Counters</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
