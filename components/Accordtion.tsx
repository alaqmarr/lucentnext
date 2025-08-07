"use client";

import { useEffect } from 'react';

export default function AccordionInitializer() {
  useEffect(() => {
    const acc = document.getElementsByClassName("accordion");
    
    const handleAccordionClick = function(this: HTMLElement) {
      this.classList.toggle("active");
      const panel = this.nextElementSibling as HTMLElement;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    };

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", handleAccordionClick);
    }

    // Cleanup function
    return () => {
      for (let i = 0; i < acc.length; i++) {
        acc[i].removeEventListener("click", handleAccordionClick);
      }
    };
  }, []);

  return null; // This component doesn't render anything
}