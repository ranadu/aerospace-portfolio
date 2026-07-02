import Container from "@/components/Container";
import Tag from "@/components/Tag";
import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";


type Params = { slug: string } | Promise<{ slug: string }>;

export default async function ProjectDetail({ params }: { params: Params }) {
  const resolved = await Promise.resolve(params);
  const slug = resolved.slug;

  const p = projects.find((x) => x.slug === slug);
  if (!p) return notFound();

  return (
    <Container>
      <div className="space-y-6">
        <Link
          href="/projects"
          className="text-sm text-zinc-600 hover:underline dark:text-zinc-300"
        >
          ← Back to Projects
        </Link>

        <header className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl font-semibold tracking-tight">{p.title}</h1>
            <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-200">
              {p.status}
            </span>
          </div>

          <p className="text-zinc-600 dark:text-zinc-300">{p.oneLiner}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {p.discipline.map((t) => (
              <Tag key={t} label={t} />
            ))}
            {p.includes.matlab && <Tag label="MATLAB" />}
            {p.includes.simulink && <Tag label="Simulink" />}
          </div>
        </header>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Summary</h2>
          <p className="text-zinc-700 dark:text-zinc-200">{p.summary}</p>
        </section>



        {p.slug === "2dof-camera-gimbal" && (
  <section className="space-y-8">

    {/* GitHub link */}
    <div className="flex flex-wrap items-center gap-3">
      <a href="https://github.com/ranadu/2dof-camera-gimbal" target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
          <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.55-3.88-1.55-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.16 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.8 0c2.2-1.5 3.18-1.19 3.18-1.19.63 1.64.23 2.86.11 3.16.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .3.2.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" />
        </svg>
        View on GitHub
      </a>
    </div>

    {/* Key metrics strip */}
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {[
        { label: "Pitch settling time", value: "0.17 s (simulated)" },
        { label: "Disturbance rejection", value: "< 3.5 deg peak (simulated)" },
        { label: "Control rate", value: "200 Hz" },
        { label: "Axes", value: "Pitch + Roll" },
      ].map(({ label, value }) => (
        <div key={label} className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
          <p className="mt-0.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{value}</p>
        </div>
      ))}
    </div>

    {/* Simulation results */}
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Simulation Results</h2>
      <p className="max-w-2xl text-zinc-700 dark:text-zinc-200">
        Three-scenario closed-loop simulation at 200 Hz with realistic MPU-6050 noise (2 deg RMS
        accelerometer, 0.25 deg/s gyro white noise, 0.6 deg/s bias estimated online by the Kalman
        filter). Scenario A: hold at zero with a 0.05 N.m disturbance step at t = 1 s.
        Scenario B: 15 deg pitch step. Scenario C: simultaneous 15 deg pitch + 10 deg roll.
      </p>
      <figure className="space-y-3">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <Image
            src="/media/2dof-camera-gimbal/gimbal_response.png"
            alt="2-DOF gimbal closed-loop PID simulation: pitch and roll step responses with disturbance, and motor torque commands"
            width={1650}
            height={1350}
            className="h-auto w-full"
          />
        </div>
        <figcaption className="mx-auto max-w-3xl text-center text-sm text-zinc-500 dark:text-zinc-400">
          <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 1.</span>{" "}
          Top: pitch axis, disturbance at t = 1 s, 15 deg step at t = 3 s. Middle: roll axis, 10 deg step at t = 6 s.
          Bottom: motor torque commands, MG996R stall limit shown. Settling in 0.17 s (pitch) and 0.15 s (roll).
        </figcaption>
      </figure>
    </section>

    {/* Motor sizing summary */}
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Servo Sizing</h2>
      <p className="text-zinc-700 dark:text-zinc-200">
        Pitch axis sized for a 3g landing shock with a 100 g camera at 30 mm offset
        and 80 g frame at 20 mm offset. Required holding torque: 0.135 N.m. MG996R
        rated at 0.245 N.m gives a safety factor of 1.81. The dynamic slew torque
        (0.109 N.m peak) is the less critical constraint.
      </p>
      <div className="flex flex-wrap gap-4 text-sm text-zinc-700 dark:text-zinc-300">
        {[
          ["Static 3g hold", "0.135 N.m"],
          ["MG996R rated", "0.245 N.m"],
          ["Safety factor", "1.81"],
          ["Dynamic peak", "0.109 N.m"],
        ].map(([label, val]) => (
          <div key={label} className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900">
            <span className="text-zinc-500 dark:text-zinc-400">{label}: </span>
            <span className="font-mono font-semibold">{val}</span>
          </div>
        ))}
      </div>
    </section>

  </section>
)}

        {p.slug === "3dof-helicopter-control" && (
  <section className="space-y-8">

    {/* Links */}
    <div className="flex flex-wrap items-center gap-3">
      <a href="/docs/3dof-helicopter-control/AER_822_CDR.pdf" target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M6 2h7l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V8h4.5L13 3.5zM8 12h8v1.5H8V12zm0 3h8v1.5H8V15zm0 3h5v1.5H8V18z" />
        </svg>
        Full CDR Report (PDF)
      </a>
      <a href="https://github.com/ranadu/Capstone-project-3-DOF-helicopter" target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
          <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.55-3.88-1.55-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.16 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.8 0c2.2-1.5 3.18-1.19 3.18-1.19.63 1.64.23 2.86.11 3.16.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .3.2.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" />
        </svg>
        View on GitHub
      </a>
    </div>

    {/* Key metrics strip */}
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {[
        { label: "Settling time (elev.)", value: "< 4 s" },
        { label: "Travel overshoot", value: "~8% at 120°" },
        { label: "Trajectory order", value: "5th-order poly" },
        { label: "Controllers", value: "PID + cascade PD" },
      ].map(({ label, value }) => (
        <div key={label} className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
          <p className="mt-0.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{value}</p>
        </div>
      ))}
    </div>

    {/* Simulation results figure */}
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Simulation Results</h2>
      <p className="max-w-2xl text-zinc-700 dark:text-zinc-200">
        Left: elevation closed-loop step response using the experimentally identified transfer function
        (system ID via MATLAB <code>tfest</code>) with the final PID gains. Right: quintic polynomial
        trajectory for Mission 1 — the helicopter travels 120° forward, 90° back, 90° forward, 15° back,
        15° forward, then lands. Each segment uses a 5th-order polynomial to enforce zero velocity
        and acceleration at every waypoint.
      </p>
      <figure className="space-y-3">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <Image
            src="/media/3dof-helicopter-control/sim_results.png"
            alt="Elevation step response and Mission 1 quintic trajectory"
            width={2080}
            height={880}
            className="h-auto w-full"
          />
        </div>
        <figcaption className="mx-auto max-w-3xl text-center text-sm text-zinc-500 dark:text-zinc-400">
          <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 1.</span>{" "}
          Left: elevation step response (plant from system ID, PID Kp=15 Ki=11 Kd=20). Settling within 4 s, less than 2% steady-state error.
          Right: Mission 1 quintic trajectory — smooth velocity profile with zero velocity at each waypoint.
        </figcaption>
      </figure>
    </section>

    {/* PID gains + architecture */}
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Controller Design</h2>
      <p className="max-w-2xl text-zinc-700 dark:text-zinc-200">
        Travel uses a cascade architecture: an inner PD loop controls pitch angle, and an outer PD loop
        commands pitch to achieve the desired travel angle. Elevation uses a full PID. Gains were initially
        estimated with the Simulink Control System Tuner (loop-shaping for pitch, reference tracking for
        travel), then manually refined on hardware.
      </p>
      <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <table className="w-full text-sm text-zinc-700 dark:text-zinc-300">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-700">
              <th className="px-4 py-2.5 text-left font-semibold">Axis</th>
              <th className="px-4 py-2.5 text-left font-semibold">Controller</th>
              <th className="px-4 py-2.5 text-left font-semibold">Kp</th>
              <th className="px-4 py-2.5 text-left font-semibold">Ki</th>
              <th className="px-4 py-2.5 text-left font-semibold">Kd</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {[
              ["Elevation", "PID", "15", "11", "20"],
              ["Pitch (inner)", "PD", "3.5", "0", "2.5"],
              ["Travel (outer)", "PD", "1", "0", "1.5"],
            ].map(([axis, type, kp, ki, kd]) => (
              <tr key={axis}>
                <td className="px-4 py-2 font-medium">{axis}</td>
                <td className="px-4 py-2 text-zinc-500 dark:text-zinc-400">{type}</td>
                <td className="px-4 py-2 font-mono">{kp}</td>
                <td className="px-4 py-2 font-mono">{ki}</td>
                <td className="px-4 py-2 font-mono">{kd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Control architecture diagram */}
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Control Architecture</h2>
      <figure className="space-y-3">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <Image
            src="/media/3dof-helicopter-control/control_architecture.png"
            alt="Control architecture block diagram for the 3-DOF helicopter"
            width={1600} height={900} className="h-auto w-full"
          />
        </div>
        <figcaption className="mx-auto max-w-3xl text-center text-sm text-zinc-500 dark:text-zinc-400">
          <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 2.</span>{" "}
          Closed-loop control architecture. Travel uses a cascade (inner pitch PD, outer travel PD).
          Actuator saturation limits motor voltage to protect hardware.
        </figcaption>
      </figure>
    </section>

    {/* Hardware video */}
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Hardware Demo</h2>
      <p className="max-w-2xl text-zinc-700 dark:text-zinc-200">
        Mission 1 executed on the real Quanser 3-DOF platform. The helicopter takes off to steady-level
        flight, follows the full multi-point trajectory, then lands. A 50 Hz notch filter was added to
        reject vibration noise from the drill used in Mission 2.
      </p>
      <figure className="space-y-2">
        <video className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800"
          controls playsInline preload="metadata">
          <source src="/media/3dof-helicopter-control/capstone-video1.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
        <figcaption className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          <span className="font-medium text-zinc-700 dark:text-zinc-200">Video 1.</span>{" "}
          Real-hardware Mission 1 run — multi-point trajectory tracking on the Quanser 3-DOF helicopter.
        </figcaption>
      </figure>
    </section>

  </section>
)}

        {p.slug === "skypulse-ai" && (
  <section className="space-y-8">
    <div className="flex flex-wrap items-center gap-3">
      <a href="https://github.com/ranadu/SkyPulseAI" target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
          <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.55-3.88-1.55-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.16 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.8 0c2.2-1.5 3.18-1.19 3.18-1.19.63 1.64.23 2.86.11 3.16.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .3.2.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" />
        </svg>
        View on GitHub
      </a>
    </div>

    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {[
        { label: "Aircraft simulated", value: "8" },
        { label: "Subsystems per aircraft", value: "6" },
        { label: "Telemetry history", value: "24 hrs" },
        { label: "Formula unit tests", value: "18 passing" },
      ].map(({ label, value }) => (
        <div key={label} className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
          <p className="mt-0.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{value}</p>
        </div>
      ))}
    </div>

    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50 space-y-3">
      <h2 className="text-lg font-semibold">Engineering layer</h2>
      <p className="text-sm text-zinc-700 dark:text-zinc-200">
        The calculation layer is pure TypeScript with no UI dependencies. Every formula — MTBF,
        R(t), stress-adjusted RUL, FMEA RPN, VSI — is a standalone function with unit tests.
        A live validation page in the app runs all 18 tests in the browser and reports pass/fail.
        An engineering methodology page documents each formula with derivation and assumptions,
        and a worked examples page traces a full AC-102 calculation by hand.
      </p>
      <div className="flex flex-wrap gap-3 text-sm text-zinc-700 dark:text-zinc-300">
        {[
          ["MTBF", "14,200 hrs / 5 failures = 2,840 hrs"],
          ["R(100 hrs)", "e^(-100/2840) = 96.5%"],
          ["RPN (engine)", "9 × 2 × 5 = 90 (low)"],
          ["VSI", "4.2 mm/s ÷ 2.0 = 2.1 (warning)"],
        ].map(([label, val]) => (
          <div key={label} className="rounded-lg border border-zinc-200 bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-950">
            <span className="text-zinc-500 dark:text-zinc-400">{label}: </span>
            <span className="font-mono text-xs font-semibold">{val}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

        {/* /* End Image Section */}
        <section className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Engineering Focus</h2>
            <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-200">
              {p.engineeringFocus.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Math & Theory</h2>
            <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-200">
              {p.mathAndTheory.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Tools</h2>
          <div className="flex flex-wrap gap-2">
            {p.tools.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </section>

        {p.designDecisions && p.designDecisions.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Engineering Decisions</h2>
            <ul className="space-y-3 text-zinc-700 dark:text-zinc-200">
              {p.designDecisions.map((d, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 font-semibold text-zinc-400 dark:text-zinc-500">{i + 1}.</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {p.limitations && p.limitations.length > 0 && (
          <section className="space-y-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">Limitations & Next Steps</h2>
            <ul className="space-y-2">
              {p.limitations.map((l, i) => (
                <li key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-0.5 shrink-0 text-zinc-400">–</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="font-medium">Includes</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {p.includes.matlab && <Tag label="MATLAB" />}
            {p.includes.simulink && <Tag label="Simulink" />}
            {p.includes.hardware && <Tag label="Hardware" />}
            {p.includes.plc && <Tag label="PLC" />}
            {p.includes.cad && <Tag label="CAD" />}
          </div>
        </section>
      </div>




      {/* Embed AI Chatbot Web App */}
{p.slug === "ai-chatbot-assistant" && (
  <section className="space-y-4">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <h2 className="text-xl font-semibold">Live Demo</h2>

      <a
        href="https://github.com/ranadu/AI-chatbot"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-4 w-4 fill-current"
        >
          <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.55-3.88-1.55-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.16 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.8 0c2.2-1.5 3.18-1.19 3.18-1.19.63 1.64.23 2.86.11 3.16.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .3.2.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" />
        </svg>
        View on GitHub
      </a>
    </div>

    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-zinc-200 shadow-sm dark:border-zinc-800">
      <iframe
        src="https://ai-chatbot-cyan-alpha.vercel.app"
        title="AI Chatbot Live Demo"
        className="h-full w-full"
        allow="clipboard-write"
      />
    </div>

    <p className="text-sm text-zinc-600 dark:text-zinc-300">
      Embedded live demo served from Vercel. Try chatting with the assistant in real-time!
    </p>
  </section>
)}



{/* Flight Envelope Protection – Visual Results */}

{p.slug === "flight-envelope-protection" && (
  <>
<div className="flex justify-end">
<a
        href="https://github.com/ranadu/FlightEnvelopeProtection"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-4 w-4 fill-current"
        >
          <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.55-3.88-1.55-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.16 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.8 0c2.2-1.5 3.18-1.19 3.18-1.19.63 1.64.23 2.86.11 3.16.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .3.2.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" />
        </svg>
        View GitHub Code
      </a>
</div>
    
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Visual Results</h2>

      <div className="grid gap-6 md:grid-cols-2">

        {/* IMAGE 1 */}
        <figure className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src="/media/flight-envelope-protection/image1.png"
              alt="Fly-by-wire flight envelope protection control architecture"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="mx-auto max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 1.</span>{" "}
            Functional control architecture showing pilot command shaping via flight envelope protection with angle-of-attack and rate feedback.
          </figcaption>
        </figure>

        {/* IMAGE 2 */}
        <figure className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src="/media/flight-envelope-protection/image2.png"
              alt="Pilot command vs protected command with envelope protection engaged"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="mx-auto max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 2.</span>{" "}
            Envelope protection engaged: pilot pitch command exceeding the safe envelope is smoothly limited.
          </figcaption>
        </figure>

        {/* IMAGE 3 */}
        <figure className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src="/media/flight-envelope-protection/image3.png"
              alt="Nominal pitch response without envelope protection"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="mx-auto max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 3.</span>{" "}
            Nominal operation without envelope intervention.
          </figcaption>
        </figure>

        {/* IMAGE 4 */}
        <figure className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src="/media/flight-envelope-protection/image4.png"
              alt="Envelope protection refinement comparison"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="mx-auto max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 4.</span>{" "}
            Control-law refinement eliminating chattering and improving damping.
          </figcaption>
        </figure>

      </div>
    </section>
  </>
)}




{p.slug === "supersonic-propulsion-design" && (
  <>
    {/* Supersonic Propulsion Design – Visual Results */}
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <a
  href="/docs/supersonic-propulsion-design/Preliminary_Design_and_Trade_Study_of_Supersonic_Propulsion_Systems_for_a_Mach_3_2_Commercial_Transport.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
>
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 fill-current"
    aria-hidden="true"
  >
    <path d="M6 2h7l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V8h4.5L13 3.5zM8 12h8v1.5H8V12zm0 3h8v1.5H8V15zm0 3h5v1.5H8V18z" />
  </svg>
  View Technical Report (PDF)
</a>
      <a
        href="https://github.com/ranadu/SupersonicPropulsionDesign"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-4 w-4 fill-current"
        >
          <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.55-3.88-1.55-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.16 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.8 0c2.2-1.5 3.18-1.19 3.18-1.19.63 1.64.23 2.86.11 3.16.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .3.2.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" />
        </svg>
        View GitHub Code
      </a>
    </div>
      <h2 className="text-xl font-semibold">Visual Results</h2>

      <div className="grid gap-6 md:grid-cols-2">

        {/* IMAGE 1 — Inlet Geometry */}
        <figure className="space-y-3 md:col-span-2">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src="/media/supersonic-propulsion-design/inlet_geometry.png"
              alt="Three-ramp supersonic inlet geometry designed using Oswatitsch equal-strength shock principle"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="mx-auto max-w-2xl text-center text-sm text-zinc-500 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 1.</span>{" "}
            Three-ramp external-compression supersonic inlet designed using the Oswatitsch equal-strength shock principle to maximize total pressure recovery at Mach 3.2.
          </figcaption>
        </figure>

        {/* IMAGE 2 — Specific Thrust Map */}
        <figure className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src="/media/supersonic-propulsion-design/fict_fspec.png"
              alt="Specific thrust parametric map versus compressor pressure ratio and turbine inlet temperature"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="mx-auto max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 2.</span>{" "}
            Specific thrust variation with compressor pressure ratio and turbine inlet temperature for the fictional turbojet at Mach 3.2, highlighting the feasible design region.
          </figcaption>
        </figure>

        {/* IMAGE 3 — TSFC Map */}
        <figure className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src="/media/supersonic-propulsion-design/fict_tsfc.png"
              alt="Thrust specific fuel consumption parametric map for Mach 3.2 turbojet cycle"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="mx-auto max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 3.</span>{" "}
            TSFC distribution for physically feasible operating points, illustrating the trade-off between fuel efficiency and thrust at high Mach number.
          </figcaption>
        </figure>

      </div>
    </section>
  </>
)}



{p.slug === "aircraft-structural-redesign" && (
  <>
    {/* Aircraft Structural Redesign – CAD Results */}
    <section className="space-y-6">
<div className="flex flex-wrap items-center gap-3">
    <a
  href="/docs/aircraft-structural-redesign/621_Redesign_Project.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
>
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
    <path d="M6 2h7l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V8h4.5L13 3.5zM8 12h8v1.5H8V12zm0 3h8v1.5H8V15zm0 3h5v1.5H8V18z" />
  </svg>
  View Technical Report (PDF)
</a>
<a
  href="https://github.com/ranadu/wing-box-structural-design"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
>
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
    <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.55-3.88-1.55-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.16 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.8 0c2.2-1.5 3.18-1.19 3.18-1.19.63 1.64.23 2.86.11 3.16.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .3.2.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" />
  </svg>
  View on GitHub
</a>
</div>
  <h2 className="text-xl font-semibold">Structural CAD Results</h2>
      <div className="grid gap-6 md:grid-cols-2">

        {/* IMAGE 1 — Wing Box Isometric */}
        <figure className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src="/media/aircraft-structural-redesign/wingbox_isometric.png"
              alt="Isometric CAD view of the aircraft wing box primary structure"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="mx-auto max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 1.</span>{" "}
            Isometric CAD view of the redesigned aircraft wing box showing the primary load-carrying structure.
          </figcaption>
        </figure>

        {/* IMAGE 2 — Wing Box Section Analysis */}
        <figure className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src="/media/aircraft-structural-redesign/wingbox_section.png"
              alt="Section analysis of the wing box showing internal structure"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="mx-auto max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 2.</span>{" "}
            Section analysis of the wing box revealing internal geometry and load-carrying walls.
          </figcaption>
        </figure>

        {/* IMAGE 3 — Landing Gear Isometric */}
        <figure className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src="/media/aircraft-structural-redesign/landing_gear_iso.png"
              alt="Isometric CAD view of the aircraft landing gear design"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="mx-auto max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 3.</span>{" "}
            Isometric CAD view of the landing gear assembly designed to transfer ground loads into the airframe.
          </figcaption>
        </figure>

        {/* IMAGE 4 — Landing Gear Section View */}
        <figure className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <Image
              src="/media/aircraft-structural-redesign/landing_gear_section.png"
              alt="Section view of the landing gear showing internal geometry"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="mx-auto max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 4.</span>{" "}
            Section view of the landing gear illustrating internal structure and load path during ground contact.
          </figcaption>
        </figure>

      </div>
    </section>
  </>
)}








      {/* PLC Conveyor Control — timing diagram + code snippet */}
      {p.slug === "plc-conveyor-control" && (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <a
              href="https://github.com/ranadu/plc-conveyor-control"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.55-3.88-1.55-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.16 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.8 0c2.2-1.5 3.18-1.19 3.18-1.19.63 1.64.23 2.86.11 3.16.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .3.2.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" />
              </svg>
              View on GitHub
            </a>
          </div>

          <section className="space-y-6">
            <h2 className="text-xl font-semibold">Timing Diagram</h2>
            <p className="max-w-2xl text-zinc-700 dark:text-zinc-200">
              Python simulation of the full PLC scan cycle at 10 ms, covering two fault scenarios:
              jam detection (part-present sensor active &gt; 3 s) and E-stop safety response
              (immediate motor kill, independent of state machine).
            </p>

            <figure className="space-y-3">
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <Image
                  src="/media/plc-conveyor-control/timing_diagram.png"
                  alt="PLC conveyor control timing diagram showing normal start, jam fault, reset, and E-stop response"
                  width={1800}
                  height={1125}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mx-auto max-w-3xl text-center text-sm text-zinc-500 dark:text-zinc-400">
                <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 1.</span>{" "}
                Scenario A (left): 2 s safe-start delay → normal run → jam fault → operator reset.
                Scenario B (right): restart → E-stop pressed → motor kills instantly → release → reset.
              </figcaption>
            </figure>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Safety Design</h2>
            <p className="text-zinc-700 dark:text-zinc-200">
              The E-stop is wired NC (normally closed). A broken wire, loose terminal, or pressed
              button all de-energise the input, triggering a Category 0 stop. The safety check
              runs at the top of every scan cycle, before the state machine, so no software state
              can prevent it from firing.
            </p>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
              <pre>{`(* Safety layer — runs every scan, BEFORE the state machine.
   Cannot be masked by any software state. *)
IF NOT estop THEN
    motor_run   := FALSE;   (* Immediate Category 0 stop     *)
    fault_latch := TRUE;    (* Latch — requires manual RESET *)
    lamp_estop  := TRUE;
    state       := ST_FAULT;
END_IF;

(* Reset only accepted when all conditions are clear *)
IF btn_reset AND estop AND NOT sensor_part THEN
    fault_latch := FALSE;
    state       := ST_IDLE;
END_IF;`}</pre>
            </div>

            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <table className="w-full text-sm text-zinc-700 dark:text-zinc-300">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-700">
                    <th className="pb-2 pr-6 text-left font-semibold">Tag</th>
                    <th className="pb-2 pr-6 text-left font-semibold">Address</th>
                    <th className="pb-2 pr-6 text-left font-semibold">Contact</th>
                    <th className="pb-2 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {[
                    ["btn_start",   "%IX0.0", "NO", "START pushbutton"],
                    ["btn_stop",    "%IX0.1", "NC", "STOP pushbutton (fail-safe)"],
                    ["btn_reset",   "%IX0.2", "NO", "Fault RESET"],
                    ["estop",       "%IX0.3", "NC", "E-stop, hardwired Category 0"],
                    ["sensor_part", "%IX0.4", "NO", "Part-present inductive sensor"],
                    ["motor_run",   "%QX0.0", "n/a", "Motor contactor K1"],
                    ["lamp_fault",  "%QX0.2", "n/a", "Red FAULT indicator H2"],
                  ].map(([tag, addr, contact, desc]) => (
                    <tr key={tag}>
                      <td className="py-1.5 pr-6 font-mono text-xs">{tag}</td>
                      <td className="py-1.5 pr-6 font-mono text-xs">{addr}</td>
                      <td className="py-1.5 pr-6">{contact}</td>
                      <td className="py-1.5">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}

      {/* IMU Attitude Estimator — simulation results + GitHub */}
      {p.slug === "imu-attitude-estimator" && (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <a
              href="https://github.com/ranadu/imu-attitude-estimator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.55-3.88-1.55-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.16 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.8 0c2.2-1.5 3.18-1.19 3.18-1.19.63 1.64.23 2.86.11 3.16.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .3.2.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5Z" />
              </svg>
              View on GitHub
            </a>
          </div>

          <section className="space-y-6">
            <h2 className="text-xl font-semibold">Simulation Results</h2>
            <p className="max-w-2xl text-zinc-700 dark:text-zinc-200">
              Python simulation using realistic MPU-6050 noise models (accelerometer noise 2°,
              gyroscope white noise 0.25 °/s, constant bias 0.6 °/s). The Kalman filter
              simultaneously estimates attitude and gyroscope bias, converging on the true
              bias without factory calibration.
            </p>

            <figure className="space-y-3">
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <Image
                  src="/media/imu-attitude-estimator/results.png"
                  alt="Kalman filter attitude estimation results: all methods vs ground truth, estimation error, and online bias estimation"
                  width={1800}
                  height={1125}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mx-auto max-w-3xl text-center text-sm text-zinc-500 dark:text-zinc-400">
                <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 1.</span>{" "}
                Top: all four methods vs ground truth. Bottom-left: estimation error. Kalman
                achieves RMS 0.30° vs complementary filter at 0.36°. Bottom-right: Kalman
                filter converges on the true 0.6 °/s gyroscope bias within ~5 s.
              </figcaption>
            </figure>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Hardware Implementation</h2>
            <p className="text-zinc-700 dark:text-zinc-200">
              Embedded C firmware targets Arduino (Uno / Nano) and STM32 (via STM32duino). The
              MPU-6050 driver interfaces the sensor at register level over I²C, no third-party
              IMU library. The Kalman filter runs at 100 Hz in under 50 µs on an 8 MHz AVR,
              leaving ample headroom for data logging over UART.
            </p>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
              <pre>{`/* Predict step — propagate state and covariance */
kf->rate   = newRate - kf->bias;
kf->angle += dt * kf->rate;

kf->P[0][0] += dt * (dt*kf->P[1][1] - kf->P[0][1]
                      - kf->P[1][0] + kf->Q_angle);
kf->P[0][1] -= dt * kf->P[1][1];
kf->P[1][0] -= dt * kf->P[1][1];
kf->P[1][1] += kf->Q_bias * dt;

/* Update step — fuse accelerometer measurement */
float S  = kf->P[0][0] + kf->R_measure;
float K0 = kf->P[0][0] / S;
float K1 = kf->P[1][0] / S;
float y  = newAngle - kf->angle;  /* innovation */

kf->angle += K0 * y;
kf->bias  += K1 * y;`}</pre>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Core predict-update cycle from <code>kalman.c</code>. The full 2-state filter in 15 lines of C.
            </p>
          </section>
        </>
      )}

    </Container>
  );
}