import Container from "@/components/Container";
import ProjectsFilter from "@/components/ProjectsFilter";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <Container>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <p className="text-zinc-600 dark:text-zinc-300">
          Control systems, embedded logic, structural design, propulsion analysis, and engineering software.
        </p>
      </div>

      <div className="mt-8">
        <ProjectsFilter projects={projects} />
      </div>
    </Container>
  );
}
