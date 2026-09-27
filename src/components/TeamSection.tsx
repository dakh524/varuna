import React, { useState } from 'react';
import { Building2, ShieldCheck, Award, MapPin, Sparkles, ExternalLink, CheckCircle2, UserCheck, Eye, X } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<{ src: string; title: string } | null>(null);

  const teamMembers = [
    {
      name: 'Dhivakar',
      role: 'Team Lead & Systems Architect',
      degree: 'B.E. ECE',
      badge: 'TEAM LEAD',
      honor: '✈️ IAF 11 BRD — MBDA PEK DEVELOPER',
      image: '/assets/dhivakar%20(team%20lead).png',
      objectPos: 'center 15%',
      focus: [
        'Built MBDA PEK System for Indian Air Force (Deployed at IAF 11 BRD)',
        'Systems Architecture & Deep Ocean ROV Strategy',
        'Pulsed EMI Coil & Subsea Sensor Integration'
      ]
    },
    {
      name: 'Shakthi Akshata G',
      role: 'Software Lead & Data Processing',
      degree: 'M.Tech CDSE',
      badge: 'SOFTWARE LEAD',
      honor: '🏆 SIH FINALIST 2025',
      image: '/assets/SHAKTHI%20AKSHATA%20G%20-%20INTEGRATION.jpeg',
      objectPos: 'center 15%',
      focus: [
        'Topside Mission Control Dashboard & Telemetry',
        'Multi-Physics Feature Extraction (MRP 0-100)',
        'Bathymetric GIS Target Anomaly Mapping'
      ]
    },
    {
      name: 'Seethaa L',
      role: 'AI/ML Lead & Anomaly Modeling',
      degree: 'B.Tech IT',
      badge: 'AI/ML LEAD',
      image: '/assets/seethaa%20(%20ML%20).jpeg',
      objectPos: 'center 15%',
      focus: [
        'Physics-Informed Neural Networks (PINN) for Anomaly Scoring',
        'Multi-Sensor Seafloor Target Classification Model',
        'Real-Time Anomaly Pattern Recognition & Inversion'
      ]
    },
    {
      name: 'Aswin S',
      role: 'Hardware Lead & Electronics',
      degree: 'B.E. ECE',
      badge: 'HARDWARE LEAD',
      image: '/assets/ASWIN%20S%20-%20HARDWARE.jpeg',
      objectPos: 'center 20%',
      focus: ['RM3100 Magnetometer PCB Design', 'Multi-Frequency TX/RX Circuitry', 'Microvolt Differential ADC Frontend']
    },
    {
      name: 'Yugendhar K S',
      role: 'Hardware & Mechanical Payload',
      degree: 'B.E. ECE',
      badge: 'HARDWARE ENGINEER',
      image: '/assets/YUGENDHAR%20K%20S%20-%20HARDWARE.jpeg',
      objectPos: 'center 15%',
      focus: ['ROV Frame & Thruster Mounting', '25m Pressure Vessel O-Ring Seals', 'Galvanic SP Electrode Cartridge']
    },
    {
      name: 'Narmadha S D',
      role: 'Junior Researcher & Systems Integration',
      degree: 'B.Tech IT',
      badge: 'JUNIOR RESEARCHER',
      image: '/assets/NARMADHA%20S%20D%20-%20SOFTWARE.jpeg',
      objectPos: 'center 15%',
      focus: ['Telemetry Data Logging & Verification', 'Hardware-Software Integration Assistance', 'R&D Field Operations & Documentation']
    }
  ];

  const expertVisits = [
    {
      title: 'LinkedIn Expert Research Consultation',
      expert: 'Mr. Manikanda Bharath',
      role: 'Marine Instrumentation Specialist & Expert Researcher',
      image: '/assets/Mr.%20Manikanda%20Bharath.jpeg',
      desc: 'Shakthi Akshata G connected with Mr. Manikanda Bharath on LinkedIn to consult and clear technical doubts regarding deep-ocean sensor calibration, baseline noise cancellation, and electromagnetic signal conditioning.'
    },
    {
      title: 'IIT Madras Technical Guidance & Advisory',
      expert: 'Keshav Pathak',
      role: 'Ocean Engineering Researcher, IIT Madras • UTokyo Intern',
      image: '/assets/Keshav%20Pathak.jpeg',
      desc: 'M.Tech Ocean Engineering at IIT Madras & University of Tokyo Research Intern. Provided expert technical feedback for VARUNA 06 and guided the team in marine and inland-waterway engineering.'
    },
    {
      title: 'Team R&D Visit to NIOT Chennai',
      expert: 'National Institute of Ocean Technology (NIOT)',
      role: 'Deep Ocean Mission R&D Facility',
      image: '/assets/NIOT%20CHENNAI%20VISIT%20FOR%20R&D.png',
      desc: 'Interacting with senior marine robotics scientists at NIOT Chennai to align VARUNA06 with Deep Ocean Mission standards.'
    },
    {
      title: 'College Industrial Visit to NIOT Chennai',
      expert: 'Sri Sairam College Industrial Delegation',
      role: 'NIOT Deep Ocean Research Facility Visit',
      image: '/assets/TEAM%20VISIT%20TO%20NIOT%20CHENNAI.png',
      desc: 'Our college students visited National Institute of Ocean Technology (NIOT) Chennai for an industrial visit, exploring deep-sea robotics labs, pressure vessel test facilities, and ocean sensors.'
    },
    {
      title: 'Yugendhar K S — NIOT Expert Consultation Visit',
      expert: 'Yugendhar K S (Hardware Lead)',
      role: 'NIOT Scientist Review & Poster Presentation',
      image: '/assets/TEAM%20MEMBER%20VISITED%20AND%20ASKED%20FOR%20EXPERT%20OPINION%20FROM%20RESEARCHER.png',
      desc: 'Team member Yugendhar K S visited NIOT Chennai to present VARUNA 06 design schematics, discuss deep-sea pressure vessel specs, and get expert domain feedback from senior ocean technology scientists.'
    }
  ];

  return (
    <section id="team" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative font-sans">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-4">
          <Building2 className="w-3.5 h-3.5 text-amber-600" />
          <span>TEAM LORENZINI // MINISTRY OF EARTH SCIENCES (MoES) PS 26064</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Team LORENZINI & Research Advisory
        </h2>
        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
          Meet the engineers behind VARUNA 06 and explore our research visits & expert consultations at National Institute of Ocean Technology (NIOT) Chennai.
        </p>

        {/* Collective Directorate Badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs">
          <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-950 border border-purple-300 font-bold">
            COLLEGE: SRI SAIRAM ENGINEERING COLLEGE
          </span>
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold">
            TEAM: LORENZINI
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-300 font-bold">
            PROBLEM STATEMENT: 26064
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold">
            NIOT CHENNAI R&D VISITED
          </span>
        </div>
      </div>

      {/* 6 Team Lorenzini Member Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between hover:border-amber-400 transition-all hover:-translate-y-1 group relative overflow-hidden"
          >
            <div>
              {/* Member Photo Frame with proper aspect ratio and position */}
              <div 
                onClick={() => setSelectedImg({ src: member.image, title: `${member.name} (${member.role})` })}
                className="relative w-full aspect-[4/4.2] rounded-2xl overflow-hidden mb-4 border border-slate-200 bg-gradient-to-b from-slate-100 to-slate-200 shadow-inner cursor-pointer"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ objectPosition: member.objectPos }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-amber-600" />
                    <span>View Photo</span>
                  </span>
                </div>

                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-extrabold text-[10px] shadow-md uppercase tracking-wider">
                  {member.badge}
                </span>

                {/* 🏆 Innovative Honor Overlay Badge for SIH Finalist 2025 / IAF Developer 🏆 */}
                {member.honor && (
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 font-black text-[10px] shadow-lg uppercase tracking-wider flex items-center gap-1 border border-amber-200 animate-pulse">
                    <Award className="w-3.5 h-3.5 text-slate-950 fill-amber-950" />
                    <span>{member.honor}</span>
                  </span>
                )}
              </div>

              {/* Name & Academic Discipline */}
              <h3 className="text-xl font-extrabold text-slate-900 mb-0.5">{member.name}</h3>
              <p className="text-xs text-amber-800 font-bold mb-3">{member.role} • {member.degree}</p>

              {/* Focus Areas */}
              <div className="space-y-1.5 mb-4 text-xs">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Key Technical Focus:</span>
                {member.focus.map((item, fIdx) => (
                  <div key={fIdx} className="text-slate-700 font-medium flex items-center gap-1.5">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-600">
              <span className="truncate">Sri Sairam Engineering College</span>
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            </div>
          </div>
        ))}
      </div>

      {/* 👨‍🔬 EXPERT ADVISORY & NIOT CHENNAI R&D VISITS 👨‍🔬 */}
      <div className="pt-10 border-t border-slate-300">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">
            EXPERT CONSULTATION & RESEARCH GUIDANCE
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            NIOT Chennai R&D Visits & Expert Mentorship
          </h3>
          <p className="text-xs md:text-sm text-slate-600 font-medium mt-1">
            Validating VARUNA 06 with senior oceanographers and researchers at National Institute of Ocean Technology (NIOT), Chennai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertVisits.map((item, idx) => (
            <div key={idx} className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col md:flex-row gap-5 items-center group">
              <div 
                onClick={() => setSelectedImg({ src: item.image, title: item.title })}
                className="w-full md:w-52 aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shrink-0 bg-slate-100 shadow-inner cursor-pointer relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-slate-900 text-[10px] font-bold flex items-center gap-1 shadow-md">
                    <Eye className="w-3 h-3 text-amber-600" />
                    <span>Expand</span>
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-900 border border-blue-200 text-[10px] font-bold uppercase">
                  {item.expert}
                </span>
                <h4 className="text-base font-extrabold text-slate-900 leading-snug">{item.title}</h4>
                <p className="text-xs text-amber-800 font-bold">{item.role}</p>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for HD Image Viewing */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-300 animate-in fade-in zoom-in duration-200">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <span className="font-extrabold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                {selectedImg.title}
              </span>
              <button 
                onClick={() => setSelectedImg(null)}
                className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 bg-slate-950 flex items-center justify-center max-h-[80vh] overflow-auto">
              <img 
                src={selectedImg.src} 
                alt={selectedImg.title} 
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

