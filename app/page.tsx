import Container from "@/components/Container";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container>
      <section className="space-y-6">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Aerospace Engineering graduate • Toronto • Controls + Software + Hardware
        </p>
        

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
  I design, simulate, and control aerospace systems — from math and models
  to real hardware and software.
</h1>

<p className="max-w-2xl text-zinc-600 dark:text-zinc-300">
  Aerospace engineering portfolio demonstrating end-to-end system design:
  from first-principles modeling and control law development
  to simulation validation and real hardware testing.
</p>


        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/projects"
            className="rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
          >
            View Projects
          </Link>

          <Link
            href="/resume"
            className="rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-900"
          >
            Resume
          </Link>

          <a
            href="https://github.com/ranadu"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-900"
          >
            GitHub
          </a>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold">What this portfolio shows</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
  <li>Closed-loop control design validated in simulation and hardware (3-DOF helicopter)</li>
  <li>Safety-critical flight envelope protection logic (fly-by-wire concepts)</li>
  <li>Supersonic propulsion trade studies using first-principles cycle analysis</li>
  <li>Structural redesign supported by analysis and engineering judgment</li>
  <li>Custom engineering software for simulation, visualization, and decision support</li>
</ul>
      </section>
    </Container>
  );
}