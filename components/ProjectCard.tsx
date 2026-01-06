import Link from "next/link";
import Tag from "./Tag";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group block rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 group-hover:underline dark:text-zinc-100">
            {p.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            {p.oneLiner}
          </p>
        </div>

        <span className="rounded-full border border-zinc-200 px-2 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-200">
          {p.status}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.discipline.map((t) => (
          <Tag key={t} label={t} />
        ))}
        {p.includes.matlab && <Tag label="MATLAB" />}
        {p.includes.simulink && <Tag label="Simulink" />}
        {p.includes.hardware && <Tag label="Hardware" />}
        {p.includes.plc && <Tag label="PLC" />}
      </div>
    </Link>
  );
}