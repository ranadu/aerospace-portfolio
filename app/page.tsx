import Container from "@/components/Container";
import Link from "next/link";

const SKILLS = {
  "Hardware Platforms": ["STM32", "Arduino", "Raspberry Pi", "MPU-6050 IMU", "3-DOF Heli Platform"],
  "Languages & Tools": ["C / C++", "Python", "MATLAB", "Simulink", "Fusion 360", "Git", "LaTeX"],
  "Core Concepts": [
    "PID Control",
    "Kalman Filtering",
    "State-Space Modeling",
    "I²C · SPI · UART",
    "Sensor Fusion",
    "Compressible Flow",
    "Structural Analysis",
  ],
};

export default function HomePage() {
  return (
    <Container>
      {/* ── Hero ── */}
      <section className="space-y-6">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Engineering graduate&nbsp;·&nbsp;Toronto&nbsp;·&nbsp;Controls&nbsp;·&nbsp;Embedded Systems&nbsp;·&nbsp;Mechatronics&nbsp;·&nbsp;Structures
        </p>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          I design control systems and embedded solutions —
          from dynamics and simulation to real hardware and software.
        </h1>

        <p className="max-w-2xl text-zinc-600 dark:text-zinc-300">
          Engineering portfolio demonstrating end-to-end system design: from first-principles
          dynamics and control law development to embedded C firmware, simulation validation,
          and real hardware testing. Background in aerospace, with skills that transfer directly
          to mechatronics, robotics, and embedded systems roles.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            href="/projects"
            className="rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            View Projects
          </Link>
          <a
            href="https://www.linkedin.com/in/ranadu16/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-900"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ranadu"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-900"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* ── About ── */}
      <section className="mt-14 max-w-2xl space-y-3">
        <h2 className="text-xl font-semibold">About me</h2>
        <p className="text-zinc-600 dark:text-zinc-300">
          Aerospace Engineering graduate with hands-on experience in control systems, embedded
          firmware, structural design, and engineering simulation. I build things end-to-end —
          from a 3-axis helicopter control system validated on real hardware, to a Kalman
          filter-based attitude estimator running on STM32. I&apos;m looking for roles in
          aerospace, mechatronics, or embedded/firmware development where rigorous engineering
          and real hardware intersect.
        </p>
      </section>

      {/* ── Skills ── */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="mt-5 grid gap-6 sm:grid-cols-3">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── What this portfolio shows ── */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold">What this portfolio shows</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-300">
          <li>Closed-loop control design — PID tuning and stability analysis, validated on real hardware</li>
          <li>Embedded firmware in C — I²C sensor drivers, real-time Kalman filtering on STM32/Arduino</li>
          <li>Safety-critical logic — command shaping, saturation limits, and fault-tolerant behavior</li>
          <li>First-principles thermodynamic system design and propulsion trade studies</li>
          <li>Mechanical structural design with CAD, load-path reasoning, and section analysis</li>
          <li>Engineering software for simulation, data visualization, and technical tooling</li>
        </ul>
      </section>
    </Container>
  );
}
