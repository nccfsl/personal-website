import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { createBem } from "../../utils/bem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./Home2.module.scss";
import { useLayoutEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

const bem = createBem(styles, "homepage");
gsap.registerPlugin(ScrollTrigger);

export const Home2 = () => {
  const compRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef(null);
  const lenis = useLenis();

  useLayoutEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: "power3.out" },
    });
    const ctx = gsap.context(() => {
      timeline
        .from(`.${bem("__hero__presentation__item")}`, {
          scale: 0,
          duration: 1,
          stagger: {
            each: 0.5,
            from: "random",
            grid: "auto",
          },
        })
        .from(`.${bem("__hero__presentation__item__text")}`, {
          opacity: 0,
          duration: 1.5,
        })
        .delay(1);
    }, compRef);

    return () => ctx.revert();
  }, [lenis]);

  return (
    <ReactLenis ref={lenisRef} options={{ lerp: 0.12, smoothWheel: true }} root>
      <div ref={compRef} className={bem("")}>
        <Spline
          className={bem("__spline")}
          style={{ width: "100vw", height: "100vh" }}
          scene="https://prod.spline.design/NNAbtdy-1MaN8hL3/scene.splinecode"
        />
        <section className={bem("__hero")}>
          <div id="content" className={bem("__hero__content")}>
            <div className={bem("__hero__presentation")}>
              <div
                className={bem(
                  "__hero__presentation__item",
                  "__hero__presentation__item__a"
                )}
              >
                <p
                  className={bem(
                    "__hero__presentation__item__text",
                    "__hero__presentation__item__a__text"
                  )}
                >
                  ABOUT
                </p>
              </div>
              <div
                className={bem(
                  "__hero__presentation__item",
                  "__hero__presentation__item__b"
                )}
              >
                <p className={bem("__hero__presentation__item__text")}>
                  Experience
                </p>
              </div>
              <div
                className={bem(
                  "__hero__presentation__item",
                  "__hero__presentation__item__c"
                )}
              >
                <p className={bem("__hero__presentation__item__text")}>Work</p>
              </div>
              <div
                className={bem(
                  "__hero__presentation__item",
                  "__hero__presentation__item__d"
                )}
              >
                <p className={bem("__hero__presentation__item__text")}>CV</p>
              </div>

              <div
                className={bem(
                  "__hero__presentation__item",
                  "__hero__presentation__item__e"
                )}
              >
                <p className={bem("__hero__presentation__item__text")}>
                  GitHub
                </p>
              </div>
              <div
                className={bem(
                  "__hero__presentation__item",
                  "__hero__presentation__item__f"
                )}
              >
                <p className={bem("__hero__presentation__item__text")}>
                  Contact
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};
