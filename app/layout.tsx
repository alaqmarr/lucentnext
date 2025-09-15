import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccordionInitializer from "@/components/Accordtion";
import Scripts from "@/components/ScriptLoader";
import HeadSection from "@/components/HeadSection";
import '@/public/assets/vendors/bootstrap/css/bootstrap.min.css';
import '@/public/assets/vendors/animate/animate.min.css';
import '@/public/assets/vendors/animate/custom-animate.css';
import '@/public/assets/vendors/fontawesome/css/all.min.css';
import '@/public/assets/vendors/jarallax/jarallax.css';
import '@/public/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css';
import '@/public/assets/vendors/odometer/odometer.min.css';
import '@/public/assets/vendors/swiper/swiper.min.css';
import '@/public/assets/vendors/elitecons-icons/style.css';
import '@/public/assets/vendors/bootstrap-select/css/bootstrap-select.min.css';
import '@/public/assets/vendors/nice-select/nice-select.css';
import '@/public/assets/vendors/jquery-ui/jquery-ui.css';
import '@/public/assets/css/style.css';
import '@/public/assets/css/responsive.css';

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
        url: "https://lucent-is.com/assets/img/favicon.png",
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
      <HeadSection />
      <body className="custom-cursor">
        <div className="custom-cursor__cursor"></div>
        <div className="custom-cursor__cursor-two"></div>
        <div className="page-wrapper">
          <Header />
          {children}
          <Footer />
        </div>

        <Scripts />
        <AccordionInitializer />
      </body>
    </html>
  );
}