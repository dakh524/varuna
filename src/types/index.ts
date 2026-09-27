export interface SensorTelemetry {
  timestamp: number;
  depth: number; // meters (e.g. 142.5m)
  standoff: number; // meters - acoustic distance to seabed (e.g. 1.25m)
  temperature: number; // °C (e.g. 3.4°C)
  conductivity: number; // S/m (seawater salinity/conductivity, ~4.8 S/m)
  magneticField: number; // nT (total intensity / anomaly deviation)
  emAmplitude: number; // mV (secondary EM induction response)
  emPhase: number; // degrees phase shift
  electricalPotential: number; // mV (self-potential / galvanic gradient)
  acousticResponse: number; // dB (seabed backscatter reflection)
  tilt: { roll: number; pitch: number }; // degrees
  position: { x: number; y: number }; // meters or grid position
  anomalyScore: number; // 0 - 100 overall composite anomaly score
}

export interface ProspectivityScores {
  copper: number; // 0 - 100 signature similarity
  nickel: number; // 0 - 100 signature similarity
  cobalt: number; // 0 - 100 signature similarity
  manganese: number; // 0 - 100 signature similarity
}

export interface SensorNodeInfo {
  id: string; // 'N1' | 'N2' | 'N3' | 'N4' | 'N5' | 'N6' | 'OPTICAL' | 'TETHER'
  code: string;
  name: string;
  sensor: string;
  category: 'magnetic' | 'em' | 'electrical' | 'motion' | 'acoustic' | 'optical' | 'tether';
  inputs: string[];
  outputs: string[];
  whyItMatters: string;
  samplingRate: string;
  mountingLocation: string;
  color: string;
}

export interface SeabedCell {
  id: string; // e.g. "C3"
  col: number; // 0-4
  row: number; // 0-4
  label: string; // "Zone C-03"
  anomalyScore: number; // 0 - 100
  isTarget: boolean;
  prospectivity: ProspectivityScores;
  rescanConsistency: number; // %
  finalConfidence: number; // 0 - 100
  opticalConfirmation: 'CONFIRMED' | 'UNCONFIRMED' | 'MURKY_SEDIMENT' | 'CLEAR_CRUST';
  status: 'PENDING_SURVEY' | 'ANOMALY_FLAGGED' | 'RESCAN_VERIFIED' | 'TARGET_CONFIRMED' | 'REJECTED_FALSE_POSITIVE';
  description: string;
}

export interface ResearchReference {
  id: string;
  citationKey: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  keyContribution: string;
  varunaAdaptation: string;
  relevanceTag: string;
}

export interface TeamMember {
  name: string;
  department: string;
  institution: string;
  degree: string;
  primaryRole: string;
  roles?: string[];
  badge: string;
  focusAreas: string[];
  avatarFallback: string;
}

export interface MissionStage {
  id: string;
  stageNumber: string;
  title: string;
  tagline: string;
  description: string;
  actionProtocol: string;
  sensorVerification: string;
  decisionGate: string;
  iconName: string;
}
