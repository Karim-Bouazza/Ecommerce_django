import Image from "next/image";

/**
 * HeroImage — the fashion model layer.
 *
 * Sits at z-10 so it renders ON TOP of HeroHeadline (z-0).
 * The image is positioned at the bottom-center of the section,
 * creating the text-behind-model overlap effect.
 */

const MODEL_SRC =
  "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80";

const MODEL_ALT =
  "Man wearing a dark tailored overcoat — autumn collection lookbook";

export default function HeroImage() {
  return (
    <div className="absolute inset-0 z-10 flex items-end justify-center">
      <div className="relative h-[55vh] w-[240px] sm:h-[60vh] sm:w-[280px] md:h-[68vh] md:w-[340px] lg:h-[75vh] lg:w-[400px]">
        <Image
          src={MODEL_SRC}
          alt={MODEL_ALT}
          fill
          priority
          sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 340px, 400px"
          className="object-contain object-bottom"
        />
      </div>
    </div>
  );
}
