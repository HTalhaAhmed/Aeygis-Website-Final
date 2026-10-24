import { useEffect, useRef, useState } from "react";
import { Icon } from "@blueprintjs/core";
import { usePrefersReducedMotion } from "../hooks";

// Phones and tablets get a 720p cut (~2 MB) instead of the 1080p loop (7-12 MB).
// Matches the poster preloads in index.html.
const SMALL_SCREEN = "(max-width: 1024px)";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = usePrefersReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [suffix] = useState(() => (window.matchMedia(SMALL_SCREEN).matches ? "-720" : ""));

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduced) {
      v.pause();
      return;
    }
    // React doesn't write `muted` as an attribute, and mobile browsers only
    // autoplay videos they can see are muted, so the first play() was being
    // refused until the video scrolled out and back in. Set it directly, then
    // retry once the video has data in case the first attempt came too early.
    v.muted = true;
    v.defaultMuted = true;
    const play = () => v.play().catch(() => {});
    play();
    v.addEventListener("loadeddata", play);
    return () => v.removeEventListener("loadeddata", play);
  }, [reduced]);

  // The scroll cue retires once the visitor has started scrolling.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="ae-hero bp6-dark ae-on-dark" id="top">
      <video
        ref={videoRef}
        className="ae-hero-video"
        autoPlay={!reduced}
        muted
        loop
        playsInline
        preload="metadata"
        poster={`/media/hero-poster${suffix}.jpg`}
        aria-hidden="true"
      >
        <source src={`/media/hero-loop${suffix}.webm`} type="video/webm" />
        <source src={`/media/hero-loop${suffix}.mp4`} type="video/mp4" />
      </video>
      <div className="ae-hero-scan" />
      <span className="ae-corner tl" />
      <span className="ae-corner tr" />

      <div className="ae-hero-body wrap">
        <h1 className="ae-hero-title">
          <span>Sovereign Systems</span> <span>for Public Service</span>
        </h1>
      </div>

      <button
        type="button"
        className={`ae-scroll-cue${scrolled ? " is-hidden" : ""}`}
        aria-label="Scroll down"
        onClick={() => document.querySelector("#updates")?.scrollIntoView({ behavior: "smooth" })}
      >
        <Icon icon="arrow-down" size={18} />
      </button>
    </section>
  );
}
