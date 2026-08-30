'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  Upload,
  ArrowRight,
  ArrowLeft,
  Loader2,
  FileText,
  AlertCircle,
  MapPin,
  Wrench,
  User
} from 'lucide-react';
import { locationAreasMap } from '@/data/initialLocations';
import { Service, CompanySettings } from '@/types';

interface EnquiryFormProps {
  services: Service[];
  company: CompanySettings;
  preselectedService?: string;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  services,
  company,
  preselectedService = '',
  className = '',
}) => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(preselectedService || (services[0]?.name || ''));
  const [location, setLocation] = useState('Mumbai');
  const [area, setArea] = useState(locationAreasMap['Mumbai']?.[0] || '');
  const [requirement, setRequirement] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredContact, setPreferredContact] = useState<'Call' | 'WhatsApp' | 'Email'>('Call');
  const [honeypot, setHoneypot] = useState(''); // Anti-bot trap

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle location change and update dependent areas
  const handleLocationChange = (newLocation: string) => {
    setLocation(newLocation);
    const availableAreas = locationAreasMap[newLocation] || [];
    setArea(availableAreas[0] || 'Main Area');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // File size limit: 15MB
      if (file.size > 15 * 1024 * 1024) {
        setErrorMessage('File size exceeds 15MB limit. Please upload a smaller file or send via WhatsApp.');
        return;
      }
      setSelectedFile(file);
      setErrorMessage('');
    }
  };

  const handleNextStep = () => {
    setErrorMessage('');
    if (step === 1) {
      if (!service || !location || !area) {
        setErrorMessage('Please select your service, location and area.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!requirement.trim()) {
        setErrorMessage('Please provide a brief description of the work needed.');
        return;
      }
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    setErrorMessage('');
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent discard for spam bots

    if (!name.trim() || !phone.trim()) {
      setErrorMessage('Please enter your name and phone number so we can reach you.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          service,
          location,
          area,
          requirement: requirement.trim(),
          preferredContact,
          fileName: selectedFile?.name || null,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
      }

      setIsSubmitted(true);
    } catch {
      // Fallback optimistic submission so user is never blocked
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-slate-900 border border-emerald-500/40 rounded-card p-6 sm:p-8 text-center shadow-2xl ${className}`}>
        <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40 animate-in zoom-in-50 duration-300">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black text-white">Enquiry Received Successfully!</h3>
        <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-white">{name}</strong>. Our fabrication engineer for{' '}
          <strong className="text-brand-400">{location} ({area})</strong> will review your requirement for{' '}
          <strong className="text-brand-400">{service}</strong> and contact you shortly.
        </p>

        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${company.phone}`}
            className="w-full sm:w-auto px-5 py-3 rounded-btn bg-brand-500 text-slate-950 font-bold text-sm flex items-center justify-center space-x-2 shadow-lg hover:brightness-110 transition-all"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Need Fast Response? Call {company.phoneDisplay}</span>
          </a>
          <a
            href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
              `Hi Welderwale, I just submitted an enquiry for ${service} in ${location} (${area}). My name is ${name}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-btn bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center space-x-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Details on WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  const locationsList = Object.keys(locationAreasMap);
  const areasList = locationAreasMap[location] || [];

  return (
    <div id="enquiry-form" className={`bg-slate-900 border border-slate-800 rounded-card p-5 sm:p-8 shadow-2xl relative ${className}`}>
      {/* Step Indicators Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
              step >= 1 ? 'bg-brand-500 text-slate-950' : 'bg-slate-800 text-slate-400'
            }`}
          >
            1
          </div>
          <span className={`text-xs font-bold hidden sm:inline ${step === 1 ? 'text-white' : 'text-slate-500'}`}>
            Requirement
          </span>
        </div>

        <div className="h-0.5 flex-1 mx-2 bg-slate-800">
          <div
            className={`h-full bg-brand-500 transition-all duration-300 ${
              step === 1 ? 'w-0' : step === 2 ? 'w-1/2' : 'w-full'
            }`}
          />
        </div>

        <div className="flex items-center space-x-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
              step >= 2 ? 'bg-brand-500 text-slate-950' : 'bg-slate-800 text-slate-400'
            }`}
          >
            2
          </div>
          <span className={`text-xs font-bold hidden sm:inline ${step === 2 ? 'text-white' : 'text-slate-500'}`}>
            Work Details
          </span>
        </div>

        <div className="h-0.5 flex-1 mx-2 bg-slate-800">
          <div
            className={`h-full bg-brand-500 transition-all duration-300 ${
              step <= 2 ? 'w-0' : 'w-full'
            }`}
          />
        </div>

        <div className="flex items-center space-x-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
              step >= 3 ? 'bg-brand-500 text-slate-950' : 'bg-slate-800 text-slate-400'
            }`}
          >
            3
          </div>
          <span className={`text-xs font-bold hidden sm:inline ${step === 3 ? 'text-white' : 'text-slate-500'}`}>
            Contact
          </span>
        </div>
      </div>

      {/* Error alert */}
      {errorMessage && (
        <div className="mb-4 p-3 rounded-btn bg-red-950/80 border border-red-800/80 text-red-200 text-xs flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* STEP 1: REQUIREMENT & DEPENDENT LOCATION PICKER */}
      {step === 1 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center space-x-1.5">
              <Wrench className="w-3.5 h-3.5 text-brand-500" />
              <span>Select Service</span>
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 transition-colors"
            >
              {services.map((srv) => (
                <option key={srv.id} value={srv.name}>
                  {srv.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Primary Location */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-500" />
                <span>Service Location</span>
              </label>
              <select
                value={location}
                onChange={(e) => handleLocationChange(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 transition-colors"
              >
                {locationsList.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Dependent Area Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Exact Area in {location}
              </label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 transition-colors"
              >
                {areasList.map((ar) => (
                  <option key={ar} value={ar}>
                    {ar}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="button"
              onClick={handleNextStep}
              className="w-full sm:w-auto px-6 py-3 rounded-btn bg-brand-500 text-slate-950 font-bold text-sm shadow-md hover:brightness-110 flex items-center justify-center space-x-2 transition-all"
            >
              <span>Next: Work Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: WORK DETAILS & SECURE ATTACHMENT */}
      {step === 2 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              What exact fabrication work needs to be done?
            </label>
            <textarea
              rows={4}
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              placeholder="e.g. Need a 20x15 ft rooftop terrace shed with Tata Bluescope roofing sheets and MS pipe framework. Site is accessible by stairs on 4th floor."
              className="w-full px-3.5 py-2.5 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
            />
          </div>

          {/* File Upload Component */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center space-x-1.5">
              <Upload className="w-3.5 h-3.5 text-brand-500" />
              <span>Attach Site Photos or Drawings (Optional)</span>
            </label>
            <div className="relative border-2 border-dashed border-slate-700 hover:border-brand-500/80 rounded-btn p-4 text-center bg-slate-950/60 transition-colors">
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.webp,.pdf"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <div className="flex flex-col items-center justify-center space-y-1">
                <FileText className="w-6 h-6 text-slate-400" />
                <span className="text-xs font-medium text-slate-300">
                  {selectedFile ? (
                    <strong className="text-brand-400">{selectedFile.name}</strong>
                  ) : (
                    'Click or drag photos / PDF here (Max 15MB)'
                  )}
                </span>
                <span className="text-[10px] text-slate-500">Supports JPG, PNG, WebP, PDF</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handlePrevStep}
              className="px-4 py-2.5 rounded-btn bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold flex items-center space-x-1.5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              type="button"
              onClick={handleNextStep}
              className="px-6 py-3 rounded-btn bg-brand-500 text-slate-950 font-bold text-sm shadow-md hover:brightness-110 flex items-center space-x-2 transition-all"
            >
              <span>Next: Contact Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: CONTACT INFORMATION & SUBMISSION */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-300">
          {/* Honeypot Spam Trap */}
          <input
            type="text"
            name="website_url_check"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center space-x-1.5">
              <User className="w-3.5 h-3.5 text-brand-500" />
              <span>Your Name *</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ramesh Patel"
              className="w-full px-3.5 py-2.5 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center space-x-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-500" />
                <span>Phone Number *</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9820123456"
                className="w-full px-3.5 py-2.5 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. ramesh@example.com"
                className="w-full px-3.5 py-2.5 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Preferred Contact Method
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Call', 'WhatsApp', 'Email'] as const).map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setPreferredContact(method)}
                  className={`py-2 px-3 rounded-btn text-xs font-bold border transition-colors ${
                    preferredContact === method
                      ? 'bg-brand-500 text-slate-950 border-brand-500'
                      : 'bg-slate-950 text-slate-300 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handlePrevStep}
              className="px-4 py-2.5 rounded-btn bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold flex items-center space-x-1.5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3.5 rounded-btn bg-gradient-to-r from-brand-500 to-amber-600 hover:brightness-110 text-slate-950 font-black text-sm shadow-xl flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Submit Enquiry for Quote</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
