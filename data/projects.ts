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
  | "Propulsion"
  | "Thermodynamics"
  | "Aerospace Structures"
  | "CAD"
  | "Structural Design"
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
    cad: boolean;
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
  includes: { matlab: true, simulink: true, hardware: false, plc: false, cad: false },
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
  includes: { matlab: false, simulink: false, hardware: false, plc: false, cad: false },
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
  includes: { matlab: false, simulink: false, hardware: false, plc: false, cad: false },
  },

 {
  title: "Supersonic Propulsion System Design & Trade Study",
  slug: "supersonic-propulsion-design",
  status: "Completed",
  discipline: ["Propulsion", "Thermodynamics", "Simulation"],
  oneLiner:
    "Preliminary design and trade study of a Mach 3.2 propulsion system using an Oswatitsch-optimized inlet and parametric turbojet cycle analysis.",
  summary:
    "A preliminary propulsion system design study for sustained Mach 3.2 cruise. The project includes the design of a multi-shock supersonic inlet optimized for maximum pressure recovery using the Oswatitsch equal-strength shock principle, followed by a one-dimensional parametric turbojet cycle analysis. A fictional mission-optimized engine is compared against the Olympus 593 off-the-shelf engine to assess feasibility, performance trade-offs, and mission suitability.",
  engineeringFocus: [
    "Supersonic inlet design and optimization (multi-shock compression)",
    "Mission-driven propulsion system sizing and feasibility analysis",
    "Parametric cycle analysis and constraint-based design selection",
    "Trade study against off-the-shelf propulsion systems",
  ],
  mathAndTheory: [
    "Compressible flow and oblique/normal shock relations",
    "Oswatitsch equal-strength shock principle",
    "One-dimensional turbojet cycle analysis",
    "Specific thrust and TSFC trade-offs at high Mach number",
  ],
  tools: ["MATLAB", "LaTeX"],
  includes: { matlab: true, simulink: false, hardware: false, plc: false, cad: false },
  },


  {
  title: "Aircraft Structural Redesign: Wing Box & Landing Gear",
  slug: "aircraft-structural-redesign",
  status: "Completed",
  discipline: ["Aerospace Structures", "CAD", "Structural Design"],
  oneLiner:
    "Structural redesign of a light aircraft wing box and landing gear system with CAD modeling, load-path reasoning, and section-based validation.",
  summary:
    "This project presents a structural redesign of a light aircraft focusing on the primary wing box and landing gear system. The work emphasizes realistic load paths, structural packaging, and manufacturable geometry. Detailed CAD models were developed in Fusion 360, including sectioned views to verify internal structure, component interfaces, and load transfer regions. The redesign balances structural integrity, simplicity, and clarity of engineering intent for portfolio demonstration.",
  engineeringFocus: [
    "Primary structure layout and load-path reasoning",
    "Wing box geometry, wall thickness selection, and internal volume definition",
    "Landing gear structural integration and ground load transfer",
    "CAD-based validation using section analysis and orthographic views",
  ],
  mathAndTheory: [
    "Aircraft structural load paths",
    "Ground reaction forces and landing loads",
    "Basic sizing considerations for primary aircraft structures",
    "Design-for-manufacturability principles",
  ],
  tools: [
    "Fusion 360 (parametric CAD)", "Section analysis and orthographic visualization", "Engineering sketches and layout planning",],
  includes: { cad: true, matlab: false, simulink: false, hardware: false, plc: false },
  },









   // New planned projects
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
    includes: {matlab: false, simulink: false, hardware: true, plc: true, cad: false},
  },
];