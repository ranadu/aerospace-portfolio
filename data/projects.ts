export type ProjectStatus = "Planned" | "In Progress" | "Shipped";

export type Project = {
  title: string;
  slug: string;
  status: ProjectStatus;

  discipline: (
    | "Flight Dynamics"
    | "Controls"
    | "Avionics"
    | "Estimation"
    | "Hardware"
    | "PLC"
    | "Simulation"
    | "Software"
  )[];

  summary: string;

  engineeringFocus: string[];
  mathAndTheory: string[];
  tools: string[];

  includes: {
    matlab: boolean;
    simulink: boolean;
    hardware: boolean;
    plc: boolean;
  };

  repo?: string;
  demo?: string;
};