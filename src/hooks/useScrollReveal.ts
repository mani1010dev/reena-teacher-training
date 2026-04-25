import { useEffect } from "react";

export const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          intersectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observeElements = () => {
      document.querySelectorAll("[data-reveal]:not(.revealed)").forEach((el) => {
        intersectionObserver.observe(el);
      });
    };

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};
