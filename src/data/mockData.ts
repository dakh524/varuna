import { SensorNodeInfo, ResearchReference, TeamMember, MissionStage, SeabedCell } from '../types';

export const SENSOR_NODES: SensorNodeInfo[] = [
  {
    id: 'N1',
    code: 'MAG-3100',
    name: 'N1 — Magnetic Anomaly Node',
    sensor: 'RM3100 3-Axis Geomagnetic Magnetometer',
    category: 'magnetic',
    inputs: ['Total Earth magnetic vector', 'Seafloor magnetic susceptibility', 'Vehicle stray flux'],
    outputs: ['Vector magnetic flux (Bx, By, Bz) in nT', 'Scalar anomaly relative to IGRF model'],
    whyItMatters: 'Detects remanent and induced magnetic anomalies caused by ferromagnetic mineral deposits (pyrrhotite, magnetite) and distinguishes seafloor basement rock from mineralization zones.',
    samplingRate: '100 Hz',
    mountingLocation: 'Forward boom (isolated from vehicle thruster currents)',
    color: '#00e5ff'
  },
  {
    id: 'N2',
    code: 'EM-TX',
    name: 'N2 — EM Transmitter Node',
    sensor: 'Multi-Frequency Tuned Induction TX Coil + H-Bridge Driver',
    category: 'em',
    inputs: ['Edge MCU PWM frequency selector', 'Battery bus current', 'TX temperature monitor'],
    outputs: ['Primary time-varying magnetic dipole field', 'Frequency sweep (200 Hz – 10 kHz)'],
    whyItMatters: 'Induces eddy currents in conductive seafloor bodies (massive sulfides, nodule blankets). Operates across multiple frequencies to evaluate depth of penetration and inductive skin depth.',
    samplingRate: 'Continuous programmable chirp',
    mountingLocation: 'Lower ventral keel',
    color: '#38bdf8'
  },
  {
    id: 'N3',
    code: 'EM-RX',
    name: 'N3 — EM Receiver Node',
    sensor: 'Differential Multi-Turn RX Coil + Low-Noise Instrumentation Amp + 24-bit ADC',
    category: 'em',
    inputs: ['Secondary induced magnetic field', 'Primary TX bucking reference', 'Seawater eddy backscatter'],
    outputs: ['In-phase & quadrature amplitude (mV)', 'Phase shift angle (deg)', 'Attenuation ratio'],
    whyItMatters: 'Directly detects secondary eddy current responses. High electrical conductivity targets produce distinct phase lags and amplitude increases compared to resistive ambient sediments.',
    samplingRate: '50 kHz sampling with 24-bit resolution',
    mountingLocation: 'Rear ventral receiver pod (calibrated baseline offset from TX)',
    color: '#818cf8'
  },
  {
    id: 'N4',
    code: 'ELEC-ENV',
    name: 'N4 — Electrical & Environmental Node',
    sensor: 'Galvanic Ag/AgCl Non-Polarizing Electrodes + Toroidal Conductivity Cell + MS5803-30BA Depth',
    category: 'electrical',
    inputs: ['Natural oxidation-reduction potential', 'Seawater salinity/ionic conductivity', 'Hydrostatic pressure & temperature'],
    outputs: ['Self-potential gradient (mV)', 'In-situ seawater conductivity (S/m)', 'Depth (0.1m res)', 'Water temp (0.01°C)'],
    whyItMatters: 'Active hydrothermal or redox-active sulfide mounds generate measurable negative self-potential (SP) halos (-10 to -100 mV). Conductivity and temperature are vital to normalize EM seawater absorption.',
    samplingRate: '20 Hz',
    mountingLocation: 'Mid-hull sensor bay & port/starboard trailing dipoles',
    color: '#00f0b5'
  },
  {
    id: 'N5',
    code: 'MOTION-PROC',
    name: 'N5 — Motion & Edge Processing Node',
    sensor: '6-DOF Low-Noise IMU + Dual-Core STM32H7 / ESP32-S3 Edge Processor',
    category: 'motion',
    inputs: ['3-axis angular acceleration', '3-axis rate gyros', 'Analog ADC bus', 'Node digital telemetry'],
    outputs: ['Real-time attitude (Roll, Pitch, Yaw)', 'Heave velocity', 'Dynamic correction matrix', 'Target scores'],
    whyItMatters: 'Vehicle pitch and roll tilt change coil orientation relative to the seabed, distorting field vectors. Node 5 calculates dynamic orientation transforms to prevent motion-induced false positives.',
    samplingRate: '200 Hz IMU fusion filter (Extended Kalman Filter)',
    mountingLocation: 'Center of mass inside primary pressure vessel',
    color: '#f59e0b'
  },
  {
    id: 'N6',
    code: 'ACOUST-REF',
    name: 'N6 — Acoustic Standoff & Reference Node',
    sensor: 'High-Frequency 500 kHz Acoustic Altimeter + Baseline Compensation Pickup',
    category: 'acoustic',
    inputs: ['Acoustic time-of-flight echo', 'Direct transmit reference loop'],
    outputs: ['Precise altitude/standoff to seabed (±5 mm)', 'Seafloor acoustic backscatter reflectance (dB)'],
    whyItMatters: 'Magnetic and EM fields decay steeply as ~1/r^3. Without millimeter-accurate altitude tracking, a weak anomaly close to the robot could masquerade as a massive deep anomaly.',
    samplingRate: '25 Hz acoustic ping',
    mountingLocation: 'Downward nadir face',
    color: '#fb7185'
  },
  {
    id: 'OPTICAL',
    code: 'OPT-CAM',
    name: 'Optical Ground-Truthing Module',
    sensor: 'Low-Light 4K Sony Starvis Sensor + Dual High-CRI 3000-Lumen Strobe LEDs',
    category: 'optical',
    inputs: ['Visible spectrum photon return', 'Acoustic trigger for illumination synchronization'],
    outputs: ['Seafloor visual frame grab (color + microtopography)', 'Contextual visual confidence flag'],
    whyItMatters: 'Provides independent visual verification of seabed texture, sediment cover, and manganese nodule pavement clusters. Used strictly for context and morphology confirmation, never for direct chemical assays.',
    samplingRate: '5 fps pulsed imagery on anomaly alert',
    mountingLocation: 'Forehead dome viewport with 45° downward angle',
    color: '#e879f9'
  },
  {
    id: 'TETHER',
    code: 'TETHER-LINK',
    name: 'Surface Umbilical & Winch Connection',
    sensor: 'Single Kevlar-Reinforced Neutral Buoyancy Tether + RS-485 / High-Speed Differential Line',
    category: 'tether',
    inputs: ['48V DC isolated topside power', 'Topside winch depth commands'],
    outputs: ['Bidirectional 10 Mbps telemetry link', 'Emergency tension feedback', 'Video & raw sensor streams'],
    whyItMatters: 'Eliminates reliance on heavy underwater batteries, enabling indefinite deployment dwell time over suspicious targets and instantaneous surface mission control intervention.',
    samplingRate: 'Topside sync: 100 Hz',
    mountingLocation: 'Dorsal tow-point bridle with strain relief',
    color: '#38bdf8'
  }
];

