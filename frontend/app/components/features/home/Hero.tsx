import HeroTaglines from "./HeroTaglines";
import HeroHeadline from "./HeroHeadline";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

/**
 * Hero — main landing section.
 *
 * Layering strategy (bottom → top):
 *   z-0  : HeroHeadline  — large decorative text
 *   z-10 : HeroImage     — model photo, overlaps the text
 *   z-20 : HeroContent   — readable copy + interactive CTA
 *
 * The wrapper uses `relative` to establish the stacking context.
 * Each child uses `absolute inset-0` to fill the section,
 * with z-index controlling the visual order.
 *
 * HeroContent is the only child that stays in normal flow
 * (via `relative` instead of `absolute`) so it defines the
 * section's intrinsic height together with `min-h-screen`.
 */
export default function Hero() {
  return (
    <section
      aria-label="Hero banner — Pure Comfort collection"
      className="relative flex min-h-[calc(100vh-57px)] flex-col overflow-hidden py-10"
    >
      {/* Taglines — above the headline */}
      <HeroTaglines />

      {/* Layer 1 — text behind */}
      <HeroHeadline />

      {/* Layer 2 — model in front of text */}
      {/* <HeroImage /> */}

      {/* Layer 3 — copy + CTA on top */}
      <HeroContent />
    </section>
  );
}
