import Link from "next/link";
import Tag from "./Tag";
import type { Project } from "@/data/projects";

const STATUS_STYLES: Record<string, string> = {
  Completed: "border-green-300 text-green-700 dark:border-green-800 dark:text-green-400",
  "In Progress": "border-blue-300 text-blue-700 dark:border-blue-800 dark:text-blue-400",
  Shipped: "border-green-300 text-green-700 dark:border-green-800 dark:text-green-400",
  Planned: "border-zinc-200 text-zinc-500 dark:border-zinc-800 dark:text-zinc-400",
};

export default function ProjectCard({ p }: { p: Project }) {
  const shownTags = p.discipline.slice(0, 3);
  const extraCount = p.discipline.length - shownTags.length;

  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold leading-snug text-zinc-900 group-hover:underline dark:text-zinc-100">
          {p.title}
        </h3>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[p.status] ?? STATUS_STYLES.Planned}`}
        >
          {p.status}
        </span>
      </div>

      <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-300">
        {p.oneLiner}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {shownTags.map((t) => (
          <Tag key={t} label={t} />
        ))}
        {extraCount > 0 && (
          <span className="text-xs text-zinc-400 dark:text-zinc-500">
            +{extraCount} more
          </span>
        )}
      </div>

      {p.highlight && (
        <p className="mt-3 border-t border-zinc-100 pt-3 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          <span className="mr-1 font-semibold text-zinc-400 dark:text-zinc-500">→</span>
          {p.highlight}
        </p>
      )}
    </Link>
  );
}
