import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { createBem } from "../../utils/bem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./Home.module.scss";
import { useLayoutEffect, useRef } from "react";

const bem = createBem(styles, "homepage");
gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const compRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef(null);
  const lenis = useLenis();

  useLayoutEffect(() => {
    console.log(`.${bem("__images__grid__item")}`);
    const ctx = gsap.context(() => {
      gsap.from(`.${bem("__images__grid__item")}`, {
        scrollTrigger: {
          trigger: `.${bem("__images__grid")}`,
          start: "top 80%",
          end: "bottom bottom",
          scrub: true,
        },
        scale: 0,
        duration: 1,
        stagger: {
          each: 1,
          from: "random",
          grid: "auto",
        },
      });
    }, compRef);

    return () => ctx.revert();
  }, [lenis]);

  return (
    <ReactLenis ref={lenisRef} options={{ lerp: 0.12, smoothWheel: true }} root>
      <div ref={compRef} className={bem("")}>
        <section className={bem("__hero")}>
          <h1 className={bem("__hero__title")}>NICCOLÒ FASOLO</h1>
          <h2 className={bem("__hero__subtitle")}>
            Frontend and iOS developer
          </h2>
        </section>
        <section className={bem("__images")}>
          <div className={bem("__images__grid")}>
            <div className={bem("__images__grid__item")}></div>
            <div className={bem("__images__grid__item")}></div>
            <div className={bem("__images__grid__item")}></div>
            <div className={bem("__images__grid__item")}></div>
            <div className={bem("__images__grid__item")}></div>
            <div className={bem("__images__grid__item")}></div>
            <div className={bem("__images__grid__item")}></div>
            <div className={bem("__images__grid__item")}></div>
            <div className={bem("__images__grid__item")}></div>
            <div className={bem("__images__grid__item")}></div>
            <div className={bem("__images__grid__item")}></div>
            <div className={bem("__images__grid__item")}></div>
            <div className={bem("__images__grid__item")}></div>
            <div className={bem("__images__grid__item")}></div>
            <div className={bem("__images__grid__item")}></div>
            <div className={bem("__images__grid__item")}></div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};
