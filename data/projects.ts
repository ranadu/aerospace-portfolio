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
  | "Mechatronics"
  | "Embedded Systems"
  | "Mechanical Design"
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
  discipline: ["Controls", "Simulation", "Flight Dynamics", "Mechatronics", "Hardware"],
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
    "Full-stack AI chatbot demonstrating backend API design, persistent state management, and cloud deployment — skills directly applicable to embedded tooling and engineering software.",
  summary:
    "Built to demonstrate full-stack software engineering capability alongside the hardware-focused projects in this portfolio. Developed a custom FastAPI backend connected to the GROQ LLM API, with a React/TypeScript frontend featuring dark mode, chat history, and real-time assistant feedback. Deployed using Render (backend) and Vercel (frontend). Relevant to engineering roles requiring software tooling, data pipeline work, or HMI/dashboard development alongside embedded systems.",
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
  discipline: ["Avionics", "Controls", "Flight Dynamics", "Embedded Systems"],
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
  discipline: ["Aerospace Structures", "CAD", "Structural Design", "Mechanical Design"],
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









  {
    title: "IMU Attitude Estimator — Kalman Filter on Embedded Hardware",
    slug: "imu-attitude-estimator",
    status: "Completed",
    discipline: ["Controls", "Embedded Systems", "Mechatronics", "Simulation", "Hardware"],
    oneLiner:
      "Real-time roll/pitch estimation using a Kalman filter fusing MPU-6050 accelerometer and gyroscope data, implemented in embedded C and validated in Python simulation.",
    summary:
      "A real-time attitude estimation system built around the MPU-6050 IMU (accelerometer + gyroscope), reading sensor data over I2C on Arduino and STM32 platforms. The system implements a discrete 2-state Kalman filter that fuses noisy accelerometer measurements with drifting gyroscope integration to produce accurate, low-latency attitude estimates. The filter simultaneously estimates gyroscope bias online, correcting for sensor drift without factory calibration. A full Python simulation with realistic MPU-6050 noise models validates filter design before hardware deployment — comparing accelerometer-only (RMS 2.01°), gyroscope integration (RMS 13.6°), complementary filter (RMS 0.36°), and Kalman filter (RMS 0.30°) approaches. Sensor data is streamed over UART at 100 Hz for real-time logging and visualization.",
    engineeringFocus: [
      "Discrete 2-state Kalman filter design and implementation (angle + gyro bias)",
      "I2C sensor interfacing at register level — MPU-6050 burst reads, DLPF configuration",
      "Online gyro bias estimation without factory calibration",
      "Python simulation for filter validation before hardware deployment",
      "Real-time embedded C firmware structured for deterministic 100 Hz execution",
    ],
    mathAndTheory: [
      "Discrete Kalman filter: predict-update cycle, covariance propagation",
      "2-state linear system: [roll angle, gyro bias] — observability analysis",
      "Sensor fusion: complementary filter vs. Kalman filter trade-offs",
      "IMU noise characterisation: white noise floor, constant bias drift",
      "I²C protocol: register-level addressing, burst read, clock stretching",
    ],
    tools: ["C (Arduino / STM32 HAL)", "Python", "NumPy", "Matplotlib", "I²C protocol"],
    includes: { matlab: false, simulink: false, hardware: true, plc: false, cad: false },
    repo: "https://github.com/ranadu/imu-attitude-estimator",
  },

  {
    title: "Conveyor Control PLC — Safety Interlocks & Fault Handling",
    slug: "plc-conveyor-control",
    status: "Completed",
    discipline: ["PLC", "Embedded Systems", "Mechatronics", "Software"],
    oneLiner:
      "IEC 61131-3 Structured Text PLC controller for an automated conveyor — state machine sequencing, jam detection, fault latching, and hardwired E-stop safety override.",
    summary:
      "A safety-oriented PLC controller written in IEC 61131-3 Structured Text for an automated conveyor belt system. The controller implements a 4-state machine (IDLE → STARTING → RUNNING → FAULT) with a 2-second safe-start delay before motor energisation, jam detection via a part-present timer (fault if part active > 3 s), and fault latching requiring deliberate operator RESET. The E-stop is wired NC (normally closed) and evaluated unconditionally at the top of every scan cycle — outside the state machine — so it cannot be masked by software state. A Python simulation of the full PLC scan cycle generates a timing diagram demonstrating both fault scenarios: jam detection and E-stop response. Code is compatible with OpenPLC Runtime (Raspberry Pi), CODESYS, and Siemens TIA Portal.",
    engineeringFocus: [
      "4-state machine: IDLE → STARTING → RUNNING → FAULT",
      "Hardwired NC E-stop evaluated outside state machine — cannot be software-masked",
      "Jam detection via TON timer — fault latches on part-present > 3 s",
      "Fault latching with conditional RESET (E-stop clear + jam cleared)",
      "IEC 61131-3 Structured Text — compatible with OpenPLC, CODESYS, TIA Portal",
    ],
    mathAndTheory: [
      "Deterministic scan cycle execution and timing guarantees",
      "NC contact safety convention (fail-safe wiring)",
      "State machine design for safety-critical sequential logic",
      "IEC 60204-1 Category 0 stop via hardwired E-stop circuit",
    ],
    tools: ["IEC 61131-3 Structured Text", "OpenPLC Runtime", "Python", "Matplotlib"],
    includes: { matlab: false, simulink: false, hardware: true, plc: true, cad: false },
    repo: "https://github.com/ranadu/plc-conveyor-control",
  },
];