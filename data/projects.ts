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
    title: "6-DOF Aircraft Flight Dynamics Simulator",
    slug: "six-dof-flight-dynamics",
    status: "Planned",
    discipline: ["Flight Dynamics", "Simulation", "Software"],
    oneLiner:
      "Newton–Euler 6-DOF rigid-body sim with frames/quaternions, RK4 integration, and validation scenarios.",
    summary:
      "A reusable 6-DOF simulation engine for rigid-body aircraft motion with coordinate transforms, force/moment models, and telemetry outputs for control and visualization.",
    engineeringFocus: [
      "Rigid-body dynamics core",
      "Reference frames and transformations",
      "Numerical integration (RK4)",
      "Scenario-based validation",
    ],
    mathAndTheory: [
      "Newton–Euler equations",
      "Rotation matrices and quaternions",
      "Stability modes and perturbations",
    ],
    tools: ["Python", "NumPy", "Plotly/Matplotlib", "MATLAB (validation)"],
    includes: { matlab: true, simulink: false, hardware: false, plc: false },
  },
  {
  title: "3-DOF Helicopter Control and Trajectory Tracking",
  slug: "3dof-helicopter-control",
  status: "Completed",
  discipline: ["Controls", "Simulation", "Aerospace"],
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
    title: "Autopilot Mode Manager & Safety Logic",
    slug: "autopilot-modes-safety",
    status: "Planned",
    discipline: ["Avionics", "Controls", "Software"],
    oneLiner:
      "State-machine autopilot: MANUAL/STABILIZE/ALT_HOLD/HDG_HOLD/NAV_WP with FAILSAFE triggers.",
    summary:
      "UAV-style autopilot mode logic with guard conditions, priority handling, sensor dropout simulation, actuator saturation detection, and failsafe behavior with reason-coded logs.",
    engineeringFocus: [
      "Avionics-style mode logic",
      "Guard conditions + priority rules",
      "Fault scenarios and failsafe",
      "Deterministic transition logging",
    ],
    mathAndTheory: ["Control loop interactions under fault conditions"],
    tools: ["Python", "State machines", "FastAPI (optional UI)"],
    includes: { matlab: false, simulink: false, hardware: false, plc: false },
  },
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