export const MISSION_STAGES: MissionStage[] = [
  {
    id: '01',
    stageNumber: '01',
    title: 'DEPLOY',
    tagline: 'Controlled Descent & Standoff Stabilization',
    description: 'VARUNA06 is lowered from the surface vessel via automated winch. Hydrostatic pressure sensor MS5803 and acoustic altimeter monitor descent rate, stabilizing the platform at nominal survey standoff (1.0 – 1.5 m above seafloor).',
    actionProtocol: 'Winch automated descent -> Acoustic floor lock at 1.25m -> Sensor baseline auto-zeroing.',
    sensorVerification: 'N4 (Depth) + N6 (Acoustic Altimeter) + N5 (Attitude check < 3° tilt).',
    decisionGate: 'Standoff steady between 1.0m and 1.5m, IMU stable -> ENTER MAPPING SURVEY.',
    iconName: 'Anchor'
  },
  {
    id: '02',
    stageNumber: '02',
    title: 'DETECT',
    tagline: 'Multi-Physics Anomaly Threshold Trigger',
    description: 'While moving along the primary survey track, continuous EM amplitude, magnetic vector, and galvanic potential are evaluated against background seawater baselines. An unexpected perturbation trips the preliminary anomaly detector.',
    actionProtocol: 'Continuous 100Hz background logging -> Sliding window standard deviation detection.',
    sensorVerification: 'N2/N3 (EM Amplitude > +12 mV) OR N1 (Delta B > 250 nT) OR N4 (SP < -35 mV).',
    decisionGate: 'Multi-sensor anomaly confidence crosses 65% threshold -> HALT TOW AND HOLD POSITION.',
    iconName: 'Search'
  },
  {
    id: '03',
    stageNumber: '03',
    title: 'SCORE',
    tagline: 'Target Signature Comparison Library',
    description: 'Edge processors isolate the anomaly response and extract key physical features: in-phase/quadrature ratio, magnetic susceptibility, and galvanic gradient. These are matched against calibrated physical reference signatures.',
    actionProtocol: 'Extract feature vector -> Normalize for standoff (1/r^3) and conductivity -> Run signature matching.',
    sensorVerification: 'Comparison with laboratory-calibrated physical libraries (Cu-rich sulfides, Ni-Co crusts, Mn nodules).',
    decisionGate: 'Calculates 4 Prospectivity Scores (0-100). If max score > 60 -> INITIATE ADAPTIVE RESCAN.',
    iconName: 'BarChart3'
  },
  {
    id: '04',
    stageNumber: '04',
    title: 'DECIDE',
    tagline: 'Autonomous Rescan Feasibility Analysis',
    description: 'System checks environmental conditions (current drift, tether tension, seafloor slope) to verify that an adaptive rescan will produce valid multi-angle measurements without collision hazard.',
    actionProtocol: 'Evaluate IMU stability, winch tension, and acoustic bottom slope.',
    sensorVerification: 'N5 (IMU drift) + N6 (Acoustic bottom gradient < 20°).',
    decisionGate: 'Safety margins green -> PROGRAM RESCAN STAR-PATTERN OFFSETS (N, E, S, W).',
    iconName: 'GitBranch'
  },
  {
    id: '05',
    stageNumber: '05',
    title: 'MOVE',
    tagline: 'Precision Offset Repositioning',
    description: 'The platform is guided through controlled micro-translations (via tether positioning / auxiliary vector thrusters) to 4 observation coordinates around the suspected target epicenter.',
    actionProtocol: 'Vector navigation to 4 offset points (0.8m North, 0.8m East, 0.8m South, 0.8m West).',
    sensorVerification: 'N5 (Dead-reckoning IMU) + N6 (Acoustic bottom tracking).',
    decisionGate: 'Waypoints reached with standoff maintained ±10 cm -> EXECUTE RESCAN OBSERVATIONS.',
    iconName: 'Navigation'
  },
  {
    id: '06',
    stageNumber: '06',
    title: 'RESCAN',
    tagline: 'Multi-Point Consistency Cross-Check',
    description: 'Repeats EM chirp sweep and magnetic vector measurements at each offset position. False positives caused by vehicle wobble, transient noise, or isolated junk nails fail consistency tests; true geologic anomalies show spatial coherence.',
    actionProtocol: 'Collect 4 independent measurement vectors -> Calculate spatial variance & consistency index.',
    sensorVerification: 'N1 + N2 + N3 + N4 across 4 discrete physical coordinates.',
    decisionGate: 'Consistency > 75% -> Reject false positive and promote to HIGH-CONFIDENCE TARGET.',
    iconName: 'RefreshCw'
  },
  {
    id: '07',
    stageNumber: '07',
    title: 'CONFIRM',
    tagline: 'Optical & Acoustic Ground-Truthing',
    description: 'High-intensity strobe LEDs illuminate the seafloor while the low-light 4K camera acquires macro imagery. Acoustic backscatter verifies seafloor hardness/roughness to corroborate nodule paving or outcrop morphology.',
    actionProtocol: 'Strobe activation -> 4K optical frame capture -> Acoustic reflection hardness classification.',
    sensorVerification: 'OPTICAL (Visible nodule clusters / mineralized crust) + N6 (High acoustic backscatter).',
    decisionGate: 'Visual evidence aligned with geophysical response -> MARK VALIDATED ANOMALY.',
    iconName: 'CheckCircle2'
  },
  {
    id: '08',
    stageNumber: '08',
    title: 'MAP & RECOVER',
    tagline: 'Georeferenced Prospectivity Registry',
    description: 'The anomaly record—including geographic coordinates, depth, standoff, multi-sensor signatures, and target prospectivity scores—is permanently tagged onto the seafloor bathymetric map. System either resumes survey or recovers to deck.',
    actionProtocol: 'Package georeferenced anomaly entry into GIS database -> Transmit to surface topside.',
    sensorVerification: 'Full mission dataset synced over tether.',
    decisionGate: 'Topside confirms target logged -> Platform proceeds to next transect or winched for recovery.',
    iconName: 'MapPin'
  }
];

