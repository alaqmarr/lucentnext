'use client'
import React from 'react'

const Header = () => {
    const headerhtml = `
    <header class="main-header-four">
                    <div class="main-header-four__top">
                        <div class="container">
                            <div class="main-header-four__top-inner">
                                <div class="main-header-four__social">
                                    <!-- <a href="#"><i class="icon-facebook"></i></a>
                                    <a href="#"><i class="icon-instagram"></i></a>
                                    <a href="#"><i class="icon-Frame"></i></a> -->
                                    <a href="https://www.linkedin.com/company/lucent-is/" target="_blnk">
                                        <img src="assets/img/linkedin.png" width="25" alt="">
                                    </a>
                                </div>
                                <ul class="list-unstyled main-header-four__contact-list">
                                    <!-- <li>
                                        <div class="icon">
                                            <i class="icon-call"></i>
                                        </div>
                                        <div class="text">
                                            <p><a href="tel:+971505750802">+971 505750802</a>
                                        </p>
                                    </div>
                                </li> -->
                                <li>
                                    <div class="icon">
                                        <i class="icon-email"></i>
                                    </div>
                                    <div class="text">
                                        <p><a href="mailto:office@lucent-is.com">office@lucent-is.com</a>
                                    </p>
                                </div>
                            </li>
                            <!-- <li>
                                <div class="icon">
                                    <i class="icon-location"></i>
                                </div>
                                <div class="text">
                                    <p>345-01, Schon Business Park, Dubai Investment Park, Dubai, U.A.E</p>
                                </div>
                            </li> -->
                        </ul>
                    </div>
                </div>
            </div>
            <nav class="main-menu main-menu-four">
                <div class="main-menu-four__wrapper">
                    <div class="container">
                        <div class="main-menu-four__wrapper-inner">
                            <div class="main-menu-four__left">
                                <div class="main-menu-four__logo">
                                    <a href="/">
                                        <img src="/assets/img/logo.png" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="main-menu-four__main-menu-box">
                                <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
                                <ul class="main-menu__list">
                                    <li>
                                        <a href="/"><span class="rolling-text">Home</span></a>
                                    </li>
                                    <li>
                                        <a href="/about"><span class="rolling-text">About Us</span></a>
                                    </li>
                                    <li class="dropdown">
                                        <a href="#"><span class="rolling-text">Products</span></a>
                                        <ul>
                                            <li class="dropdown">
                                                <a href="#" class="sub_dropdown">Sensors & Transmitters </a>
                                                <ul>
                                                    <li><a href="/pressure-transmitters">Pressure transmitters</a></li>
                                                    <li><a href="/temperature-sensors">Temperature sensors</a></li>
                                                    <li><a href="/speed-sensors">Speed sensors</a></li>
                                                    <li><a href="/flow-measurement">Flow measurement</a></li>
                                                    <li><a href="/position-angle-sensors">Position & Angle sensors</a></li>
                                                    <li><a href="/radar-level-sensors">Radar Level sensors</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"><a href="#" class="sub_dropdown">Switches </a>
                                                <ul>
                                                  <li>
                                                      <a href="/pressure-switches">Pressure switches</a>
                                                  </li> 
                                                  <li>
                                                      <a href="/temperature-switches">Temperature switches</a>
                                                  </li>
                                                  <li>
                                                      <a href="/flow-switches">Flow switches</a>
                                                  </li>
                                                  <li>
                                                      <a href="/heavy-duty-limit-switches">Heavy Duty limit switches</a>
                                                  </li> 
                                                </ul>
                                            </li>

                                            <li class="dropdown"><a href="#" class="sub_dropdown">Valves </a>
                                                <ul>
                                                    <li>
                                                        <a href="/solenoid-valves">Solenoid Valves</a>
                                                    </li>
                                                    <li>
                                                        <a href="/industrial-valves">Industrial Valves</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="/encoders-resolvers">Encoders & Resolvers</a></li>
                                            <li><a href="/counters">Counters</a></li>
                                            <li><a href="/industrial_printers_cutters">Industrial Printers and Cutters</a></li>
                                            <li><a href="/vacuum-contactors">Vacuum Contactors</a></li>
                                            <li><a href="/servo-motors-drives">Servo Motors & Drives</a></li>
                                            <li><a href="/ai-cameras">AI Cameras</a></li>
                                            <li><a href="/engine-powerpack-spares">Engine & Powerpack spares</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <a href="#"><span class="rolling-text">Services</span></a>
                                        <ul>
                                            <li><a href="maintenance-repairs">Maintenance & repairs</a></li>
                                            <li><a href="commissioning">Commissioning</a></li>
                                            <li><a href="data-analytics-predictive-maintenance">Data Analytics & Predictive Maintenance</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="industries">
                                            <span class="rolling-text"> Industries</span>
                                        </a>
                                    </li>
                                    <!-- <li>
                                        <a href="contact-us">
                                            <span class="rolling-text">Contact Us</span>
                                        </a>
                                    </li> -->
                                </ul>
                            </div>
                            <div class="main-menu-four__right">
                                <div class="main-menu-four__btn-box">
                                    <a href="contact-us" class="main-menu-four__btn thm-btn">Contact Us<span
                                    class="icon-dabble-arrow-right"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    `
  return (
    <div dangerouslySetInnerHTML={{ __html: headerhtml }}>

    </div>
  )
}

export default Header
