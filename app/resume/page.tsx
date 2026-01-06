import Container from "@/components/Container";

export default function ResumePage() {
  return (
    <Container>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Resume</h1>

        <p className="text-zinc-600 dark:text-zinc-300">
          Download my resume or view a concise summary of my background and skills.
        </p>

        <a
          href="/resume.pdf"
          className="inline-block rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume (PDF)
        </a>

        <section className="space-y-3 pt-6">
          <h2 className="text-xl font-semibold">Core Competencies</h2>
          <ul className="list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
            <li>Flight dynamics and 6-DOF simulation</li>
            <li>Control systems (PID, LQR, adaptive methods)</li>
            <li>MATLAB/Simulink model-based design and verification</li>
            <li>Embedded control systems (IMU, actuators)</li>
            <li>PLC automation and safety logic</li>
            <li>Engineering software and visualization tools</li>
          </ul>
        </section>
      </div>
    </Container>
  );
}