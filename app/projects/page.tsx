import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <Container>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          Simulation, controls, avionics logic, MATLAB/Simulink verification, embedded hardware, and PLC safety systems.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </Container>
  );
}