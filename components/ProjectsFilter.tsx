"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/data/projects";

const FILTERS: { label: string; disciplines: string[] | null }[] = [
  { label: "All", disciplines: null },
  { label: "Controls", disciplines: ["Controls", "Flight Dynamics", "Estimation"] },
  { label: "Embedded / Avionics", disciplines: ["Avionics", "Embedded Systems", "Hardware", "PLC"] },
  { label: "Mechatronics", disciplines: ["Mechatronics"] },
  { label: "Structures", disciplines: ["Aerospace Structures", "Structural Design", "Mechanical Design", "CAD"] },
  { label: "Propulsion", disciplines: ["Propulsion", "Thermodynamics"] },
  { label: "Software", disciplines: ["Software", "Simulation"] },
];

export default function ProjectsFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");

  const filter = FILTERS.find((f) => f.label === active);
  const visible = filter?.disciplines
    ? projects.filter((p) =>
        p.discipline.some((d) => filter.disciplines!.includes(d))
      )
    : projects;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.label}
            onClick={() => setActive(f.label)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              active === f.label
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "border border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">No projects match this filter.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {visible.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      )}
    </div>
  );
}
