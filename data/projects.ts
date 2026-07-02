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

  highlight?: string;
  designDecisions?: string[];
  limitations?: string[];

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
    title: "3-DOF Helicopter Control and Trajectory Tracking (Capstone)",
    slug: "3dof-helicopter-control",
    status: "Completed",
    discipline: ["Controls", "Simulation", "Flight Dynamics", "Mechatronics", "Hardware"],
    oneLiner:
      "Full closed-loop PID control on a real Quanser 3-DOF helicopter: elevation settles in under 4 s, travel tracks a 5th-order polynomial trajectory across 120° with ~8% overshoot.",
    summary:
      "Modelled, simulated, and controlled a Quanser 3-DOF helicopter across all three axes: elevation, pitch, and travel. Plant transfer functions were derived analytically and validated with system identification (MATLAB tfest). Travel uses a cascade controller: an inner PD loop stabilises pitch, and an outer PD loop commands pitch angle to achieve the desired travel angle. A quintic polynomial trajectory planner generates smooth waypoint-to-waypoint paths with zero velocity and acceleration at each waypoint. Final controllers were tuned in Simulink using the Control System Tuner, then refined on hardware. Elevation settles in under 4 s with less than 2% steady-state error. Mission 1 was completed successfully: the helicopter followed a multi-point trajectory (120° → 30° → 120° → 105° → 120° → land) in real time. A 50 Hz notch filter was added to reject drill vibration noise during Mission 2.",
    engineeringFocus: [
      "Cascade controller for travel: inner pitch PD + outer travel PD",
      "System identification via MATLAB tfest from measured input/output data",
      "Quintic polynomial trajectory planner: zero velocity and acceleration at each waypoint",
      "Anti-windup on elevation integrator to handle actuator saturation at 21.4 V operating point",
      "50 Hz notch filter design for drill vibration rejection (Mission 2)",
    ],
    mathAndTheory: [
      "Linearised rotational dynamics: torque balance about elevation, pitch, and travel axes",
      "Transfer function derivation from first principles and system ID cross-check",
      "Cascade control: bandwidth separation between inner and outer loops",
      "Quintic polynomial boundary conditions: position, velocity, acceleration at t0 and tf",
      "Notch filter: normalised frequency, bandwidth, Bode plot verification",
    ],
    tools: ["MATLAB", "Simulink", "Control System Tuner", "QUARC (Quanser real-time)"],
    highlight: "Elevation settles in under 4 s, less than 2% steady-state error. Multi-point 120° trajectory completed on real hardware.",
    designDecisions: [
      "Cascade architecture for travel instead of direct PID. The helicopter can only travel by pitching first, so treating pitch as an inner setpoint makes the control structure match the physics.",
      "Used system identification alongside the analytical model. The theoretical elevation TF (0.0854/s²) didn't match hardware well; the tfest-identified 3rd-order model (0.11/(s³+3.9s²+1.4s+4.6)) tracked much better in simulation.",
      "Quintic over cubic trajectory polynomials. Cubic enforces position and velocity but leaves acceleration discontinuous at waypoints, which produces jerky motion. Quintic constrains all three and produces noticeably smoother transitions on the rig.",
      "Saturated motor voltage before the controller saw it. Without explicit saturation modelling, the integrator winds up during large step commands and the first real hardware run overshoots badly.",
    ],
    limitations: [
      "Decoupled SISO controllers assume small angles. The axes start coupling above ~20°, so aggressive manoeuvres would need gain scheduling or a nonlinear controller.",
      "Steady-state oscillation on travel in hardware runs. Identified as Kp too high for travel; there wasn't enough test time to fully resolve it before the demo.",
      "No formal robustness analysis. Gain and phase margins were not plotted for the final gains, so the stability margins are unknown.",
    ],
    includes: { matlab: true, simulink: true, hardware: true, plc: false, cad: false },
  },

  /* AI Chatbot — commented out, doesn't fit the engineering focus of this portfolio
  {
    title: "AI Chatbot Assistant",
    slug: "ai-chatbot-assistant",
    status: "Completed",
    discipline: ["Software"],
    oneLiner:
      "Full-stack chatbot with a FastAPI backend and React frontend, fully deployed. Shows I can build and ship software end-to-end, not just firmware.",
    summary:
      "Built to show full-stack software capability alongside the hardware projects. FastAPI backend connected to the GROQ LLM API, React/TypeScript frontend with dark mode, chat history, and live streaming responses. Fully deployed: Render for the backend, Vercel for the frontend. Relevant for engineering roles that need software tooling, dashboards, or HMI work alongside embedded systems.",
    engineeringFocus: [
      "REST API design with persistent session state (SQLite)",
      "Streaming LLM responses and real-time frontend updates",
      "Full deployment pipeline: backend on Render, frontend on Vercel",
      "State management for multi-turn chat history",
    ],
    mathAndTheory: [
      "LLM prompt engineering: system and user role design",
      "RESTful API structure and JSON contracts",
      "Frontend component lifecycle and async state sync",
    ],
    tools: ["TypeScript", "React", "FastAPI", "Python", "SQLite", "GROQ API", "Vercel", "Render"],
    highlight: "Actually deployed and live. Backend on Render, frontend on Vercel, with an embedded demo on the project page.",
    designDecisions: [
      "Picked FastAPI over Flask mainly for the automatic docs and built-in validation via Pydantic. Makes the API much easier to test and extend.",
      "Used SQLite to keep it simple. No need for a separate database service on a free tier.",
    ],
    limitations: [
      "No auth, so sessions aren't isolated between users. Would need that before putting it in front of real users.",
      "The LLM API sometimes takes a few seconds and there's no timeout. A real tool needs proper error handling here.",
    ],
    includes: { matlab: false, simulink: false, hardware: false, plc: false, cad: false },
  },
  */

  /* Flight Envelope Protection — Python-only simulation, no aircraft grounding; commented out to keep portfolio focused on hardware/controls/embedded
  {
    title: "Flight Envelope Protection System (Fly-By-Wire)",
    slug: "flight-envelope-protection",
    ...
  },
  */

  {
    title: "Supersonic Propulsion System Design & Trade Study",
    slug: "supersonic-propulsion-design",
    status: "Completed",
    discipline: ["Propulsion", "Thermodynamics", "Simulation"],
    oneLiner:
      "Preliminary propulsion design for Mach 3.2 cruise. Designed a 3-shock inlet using the Oswatitsch principle and compared a custom engine against the Olympus 593 in a parametric trade study.",
    summary:
      "A preliminary propulsion design study for a sustained Mach 3.2 cruise vehicle. The inlet uses the Oswatitsch equal-strength shock principle to maximise total pressure recovery across three oblique shocks. A 1D parametric turbojet cycle analysis swept compressor pressure ratio and turbine inlet temperature to map specific thrust and TSFC across the feasible design space. A mission-optimised fictional engine was selected and compared against the Olympus 593 to determine whether an off-the-shelf solution would meet the mission requirement.",
    engineeringFocus: [
      "3-shock external-compression inlet using Oswatitsch equal-strength principle",
      "Parametric 1D turbojet cycle: OPR and TIT sweep",
      "Specific thrust and TSFC mapping across the feasible design space",
      "Mission-driven design point selection from parametric results",
      "Trade study: mission-custom engine vs. Olympus 593",
    ],
    mathAndTheory: [
      "Compressible flow: oblique shock relations, Mach number, deflection angles",
      "Oswatitsch principle: equal-strength shocks minimise total pressure loss",
      "1D turbojet cycle: isentropic compression, combustion, expansion",
      "Specific thrust and TSFC as functions of OPR and TIT at Mach 3.2",
    ],
    tools: ["MATLAB", "LaTeX"],
    highlight: "Showed the mission-custom turbojet outperforms the Olympus 593 at the design point. The Oswatitsch inlet gives the best pressure recovery for three oblique shocks.",
    designDecisions: [
      "Used the Oswatitsch equal-strength principle for the inlet because it minimises total pressure loss for a fixed number of shocks. There's a clean proof for it.",
      "Went with external compression over mixed. Mixed-compression inlets can unstart and need active throat control, which is a lot of complexity for a preliminary study.",
      "Comparing the custom engine against the Olympus 593 was the actual point. The real question is whether off-the-shelf is good enough or whether the mission needs something custom.",
    ],
    limitations: [
      "1D cycle analysis assumes ideal efficiencies. Real component maps, cooling bleeds, and combustion losses would reduce net thrust and need iteration.",
      "Only the Mach 3.2 design point. Off-design during subsonic climb and transonic acceleration isn't covered and would be needed for a full mission analysis.",
      "Steady uniform inflow is assumed. Real inlets see boundary layer ingestion and shock-boundary layer interactions that affect compressor stability.",
    ],
    includes: { matlab: true, simulink: false, hardware: false, plc: false, cad: false },
    repo: "https://github.com/ranadu/SupersonicPropulsionDesign",
  },

  {
    title: "Aircraft Structural Redesign: Wing Box & Landing Gear",
    slug: "aircraft-structural-redesign",
    status: "Completed",
    discipline: ["Aerospace Structures", "CAD", "Structural Design", "Mechanical Design"],
    oneLiner:
      "Redesigned the wing box and landing gear for a light aircraft. Focus was on realistic load paths, not just pretty CAD. Section cuts used to verify the internal structure actually works.",
    summary:
      "A structural redesign of a light aircraft focusing on the wing box and landing gear. The work prioritises realistic load paths and structural geometry that could actually be built. A 2-spar wing box was modelled parametrically in Fusion 360, with section cuts used to verify that internal walls, flanges, and spar caps are continuous and in the right place. The landing gear uses a cantilever leaf-spring design consistent with the aircraft class. Engineering sketches were used to work out the design intent before going into CAD.",
    engineeringFocus: [
      "2-spar wing box: spar placement, wall thickness, internal volume layout",
      "Cantilever landing gear: ground load path from wheel to airframe attachment",
      "Section analysis to verify internal geometry and load-carrying wall continuity",
      "Concept-to-detail workflow: sketches to layout to parametric CAD to section check",
    ],
    mathAndTheory: [
      "Aircraft structural load paths: bending, shear, and torsion in the wing box",
      "Ground reaction forces and landing load distribution",
      "Spar sizing: second moment of area, shear flow",
      "Manufacturability: joint complexity vs. structural efficiency",
    ],
    tools: ["Fusion 360", "Section analysis", "Engineering layout sketches"],
    highlight: "Used section cuts, not just isometric views. You can't tell from the outside if the load path is continuous.",
    designDecisions: [
      "Went with two spars instead of three. For a light aircraft, a third spar adds weight and complexity without much benefit.",
      "Section cuts were the main validation tool. An isometric render looks fine even if the internal walls aren't where they need to be. A section shows you.",
      "Leaf spring gear is the right call at this aircraft size. Oleo struts add maintenance overhead you don't need for a light aircraft.",
    ],
    limitations: [
      "No FEA. Sizing is based on conceptual calculations. A real design would need Nastran or Abaqus analysis against certified load cases.",
      "Material is notional. Follow-up would be alloy selection using MIL-HDBK-5 allowables with appropriate knockdown factors.",
      "Dynamic landing loads aren't analysed. FAR Part 23 certification requires drop test equivalent cases, and the gear geometry would need to be sized against those.",
    ],
    includes: { cad: true, matlab: false, simulink: false, hardware: false, plc: false },
    repo: "https://github.com/ranadu/wing-box-structural-design",
  },

  {
    title: "IMU Attitude Estimator: Kalman Filter on Embedded Hardware",
    slug: "imu-attitude-estimator",
    status: "Completed",
    discipline: ["Controls", "Embedded Systems", "Mechatronics", "Simulation", "Hardware"],
    oneLiner:
      "Roll/pitch estimator running on STM32 and Arduino. Kalman filter achieves 0.30° RMS vs 0.36° for a complementary filter, and estimates gyro bias online so no calibration step is needed.",
    summary:
      "A real-time attitude estimator built around the MPU-6050 IMU, reading accelerometer and gyroscope data over I2C on Arduino and STM32. The Kalman filter runs two states: the attitude angle and the gyro bias. By estimating the bias online, the filter corrects for drift without any factory calibration. A Python simulation with realistic noise models validated the filter design before hardware deployment. Results: accelerometer alone 2.01° RMS, gyro integration 13.6°, complementary filter 0.36°, Kalman 0.30°. The bias estimate converges to the true value within about 5 seconds. Data streams over UART at 100 Hz.",
    engineeringFocus: [
      "2-state Kalman filter: simultaneous angle and gyro bias estimation",
      "I2C driver at register level: MPU-6050 burst reads and DLPF configuration",
      "Online gyro bias estimation without factory calibration",
      "Simulation before hardware: validate the filter design in Python first",
      "Deterministic embedded C firmware at 100 Hz on Arduino and STM32",
    ],
    mathAndTheory: [
      "Discrete Kalman filter: predict-update cycle and covariance propagation",
      "2-state observability: angle and bias observable from accelerometer alone",
      "Sensor fusion: complementary filter vs. Kalman filter trade-offs",
      "IMU noise: white noise floor and constant bias drift model",
      "I2C: register addressing, burst read timing, DLPF configuration",
    ],
    tools: ["C (Arduino / STM32 HAL)", "Python", "NumPy", "Matplotlib", "I2C"],
    highlight: "0.30° RMS on the Kalman filter vs 0.36° for the complementary filter. Bias converges in about 5 seconds with no calibration step.",
    designDecisions: [
      "Two states: angle and gyro bias. One state isn't enough because you can't correct for drift without estimating the bias. Going to more states would need a full INS.",
      "Wrote the I2C driver from scratch instead of using a library. Wanted direct control over the DLPF settings and burst reads, and didn't want hidden abstractions.",
      "Tuned Q by watching how fast the filter tracks a step change in bias. Too low and it's sluggish, too high and noise starts bleeding through.",
    ],
    limitations: [
      "Assumes constant gyro bias. Temperature-varying bias would need thermal compensation or an extra state.",
      "Degrades during sustained linear accelerations. The accelerometer can't distinguish gravity from vehicle acceleration, so a full INS with GPS would be needed for that.",
      "Roll and pitch only. Yaw needs a magnetometer and isn't covered here.",
    ],
    includes: { matlab: false, simulink: false, hardware: true, plc: false, cad: false },
    repo: "https://github.com/ranadu/imu-attitude-estimator",
  },

  {
    title: "Conveyor Control PLC: Safety Interlocks and Fault Handling",
    slug: "plc-conveyor-control",
    status: "Completed",
    discipline: ["PLC", "Embedded Systems", "Mechatronics", "Software"],
    oneLiner:
      "PLC controller in IEC 61131-3 Structured Text for a conveyor system. E-stop kills the motor in one scan cycle, jam faults latch and need a manual reset.",
    summary:
      "A safety-focused PLC controller for an automated conveyor, written in IEC 61131-3 Structured Text. Four states: IDLE, STARTING, RUNNING, FAULT. There's a 2-second safe-start delay before the motor energises, and a part-present timer that trips a jam fault after 3 seconds. Faults latch and require a deliberate operator reset. The E-stop is wired NC and checked unconditionally at the top of every scan cycle, before the state machine runs, so no software bug can prevent it from firing. A Python simulation of the 10 ms scan cycle generates a timing diagram covering both fault scenarios. Compatible with OpenPLC, CODESYS, and Siemens TIA Portal.",
    engineeringFocus: [
      "4-state machine: IDLE, STARTING, RUNNING, FAULT",
      "E-stop checked before the state machine every scan, can't be software-masked",
      "NC contact wiring: a broken wire puts the system in a safe state",
      "Fault latching with conditional reset (E-stop clear and jam sensor clear)",
      "IEC 61131-3 Structured Text, compatible with OpenPLC, CODESYS, TIA Portal",
    ],
    mathAndTheory: [
      "Deterministic scan cycle: all outputs updated within one 10 ms cycle of an E-stop change",
      "NC contact safety convention: de-energise-to-trip for fail-safe wiring",
      "State machine design for safety-critical sequential logic",
      "IEC 60204-1 Category 0 stop: immediate removal of power to the actuator",
    ],
    tools: ["IEC 61131-3 Structured Text", "OpenPLC Runtime", "Python", "Matplotlib"],
    highlight: "E-stop kills the motor in one scan cycle (10 ms). It runs before the state machine every time, so no software bug can block it.",
    designDecisions: [
      "Used Structured Text over Ladder Logic. A CASE statement is much cleaner for a state machine and easier for a safety reviewer to audit.",
      "E-stop check runs before the state machine, not inside it. If you put it inside each state, one bug in one case could accidentally block the safety response.",
      "Faults latch and need a manual reset. Auto-restart after a jam is dangerous if someone has walked into the machine to clear it.",
    ],
    limitations: [
      "E-stop is software-evaluated. A production system would use a hardware safety relay (Pilz PNOZ or equivalent) so the motor circuit breaks at the relay level, independent of the PLC.",
      "The 3-second jam threshold is hardcoded. In production this would be an HMI parameter with password protection and a change log.",
      "No redundant input monitoring. SIL 2+ systems need dual-channel inputs with cross-monitoring to catch single-point wiring faults.",
    ],
    includes: { matlab: false, simulink: false, hardware: true, plc: true, cad: false },
    repo: "https://github.com/ranadu/plc-conveyor-control",
  },

  /* 2-DOF Camera Gimbal — In Progress, hardware not yet built; commented out until complete
  {
    title: "2-DOF Camera Gimbal: Mechanical Design and IMU-Based Stabilisation",
    slug: "2dof-camera-gimbal",
    status: "In Progress",
    discipline: ["Controls", "Mechatronics", "CAD", "Embedded Systems", "Hardware"],
    oneLiner:
      "2-axis gimbal with MPU-6050 Kalman filter feedback and dual PID loops at 200 Hz. Settles a 15 deg pitch step in 0.17 s, rejects a 0.05 N.m disturbance with under 3.5 deg peak deviation.",
    summary:
      "A pitch-roll camera stabilisation gimbal designed from first principles. The mechanical structure was modelled parametrically in CAD (STLs generated programmatically with numpy-stl). The control system uses direct-register MPU-6050 reads at 200 Hz, with a 2-state Kalman filter per axis estimating attitude and gyro bias simultaneously. Two independent PID loops drive servo PWM via Timer2 interrupt. Gains were designed by pole placement for omega_n = 26 rad/s and zeta = 0.78, then validated in a Python simulation with realistic IMU noise (2 deg RMS accelerometer, 0.25 deg/s gyro white noise, 0.6 deg/s bias estimated online). The Kalman filter and IMU driver are a direct extension of the imu-attitude-estimator project. The servo was sized by hand calculation against a 3g shock load, yielding a safety factor of 1.81 on the MG996R.",
    engineeringFocus: [
      "Pole-placement PID gain design: omega_n = 26 rad/s, zeta = 0.78 per axis",
      "2-state Kalman filter: simultaneous angle and gyro bias estimation at 200 Hz",
      "Derivative-on-measurement PID: eliminates derivative kick on setpoint steps",
      "MPU-6050 direct register reads at 200 Hz via Timer2 interrupt (no IMU library)",
      "Parametric STL geometry generation and hand-calculation servo torque sizing",
    ],
    mathAndTheory: [
      "Rotational plant model: J*theta_ddot + b*theta_dot = Kt*u - tau_dist",
      "Pole placement: closed-loop char. eq. from PD gains in degree-space vs. rad-space plant",
      "Discrete Kalman filter: predict-update cycle, 2x2 covariance propagation",
      "Servo torque sizing: static 3g shock moment arm + dynamic alpha*J peak torque",
      "Anti-windup: integral clamping with derivative-on-measurement to prevent saturation coupling",
    ],
    tools: ["Python", "NumPy", "Matplotlib", "numpy-stl", "C++ (Arduino)", "I2C", "Fusion 360 (in progress)"],
    highlight:
      "0.17 s pitch settling, 3.47 deg peak disturbance rejection. Gains designed analytically, not tuned by trial and error.",
    designDecisions: [
      "Servos instead of brushless gimbal motors. A BLDC gimbal requires a FOC driver and position encoder, which is a separate embedded project. Servos let the focus stay on the control design.",
      "Kalman filter instead of complementary filter. The imu-attitude-estimator project benchmarked both; Kalman makes the noise model explicit, estimates bias online without calibration, and achieves 0.30 deg vs. 0.36 deg RMS. Same filter, ported to this project.",
      "Derivative-on-measurement in the PID. Derivative-on-error causes a kick when the setpoint steps (d_err/dt = 15 deg / 5 ms = 3000 deg/s). Derivative-on-measurement eliminates this because the measurement only changes as fast as the plant responds.",
      "Integral clamping rather than back-calculation anti-windup. Back-calculation interacts badly with the derivative term during saturation. Clamping the integral contribution directly is simpler and avoids the coupling entirely.",
    ],
    limitations: [
      "No encoder on the servo output shaft. Backlash and compliance mean the true frame angle can differ from the servo command by 1-2 deg.",
      "Servo deadband (~1-2 deg) sets a floor on steady-state error that the integrator cannot fully eliminate without causing limit cycling.",
      "Accelerometer degrades under sustained lateral acceleration. The Kalman filter uses accelerometer as the angle reference; vehicle manoeuvres corrupt the measurement. Same limitation as the IMU estimator project.",
      "Simulation uses Euler integration at 5 ms. For higher-frequency plant dynamics or stiff systems, this would need RK4. Sufficient here given the plant time constant is ~40 ms.",
    ],
    includes: { matlab: false, simulink: false, hardware: true, plc: false, cad: true },
    repo: "https://github.com/ranadu/2dof-camera-gimbal",
  },
  */

  /* SkyPulse AI — web app with aerospace terminology; out of place for controls/embedded/mechatronics roles
  {
    title: "SkyPulse AI: Aircraft Predictive Maintenance Dashboard",
    slug: "skypulse-ai",
    ...
  },
  */
];
