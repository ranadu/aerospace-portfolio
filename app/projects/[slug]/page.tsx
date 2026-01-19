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
    <h2 className="text-xl font-semibold">Media</h2>

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


    {/* Experimental video */}
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
    <h2 className="text-xl font-semibold">Live Demo</h2>
    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-zinc-200 shadow-sm dark:border-zinc-800">
      <iframe
        src="https://ai-chatbot-cyan-alpha.vercel.app"
        title="AI Chatbot Live Demo"
        className="w-full h-full"
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
    {/* Flight Envelope Protection – Visual Results */}
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
      <h2 className="text-xl font-semibold">Visual Results</h2>

      <div className="grid gap-6 md:grid-cols-2">

        {/* IMAGE 1 — Inlet Geometry */}
        <figure className="space-y-3 md:col-span-2">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
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