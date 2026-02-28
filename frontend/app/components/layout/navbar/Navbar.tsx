import NavAuthButtons from "./NavAuthButtons";
import NavLogo from "./NavLogo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3"
      >
        {/* Left — logo */}
        <NavLogo />

        {/* Right — auth actions */}
        <NavAuthButtons />
      </nav>
    </header>
  );
}
