import Link from "next/link";

export default function NavLogo() {
  return (
    <Link
      href="/"
      aria-label="Storeone — go to homepage"
      className="text-xl font-bold tracking-widest uppercase text-neutral-900"
    >
      Storeone
    </Link>
  );
}
