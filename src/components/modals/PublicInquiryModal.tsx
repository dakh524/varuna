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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white border border-slate-300 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden text-slate-900">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <Mail className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-blue-800 font-bold uppercase tracking-widest block">
                OFFICIAL PUBLIC INQUIRY & DATA ACCESS CELL
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Submit Open Data Request / Inquiry
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 border border-slate-300 hover:border-slate-500 text-slate-600 hover:text-slate-900 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-700">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Public Request Registered</h3>
            <p className="text-sm text-slate-700 font-sans max-w-md mx-auto font-medium">
              Your inquiry has been submitted to the Directorate of Ocean Robotics & Subsea Geophysics.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono inline-block shadow-sm">
              <span className="text-slate-500 block">OFFICIAL TRACKING REFERENCE NUMBER:</span>
              <strong className="text-blue-800 text-lg">{trackingId}</strong>
            </div>

            <p className="text-xs text-slate-600 font-mono">
              An acknowledgment receipt will be transmitted to your registered email address within 24 hours.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#0f172a] text-white font-mono font-bold text-xs hover:bg-slate-800 transition-all shadow-md"
              >
                RETURN TO PORTAL
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 mb-1.5 uppercase font-bold">
                  Full Name / Designate <span className="text-blue-700">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Dr. Alex Vance"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:border-blue-600 focus:outline-none font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-1.5 uppercase font-bold">
                  Official Email Address <span className="text-blue-700">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="a.vance@ocean-institute.org"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:border-blue-600 focus:outline-none font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 mb-1.5 uppercase font-bold">
                  Organization / Institution
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="Institute of Oceanographic Studies"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:border-blue-600 focus:outline-none font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-1.5 uppercase font-bold">
                  Inquiry Category <span className="text-blue-700">*</span>
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:border-blue-600 focus:outline-none font-medium"
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
              <label className="block text-slate-700 mb-1.5 uppercase font-bold">
                Detailed Inquiry / Request Statement <span className="text-blue-700">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please describe your technical requirement or public data request..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:border-blue-600 focus:outline-none font-sans font-medium"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-200">
              <span className="text-[10px] text-slate-500 font-medium">
                All inquiries processed under Open Data Standards.
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#0f172a] text-white font-mono font-bold text-xs flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md"
              >
                <Send className="w-3.5 h-3.5 text-amber-400" />
                <span>SUBMIT OFFICIAL INQUIRY</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
