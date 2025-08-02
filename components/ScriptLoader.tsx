'use client';

import Script from 'next/script';

const ScriptLoader = () => {
  return (
    <>
      <Script src="/assets/vendors/jquery/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendors/jarallax/jarallax.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/jquery-appear/jquery.appear.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/jquery-validate/jquery.validate.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/odometer/odometer.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/swiper/swiper.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/wnumb/wNumb.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/wow/wow.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/isotope/isotope.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/owl-carousel/owl.carousel.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/bootstrap-select/js/bootstrap-select.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/jquery-ui/jquery-ui.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/jquery.circle-type/jquery.circleType.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/jquery.circle-type/jquery.lettering.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/nice-select/jquery.nice-select.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/marquee/marquee.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/gsap/gsap.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/gsap/ScrollTrigger.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/gsap/SplitText.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/scroll/scrolltop.min.js" strategy="afterInteractive" />
      <Script src="/assets/vendors/scroll/lenis.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/elitecons.js" strategy="afterInteractive" />
      <Script src="/assets/js/theia-sticky-sidebar.min.js" strategy="afterInteractive" />
    </>
  );
};

export default ScriptLoader;
