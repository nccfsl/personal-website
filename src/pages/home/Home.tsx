import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { createBem } from "../../utils/bem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./Home.module.scss";
import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router";

const bem = createBem(styles, "homepage");
gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const compRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef(null);
  const lenis = useLenis();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    console.log(`.${bem("__images__grid__item")}`);
    const ctx = gsap.context(() => {
      gsap.from(`.${bem("__images__grid__item")}`, {
        scrollTrigger: {
          trigger: `.${bem("__images__grid")}`,
          scrub: true,
          pin: true,
          start: "top top",
          end: "+=100%",
        },
        scale: 0,
        duration: 1,
        stagger: {
          each: 0.5,
          from: "random",
          grid: "auto",
        },
      });

      gsap.from(`.${bem("__hero__logo--react")}`, {
        scrollTrigger: {
          trigger: `.${bem("__hero")}`,
          scrub: true,
          start: "top top",
          end: "bottom top",
        },
        rotation: 360,
        duration: 1,
      });
    }, compRef);

    return () => ctx.revert();
  }, [lenis]);

  return (
    <ReactLenis ref={lenisRef} options={{ lerp: 0.12, smoothWheel: true }} root>
      <div ref={compRef} className={bem("")}>
        <section className={bem("__hero")}>
          <div className={bem("__hero__content")}>
            <h1 className={bem("__hero__intro")}>
              Hey <span className={bem("__hero__intro__hand")}>👋</span>, I am
            </h1>
            <h2
              className={bem("__hero__title")}
              onClick={() => {
                navigate("/home2");
              }}
            >
              Niccolò
            </h2>
            <h3 className={bem("__hero__subtitle")}>
              Frontend and iOS developer
            </h3>
          </div>
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
