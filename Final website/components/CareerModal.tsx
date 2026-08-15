'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  X,
  Send,
  CheckCircle2,
  UploadCloud,
  FileText,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

interface CareerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CareerModal({ isOpen, onClose }: CareerModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    linkedin: '',
    message: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetAndClose = useCallback(() => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      linkedin: '',
      message: '',
    });
    setSelectedFile(null);
    setFileError('');
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          resetAndClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, resetAndClose]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setFileError('File size exceeds 10MB limit.');
        return;
      }
      setFileError('');
      setSelectedFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setFileError('File size exceeds 10MB limit.');
        return;
      }
      setFileError('');
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          resetAndClose();
        }
      }}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[calc(100vh-40px)] shadow-2xl border border-emerald-100 relative overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-career-title"
      >
        {/* Decorative Top Bar - Clean Green Palette */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-[#0D8A4E] z-20" />

        {/* Pinned Modal Header */}
        <div className="shrink-0 p-6 pb-4 sm:p-8 sm:pb-4 border-b border-slate-100 bg-white relative z-10">
          {/* Close Button */}
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors z-20 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="pr-10 space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0D8A4E] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#0D8A4E]" />
              <span>Enlace Global Careers</span>
            </div>
            <h3 id="modal-career-title" className="text-2xl font-extrabold text-slate-900 pt-1">
              Career Application
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Fill out the form below and upload your resume to apply for opportunities at Enlace Global.
            </p>
          </div>
        </div>

        {/* Scrollable Form Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 sm:p-8 space-y-6 overscroll-contain">
          {isSubmitted ? (
            /* SUCCESS CONFIRMATION STATE */
            <div className="py-8 px-4 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-[#0D8A4E] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <div className="space-y-3 max-w-lg mx-auto">
                <h3 className="text-2xl font-bold text-slate-900">
                  Application Received
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium bg-emerald-50/80 p-5 rounded-2xl border border-emerald-100">
                  Thank you for your interest in Enlace Global. We’ve received your application and will be in touch if your profile matches an opportunity with us.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-[#0D8A4E] hover:from-emerald-700 hover:to-emerald-800 shadow-md transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* CAREER FORM */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Full Name <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0D8A4E] focus:border-[#0D8A4E] text-slate-900 placeholder:text-slate-400 text-sm transition-all bg-slate-50/50 focus:bg-white"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Email Address <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="s.jenkins@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0D8A4E] focus:border-[#0D8A4E] text-slate-900 placeholder:text-slate-400 text-sm transition-all bg-slate-50/50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Phone Number <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0D8A4E] focus:border-[#0D8A4E] text-slate-900 placeholder:text-slate-400 text-sm transition-all bg-slate-50/50 focus:bg-white"
                  />
                </div>

                {/* Position / Area of Interest */}
                <div className="space-y-1.5">
                  <label htmlFor="position" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Position / Area of Interest <span className="text-emerald-600">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="position"
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0D8A4E] focus:border-[#0D8A4E] text-slate-900 text-sm transition-all bg-slate-50/50 focus:bg-white appearance-none cursor-pointer pr-10"
                    >
                      <option value="" disabled>Select an area of interest</option>
                      <option value="Customer Experience Specialist">Customer Experience Specialist (Voice/Chat)</option>
                      <option value="AI & Automation Workflow Analyst">AI & Automation Workflow Analyst</option>
                      <option value="Sales & Lead Generation Agent">Sales & Lead Generation Agent</option>
                      <option value="Back Office & Data Specialist">Back Office & Data Specialist</option>
                      <option value="Team Lead / Operations Manager">Team Lead / Operations Manager</option>
                      <option value="Other / General Application">Other / General Application</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Years of Experience */}
                <div className="space-y-1.5">
                  <label htmlFor="experience" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Years of Experience <span className="text-emerald-600">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="experience"
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0D8A4E] focus:border-[#0D8A4E] text-slate-900 text-sm transition-all bg-slate-50/50 focus:bg-white appearance-none cursor-pointer pr-10"
                    >
                      <option value="" disabled>Select experience level</option>
                      <option value="Less than 1 year">Less than 1 year</option>
                      <option value="1 - 3 years">1 - 3 years</option>
                      <option value="3 - 5 years">3 - 5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* LinkedIn Profile (Optional) */}
                <div className="space-y-1.5">
                  <label htmlFor="linkedin" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    LinkedIn Profile <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0D8A4E] focus:border-[#0D8A4E] text-slate-900 placeholder:text-slate-400 text-sm transition-all bg-slate-50/50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Upload Resume */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Upload Resume <span className="text-emerald-600">*</span>
                </label>
                
                {selectedFile ? (
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <FileText className="w-5 h-5 text-[#0D8A4E] shrink-0" />
                      <div className="truncate">
                        <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">{selectedFile.name}</p>
                        <p className="text-[11px] text-slate-500">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedFile(null)}
                      className="p-1 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                      aria-label="Remove File"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className="border-2 border-dashed border-slate-200 hover:border-emerald-500 rounded-2xl p-5 text-center bg-slate-50/50 hover:bg-emerald-50/30 transition-all cursor-pointer group relative"
                  >
                    <input
                      type="file"
                      required={!selectedFile}
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="space-y-1.5 pointer-events-none">
                      <div className="w-9 h-9 rounded-full bg-emerald-100 text-[#0D8A4E] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                        <UploadCloud className="w-4 h-4" />
                      </div>
                      <div className="text-xs sm:text-sm text-slate-700 font-medium">
                        <span className="text-[#0D8A4E] font-bold">Click to upload</span> or drag and drop your resume
                      </div>
                      <p className="text-[10px] text-slate-400">PDF, DOC, DOCX up to 10MB</p>
                    </div>
                  </div>
                )}
                {fileError && <p className="text-xs text-red-600 font-medium">{fileError}</p>}
              </div>

              {/* Message (Optional) */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Message <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us briefly about yourself or any specific role preference..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0D8A4E] focus:border-[#0D8A4E] text-slate-900 placeholder:text-slate-400 text-sm transition-all bg-slate-50/50 focus:bg-white resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 pb-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-[#0D8A4E] hover:from-emerald-700 hover:to-emerald-800 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-emerald-100" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

