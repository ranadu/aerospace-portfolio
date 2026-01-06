import Container from "@/components/Container";
import Tag from "@/components/Tag";
import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    </Container>
  );
}