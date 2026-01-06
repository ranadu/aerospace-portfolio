import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            Robert Anadu
          </Link>
          <nav className="flex items-center gap-5 text-sm">
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
            <Link href="/resume" className="hover:underline">
              Resume
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}