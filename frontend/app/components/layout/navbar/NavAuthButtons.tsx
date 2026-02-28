import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavAuthButtons() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/login">Log in</Link>
      </Button>

      <Button size="sm" asChild>
        <Link href="/register">Register</Link>
      </Button>
    </div>
  );
}
