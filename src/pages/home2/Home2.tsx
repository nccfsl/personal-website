import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { createBem } from "../../utils/bem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./Home2.module.scss";
import { useLayoutEffect, useRef } from "react";

const bem = createBem(styles, "homepage");
gsap.registerPlugin(ScrollTrigger);

export const Home2 = () => {
  const compRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef(null);
  const lenis = useLenis();

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
            <div
              className={bem(
                "__hero__presentation__item",
                "__hero__presentation__item__f"
              )}
            >
              <h1 className={bem("__hero__presentation__title")}>Niccolò</h1>
              <h1 className={bem("__hero__presentation__title")}>Niccolò</h1>
            </div>

            <div
              className={bem(
                "__hero__presentation__item",
                "__hero__presentation__item__a"
              )}
            ></div>
            <div
              className={bem(
                "__hero__presentation__item",
                "__hero__presentation__item__b"
              )}
            ></div>
            <div
              className={bem(
                "__hero__presentation__item",
                "__hero__presentation__item__c"
              )}
            ></div>
            <div
              className={bem(
                "__hero__presentation__item",
                "__hero__presentation__item__d"
              )}
            ></div>

            <div
              className={bem(
                "__hero__presentation__item",
                "__hero__presentation__item__e"
              )}
            ></div>
            <div
              className={bem(
                "__hero__presentation__item",
                "__hero__presentation__item__g"
              )}
            ></div>

            <div
              className={bem(
                "__hero__presentation__item",
                "__hero__presentation__item__h"
              )}
            ></div>
            <div
              className={bem(
                "__hero__presentation__item",
                "__hero__presentation__item__i"
              )}
            ></div>
            <div
              className={bem(
                "__hero__presentation__item",
                "__hero__presentation__item__j"
              )}
            ></div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};
