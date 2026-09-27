# VARUNA06 — Low-Cost Deployable Seafloor Metal Detection Sensor for Ocean Resource Exploration

> **Smart India Hackathon 2026**  
> **Team:** Team Lorenzini  
> **Problem Statement ID:** SIH26064  
> **Theme:** Robotics and Drones | **Category:** Hardware  
> **Tagline:** *“Exploring the Unseen”*  
> **Mantra:** *“Detect. Score. Rescan. Confirm. Map.”*

---

## 🌊 Overview

**VARUNA06** is a low-cost tethered underwater robotic sensing platform engineered to detect and investigate seafloor mineral resource anomalies. Lowered from a surface craft using an automated winch and a single neutral-buoyancy umbilical, VARUNA06 combines:

- **Electromagnetic Sensing (N2/N3):** Multi-frequency induction transmitter (200 Hz – 10 kHz) and differential 24-bit receiver.
- **Magnetic Sensing (N1):** RM3100 3-axis geomagnetic magnetometer.
- **Electrical & Galvanic Sensing (N4):** Ag/AgCl non-polarizing electrodes for self-potential (SP) detection.
- **Environmental Normalization (N4):** Toroidal conductivity cell and MS5803-30BA pressure/depth sensor.
- **Acoustic Standoff & Altimetry (N6):** 500 kHz narrow-beam transducer for millimeter-accurate bottom tracking and reflection hardness.
- **Motion Normalization (N5):** 6-DOF IMU for real-time 200 Hz Euler tilt compensation.
- **Optical Ground-Truthing:** Low-light 4K camera with dual 3000-lumen strobe LEDs.

### ⚠️ Critical Scientific Honesty
VARUNA06 does **NOT** claim to directly identify chemical stoichiometry or provide laboratory mineral assays. Instead, it measures physical/geophysical signatures and computes **0–100 Prospectivity / Signature-Similarity Scores** (Copper-like, Nickel-like, Cobalt-like, and Manganese-like) to identify locations that warrant further investigation.

---

## 🔄 The Closed-Loop Investigation Engine

$$\text{DEPLOY} \rightarrow \text{DETECT} \rightarrow \text{SCORE} \rightarrow \text{DECIDE} \rightarrow \text{MOVE} \rightarrow \text{RESCAN} \rightarrow \text{CONFIRM} \rightarrow \text{MAP} \rightarrow \text{RECOVER}$$

Unlike traditional one-pass fly-by surveys that trip false alarms from volcanic basalt or scrap metal, VARUNA06 commands an autonomous **4-point cross-pattern rescan** (0.8m radius at North, East, South, West) to evaluate spatial consistency before committing a target to the bathymetric registry.

---

## 🚀 Quick Start

### 1. Installation
```bash
# Clone or navigate to the project directory
cd C:\Users\seeth\.gemini\antigravity\scratch\varuna06-ocean-sensor

# Install dependencies
npm install
```

### 2. Development Server
```bash
npm run dev
```

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```
Visit **`http://localhost:5173/`** to interact with the mission control terminal.

---

## 🛠️ Tech Stack

- **Frontend:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 + Marine Mission Control Design System
- **3D Graphics:** Three.js (interactive WebGL 3D robot explorer with CAD wireframe & orbit controls)
- **Icons:** Lucide React

---

## 👥 Team Lorenzini

1. **Shakthi Akshata** (M.Tech CDSE) — *System Architecture & Signal Processing Lead*
2. **Ashwin** (ECE) — *Electronics & Embedded Hardware Lead*
3. **Yugenthar** (ECE) — *EM TX/RX Coil & Sensor Instrumentation Lead*
4. **Dhivakar** (ECE) — *Power Architecture & Underwater Platform Lead*
5. **Seetha Eswari** (IT) — *Mission Control Dashboard & Decision Engine Lead*
6. **Narmadha** (IT) — *Data Architecture & Prospectivity Analytics Lead*