export const RESEARCH_REFERENCES: ResearchReference[] = [
  {
    id: 'ref-01',
    citationKey: 'Gehrmann et al. (2019)',
    title: 'Marine Mineral Exploration With Controlled Source Electromagnetics at the TAG Hydrothermal Field',
    authors: 'Gehrmann, R. A., North, L. J., Szitkar, M., & Minshull, T. A.',
    journal: 'Geophysical Research Letters, 46(21), 11908-11916',
    year: 2019,
    doi: '10.1029/2019GL082928',
    keyContribution: 'Demonstrated that marine CSEM (Controlled Source Electromagnetics) coupled with magnetic surveys can delineate high-conductivity seafloor massive sulfide (SMS) mounds despite seawater conductivity attenuation.',
    varunaAdaptation: 'VARUNA06 adapts this large-ship CSEM principle into a lightweight, deployable tethered payload using high-frequency localized coil geometry, multi-frequency sweeping (200Hz - 10kHz), and targeted rescan verification.',
    relevanceTag: 'Electromagnetic & CSEM Foundation'
  },
  {
    id: 'ref-02',
    citationKey: 'Asada et al. / Bayonnaise Knoll',
    title: 'AUV-Based Near-Bottom Magnetic and Electromagnetic Survey for Seafloor Massive Sulfides',
    authors: 'Asada, M., et al. (JAMSTEC)',
    journal: 'Journal of Marine Science and Technology & JAMSTEC Reports',
    year: 2021,
    doi: '10.1007/s00773-021-00812-w',
    keyContribution: 'Established that near-bottom (< 3 m standoff) electromagnetic measurements drastically improve lateral resolution for seafloor polymetallic sulfide localization compared to surface or deep-towed high-altitude surveys.',
    varunaAdaptation: 'VARUNA06 enforces strict 1.0–1.5 m acoustic standoff tracking with acoustic altimeter feedback, using near-seabed proximity to detect compact high-grade mineralized anomalies.',
    relevanceTag: 'Near-Seafloor EM Resolution'
  },
  {
    id: 'ref-03',
    citationKey: 'Purser et al. (2024)',
    title: 'Deep-Sea Seafloor Imagery & Automated Abundance Estimation of Polymetallic Nodules in the CCZ',
    authors: 'Purser, A., Marcon, Y., Dreutter, S., & Boetius, A.',
    journal: 'Frontiers in Marine Science',
    year: 2024,
    doi: '10.3389/fmars.2024.1349812',
    keyContribution: 'Validated optical ground-truthing as a rapid spatial cross-reference for nodule density and habitat characterization when paired with physical sensors.',
    varunaAdaptation: 'VARUNA06 integrates a low-light optical module strictly as contextual confirmation to inspect seabed nodule pavement and prevent blind reliance on electromagnetic anomalies alone.',
    relevanceTag: 'Optical Ground-Truthing'
  },
  {
    id: 'ref-04',
    citationKey: 'Constable (2010)',
    title: 'Ten Years of Marine CSEM: Physics, Inversion, and Instrumentation',
    authors: 'Constable, S.',
    journal: 'Geophysics, 75(5), 75A67-75A81',
    year: 2010,
    doi: '10.1190/1.3483451',
    keyContribution: 'Detailed the fundamental physics of inductive coupling, diffusion of EM waves in conductive seawater (skin depth equations), and environmental noise rejection in marine geophysics.',
    varunaAdaptation: 'Used directly in our Environmental Correction Engine to calibrate the 1/r^3 distance decay and seawater electrical conductivity dampening factors.',
    relevanceTag: 'Geophysical Physics Foundation'
  }
];

