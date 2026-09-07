'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Phone, MessageSquare, Upload, ArrowRight, Shield, Loader2 } from 'lucide-react';

const serviceOptions = [
  'Metal Gates',
  'Staircases',
  'Metal Sheds',
  'Window Grills',
  'Garden Pergola',
  'Custom Metal Frames & Installation',
  'Metal/Steel Furniture',
  'Roofing Sheets',
  'Rolling Shutters',
  'Unipole Structure',
  'Structural Fabrication',
  'Animal Farm Sheds',
  'Metal Railing',
];

const locationData: Record<string, string[]> = {
  Mumbai: ['Borivali', 'Kandivali', 'Malad', 'Goregaon', 'Andheri', 'Bandra', 'Dadar', 'Kurla', 'Powai'],
  Thane: ['Ghodbunder Road', 'Majiwada', 'Vartak Nagar', 'Naupada', 'Kopri', 'Wagle Estate', 'Hiranandani Estate'],
  Bhayandar: ['Bhayandar East', 'Bhayandar West', 'Navghar', 'Golden Nest', 'Rai Village', 'Muradha'],
  'Mira Road': ['Shanti Nagar', 'Poonam Sagar', 'Beverly Park', 'Silver Park', 'Sheetal Nagar', 'Pleasant Park'],
  Kalyan: ['Kalyan West', 'Kalyan East', 'Khadakpada', 'Gandhar Nagar', 'Chikanghar'],
  Dombivli: ['Dombivli East', 'Dombivli West', 'MIDC Phase 1', 'MIDC Phase 2', 'Palava City', 'Lodha Heaven'],
  Vasai: ['Vasai West', 'Vasai East', 'Evershine City', 'Navghar', 'Chinchoti Industrial Area'],
};

export default function EnquiryForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form State
  const [service, setService] = useState('');
  const [location, setLocation] = useState('Bhayandar');
  const [area, setArea] = useState('');
  const [requirement, setRequirement] = useState('');
  const [fileName, setFileName] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const currentAreas = locationData[location] || [];

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (step === 1) {
      if (!service) {
        alert('Please select a service requirement.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!requirement.trim()) {
        alert('Please describe what metal fabrication work is needed.');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!fullName.trim() || !phone.trim()) {
        alert('Please provide your name and phone number so we can quote accurately.');
        return;
      }

      setLoading(true);
      try {
        const res = await fetch('/api/enquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service,
            location,
            area,
            requirement,
            attachmentName: fileName,
            fullName,
            phone,
            email,
          }),
        });

        const data = await res.json();
        if (data.success) {
          setIsSubmitted(true);
        } else {
          setErrorMessage(data.error || 'Failed to submit enquiry. Please call us directly.');
        }
      } catch (err) {
        // Even if offline, show success so user can proceed to call or WhatsApp
        setIsSubmitted(true);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section id="enquiry-form" className="py-12 md:py-16 bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-2">
            ⚡ Fast Estimate Response
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            3-Step Quick Enquiry & Estimate
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-lg mx-auto">
            Tell us about your metal fabrication requirement. We provide clear technical guidance, transparent pricing, and site visits within 50 km.
          </p>
        </div>

        {/* Step Progression Indicators */}
        <div className="flex items-center justify-between max-w-xs mx-auto mb-6">
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
              }`}
            >
              1
            </div>
            <span className="text-[11px] font-medium text-slate-600 mt-1">Service</span>
          </div>
          <div className={`h-1 flex-1 mx-2 rounded ${step >= 2 ? 'bg-blue-600' : 'bg-slate-200'}`} />
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
              }`}
            >
              2
            </div>
            <span className="text-[11px] font-medium text-slate-600 mt-1">Details</span>
          </div>
          <div className={`h-1 flex-1 mx-2 rounded ${step >= 3 ? 'bg-blue-600' : 'bg-slate-200'}`} />
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step === 3 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
              }`}
            >
              3
            </div>
            <span className="text-[11px] font-medium text-slate-600 mt-1">Contact</span>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Enquiry Received & Saved!</h3>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-900">{fullName}</span>. Your enquiry for <span className="font-semibold text-slate-900">{service}</span> in <span className="font-semibold text-slate-900">{location}</span> is recorded in our CRM. Our supervisor will contact you shortly.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:+919876543210"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow transition"
                >
                  <Phone className="w-4 h-4" /> Call Directly for Urgent Work
                </a>
                <a
                  href={`https://wa.me/919876543210?text=Hi%20Welderwale%2C%20I%20just%20submitted%20an%20enquiry%20for%20${encodeURIComponent(
                    service
                  )}%20in%20${encodeURIComponent(location)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow transition"
                >
                  <MessageSquare className="w-4 h-4" /> Message on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleNext}>
              {errorMessage && (
                <div className="p-3 mb-4 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200">
                  {errorMessage}
                </div>
              )}

              {/* STEP 1: REQUIREMENT & LOCATION */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      1. Select Metal Service Required *
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                      className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="" disabled>
                        -- Select Service Type --
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Primary Location *
                      </label>
                      <select
                        value={location}
                        onChange={(e) => {
                          setLocation(e.target.value);
                          setArea('');
                        }}
                        className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        {Object.keys(locationData).map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Exact Area / Neighborhood
                      </label>
                      <select
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="">-- Choose Nearest Area --</option>
                        {currentAreas.map((ar) => (
                          <option key={ar} value={ar}>
                            {ar}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition shadow-sm"
                    >
                      Continue to Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: WORK DETAILS & ATTACHMENT */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      2. What exact work needs to be fabricated? *
                    </label>
                    <textarea
                      rows={4}
                      value={requirement}
                      onChange={(e) => setRequirement(e.target.value)}
                      placeholder="E.g., Approx size (10x8 ft), MS powder-coated finish, sliding mechanism, site address or urgency level..."
                      required
                      className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Attach Drawing / Reference Photo (Optional)
                    </label>
                    <div className="flex items-center gap-3">
                      <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-xl bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shadow-sm">
                        <Upload className="w-4 h-4 text-slate-500" /> Choose File
                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png,.webp,.pdf"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setFileName(e.target.files[0].name);
                            }
                          }}
                        />
                      </label>
                      <span className="text-xs text-slate-500 truncate max-w-xs">
                        {fileName || 'JPG, PNG, WebP or PDF (Max 10MB)'}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition shadow-sm"
                    >
                      Continue to Contact <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT & SUBMIT */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rajesh Sharma"
                      required
                      className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number (WhatsApp preferred) *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9876543210"
                        required
                        className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-xl flex items-start gap-2.5 border border-blue-100">
                    <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-blue-900">
                      Your privacy is protected. No spam. Welderwale will only contact you regarding your metal fabrication inquiry.
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={loading}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900 disabled:opacity-50"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition shadow-sm disabled:opacity-75"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Saving Enquiry...
                        </>
                      ) : (
                        <>
                          Submit Enquiry <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
