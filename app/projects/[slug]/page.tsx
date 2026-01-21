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



       {/* /* Image Section */}
        {p.slug === "3dof-helicopter-control" && (
  <section className="space-y-6">
    {/* <h2 className="text-xl font-semibold">Media</h2> */}
<div className="flex items-center justify-between gap-4">    
    <a
  href="/docs/3dof-helicopter-control/AER_822_CDR.pdf"
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
        href="https://github.com/ranadu/Capstone-project-3-DOF-helicopter"
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

    {/* Hardware overview image
    <figure className="space-y-2">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <Image
          src="/media/3dof-helicopter-control/image1.png"
          alt="3-DOF helicopter experimental setup"
          width={1600}
          height={900}
          className="w-full h-auto"
        />
      </div>
      <figcaption className="text-center text-sm text-zinc-600 dark:text-zinc-300">
        <span className="font-medium">Figure 1.</span> Laboratory 3-DOF helicopter platform used for pitch, yaw, and elevation control experiments.
      </figcaption>
    </figure> */}
    {p.slug === "3dof-helicopter-control" && (
  <section className="space-y-4">
    <h3 className="text-xl font-semibold">Control Architecture</h3>

    <p className="text-zinc-700 dark:text-zinc-200 max-w-3xl">
      Block-diagram representation of the closed-loop control system used for the
      3-DOF helicopter. Independent PID controllers were designed for pitch,
      elevation, and travel, with actuator saturation and safety limits applied
      to motor voltage commands.
    </p>

    <figure className="space-y-3">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <Image
          src="/media/3dof-helicopter-control/control_architecture.png"
          alt="Control architecture block diagram for the 3-DOF helicopter system"
          width={1600}
          height={900}
          className="w-full h-auto"
        />
      </div>

      <figcaption className="mx-auto max-w-3xl text-center text-sm text-zinc-500 dark:text-zinc-400">
        <span className="font-medium text-zinc-700 dark:text-zinc-200">
          Figure 1.
        </span>{" "}
        Control architecture showing reference tracking, PID control loops,
        actuator saturation, and feedback from the helicopter dynamics.
      </figcaption>
    </figure>
  </section>
)}


    {/* Control response plots (grid) */}
<div className="grid gap-6 md:grid-cols-2">
  <figure className="space-y-3">
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <Image
        src="/media/3dof-helicopter-control/image1.png"
        alt="Elevation and pitch response"
        width={1200}
        height={800}
        className="w-full h-auto"
      />
    </div>
    <figcaption className="mx-auto max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400">
      <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 2.</span>{" "}
      Elevation and pitch closed-loop response.
    </figcaption>
  </figure>

  <figure className="space-y-3">
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <Image
        src="/media/3dof-helicopter-control/image1.png"
        alt="Elevation and pitch response"
        width={1200}
        height={800}
        className="w-full h-auto"
      />
    </div>
    <figcaption className="mx-auto max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400">
      <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 2.</span>{" "}
      Elevation and pitch closed-loop response.
    </figcaption>
  </figure>

<figure className="space-y-3">
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <Image
        src="/media/3dof-helicopter-control/image2.png"
        alt="Travel angle tracking response"
        width={1200}
        height={800}
        className="w-full h-auto"
      />
    </div>
    <figcaption className="mx-auto max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400">
      <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 3.</span>{" "}
      Travel angle tracking under reference changes.
    </figcaption>
  </figure>

  <figure className="space-y-3">
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <Image
        src="/media/3dof-helicopter-control/image2.png"
        alt="Travel angle tracking response"
        width={1200}
        height={800}
        className="w-full h-auto"
      />
    </div>
    <figcaption className="mx-auto max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400">
      <span className="font-medium text-zinc-700 dark:text-zinc-200">Figure 3.</span>{" "}
      Travel angle tracking under reference changes.
    </figcaption>
  </figure>
</div>


    {/* Video */}
    <figure className="space-y-2">
      <video
        className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800"
        controls
        playsInline
        preload="metadata"
      >
        <source
          src="/media/3dof-helicopter-control/capstone-video1.mov"
          type="video/quicktime"
        />
        Your browser does not support the video tag.
      </video>
      <figcaption className="text-center text-sm text-zinc-600 dark:text-zinc-300">
        <span className="font-medium">Video 1.</span> Experimental closed-loop test of the 3-DOF helicopter demonstrating real-time control performance.
      </figcaption>
    </figure>
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

        <section className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="font-medium">Includes</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {p.includes.matlab && <Tag label="MATLAB" />}
            {p.includes.simulink && <Tag label="Simulink" />}
            {p.includes.hardware && <Tag label="Hardware" />}
            {p.includes.plc && <Tag label="PLC" />}
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

    </Container>



  );
}