export const SEABED_GRID_CELLS: SeabedCell[] = [
  { id: 'A1', col: 0, row: 0, label: 'Zone A-01', anomalyScore: 12, isTarget: false, prospectivity: { copper: 14, nickel: 9, cobalt: 8, manganese: 15 }, rescanConsistency: 94, finalConfidence: 11, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Pelagic sediment blanket with barren siliceous ooze. Baseline readings.' },
  { id: 'A2', col: 1, row: 0, label: 'Zone A-02', anomalyScore: 18, isTarget: false, prospectivity: { copper: 16, nickel: 12, cobalt: 10, manganese: 21 }, rescanConsistency: 92, finalConfidence: 15, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Normal sediment baseline. Ambient geomagnetic field steady.' },
  { id: 'A3', col: 2, row: 0, label: 'Zone A-03', anomalyScore: 24, isTarget: false, prospectivity: { copper: 20, nickel: 18, cobalt: 14, manganese: 28 }, rescanConsistency: 90, finalConfidence: 22, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Minor magnetic perturbation due to volcanic basalt pebble scatter.' },
  { id: 'A4', col: 3, row: 0, label: 'Zone A-04', anomalyScore: 68, isTarget: true, prospectivity: { copper: 45, nickel: 58, cobalt: 42, manganese: 79 }, rescanConsistency: 84, finalConfidence: 72, opticalConfirmation: 'CONFIRMED', status: 'RESCAN_VERIFIED', description: 'High acoustic backscatter with elevated manganese-like signature. Dense nodule cluster detected.' },
  { id: 'A5', col: 4, row: 0, label: 'Zone A-05', anomalyScore: 21, isTarget: false, prospectivity: { copper: 15, nickel: 19, cobalt: 11, manganese: 25 }, rescanConsistency: 89, finalConfidence: 18, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Soft sediment transition zone.' },

  { id: 'B1', col: 0, row: 1, label: 'Zone B-01', anomalyScore: 15, isTarget: false, prospectivity: { copper: 12, nickel: 10, cobalt: 9, manganese: 16 }, rescanConsistency: 95, finalConfidence: 13, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Stable baseline. Temperature 3.42°C, conductivity 4.82 S/m.' },
  { id: 'B2', col: 1, row: 1, label: 'Zone B-02', anomalyScore: 61, isTarget: true, prospectivity: { copper: 38, nickel: 62, cobalt: 71, manganese: 55 }, rescanConsistency: 81, finalConfidence: 65, opticalConfirmation: 'CONFIRMED', status: 'TARGET_CONFIRMED', description: 'Cobalt-rich ferromanganese encrustation over rocky substrate.' },
  { id: 'B3', col: 2, row: 1, label: 'Zone B-03', anomalyScore: 32, isTarget: false, prospectivity: { copper: 22, nickel: 25, cobalt: 18, manganese: 36 }, rescanConsistency: 88, finalConfidence: 29, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Faint conductivity variation, likely salinity micro-plume.' },
  { id: 'B4', col: 3, row: 1, label: 'Zone B-04', anomalyScore: 39, isTarget: false, prospectivity: { copper: 28, nickel: 31, cobalt: 22, manganese: 44 }, rescanConsistency: 85, finalConfidence: 34, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Dispersed nodule fringe area with low concentration.' },
  { id: 'B5', col: 4, row: 1, label: 'Zone B-05', anomalyScore: 17, isTarget: false, prospectivity: { copper: 13, nickel: 14, cobalt: 12, manganese: 19 }, rescanConsistency: 91, finalConfidence: 15, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Normal abyssal plain sediment.' },

  { id: 'C1', col: 0, row: 2, label: 'Zone C-01', anomalyScore: 19, isTarget: false, prospectivity: { copper: 18, nickel: 16, cobalt: 12, manganese: 22 }, rescanConsistency: 93, finalConfidence: 17, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Standard survey grid cell. Zero magnetic gradient.' },
  { id: 'C2', col: 1, row: 2, label: 'Zone C-02', anomalyScore: 38, isTarget: false, prospectivity: { copper: 31, nickel: 27, cobalt: 20, manganese: 39 }, rescanConsistency: 86, finalConfidence: 33, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Perimeter of central conductive anomaly.' },
  { id: 'C3', col: 2, row: 2, label: 'Zone C-03', anomalyScore: 81, isTarget: true, prospectivity: { copper: 82, nickel: 64, cobalt: 47, manganese: 76 }, rescanConsistency: 87, finalConfidence: 84, opticalConfirmation: 'CONFIRMED', status: 'TARGET_CONFIRMED', description: 'PRIMARY HIGH-VALUE ANOMALY: Prominent EM phase lag (+42°), negative self-potential (-68 mV), and distinct magnetic dipolar excursion. Consistent with massive sulfide / polymetallic nodule accumulation.' },
  { id: 'C4', col: 3, row: 2, label: 'Zone C-04', anomalyScore: 42, isTarget: false, prospectivity: { copper: 34, nickel: 36, cobalt: 28, manganese: 48 }, rescanConsistency: 84, finalConfidence: 39, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Trailing edge of Zone C-03 anomaly halo.' },
  { id: 'C5', col: 4, row: 2, label: 'Zone C-05', anomalyScore: 23, isTarget: false, prospectivity: { copper: 19, nickel: 20, cobalt: 15, manganese: 27 }, rescanConsistency: 90, finalConfidence: 21, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Sedimented seafloor baseline.' },

  { id: 'D1', col: 0, row: 3, label: 'Zone D-01', anomalyScore: 14, isTarget: false, prospectivity: { copper: 11, nickel: 13, cobalt: 10, manganese: 17 }, rescanConsistency: 96, finalConfidence: 12, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Smooth abyssal plain.' },
  { id: 'D2', col: 1, row: 3, label: 'Zone D-02', anomalyScore: 54, isTarget: false, prospectivity: { copper: 29, nickel: 25, cobalt: 19, manganese: 31 }, rescanConsistency: 42, finalConfidence: 28, opticalConfirmation: 'MURKY_SEDIMENT', status: 'REJECTED_FALSE_POSITIVE', description: 'FALSE POSITIVE IDENTIFIED: Initial magnetic spike caused by single ferromagnetic debris flake. Rescan from 4 angles failed spatial coherence test (Consistency 42%). Anomaly rejected.' },
  { id: 'D3', col: 2, row: 3, label: 'Zone D-03', anomalyScore: 35, isTarget: false, prospectivity: { copper: 26, nickel: 28, cobalt: 21, manganese: 38 }, rescanConsistency: 87, finalConfidence: 31, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Moderate magnetic anomaly, low EM conductivity.' },
  { id: 'D4', col: 3, row: 3, label: 'Zone D-04', anomalyScore: 29, isTarget: false, prospectivity: { copper: 21, nickel: 24, cobalt: 18, manganese: 33 }, rescanConsistency: 89, finalConfidence: 26, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Calm bathymetric contour.' },
  { id: 'D5', col: 4, row: 3, label: 'Zone D-05', anomalyScore: 74, isTarget: true, prospectivity: { copper: 78, nickel: 52, cobalt: 39, manganese: 66 }, rescanConsistency: 86, finalConfidence: 77, opticalConfirmation: 'CONFIRMED', status: 'RESCAN_VERIFIED', description: 'Secondary conductive sulfide pocket. Significant galvanic potential gradient.' },

  { id: 'E1', col: 0, row: 4, label: 'Zone E-01', anomalyScore: 20, isTarget: false, prospectivity: { copper: 15, nickel: 17, cobalt: 12, manganese: 24 }, rescanConsistency: 92, finalConfidence: 18, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Basalt floor with sediment dust.' },
  { id: 'E2', col: 1, row: 4, label: 'Zone E-02', anomalyScore: 26, isTarget: false, prospectivity: { copper: 22, nickel: 21, cobalt: 16, manganese: 29 }, rescanConsistency: 88, finalConfidence: 23, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Normal background seafloor.' },
  { id: 'E3', col: 2, row: 4, label: 'Zone E-03', anomalyScore: 31, isTarget: false, prospectivity: { copper: 24, nickel: 26, cobalt: 19, manganese: 34 }, rescanConsistency: 87, finalConfidence: 28, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Slight acoustic backscatter rise due to micro-roughness.' },
  { id: 'E4', col: 3, row: 4, label: 'Zone E-04', anomalyScore: 22, isTarget: false, prospectivity: { copper: 17, nickel: 19, cobalt: 14, manganese: 26 }, rescanConsistency: 91, finalConfidence: 20, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Standard survey waypoint.' },
  { id: 'E5', col: 4, row: 4, label: 'Zone E-05', anomalyScore: 16, isTarget: false, prospectivity: { copper: 13, nickel: 14, cobalt: 11, manganese: 18 }, rescanConsistency: 94, finalConfidence: 14, opticalConfirmation: 'CLEAR_CRUST', status: 'PENDING_SURVEY', description: 'Clean survey edge boundary.' }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Shakthi Akshata',
    degree: 'M.Tech CDSE',
    department: 'Computational Data Science & Engineering',
    institution: 'Team Lorenzini',
    primaryRole: 'SYSTEM ARCHITECTURE & SIGNAL PROCESSING',
    badge: 'LEAD ARCHITECT',
    focusAreas: ['Multi-Physics Sensor Fusion Algorithms', 'Dynamic Motion & Environmental Normalization', 'Geophysical Inversion Models'],
    avatarFallback: 'SA'
  },
  {
    name: 'Ashwin',
    degree: 'B.E. / B.Tech ECE',
    department: 'Electronics & Communication Engineering',
    institution: 'Team Lorenzini',
    primaryRole: 'ELECTRONICS & EMBEDDED HARDWARE',
    badge: 'HARDWARE LEAD',
    focusAreas: ['Low-Noise Preamplifier Stages', '24-bit ADC Differential Frontend', 'Real-Time STM32 Firmware Pipeline'],
    avatarFallback: 'AS'
  },
  {
    name: 'Yugenthar',
    degree: 'B.E. / B.Tech ECE',
    department: 'Electronics & Communication Engineering',
    institution: 'Team Lorenzini',
    primaryRole: 'EM TX/RX COIL & SENSOR INSTRUMENTATION',
    badge: 'INSTRUMENTATION',
    focusAreas: ['Multi-Frequency Coil Geometry', 'Inductive Skin-Depth Tuning', 'Bucking Coil Cancellation Optimization'],
    avatarFallback: 'YU'
  },
  {
    name: 'Dhivakar',
    degree: 'B.E. / B.Tech ECE',
    department: 'Electronics & Communication Engineering',
    institution: 'Team Lorenzini',
    primaryRole: 'POWER ARCHITECTURE & UNDERWATER PLATFORM',
    badge: 'POWER & PLATFORM',
    focusAreas: ['Tether Isolated 48V DC Power System', 'Modular Watertight Enclosures', 'Winch Tension & Neutral Buoyancy Ballast'],
    avatarFallback: 'DH'
  },
  {
    name: 'Seetha Eswari',
    degree: 'B.Tech IT',
    department: 'Information Technology',
    institution: 'Team Lorenzini',
    primaryRole: 'MISSION CONTROL DASHBOARD & DECISION ENGINE',
    badge: 'SOFTWARE & UI',
    focusAreas: ['Real-Time Mission Telemetry Stream', 'Closed-Loop Adaptive Rescan Decision Engine', 'Judge Interactive Evaluation UI'],
    avatarFallback: 'SE'
  },
  {
    name: 'Narmadha',
    degree: 'B.Tech IT',
    department: 'Information Technology',
    institution: 'Team Lorenzini',
    primaryRole: 'DATA ARCHITECTURE & PROSPECTIVITY ANALYTICS',
    badge: 'DATA ANALYTICS',
    focusAreas: ['Target Signature Comparison Library', 'Bathymetric GIS Anomaly Registry', 'Research Validation Documentation'],
    avatarFallback: 'NA'
  }
];

export const WOW_FACTORS = [
  {
    id: '01',
    title: 'METAL-SPECIFIC PROSPECTIVITY',
    tagline: 'From "Metal Detected" to Target Signature Resemblance',
    description: 'Rather than a binary buzzer, VARUNA06 computes four calibrated 0-100 prospectivity scores (Copper-like, Nickel-like, Cobalt-like, Manganese-like) based on multi-frequency inductive and magnetic response curves.',
    impactMetric: '4 Discrete Target Scores'
  },
  {
    id: '02',
    title: 'ADAPTIVE RESCANNING',
    tagline: 'Multi-Point Investigation Rejects False Positives',
    description: 'Suspicious anomalies trigger an autonomous 4-point cross-pattern rescan. Transient noise, fish passes, or singular scrap iron fail the spatial consistency check, safeguarding survey integrity.',
    impactMetric: '87% Consistency Verification'
  },
  {
    id: '03',
    title: 'MULTI-PHYSICS SENSOR FUSION',
    tagline: 'Independent Geophysical Corroboration',
    description: 'Integrates electromagnetic induction, 3-axis geomagnetic vectors, galvanic self-potentials, acoustic altimetry, and optical context. High confidence requires multi-modal evidence agreement.',
    impactMetric: '6 Physics Domains Combined'
  },
  {
    id: '04',
    title: 'STANDOFF-AWARE ATTENUATION CORRECTION',
    tagline: 'True Geologic Amplitude Normalization',
    description: 'Electromagnetic signals decay with the cube of distance (1/r^3). By continuously pairing a 500 kHz acoustic altimeter with EM readings, signal amplitude is mathematically normalized for vehicle elevation.',
    impactMetric: '±5mm Standoff Precision'
  },
  {
    id: '05',
    title: 'POSITION-LINKED ANOMALY MAPPING',
    tagline: 'Actionable Coordinates for Research & Industry',
    description: 'Every confirmed target is stamped with depth, standoff, multi-spectral physical signatures, and visual snapshots into a georeferenced prospectivity map, enabling precise downstream exploration.',
    impactMetric: 'Permanent Bathymetric Registry'
  }
];

export const SWOT_ANALYSIS = {
  strengths: [
    'Low-cost COTS-based sensing architecture drastically lowers barrier to entry',
    'Multi-physics sensor fusion rejects single-sensor false positives',
    'Adaptive 4-point rescan validates spatial coherence before logging',
    'Position-linked prospectivity scoring provides actionable target similarity',
    'Modular sensor cartridges enable rapid field maintenance and upgradeability'
  ],
  weaknesses: [
    'Requires rigorous pre-survey calibration against local seawater salinity/temp',
    'Physical signatures represent physical properties (conductivity/susceptibility), not direct chemical stoichiometry',
    'Current prototype validated at bench and shallow marine test tanks; deep ocean rating planned in Phase V'
  ],
  opportunities: [
    'Academic and oceanographic research institutes seeking affordable seafloor anomaly screening',
    'Government marine mineral exploration initiatives (e.g., Deep Ocean Mission)',
    'Pre-survey screening layer to eliminate 80% of unnecessary deep-towed commercial ROV dive hours',
    'Integration with autonomous surface vessels (ASVs) for unmanned robotic deployment'
  ],
  threats: [
    'Harsh abyssal hydrostatic pressures (up to 600 bar at 6000m) demanding titanium housing certification',
    'Complex international seabed authority (ISA) regulations and marine environmental permitting',
    'Electromagnetic noise from heavy support ship generators requiring careful filtering'
  ]
};

export const CHALLENGES_AND_RESPONSES = [
  {
    id: '01',
    challenge: 'FALSE POSITIVES & GEOLOGIC AMBIGUITY',
    problemDesc: 'Natural seawater salinity gradients, magnetic basalt bedrock, or stray iron debris can easily mimic valuable mineral anomalies in single-sensor systems.',
    engineeringResponse: 'Multi-Sensor Fusion + 4-Point Adaptive Rescan',
    solutionDetail: 'VARUNA06 demands simultaneous correlation across EM phase lag, magnetic dipole shift, and galvanic self-potential. An anomaly must maintain spatial coherence across 4 discrete physical coordinates to be logged as a target.'
  },
  {
    id: '02',
    challenge: 'VEHICLE MOTION & TILT DISTORTIONS',
    problemDesc: 'Ocean currents and tether heave cause the platform to pitch, roll, and vary in altitude, corrupting the geometry of directional magnetic and EM vector fields.',
    engineeringResponse: '6-DOF IMU + Acoustic Standoff Normalization Layer',
    solutionDetail: 'The edge processor applies real-time Euler rotation matrices from the 200 Hz IMU and scales EM amplitude by the acoustic altitude cube (1/r^3), maintaining true geometric baseline calibration.'
  },
  {
    id: '03',
    challenge: 'SEAWATER CONDUCTIVITY INTERFERENCE',
    problemDesc: 'Conductive seawater (3 to 5 S/m) dissipates electromagnetic fields (skin-depth effect) and shifts baseline galvanic electrode potentials.',
    engineeringResponse: 'Continuous Salinity/Temp Compensation Engine',
    solutionDetail: 'Node N4 continually logs ambient fluid conductivity and temperature, feeding a dynamic correction algorithm that cancels seawater inductive background damping in real time.'
  },
  {
    id: '04',
    challenge: 'HYDROSTATIC PRESSURE & WATERPROOFING',
    problemDesc: 'Deep-ocean environments present extreme hydrostatic pressures and corrosive salt-spray conditions that quickly compromise electronics.',
    engineeringResponse: 'Modular Subsea Cartridges with Redundant O-Ring Seals',
    solutionDetail: 'Electronics are housed in modular hard-anodized marine-grade aluminum and acrylic test pods with dual nitrile O-rings and oil-compensated cable penetrators, allowing progressive pressure rating upgrades.'
  }
];
