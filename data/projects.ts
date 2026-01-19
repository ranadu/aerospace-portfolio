export type ProjectStatus = "Planned" | "In Progress" | "Shipped" | "Completed";

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

  oneLiner: string;
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

export const projects: Project[] = [
  {
  title: "3-DOF Helicopter Control and Trajectory Tracking - Capstone Project",
  slug: "3dof-helicopter-control",
  status: "Completed",
  discipline: ["Controls", "Simulation", "Flight Dynamics"],
  oneLiner:
    "Closed-loop PID control of a 3-DOF helicopter achieving stable trajectory tracking under actuator constraints.",
  summary:
    "Modeled and controlled a laboratory 3-DOF helicopter using MATLAB and Simulink. Independent PID controllers were designed and tuned for pitch, elevation, and travel axes to achieve stable trajectory tracking. Actuator saturation limits were incorporated to ensure realistic and safe motor voltage commands. Controller performance was validated through trajectory-based simulations.",
  engineeringFocus: [
    "Multi-axis PID controller design",
    "Trajectory tracking and reference following",
    "Closed-loop stability and transient response",
    "Actuator saturation and safety limits",
  ],
  mathAndTheory: [
    "Linear system modeling",
    "PID control theory",
    "Time-domain response analysis",
    "Stability and steady-state error analysis",
  ],
  tools: ["MATLAB", "Simulink", "Control Systems"],
  includes: { matlab: true, simulink: true, hardware: false, plc: false },
   },
  {
  title: "AI Chatbot Assistant",
  slug: "ai-chatbot-assistant",
  status: "Completed",
  discipline: ["Software"],
  oneLiner:
    "A full-stack AI chatbot built with FastAPI and React, supporting persistent memory and dynamic UX features.",
  summary:
    "Developed an interactive chatbot using a custom FastAPI backend connected to the GROQ LLM API, with a React/TypeScript frontend featuring dark mode, emoji picker, chat history, and real-time assistant feedback. Deployed using Render (backend) and Vercel (frontend).",
  engineeringFocus: [
    "Backend API with memory management (SQLite)",
    "Frontend UX with live typing indicator and theming",
    "Integration with GROQ's LLM API (chat completions)",
    "State management for chat history and sessions",
  ],
  mathAndTheory: [
    "LLM prompt engineering (system/user roles)",
    "RESTful API structure and JSON data handling",
    "Frontend component lifecycle and state sync",
  ],
  tools: ["TypeScript", "React", "FastAPI", "GROQ API", "Vercel", "Render"],
  includes: { matlab: false, simulink: false, hardware: false, plc: false },
   },
  {
  title: "Flight Envelope Protection System (Fly-By-Wire)",
  slug: "flight-envelope-protection",
  status: "Completed",
  discipline: ["Avionics", "Controls", "Flight Dynamics"],
  oneLiner:
    "Fly-by-wire envelope protection that limits pilot pitch commands to prevent stall and unsafe aircraft states.",
  summary:
    "A simplified fly-by-wire flight envelope protection system that monitors angle of attack and pitch rate to modify pilot commands in real time. The system prevents stall and excessive pitch rates while preserving smooth, controllable aircraft response.",
  engineeringFocus: [
    "Flight envelope protection logic",
    "Pilot command shaping and limiting",
    "Angle-of-attack based safety constraints",
    "Rate damping and soft saturation",
    "Safety-critical control behavior",
  ],
  mathAndTheory: [
    "Linearized longitudinal aircraft dynamics",
    "Feedback control with saturation",
    "Stability and damping near envelope limits",
    "Limit-cycle avoidance in control systems",
  ],
  tools: ["Python", "Control systems", "Numerical simulation", "Matplotlib"],
  includes: { matlab: false, simulink: false, hardware: false, plc: false },
  },






  // New planned projects
  {
    title: "MATLAB/Simulink Aircraft Control Verification",
    slug: "matlab-simulink-control",
    status: "Planned",
    discipline: ["Controls", "Simulation"],
    oneLiner:
      "Model-based design in MATLAB/Simulink with root locus, Bode, margins, and controller verification.",
    summary:
      "Aircraft longitudinal (or lateral) dynamics modeled and linearized around trim. Control loops built in Simulink with PID and LQR designs, and performance verified using classical frequency-domain tools.",
    engineeringFocus: [
      "Model-based design workflow",
      "Verification via frequency response + margins",
      "Cross-check against Python implementation",
    ],
    mathAndTheory: [
      "Transfer functions",
      "Root locus",
      "Bode plots and stability margins",
    ],
    tools: ["MATLAB", "Simulink"],
    includes: { matlab: true, simulink: true, hardware: false, plc: false },
  },
  {
    title: "Embedded Hardware Attitude Control Rig",
    slug: "embedded-attitude-control-rig",
    status: "Planned",
    discipline: ["Controls", "Hardware", "Estimation"],
    oneLiner:
      "Real-time discrete PID control using IMU feedback, actuator saturation handling, and telemetry plotting.",
    summary:
      "A microcontroller-based closed-loop control system with IMU sensing and motor actuation. Includes filtering, sampling-rate selection, saturation handling, and streaming telemetry to Python/MATLAB for analysis.",
    engineeringFocus: [
      "Discrete-time control implementation",
      "Sensor noise + filtering",
      "Actuator limits + saturation logic",
      "Telemetry-driven debugging",
    ],
    mathAndTheory: ["Discrete PID", "Sampling and aliasing", "Noise models"],
    tools: ["Arduino/STM32", "IMU", "Python/MATLAB plotting"],
    includes: { matlab: true, simulink: false, hardware: true, plc: false },
  },
  {
    title: "PLC Automation & Safety Interlocks",
    slug: "plc-automation-safety",
    status: "Planned",
    discipline: ["PLC", "Hardware", "Software"],
    oneLiner:
      "Ladder logic sequencing with interlocks, fault handling, and emergency-stop safety behavior.",
    summary:
      "Industrial automation project using a PLC environment (real or simulated) with an I/O map, state sequencing, timers, interlocks, E-stop, and fault recovery. Documented with state diagrams and safety rationale.",
    engineeringFocus: [
      "Deterministic sequencing",
      "Interlocks and safety logic",
      "Fault handling + recovery",
      "I/O mapping and timing",
    ],
    mathAndTheory: ["Timing constraints", "Deterministic control behavior"],
    tools: ["OpenPLC/CODESYS/Siemens TIA (one)", "Ladder Logic", "HMI (optional)"],
    includes: { matlab: false, simulink: false, hardware: true, plc: true },
  },
];