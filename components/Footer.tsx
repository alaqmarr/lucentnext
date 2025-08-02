'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="site-footer-two">
            <div
                className="site-footer-two__shape-1 img-bounce"
                style={{ backgroundImage: 'url(/assets/img/footer-bg.png)' }}
            ></div>
            <div className="site-footer-two__top">
                <div className="container">
                    <div className="site-footer-two__top-inner">
                        <div className="row">
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget-two__column footer-widget-two__about">
                                    <div className="footer-widget-two__logo">
                                        <Link href="/">
                                            <Image src="/assets/img/logo.png" alt="Logo" width={150} height={80} />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-5 col-lg-6 col-md-6 col-12 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget-two__column footer-widget-two__service">
                                    <div className="footer-widget-two__title-box">
                                        <h3 className="footer-widget-two__title">Our Products</h3>
                                    </div>
                                    <ul className="footer-widget-two__service-list list-unstyled scroll float_items">
                                        <li><Link href="/pressure-transmitters"><span className="icon-angle-left"></span> Sensors & Transmitters</Link></li>
                                        <li><Link href="/pressure-switches"><span className="icon-angle-left"></span> Switches</Link></li>
                                        <li><Link href="/industrial-valves"><span className="icon-angle-left"></span> Valves</Link></li>
                                        <li><Link href="/encoders-resolvers"><span className="icon-angle-left"></span> Encoders & Resolvers</Link></li>
                                        <li><Link href="/counters"><span className="icon-angle-left"></span> Counters</Link></li>
                                        <li><Link href="/industrial_printers_cutters"><span className="icon-angle-left"></span> Industrial Printers & Cutters</Link></li>
                                        <li><Link href="/vacuum-contactors"><span className="icon-angle-left"></span> Vacuum Contactors</Link></li>
                                        <li><Link href="/servo-motors-drives"><span className="icon-angle-left"></span> Servo Motors & Drives</Link></li>
                                        <li><Link href="/ai-cameras"><span className="icon-angle-left"></span> AI Cameras</Link></li>
                                        <li><Link href="/engine-powerpack-spares"><span className="icon-angle-left"></span> Engine & Powerpack spares</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-6 col-md-6 col-12 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget-two__column footer-widget-two__links">
                                    <div className="footer-widget-two__title-box">
                                        <h3 className="footer-widget-two__title">Useful Links</h3>
                                    </div>
                                    <ul className="footer-widget-two__service-list list-unstyled">
                                        <li><Link href="/"><span className="icon-angle-left"></span> Home</Link></li>
                                        <li><Link href="/about"><span className="icon-angle-left"></span> About Us</Link></li>
                                        <li><Link href="/maintenance-repairs"><span className="icon-angle-left"></span> Our services</Link></li>
                                        <li><Link href="/industries"><span className="icon-angle-left"></span> Industries</Link></li>
                                        <li><Link href="/contact-us"><span className="icon-angle-left"></span> Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget-two__column footer-widget-two__contact">
                                    <div className="footer-widget-two__title-box">
                                        <h3 className="footer-widget-two__title">Contact Us</h3>
                                    </div>
                                    <ul className="footer-widget-two__contact-list list-unstyled">
                                        <li>
                                            <div className="icon"><i className="far fa-envelope mt-2 text-white"></i></div>
                                            <div className="content">
                                                <p><a href="mailto:office@lucent-is.com">office@lucent-is.com</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="fas fa-mobile-alt mt-2 text-white"></i></div>
                                            <div className="content">
                                                <p><a href="tel:+97142542350">+971 4 254 2350</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="fas fa-map-marker-alt mt-2 text-white"></i></div>
                                            <div className="content">
                                                <p>827, Business Village - A, Port Saeed, Dubai, United Arab Emirates</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="fas fa-map-marker-alt mt-2 text-white"></i></div>
                                            <div className="content">
                                                <p><a href="http://lambert-analytics.com/" target="_blank" rel="noopener noreferrer">Visit Lambert Analytics Technology</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="fas fa-map-marker-alt mt-2 text-white"></i></div>
                                            <div className="content">
                                                <p><a href="https://oasis-group.co.in/" target="_blank" rel="noopener noreferrer">Visit Oasis Group</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-footer-two__bottom">
                <div className="container">
                    <div className="site-footer-two__bottom-inner">
                        <p className="site-footer-two__bottom-text text-center">
                            © 2024 Lucent Industrial Solutions L.L.C. | All Rights Reserved | Design & Developed by{' '}
                            <a href="https://alaqmar.dev" target="_blank" rel="noopener noreferrer">
                                The Web Sensei
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}