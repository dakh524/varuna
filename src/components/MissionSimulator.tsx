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
      const isTarget = currentCell.isTarget;
      const targetScore = currentCell.anomalyScore;

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

  const moveRobot = (dCol: number, dRow: number) => {
    const newCol = Math.max(0, Math.min(4, currentGridCol + dCol));
    const newRow = Math.max(0, Math.min(4, currentGridRow + dRow));
    setCurrentGridCol(newCol);
    setCurrentGridRow(newRow);
  };

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

  const toggleOptical = () => {
    setOpticalActive(true);
    setToastMessage(`Optical Strobe Triggered! 4K Macro Imagery captured for ${currentCell.label}.`);
    setTimeout(() => setToastMessage(null), 3500);
  };

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
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-slate-900 border border-blue-400 text-white shadow-2xl flex items-center gap-3 backdrop-blur-xl animate-in slide-in-from-bottom-5">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs font-mono font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono mb-4 font-bold shadow-sm">
          <Radio className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
          <span>SECTION 09 // DIGITAL TWIN & REAL-TIME CLOSED-LOOP TELEMETRY</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          VARUNA06 Mission Simulator
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          Explore how the sensing, scoring, adaptive rescanning, and decision engine operate in real time.
          Navigate the robot over the bathymetric seabed grid to experience multi-physics anomaly response.
        </p>

        <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-lg bg-amber-50 border border-amber-300 text-amber-900 text-xs font-mono font-bold">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          <span>SIMULATION MODE — COMPUTED FROM PHYSICAL MODELS (NOT LIVE FIELD DATA)</span>
        </div>
      </div>

      {/* Dashboard Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Seabed Grid Map & Movement Controller */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Seabed Grid Card */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <div className="flex items-center gap-2">
                <Waves className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                  Seafloor Exploration Grid (5×5 Transect)
                </span>
              </div>
              <span className="text-[11px] font-mono text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-bold">
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
                          ? 'bg-blue-600 border-blue-700 text-white ring-2 ring-blue-500 shadow-lg'
                          : isAnomaly
                          ? 'bg-amber-50 border-amber-300 hover:border-amber-500 text-slate-900'
                          : 'bg-slate-50 border-slate-200 hover:border-blue-400 text-slate-800'
                      }`}
                    >
                      <span className={`text-[10px] font-mono font-bold ${isCurrent ? 'text-white' : 'text-slate-700'}`}>{cellId}</span>

                      <div className="flex flex-col items-center">
                        <span
                          className={`text-xs font-mono font-black ${
                            isCurrent ? 'text-white' : isAnomaly ? 'text-amber-800' : 'text-slate-700'
                          }`}
                        >
                          {cell.anomalyScore}
                        </span>
                      </div>

                      {isCurrent ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                      ) : isMapped ? (
                        <span className="w-2 h-2 rounded-full bg-emerald-600" title="Mapped in GIS" />
                      ) : (
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isAnomaly ? 'bg-amber-600' : 'bg-slate-300'
                          }`}
                        />
                      )}
                    </button>
                  );
                })
              )}
            </div>

            {/* Active Cell Dossier */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div className="flex items-center justify-between font-mono mb-1.5">
                <span className="text-blue-900 font-bold">{currentCell.label} Inspection</span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    currentCell.anomalyScore > 60
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-slate-200 text-slate-800'
                  }`}
                >
                  {currentCell.status.replace(/_/g, ' ')}
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed font-sans font-medium">{currentCell.description}</p>
            </div>
          </div>

          {/* Interactive Navigation Controls */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xl">
            <div className="text-xs font-mono text-slate-700 font-bold uppercase tracking-wider mb-4 pb-2 border-b border-slate-200 flex items-center justify-between">
              <span>Winch & Vector Navigation Controls</span>
              <span className="text-blue-700">WASD / Arrow Keys</span>
            </div>

            <div className="grid grid-cols-3 gap-2 max-w-[280px] mx-auto mb-5">
              <div />
              <button
                onClick={() => moveRobot(0, -1)}
                className="p-3 rounded-xl bg-slate-100 border border-slate-300 hover:bg-blue-600 hover:text-white text-slate-800 flex items-center justify-center transition-all active:scale-95 shadow-sm"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
              <div />

              <button
                onClick={() => moveRobot(-1, 0)}
                className="p-3 rounded-xl bg-slate-100 border border-slate-300 hover:bg-blue-600 hover:text-white text-slate-800 flex items-center justify-center transition-all active:scale-95 shadow-sm"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => moveRobot(0, 1)}
                className="p-3 rounded-xl bg-slate-100 border border-slate-300 hover:bg-blue-600 hover:text-white text-slate-800 flex items-center justify-center transition-all active:scale-95 shadow-sm"
              >
                <ArrowDown className="w-5 h-5" />
              </button>

              <button
                onClick={() => moveRobot(1, 0)}
                className="p-3 rounded-xl bg-slate-100 border border-slate-300 hover:bg-blue-600 hover:text-white text-slate-800 flex items-center justify-center transition-all active:scale-95 shadow-sm"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <button
                onClick={() => setIsScanning(!isScanning)}
                className={`px-3 py-2.5 rounded-xl border text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
                  isScanning
                    ? 'bg-emerald-600 text-white border-emerald-700'
                    : 'bg-slate-200 border-slate-300 text-slate-800'
                }`}
              >
                {isScanning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isScanning ? 'PAUSE' : 'RESUME'}</span>
              </button>

              <button
                onClick={triggerRescan}
                disabled={isRescanning}
                className="px-3 py-2.5 rounded-xl bg-blue-600 text-white border border-blue-700 hover:bg-blue-700 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isRescanning ? 'animate-spin' : ''}`} />
                <span>RESCAN</span>
              </button>

              <button
                onClick={toggleOptical}
                className="px-3 py-2.5 rounded-xl bg-purple-600 text-white border border-purple-700 hover:bg-purple-700 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all"
              >
                <Camera className="w-4 h-4" />
                <span>CONFIRM</span>
              </button>

              <button
                onClick={mapAnomaly}
                className="px-3 py-2.5 rounded-xl bg-teal-600 text-white border border-teal-700 hover:bg-teal-700 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all"
              >
                <MapPin className="w-4 h-4" />
                <span>MAP TARGET</span>
              </button>
            </div>

            {isRescanning && (
              <div className="mt-4 p-3 rounded-xl bg-blue-50 border border-blue-200">
                <div className="flex items-center justify-between text-xs font-mono text-blue-900 font-bold mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Targeted 4-Point Rescan Active</span>
                  </span>
                  <span>{rescanProgress}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden mb-1.5">
                  <div
                    className="h-full bg-blue-600 transition-all duration-300 rounded-full"
                    style={{ width: `${rescanProgress}%` }}
                  />
                </div>
                <p className="text-[11px] font-mono text-slate-800 font-medium">{rescanStep}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Live Telemetry Dashboard */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-5">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-600 animate-pulse" />
                <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                  Live Sensor Telemetry Bus
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold">
                BUS 100 Hz SYNCED
              </span>
            </div>

            {/* Telemetry Metric Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">DEPTH (N4)</span>
                <div className="text-lg font-bold font-mono text-slate-900 mt-0.5">
                  {telemetry.depth} <span className="text-xs text-blue-700 font-normal">m</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">MS5803 Depth</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">STANDOFF (N6)</span>
                <div className="text-lg font-bold font-mono text-blue-900 mt-0.5">
                  {telemetry.standoff} <span className="text-xs text-blue-700 font-normal">m</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">500kHz Altimeter</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">WATER TEMP</span>
                <div className="text-lg font-bold font-mono text-slate-900 mt-0.5">
                  {telemetry.temperature} <span className="text-xs text-blue-700 font-normal">°C</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Abyssal Baseline</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">CONDUCTIVITY</span>
                <div className="text-lg font-bold font-mono text-slate-900 mt-0.5">
                  {telemetry.conductivity} <span className="text-xs text-teal-700 font-normal">S/m</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Fluid Salinity</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">MAGNETIC (N1)</span>
                <div className="text-lg font-bold font-mono text-blue-900 mt-0.5">
                  {telemetry.magneticField} <span className="text-xs text-blue-700 font-normal">nT</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">RM3100 3-Axis</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">EM AMPLITUDE (N3)</span>
                <div className="text-lg font-bold font-mono text-amber-800 mt-0.5">
                  {telemetry.emAmplitude} <span className="text-xs text-amber-700 font-normal">mV</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Secondary Induction</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">EM PHASE (N3)</span>
                <div className="text-lg font-bold font-mono text-amber-800 mt-0.5">
                  {telemetry.emPhase}°
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Conductive Lag</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">SELF-POTENTIAL</span>
                <div className="text-lg font-bold font-mono text-emerald-800 mt-0.5">
                  {telemetry.electricalPotential} <span className="text-xs text-emerald-700 font-normal">mV</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Galvanic Ag/AgCl</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">BACKSCATTER (N6)</span>
                <div className="text-lg font-bold font-mono text-rose-800 mt-0.5">
                  {telemetry.acousticResponse} <span className="text-xs text-rose-700 font-normal">dB</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Seafloor Hardness</span>
              </div>
            </div>

            {/* Composite Anomaly Confidence Meter */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 mb-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-900 font-extrabold flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-blue-600" />
                  <span>COMPOSITE ANOMALY SCORE</span>
                </span>
                <span className="text-2xl font-black font-mono text-blue-900">
                  {telemetry.anomalyScore} <span className="text-sm font-normal text-slate-500">/ 100</span>
                </span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    telemetry.anomalyScore > 75
                      ? 'bg-gradient-to-r from-amber-500 to-rose-600'
                      : telemetry.anomalyScore > 40
                      ? 'bg-gradient-to-r from-blue-600 to-amber-500'
                      : 'bg-blue-600'
                  }`}
                  style={{ width: `${telemetry.anomalyScore}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-600 mt-1.5 font-bold">
                <span>0 (Ambient Sediments)</span>
                <span>Threshold: 60</span>
                <span>100 (High-Grade Conductive Body)</span>
              </div>
            </div>

            {/* Subsystem Health Matrix */}
            <div className="pt-3 border-t border-slate-200">
              <span className="text-[11px] font-mono text-slate-700 font-bold uppercase tracking-wider block mb-2.5">
                Subsea Electronics & Telemetry Health
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono font-semibold">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="text-slate-600">Tether:</span>
                  <span className="text-emerald-700 font-bold">10 Mbps</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="text-slate-600">Power:</span>
                  <span className="text-blue-700 font-bold">48V DC</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="text-slate-600">IMU Tilt:</span>
                  <span className="text-slate-900">R:1.2° P:-0.8°</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="text-slate-600">Camera:</span>
                  <span className="text-purple-700 font-bold">STANDBY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
