import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/public/assets/css/style.css";
import "@/public/assets/css/responsive.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucent Industrial Solutions",
  description: "We are a dynamic instrumentation and control automation company, established in 2024 in the Emirate of Dubai, United Arab Emirates. We specialise in providing cutting-edge solutions in measuring and controlling systems, catering to a wide range of industries.",
  icons: {
    icon: "/assets/img/favicon.png",
    shortcut: "/assets/img/favicon.png",
    apple: "/assets/img/favicon.png",
  },
  keywords: [
    "Lucent Industrial Solutions",
    "Instrumentation and Control Automation",
    "Dubai",
    "UAE",
    "Automation Solutions",
    "Industrial Solutions",
    "Measuring Systems",
    "Control Systems",
    "Cutting-edge Solutions",
    "Industry Specialists",
    "Established in 2024",
    "Dynamic Company",
    "Innovative Solutions",
    "Industrial Automation",
    "Instrumentation Specialists",
    "Control Systems Experts",
    "Dubai Industry Leaders",
    "UAE Automation Experts",
    "Advanced Measuring Systems",
    "Precision Control Solutions",
    "Industrial Innovation",
    "Automation Technology",
  ],
  openGraph: {
    title: "Lucent Industrial Solutions",
    description: "We are a dynamic instrumentation and control automation company, established in 2024 in the Emirate of Dubai, United Arab Emirates. We specialise in providing cutting-edge solutions in measuring and controlling systems, catering to a wide range of industries.",
    url: "https://lucent-is.com",
    siteName: "Lucent Industrial Solutions",
    images: [
      {
        url: "https://lucent-is.com/assets/img/logo.png",
        width: 800,
        height: 600,
        alt: "Lucent Industrial Solutions Logo",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Meta */}
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.png" />
        <link rel="canonical" href="https://lucent-is.com" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet" 
        />
        
        {/* Vendor CSS */}
        <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
        <link rel="stylesheet" href="/assets/vendors/animate/custom-animate.css" />
        <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/vendors/jarallax/jarallax.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="/assets/vendors/odometer/odometer.min.css" />
        <link rel="stylesheet" href="/assets/vendors/swiper/swiper.min.css" />
        <link rel="stylesheet" href="/assets/vendors/elitecons-icons/style.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/vendors/bootstrap-select/css/bootstrap-select.min.css" />
        <link rel="stylesheet" href="/assets/vendors/nice-select/nice-select.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css" />
        
        {/* Custom CSS */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased custom-cursor`}>
        {/* Custom Cursor */}
        <div className="custom-cursor__cursor"></div>
        <div className="custom-cursor__cursor-two"></div>
        
        {/* Page Content */}
        <div className="page-wrapper">
          <Header />
          {children}
          <Footer />
        </div>

        {/* Core Scripts - Load First */}
        <Script 
          src="/assets/vendors/jquery/jquery-3.6.0.min.js" 
          strategy="beforeInteractive" 
        />
        <Script 
          src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js" 
          strategy="beforeInteractive" 
        />

        {/* Plugin Scripts - Load After Core */}
        <Script 
          src="/assets/vendors/jarallax/jarallax.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/jquery-appear/jquery.appear.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/jquery-validate/jquery.validate.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/odometer/odometer.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/swiper/swiper.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/wnumb/wNumb.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/wow/wow.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/isotope/isotope.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/owl-carousel/owl.carousel.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/bootstrap-select/js/bootstrap-select.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/jquery-ui/jquery-ui.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/jquery.circle-type/jquery.circleType.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/jquery.circle-type/jquery.lettering.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/nice-select/jquery.nice-select.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/marquee/marquee.min.js" 
          strategy="afterInteractive" 
        />

        {/* GSAP Scripts */}
        <Script 
          src="/assets/vendors/gsap/gsap.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/gsap/ScrollTrigger.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/gsap/SplitText.js" 
          strategy="afterInteractive" 
        />

        {/* Custom Scripts */}
        <Script 
          src="/assets/vendors/scroll/scrolltop.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/vendors/scroll/lenis.min.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/js/elitecons.js" 
          strategy="afterInteractive" 
        />
        <Script 
          src="/assets/js/theia-sticky-sidebar.min.js" 
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}