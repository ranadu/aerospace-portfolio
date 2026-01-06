import Container from "@/components/Container";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container>
      <section className="space-y-6">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Aerospace Engineer • Toronto • Controls + Software + Hardware
        </p>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          I design, simulate, and control aerospace systems — from math and models
          to real hardware and software.
        </h1>

        <p className="max-w-2xl text-zinc-600 dark:text-zinc-300">
          Aerospace engineering portfolio focused on flight dynamics, control systems,
          MATLAB/Simulink verification, embedded control, and automation-grade safety logic.
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
            href="https://github.com/"
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
          <li>6-DOF flight dynamics and numerical simulation</li>
          <li>Control design (PID, LQR, adaptive methods)</li>
          <li>MATLAB/Simulink model-based verification</li>
          <li>Embedded hardware control with sensors and actuators</li>
          <li>PLC-based automation and safety logic</li>
          <li>Engineering software and visualization tools</li>
        </ul>
      </section>
    </Container>
  );
}