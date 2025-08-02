'use client';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="main-header-four">
            <div className="main-header-four__top">
                <div className="container">
                    <div className="main-header-four__top-inner">
                        <div className="main-header-four__social">
                            <a
                                href="https://www.linkedin.com/company/lucent-is/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/assets/img/linkedin.png"
                                    width={25}
                                    height={25}
                                    alt="LinkedIn"
                                />
                            </a>
                        </div>
                        <ul className="list-unstyled main-header-four__contact-list">
                            <li>
                                <div className="icon">
                                    <i className="icon-email"></i>
                                </div>
                                <div className="text">
                                    <p>
                                        <a href="mailto:office@lucent-is.com">office@lucent-is.com</a>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <nav className="main-menu main-menu-four">
                <div className="main-menu-four__wrapper">
                    <div className="container">
                        <div className="main-menu-four__wrapper-inner">
                            <div className="main-menu-four__left">
                                <div className="main-menu-four__logo">
                                    <Link href="/">
                                        <Image
                                            src="/assets/img/logo.png"
                                            alt="Logo"
                                            width={120}
                                            height={40}
                                        />
                                    </Link>
                                </div>
                            </div>

                            <div className="main-menu-four__main-menu-box">
                                <a href="#" className="mobile-nav__toggler">
                                    <i className="fa fa-bars"></i>
                                </a>
                                <ul className="main-menu__list">
                                    <li><Link href="/index"><span className="rolling-text">Home</span></Link></li>
                                    <li><Link href="/about"><span className="rolling-text">About Us</span></Link></li>

                                    <li className="dropdown">
                                        <a href="#"><span className="rolling-text">Products</span></a>
                                        <ul>
                                            <li className="dropdown">
                                                <a href="#" className="sub_dropdown">Sensors & Transmitters</a>
                                                <ul>
                                                    <li><Link href="/pressure-transmitters">Pressure transmitters</Link></li>
                                                    <li><Link href="/temperature-sensors">Temperature sensors</Link></li>
                                                    <li><Link href="/speed-sensors">Speed sensors</Link></li>
                                                    <li><Link href="/flow-measurement">Flow measurement</Link></li>
                                                    <li><Link href="/position-angle-sensors">Position & Angle sensors</Link></li>
                                                    <li><Link href="/radar-level-sensors">Radar Level sensors</Link></li>
                                                </ul>
                                            </li>

                                            <li className="dropdown">
                                                <a href="#" className="sub_dropdown">Switches</a>
                                                <ul>
                                                    <li><Link href="/pressure-switches">Pressure switches</Link></li>
                                                    <li><Link href="/temperature-switches">Temperature switches</Link></li>
                                                    <li><Link href="/flow-switches">Flow switches</Link></li>
                                                    <li><Link href="/heavy-duty-limit-switches">Heavy Duty limit switches</Link></li>
                                                </ul>
                                            </li>

                                            <li className="dropdown">
                                                <a href="#" className="sub_dropdown">Valves</a>
                                                <ul>
                                                    <li><Link href="/solenoid-valves">Solenoid Valves</Link></li>
                                                    <li><Link href="/industrial-valves">Industrial Valves</Link></li>
                                                </ul>
                                            </li>

                                            <li><Link href="/encoders-resolvers">Encoders & Resolvers</Link></li>
                                            <li><Link href="/counters">Counters</Link></li>
                                            <li><Link href="/industrial_printers_cutters">Industrial Printers and Cutters</Link></li>
                                            <li><Link href="/vacuum-contactors">Vacuum Contactors</Link></li>
                                            <li><Link href="/servo-motors-drives">Servo Motors & Drives</Link></li>
                                            <li><Link href="/ai-cameras">AI Cameras</Link></li>
                                            <li><Link href="/engine-powerpack-spares">Engine & Powerpack spares</Link></li>
                                        </ul>
                                    </li>

                                    <li className="dropdown">
                                        <a href="#"><span className="rolling-text">Services</span></a>
                                        <ul>
                                            <li><Link href="/maintenance-repairs">Maintenance & repairs</Link></li>
                                            <li><Link href="/commissioning">Commissioning</Link></li>
                                            <li><Link href="/data-analytics-predictive-maintenance">Data Analytics & Predictive Maintenance</Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link href="/industries"><span className="rolling-text">Industries</span></Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="main-menu-four__right">
                                <div className="main-menu-four__btn-box">
                                    <Link href="/contact-us" className="main-menu-four__btn thm-btn">
                                        Contact Us <span className="icon-dabble-arrow-right"></span>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
