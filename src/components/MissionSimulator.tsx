import React, { useState, useEffect } from 'react';
import { SEABED_GRID_CELLS } from '../data/mockData';
import { SeabedCell, SensorTelemetry } from '../types';
import {
  Play,
  Pause,
  RefreshCw,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  MapPin,
  Activity,
  Compass,
  Zap,
  Gauge,
  Waves,
  Eye,
  Camera,
  AlertTriangle,
  Radio,
  Sliders
} from 'lucide-react';

export const MissionSimulator: React.FC = () => {
  const [currentGridCol, setCurrentGridCol] = useState<number>(2); // Start at col 2
  const [currentGridRow, setCurrentGridRow] = useState<number>(2); // Start at row 2 (Zone C-03!)
  const [isScanning, setIsScanning] = useState<boolean>(true);
  const [isRescanning, setIsRescanning] = useState<boolean>(false);
  const [rescanProgress, setRescanProgress] = useState<number>(0);
  const [rescanStep, setRescanStep] = useState<string>('');
  const [opticalActive, setOpticalActive] = useState<boolean>(false);
  const [mappedZones, setMappedZones] = useState<string[]>(['Zone C-03']);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Active cell
  const currentCell: SeabedCell =
    SEABED_GRID_CELLS.find((c) => c.col === currentGridCol && c.row === currentGridRow) ||
    SEABED_GRID_CELLS[12]; // Fallback to C3

  // Dynamic telemetry calculated from active cell with subtle realistic noise
  const [telemetry, setTelemetry] = useState<SensorTelemetry>({
    timestamp: Date.now(),
    depth: 142.5,
    standoff: 1.25,
    temperature: 3.42,
    conductivity: 4.82,
    magneticField: 48520,
    emAmplitude: 24.6,
    emPhase: 42.1,
    electricalPotential: -68.4,
    acousticResponse: -13.2,
    tilt: { roll: 1.2, pitch: -0.8 },
    position: { x: currentGridCol * 2.5, y: currentGridRow * 2.5 },
    anomalyScore: currentCell.anomalyScore
  });

  // Telemetry tick loop
  useEffect(() => {
    if (!isScanning) return;
    const interval = setInterval(() => {
      // Base values based on whether current cell is an anomaly
      const isTarget = currentCell.isTarget;
      const targetScore = currentCell.anomalyScore;

      // Noise factor
      const jitter = (Math.random() - 0.5) * 0.4;
      const magJitter = (Math.random() - 0.5) * 15;

      setTelemetry((prev) => ({
        timestamp: Date.now(),
        depth: +(142.5 + (Math.random() - 0.5) * 0.1).toFixed(2),
        standoff: +(1.25 + (Math.random() - 0.5) * 0.05).toFixed(2),
        temperature: +(3.42 + (Math.random() - 0.5) * 0.02).toFixed(2),
        conductivity: +(4.82 + (Math.random() - 0.5) * 0.01).toFixed(2),
        magneticField: Math.round(
          isTarget ? 48200 + targetScore * 4.2 + magJitter : 48100 + jitter * 20
        ),
        emAmplitude: +(isTarget ? (targetScore * 0.28).toFixed(1) : (1.8 + jitter).toFixed(1)),
        emPhase: +(isTarget ? (targetScore * 0.52).toFixed(1) : (3.5 + jitter).toFixed(1)),
        electricalPotential: +(
          isTarget ? -(targetScore * 0.85).toFixed(1) : (-4.2 + jitter).toFixed(1)
        ),
        acousticResponse: +(isTarget ? -13.4 + jitter : -22.1 + jitter).toFixed(1),
        tilt: {
          roll: +(1.2 + (Math.random() - 0.5) * 0.3).toFixed(1),
          pitch: +(-0.8 + (Math.random() - 0.5) * 0.3).toFixed(1)
        },
        position: { x: currentGridCol * 2.5, y: currentGridRow * 2.5 },
        anomalyScore: targetScore
      }));
    }, 1200);

    return () => clearInterval(interval);
  }, [isScanning, currentCell, currentGridCol, currentGridRow]);

  // Handle cell navigation
  const moveRobot = (dCol: number, dRow: number) => {
    const newCol = Math.max(0, Math.min(4, currentGridCol + dCol));
    const newRow = Math.max(0, Math.min(4, currentGridRow + dRow));
    setCurrentGridCol(newCol);
    setCurrentGridRow(newRow);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'w', 'W'].includes(e.key)) moveRobot(0, -1);
      if (['ArrowDown', 's', 'S'].includes(e.key)) moveRobot(0, 1);
      if (['ArrowLeft', 'a', 'A'].includes(e.key)) moveRobot(-1, 0);
      if (['ArrowRight', 'd', 'D'].includes(e.key)) moveRobot(1, 0);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGridCol, currentGridRow]);

  // Execute Targeted 4-Point Rescan
  const triggerRescan = () => {
    setIsRescanning(true);
    setRescanProgress(0);
    setRescanStep('Positioning North offset (0.8m N)...');

    setTimeout(() => {
      setRescanProgress(25);
      setRescanStep('Pos 1 (North) EM & Mag verified...');
    }, 900);

    setTimeout(() => {
      setRescanProgress(50);
      setRescanStep('Pos 2 (East) Phase lag corroboration...');
    }, 1800);

    setTimeout(() => {
      setRescanProgress(75);
      setRescanStep('Pos 3 (South) Galvanic gradient confirmed...');
    }, 2700);

    setTimeout(() => {
      setRescanProgress(100);
      setRescanStep(`Completed: Spatial consistency verified at ${currentCell.rescanConsistency}%`);
      setTimeout(() => {
        setIsRescanning(false);
        setToastMessage(`Adaptive Rescan finished for ${currentCell.label}. Consistency: ${currentCell.rescanConsistency}%, Final Confidence: ${currentCell.finalConfidence}%`);
        setTimeout(() => setToastMessage(null), 4000);
      }, 1000);
    }, 3600);
  };

  // Toggle Optical Camera
  const toggleOptical = () => {
    setOpticalActive(true);
    setToastMessage(`Optical Strobe Triggered! 4K Macro Imagery captured for ${currentCell.label}.`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Map Anomaly
  const mapAnomaly = () => {
    if (!mappedZones.includes(currentCell.label)) {
      setMappedZones([...mappedZones, currentCell.label]);
      setToastMessage(`Georeferenced anomaly logged: ${currentCell.label} registered to Seabed GIS.`);
    } else {
      setToastMessage(`${currentCell.label} is already in the Seafloor Anomaly Registry.`);
    }
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <section id="simulator" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-cyan-950/95 border border-cyan-400 text-white shadow-2xl flex items-center gap-3 backdrop-blur-xl animate-in slide-in-from-bottom-5">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs font-mono">{toastMessage}</span>
        </div>
      )}

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>SECTION 09 // DIGITAL TWIN & REAL-TIME CLOSED-LOOP TELEMETRY</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          VARUNA06 Mission Simulator
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          Explore how the sensing, scoring, adaptive rescanning, and decision engine operate in real time.
          Navigate the robot over the bathymetric seabed grid to experience multi-physics anomaly response.
        </p>

        {/* Prominent Mandatory Simulation Disclaimer */}
        <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-mono">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>SIMULATION MODE — COMPUTED FROM PHYSICAL MODELS (NOT LIVE FIELD DATA)</span>
        </div>
      </div>

      {/* Dashboard Main Grid: Left Grid/Controls, Right Telemetry Gauges */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Seabed Grid Map & Movement Controller */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Seabed Grid Card */}
          <div className="p-5 rounded-2xl bg-[#06142a]/90 border border-cyan-500/25 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 mb-4">
              <div className="flex items-center gap-2">
                <Waves className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Seafloor Exploration Grid (5×5 Transect)
                </span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                ACTIVE CELL: {currentCell.label}
              </span>
            </div>

            {/* 5x5 Matrix */}
            <div className="grid grid-cols-5 gap-2.5 mb-4">
              {['A', 'B', 'C', 'D', 'E'].map((rowLetter, rIdx) =>
                [1, 2, 3, 4, 5].map((colNum, cIdx) => {
                  const cellId = `${rowLetter}${colNum}`;
                  const cell = SEABED_GRID_CELLS.find((c) => c.col === cIdx && c.row === rIdx)!;
                  const isCurrent = currentGridCol === cIdx && currentGridRow === rIdx;
                  const isMapped = mappedZones.includes(cell.label);
                  const isAnomaly = cell.anomalyScore > 50;

                  return (
                    <button
                      key={cellId}
                      onClick={() => {
                        setCurrentGridCol(cIdx);
                        setCurrentGridRow(rIdx);
                      }}
                      className={`relative aspect-square rounded-xl p-1.5 flex flex-col items-center justify-between border transition-all ${
                        isCurrent
                          ? 'bg-cyan-500/30 border-cyan-400 ring-2 ring-cyan-400 shadow-lg shadow-cyan-500/30'
                          : isAnomaly
                          ? 'bg-amber-950/40 border-amber-500/50 hover:border-amber-400'
                          : 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40'
                      }`}
                    >
                      <span className="text-[10px] font-mono font-bold text-slate-300">{cellId}</span>

                      {/* Anomaly Indicator */}
                      <div className="flex flex-col items-center">
                        <span
                          className={`text-xs font-mono font-extrabold ${
                            isAnomaly ? 'text-amber-400' : 'text-slate-400'
                          }`}
                        >
                          {cell.anomalyScore}
                        </span>
                      </div>

                      {/* Status Dot / Current Robot Ping */}
                      {isCurrent ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                      ) : isMapped ? (
                        <span className="w-2 h-2 rounded-full bg-emerald-400" title="Mapped in GIS" />
                      ) : (
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isAnomaly ? 'bg-amber-400/80' : 'bg-slate-700'
                          }`}
                        />
                      )}
                    </button>
                  );
                })
              )}
            </div>

            {/* Active Cell Dossier */}
            <div className="p-3.5 rounded-xl bg-[#091e3e] border border-cyan-500/20 text-xs">
              <div className="flex items-center justify-between font-mono mb-1.5">
                <span className="text-cyan-300 font-bold">{currentCell.label} Inspection</span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    currentCell.anomalyScore > 60
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {currentCell.status.replace(/_/g, ' ')}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed font-sans">{currentCell.description}</p>
            </div>
          </div>

          {/* Interactive Navigation Controls */}
          <div className="p-5 rounded-2xl bg-[#06142a]/90 border border-cyan-500/25 shadow-2xl backdrop-blur-md">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 pb-2 border-b border-cyan-500/10 flex items-center justify-between">
              <span>Winch & Vector Navigation Controls</span>
              <span className="text-cyan-400">WASD / Arrow Keys Supported</span>
            </div>

            <div className="grid grid-cols-3 gap-2 max-w-[280px] mx-auto mb-5">
              <div />
              <button
                onClick={() => moveRobot(0, -1)}
                className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 hover:bg-cyan-500/20 text-white flex items-center justify-center transition-all active:scale-95"
                title="Move Forward (North)"
              >
                <ArrowUp className="w-5 h-5 text-cyan-400" />
              </button>
              <div />

              <button
                onClick={() => moveRobot(-1, 0)}
                className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 hover:bg-cyan-500/20 text-white flex items-center justify-center transition-all active:scale-95"
                title="Move Left (West)"
              >
                <ArrowLeft className="w-5 h-5 text-cyan-400" />
              </button>

              <button
                onClick={() => moveRobot(0, 1)}
                className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 hover:bg-cyan-500/20 text-white flex items-center justify-center transition-all active:scale-95"
                title="Move Back (South)"
              >
                <ArrowDown className="w-5 h-5 text-cyan-400" />
              </button>

              <button
                onClick={() => moveRobot(1, 0)}
                className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 hover:bg-cyan-500/20 text-white flex items-center justify-center transition-all active:scale-95"
                title="Move Right (East)"
              >
                <ArrowRight className="w-5 h-5 text-cyan-400" />
              </button>
            </div>

            {/* Action Buttons: Scan/Pause, Rescan, Confirm, Map */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <button
                onClick={() => setIsScanning(!isScanning)}
                className={`px-3 py-2.5 rounded-xl border text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
                  isScanning
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                {isScanning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isScanning ? 'PAUSE' : 'RESUME'}</span>
              </button>

              <button
                onClick={triggerRescan}
                disabled={isRescanning}
                className="px-3 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-400 hover:bg-cyan-500/30 text-cyan-200 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isRescanning ? 'animate-spin' : ''}`} />
                <span>RESCAN</span>
              </button>

              <button
                onClick={toggleOptical}
                className="px-3 py-2.5 rounded-xl bg-purple-500/20 border border-purple-400 hover:bg-purple-500/30 text-purple-200 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all"
              >
                <Camera className="w-4 h-4" />
                <span>CONFIRM</span>
              </button>

              <button
                onClick={mapAnomaly}
                className="px-3 py-2.5 rounded-xl bg-teal-500/20 border border-teal-400 hover:bg-teal-500/30 text-teal-200 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all"
              >
                <MapPin className="w-4 h-4" />
                <span>MAP TARGET</span>
              </button>
            </div>

            {/* Rescan In-Progress Bar */}
            {isRescanning && (
              <div className="mt-4 p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/40">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-300 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Targeted 4-Point Rescan Active</span>
                  </span>
                  <span>{rescanProgress}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-1.5">
                  <div
                    className="h-full bg-cyan-400 transition-all duration-300 rounded-full"
                    style={{ width: `${rescanProgress}%` }}
                  />
                </div>
                <p className="text-[11px] font-mono text-slate-300">{rescanStep}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Live Simulated Telemetry Dashboard */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="p-5 rounded-2xl bg-[#06142a]/90 border border-cyan-500/25 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 mb-5">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Live Sensor Telemetry Bus
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                BUS 100 Hz SYNCED
              </span>
            </div>

            {/* Telemetry Metric Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
              {/* Depth */}
              <div className="p-3 rounded-xl bg-[#081b38] border border-cyan-900/40">
                <span className="text-[10px] font-mono text-slate-400 uppercase">DEPTH (N4)</span>
                <div className="text-lg font-bold font-mono text-white mt-0.5">
                  {telemetry.depth} <span className="text-xs text-cyan-400 font-normal">m</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">MS5803 Depth</span>
              </div>

              {/* Standoff Altitude */}
              <div className="p-3 rounded-xl bg-[#081b38] border border-cyan-900/40">
                <span className="text-[10px] font-mono text-slate-400 uppercase">STANDOFF (N6)</span>
                <div className="text-lg font-bold font-mono text-sky-300 mt-0.5">
                  {telemetry.standoff} <span className="text-xs text-sky-400 font-normal">m</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">500kHz Altimeter</span>
              </div>

              {/* Seawater Temp */}
              <div className="p-3 rounded-xl bg-[#081b38] border border-cyan-900/40">
                <span className="text-[10px] font-mono text-slate-400 uppercase">WATER TEMP</span>
                <div className="text-lg font-bold font-mono text-cyan-300 mt-0.5">
                  {telemetry.temperature} <span className="text-xs text-cyan-400 font-normal">°C</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Abyssal Baseline</span>
              </div>

              {/* Conductivity */}
              <div className="p-3 rounded-xl bg-[#081b38] border border-cyan-900/40">
                <span className="text-[10px] font-mono text-slate-400 uppercase">CONDUCTIVITY</span>
                <div className="text-lg font-bold font-mono text-teal-300 mt-0.5">
                  {telemetry.conductivity} <span className="text-xs text-teal-400 font-normal">S/m</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Fluid Salinity</span>
              </div>

              {/* Magnetic Field */}
              <div className="p-3 rounded-xl bg-[#081b38] border border-cyan-900/40">
                <span className="text-[10px] font-mono text-slate-400 uppercase">MAGNETIC (N1)</span>
                <div className="text-lg font-bold font-mono text-cyan-400 mt-0.5">
                  {telemetry.magneticField} <span className="text-xs text-cyan-500 font-normal">nT</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">RM3100 3-Axis</span>
              </div>

              {/* EM Amplitude */}
              <div className="p-3 rounded-xl bg-[#081b38] border border-cyan-900/40">
                <span className="text-[10px] font-mono text-slate-400 uppercase">EM AMPLITUDE (N3)</span>
                <div className="text-lg font-bold font-mono text-amber-300 mt-0.5">
                  {telemetry.emAmplitude} <span className="text-xs text-amber-400 font-normal">mV</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Secondary Induction</span>
              </div>

              {/* EM Phase */}
              <div className="p-3 rounded-xl bg-[#081b38] border border-cyan-900/40">
                <span className="text-[10px] font-mono text-slate-400 uppercase">EM PHASE (N3)</span>
                <div className="text-lg font-bold font-mono text-amber-300 mt-0.5">
                  {telemetry.emPhase}°
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Conductive Lag</span>
              </div>

              {/* Electrical Potential */}
              <div className="p-3 rounded-xl bg-[#081b38] border border-cyan-900/40">
                <span className="text-[10px] font-mono text-slate-400 uppercase">SELF-POTENTIAL</span>
                <div className="text-lg font-bold font-mono text-emerald-400 mt-0.5">
                  {telemetry.electricalPotential} <span className="text-xs text-emerald-500 font-normal">mV</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Galvanic Ag/AgCl</span>
              </div>

              {/* Acoustic Backscatter */}
              <div className="p-3 rounded-xl bg-[#081b38] border border-cyan-900/40">
                <span className="text-[10px] font-mono text-slate-400 uppercase">BACKSCATTER (N6)</span>
                <div className="text-lg font-bold font-mono text-rose-300 mt-0.5">
                  {telemetry.acousticResponse} <span className="text-xs text-rose-400 font-normal">dB</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Seafloor Hardness</span>
              </div>
            </div>

            {/* Composite Anomaly Confidence Meter */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/60 via-blue-950/40 to-slate-900/80 border border-cyan-500/30 mb-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-cyan-300 font-bold flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-cyan-400" />
                  <span>COMPOSITE ANOMALY SCORE</span>
                </span>
                <span className="text-2xl font-black font-mono text-cyan-300">
                  {telemetry.anomalyScore} <span className="text-sm font-normal text-cyan-500">/ 100</span>
                </span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    telemetry.anomalyScore > 75
                      ? 'bg-gradient-to-r from-amber-500 to-rose-500'
                      : telemetry.anomalyScore > 40
                      ? 'bg-gradient-to-r from-cyan-500 to-amber-500'
                      : 'bg-cyan-500'
                  }`}
                  style={{ width: `${telemetry.anomalyScore}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-1.5">
                <span>0 (Ambient Sediments)</span>
                <span>Threshold: 60</span>
                <span>100 (High-Grade Conductive Body)</span>
              </div>
            </div>

            {/* Subsystem Health Matrix */}
            <div className="pt-3 border-t border-cyan-500/15">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2.5">
                Subsea Electronics & Telemetry Health
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
                <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Tether:</span>
                  <span className="text-emerald-400 font-bold">10 Mbps</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Power:</span>
                  <span className="text-cyan-400 font-bold">48V DC</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">IMU Tilt:</span>
                  <span className="text-slate-200">R:1.2° P:-0.8°</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">Camera:</span>
                  <span className="text-purple-400 font-bold">STANDBY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
