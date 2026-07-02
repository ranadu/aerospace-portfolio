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
          BEng Aerospace Engineering, Toronto Metropolitan University, 2024&nbsp;·&nbsp;Toronto
        </p>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          I'm an aerospace engineer. I build control systems, write embedded firmware, and test them on real hardware.
        </h1>

        <p className="max-w-2xl text-zinc-600 dark:text-zinc-300">
          Most of my work sits at the intersection of aerospace and embedded systems. I've built
          a closed-loop helicopter controller validated on a real Quanser rig, written Kalman
          filter firmware running on STM32, and designed a safety-critical PLC controller from
          scratch. I like the full stack: derive the model, write the code, see what breaks.
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
          2024 aerospace engineering grad from TMU. My focus has been controls and embedded
          systems: capstone was a full closed-loop PID controller on a real Quanser helicopter
          rig, then I built Kalman filter firmware in C for STM32, and a safety-critical PLC
          controller from scratch. I also have work in structures and propulsion. Open to roles
          in aerospace, mechatronics, or embedded/firmware.
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
          <li>Closed-loop PID and cascade control, tuned on real hardware not just simulation</li>
          <li>Embedded C firmware: register-level I²C drivers, Kalman filtering at 100-200 Hz on STM32 and Arduino</li>
          <li>Safety-critical PLC logic in IEC 61131-3 Structured Text, with fault latching and E-stop design</li>
          <li>Propulsion cycle analysis and inlet design for supersonic cruise</li>
          <li>Structural wing box sizing, load path analysis, and parametric CAD in Fusion 360</li>
        </ul>
      </section>
    </Container>
  );
}
