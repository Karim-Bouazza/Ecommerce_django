export default function HeroTaglines() {
  return (
    <div className="absolute inset-x-0 top-[23%] z-20 mx-auto w-full max-w-7xl pr-6 pl-9">
      <div className="flex items-center gap-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/80 sm:text-xs">
          Move Comfortably
        </p>

        <span className="hidden sm:block flex-1 h-px bg-neutral-500" />

        <p className="hidden sm:block text-[10px] font-medium uppercase tracking-[0.3em] text-black/80 sm:text-xs">
          Live Freely
        </p>

        <span className="hidden md:block flex-1 h-px bg-neutral-500" />

        <p className="hidden md:block text-[10px] font-medium uppercase tracking-[0.3em] text-black/80 md:text-xs">
          Feel Confident
        </p>
      </div>
    </div>
  );
}
