import React, { useState } from 'react';
import { submitEnquiry, API_CONFIG } from '../../utils/apiService';
import { disciplines } from '../../data/programs';
import { locations } from '../../data/locations';
import { CONTACT_INFO, WHATSAPP_MESSAGES, getWhatsAppUrl } from '../../data/contact';
import Button from '../common/Button';
import Badge from '../common/Badge';
import {
  CheckCircle2,
  AlertCircle,
  Info,
  RefreshCw,
  Phone,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

export default function EnquiryForm({
  formType = 'general', // 'general' | 'admissions' | 'program' | 'campus-visit'
  initialProgram = '',
  initialCampus = 'pune',
  title = 'Initiate Your Creative Journey',
  subtitle = 'Connect with an IDS Academic Advisor to discuss curriculum, portfolio prep, and studio admissions.',
  className = ''
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'India',
    preferredCampus: initialCampus,
    programInterest: initialProgram || 'fashion-design',
    qualification: '10+2 / High School',
    visitDate: '',
    message: '',
    honeypot: '' // spam-resistant hidden field
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [whatsappLaunched, setWhatsappLaunched] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim() || phoneDigits.length < 8) {
      newErrors.phone = 'Please provide a valid phone number (at least 8 digits).';
    }

    if (formType === 'campus-visit' && !formData.visitDate) {
      newErrors.visitDate = 'Please select a preferred visit date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.honeypot) return;
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionResult(null);
    setWhatsappLaunched(false);

    try {
      const result = await submitEnquiry({
        ...formData,
        formType,
        submittedAt: new Date().toISOString()
      });
      setSubmissionResult(result);
    } catch {
      setSubmissionResult({
        success: false,
        isDemo: false,
        message: 'Unexpected network error occurred. Please try again or connect via WhatsApp.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    if (formData.honeypot) return;
    if (!validate()) return;

    // Resolve human-readable program and campus names
    const selectedProgramObj = disciplines.find((d) => d.slug === formData.programInterest);
    const selectedCampusObj = locations.find((l) => l.slug === formData.preferredCampus);

    const message = WHATSAPP_MESSAGES.fromForm({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      programInterest: selectedProgramObj ? selectedProgramObj.name : formData.programInterest,
      preferredCampus: selectedCampusObj ? selectedCampusObj.name : formData.preferredCampus,
      visitDate: formData.visitDate,
      message: formData.message
    });

    const targetUrl = getWhatsAppUrl(message);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    setWhatsappLaunched(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      country: 'India',
      preferredCampus: initialCampus,
      programInterest: initialProgram || 'fashion-design',
      qualification: '10+2 / High School',
      visitDate: '',
      message: '',
      honeypot: ''
    });
    setErrors({});
    setSubmissionResult(null);
    setWhatsappLaunched(false);
  };

  return (
    <div className={`chrono-card p-6 sm:p-8 md:p-10 bg-white ${className}`}>
      {/* Form Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <Badge variant="coral" size="xs">
            {formType === 'campus-visit'
              ? 'Campus Visit Request'
              : formType === 'admissions'
              ? 'Admissions Enquiry'
              : 'Direct Academic Enquiry'}
          </Badge>

          {/* Clickable Quick Helpline */}
          <div className="flex items-center gap-3 text-xs font-mono">
            <a
              href={`tel:${CONTACT_INFO.phones[0].raw}`}
              className="text-[#666666] hover:text-[#F06445] flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3 text-[#F06445]" />
              <span>{CONTACT_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>

        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
          {title}
        </h3>
        <p className="mt-2 text-sm text-[#666666] leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Backend Status Advisory */}
      {API_CONFIG.isDemoMode && !submissionResult && !whatsappLaunched && (
        <div className="mb-6 p-3.5 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] flex items-start gap-3 text-xs text-[#666666]">
          <Info className="w-4 h-4 text-[#F06445] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[#111111]">Fast-Track Option:</span> Fill in your details below and click <span className="font-semibold text-[#25D366]">Continue on WhatsApp</span> to send this enquiry directly to our admissions team on WhatsApp.
          </div>
        </div>
      )}

      {/* WhatsApp Launched Notice */}
      {whatsappLaunched && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-2 animate-fadeIn">
          <div className="flex items-center gap-2 font-bold text-sm text-emerald-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Window Launched</span>
          </div>
          <p className="leading-relaxed">
            Your structured enquiry has been transferred to WhatsApp. Please review and hit <strong>Send</strong> inside WhatsApp to begin chatting with our admissions director.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="font-bold underline text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
            >
              Reopen WhatsApp <ExternalLink className="w-3 h-3" />
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setWhatsappLaunched(false)}
              className="text-emerald-700 hover:underline"
            >
              Back to form
            </button>
          </div>
        </div>
      )}

      {/* Standard Submission Result State */}
      {submissionResult ? (
        <div className="py-6 text-center animate-fadeIn">
          {submissionResult.success ? (
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading text-xl font-bold text-[#111111]">
                {submissionResult.isDemo
                  ? 'Form Validated Successfully (Client Preview)'
                  : 'Enquiry Received'}
              </h4>
              <p className="text-sm text-[#666666] max-w-md mx-auto leading-relaxed">
                {submissionResult.message}
              </p>

              {submissionResult.isDemo && (
                <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] text-left text-xs max-w-md mx-auto space-y-1 text-[#111111] font-mono">
                  <div className="font-bold text-[#666666] mb-1 font-sans">
                    Verified Application Payload:
                  </div>
                  <div><span className="text-[#666666]">Name:</span> {formData.fullName}</div>
                  <div><span className="text-[#666666]">Email:</span> {formData.email}</div>
                  <div><span className="text-[#666666]">Phone:</span> {formData.phone}</div>
                  <div><span className="text-[#666666]">Program:</span> {formData.programInterest}</div>
                  <div><span className="text-[#666666]">Campus:</span> {formData.preferredCampus}</div>
                </div>
              )}

              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <Button
                  onClick={handleWhatsAppSubmit}
                  variant="whatsapp"
                  size="md"
                  icon={false}
                  customIcon={<MessageCircle className="w-4 h-4 ml-1 fill-current" />}
                >
                  Also Send via WhatsApp
                </Button>
                <Button variant="glass" size="md" onClick={handleReset} icon={false}>
                  <RefreshCw className="w-3.5 h-3.5 mr-1.5" /> Submit Another Enquiry
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mx-auto">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h4 className="font-heading text-xl font-bold text-[#111111]">
                Submission Issue
              </h4>
              <p className="text-sm text-red-600 max-w-md mx-auto">
                {submissionResult.message}
              </p>
              <Button variant="glass" size="sm" onClick={() => setSubmissionResult(null)}>
                Try Again
              </Button>
            </div>
          )}
        </div>
      ) : (
        /* Form Inputs */
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Honeypot for spam bot filtering */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="honeypot"
              tabIndex="-1"
              value={formData.honeypot}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          {/* Row 1: Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] mb-2">
                Full Name <span className="text-[#F06445]">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Ananya Sharma"
                className={`w-full px-4 py-3 rounded-xl border bg-[#FAFAFA] text-sm text-[#111111] placeholder-[#999999] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06445]/20 focus:border-[#F06445] ${
                  errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#E8E8E8]'
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] mb-2">
                Email Address <span className="text-[#F06445]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ananya@example.com"
                className={`w-full px-4 py-3 rounded-xl border bg-[#FAFAFA] text-sm text-[#111111] placeholder-[#999999] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06445]/20 focus:border-[#F06445] ${
                  errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E8E8E8]'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Row 2: Phone & Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] mb-2">
                Phone Number <span className="text-[#F06445]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full px-4 py-3 rounded-xl border bg-[#FAFAFA] text-sm text-[#111111] placeholder-[#999999] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06445]/20 focus:border-[#F06445] ${
                  errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#E8E8E8]'
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="country" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] mb-2">
                Country of Residence
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] text-sm text-[#111111] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06445]/20 focus:border-[#F06445]"
              >
                <option value="India">India</option>
                <option value="Singapore">Singapore</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="United States">United States</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="Other">Other International</option>
              </select>
            </div>
          </div>

          {/* Row 3: Program & Campus Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="programInterest" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] mb-2">
                Program / Discipline of Interest
              </label>
              <select
                id="programInterest"
                name="programInterest"
                value={formData.programInterest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] text-sm text-[#111111] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06445]/20 focus:border-[#F06445]"
              >
                {disciplines.map((d) => (
                  <option key={d.id} value={d.slug}>
                    {d.name} ({d.level.split('/')[0].trim()})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="preferredCampus" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] mb-2">
                Preferred Campus / Study Center
              </label>
              <select
                id="preferredCampus"
                name="preferredCampus"
                value={formData.preferredCampus}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] text-sm text-[#111111] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06445]/20 focus:border-[#F06445]"
              >
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.slug}>
                    {loc.name} — {loc.country} {loc.isPrimary ? '(Flagship Campus)' : '(Planned Hub)'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Conditional field: Campus visit date */}
          {formType === 'campus-visit' && (
            <div>
              <label htmlFor="visitDate" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] mb-2">
                Requested Campus Visit Date <span className="text-[#F06445]">*</span>
              </label>
              <input
                type="date"
                id="visitDate"
                name="visitDate"
                value={formData.visitDate}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border bg-[#FAFAFA] text-sm text-[#111111] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06445]/20 focus:border-[#F06445] ${
                  errors.visitDate ? 'border-red-400 bg-red-50/20' : 'border-[#E8E8E8]'
                }`}
              />
              {errors.visitDate && (
                <p className="mt-1 text-xs text-red-600">{errors.visitDate}</p>
              )}
            </div>
          )}

          {/* Message / Questions */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] mb-2">
              Specific Creative Goals or Questions (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your design background, interests, or specific questions about the curriculum..."
              className="w-full px-4 py-3 rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] text-sm text-[#111111] placeholder-[#999999] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F06445]/20 focus:border-[#F06445] resize-none"
            />
          </div>

          {/* Dual Submission Actions: Direct Form & WhatsApp */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full"
              icon={!isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Verifying...
                </span>
              ) : formType === 'campus-visit' ? (
                'Schedule Studio Tour'
              ) : (
                'Submit Application'
              )}
            </Button>

            <Button
              type="button"
              onClick={handleWhatsAppSubmit}
              variant="whatsapp"
              size="lg"
              className="w-full"
              icon={false}
              customIcon={<MessageCircle className="w-4 h-4 ml-1 fill-current" />}
            >
              Continue on WhatsApp
            </Button>
          </div>

          <p className="text-[11px] text-center text-[#77736F] leading-tight">
            WhatsApp button generates your formatted enquiry and opens WhatsApp on your device. You can review and edit before sending.
          </p>
        </form>
      )}
    </div>
  );
}
