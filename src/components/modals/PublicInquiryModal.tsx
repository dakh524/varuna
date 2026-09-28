import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, Building, FileText } from 'lucide-react';

interface PublicInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PublicInquiryModal: React.FC<PublicInquiryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    inquiryType: 'Telemetry Log Request',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = 'INQ-2026-' + Math.floor(100000 + Math.random() * 900000);
    setTrackingId(randomId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      organization: '',
      inquiryType: 'Telemetry Log Request',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl max-h-[92vh] sm:max-h-[85vh] bg-white border border-slate-300 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl relative flex flex-col overflow-hidden text-slate-900">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-200 mb-4 sm:mb-6 shrink-0 gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[10px] font-mono text-blue-800 font-bold uppercase tracking-wider sm:tracking-widest block truncate">
                OFFICIAL PUBLIC INQUIRY & DATA ACCESS CELL
              </span>
              <h2 className="text-sm sm:text-xl font-bold text-slate-900 truncate">
                Submit Open Data Request / Inquiry
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-100 border border-slate-300 hover:border-slate-500 text-slate-600 hover:text-slate-900 transition-all shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 pr-1">
          {submitted ? (
            <div className="p-4 sm:p-8 text-center space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-700">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Public Request Registered</h3>
              <p className="text-xs sm:text-sm text-slate-700 font-sans max-w-md mx-auto font-medium">
                Your inquiry has been submitted to the Directorate of Ocean Robotics & Subsea Geophysics.
              </p>

              <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono inline-block shadow-sm">
                <span className="text-slate-500 block">OFFICIAL TRACKING REFERENCE NUMBER:</span>
                <strong className="text-blue-800 text-base sm:text-lg break-all">{trackingId}</strong>
              </div>

              <p className="text-[11px] sm:text-xs text-slate-600 font-mono">
                An acknowledgment receipt will be transmitted to your registered email address within 24 hours.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-[#0f172a] text-white font-mono font-bold text-xs hover:bg-slate-800 transition-all shadow-md w-full sm:w-auto"
                >
                  RETURN TO PORTAL
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs pb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-slate-700 mb-1 uppercase font-bold text-[11px]">
                    Full Name / Designate <span className="text-blue-700">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Dr. Alex Vance"
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:border-blue-600 focus:outline-none font-medium text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 uppercase font-bold text-[11px]">
                    Official Email Address <span className="text-blue-700">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="a.vance@ocean-institute.org"
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:border-blue-600 focus:outline-none font-medium text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-slate-700 mb-1 uppercase font-bold text-[11px]">
                    Organization / Institution
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Institute of Oceanographic Studies"
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:border-blue-600 focus:outline-none font-medium text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 uppercase font-bold text-[11px]">
                    Inquiry Category <span className="text-blue-700">*</span>
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:border-blue-600 focus:outline-none font-medium text-xs"
                  >
                    <option value="Telemetry Log Request">Raw Telemetry Data Request (CSV / GeoJSON)</option>
                    <option value="Research Collaboration">Academic Research Collaboration</option>
                    <option value="Instrument Specs">Hardware Sensor Calibration Inquiries</option>
                    <option value="Environmental Compliance">Environmental Impact & UNCLOS Standards</option>
                    <option value="General Public">General Public Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 mb-1 uppercase font-bold text-[11px]">
                  Detailed Inquiry / Request Statement <span className="text-blue-700">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe your technical requirement or public data request..."
                  className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:border-blue-600 focus:outline-none font-sans font-medium text-xs"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200">
                <span className="text-[10px] text-slate-500 font-medium text-center sm:text-left">
                  All inquiries processed under Open Data Standards.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0f172a] text-white font-mono font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-md"
                >
                  <Send className="w-3.5 h-3.5 text-amber-400" />
                  <span>SUBMIT OFFICIAL INQUIRY</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
