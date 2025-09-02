'use client';

const scriptLoader = () => {
  const html = `
  <script>
$('.main--content .fixcontent').theiaStickySidebar({
additionalMarginTop: 100
});
</script>

<script>
    const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector("#accordion-icon");

  header.addEventListener("click", () => {
    const isOpen = content.style.height === content.scrollHeight + "px";

    accordions.forEach((a, i) => {
      const c = a.querySelector(".accordion__content");
      const ic = a.querySelector("#accordion-icon");

      c.style.height = i === index && !isOpen ? c.scrollHeight + "px" : "0px";
      ic.classList.toggle("ri-add-line", i !== index || !isOpen);
      ic.classList.toggle("ri-subtract-fill", i === index && !isOpen);
    });
  });
});

</script>
  `
  return (
    <>
      <script src="/assets/vendors/jquery/jquery-3.6.0.min.js" />
      <script src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js" />
      <script src="/assets/vendors/jarallax/jarallax.min.js" />
      <script src="/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js" />
      <script src="/assets/vendors/jquery-appear/jquery.appear.min.js" />
      <script src="/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js" />
      <script src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js" />
      <script src="/assets/vendors/jquery-validate/jquery.validate.min.js" />
      <script src="/assets/vendors/odometer/odometer.min.js" />
      <script src="/assets/vendors/swiper/swiper.min.js" />
      <script src="/assets/vendors/wnumb/wNumb.min.js" />
      <script src="/assets/vendors/wow/wow.js" />
      <script src="/assets/vendors/isotope/isotope.js" />
      <script src="/assets/vendors/owl-carousel/owl.carousel.min.js" />
      <script src="/assets/vendors/bootstrap-select/js/bootstrap-select.min.js" />
      <script src="/assets/vendors/jquery-ui/jquery-ui.js" />
      <script src="/assets/vendors/jquery.circle-type/jquery.circleType.js" />
      <script src="/assets/vendors/jquery.circle-type/jquery.lettering.min.js" />
      <script src="/assets/vendors/nice-select/jquery.nice-select.min.js" />
      <script src="/assets/vendors/marquee/marquee.min.js" />
      <script src="/assets/vendors/gsap/gsap.js" />
      <script src="/assets/vendors/gsap/ScrollTrigger.js" />
      <script src="/assets/vendors/gsap/SplitText.js" />
      <script src="/assets/vendors/scroll/scrolltop.min.js" />
      <script src="/assets/vendors/scroll/lenis.min.js" />
      <script src="/assets/js/elitecons.js" />
      <script src="/assets/js/theia-sticky-sidebar.min.js" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default scriptLoader;
