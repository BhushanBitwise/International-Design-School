import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { locations } from '../data/locations';
import { CONTACT_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/contact';
import EnquiryForm from '../components/forms/EnquiryForm';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Building,
  MessageCircle
} from 'lucide-react';

export default function LocationDetail() {
  const { slug } = useParams();
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  const campusWhatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.campus(location.name));

  return (
    <div className="bg-white pb-24">
      {/* Header with Dotted Background */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-16 md:pb-20 border-b border-[#E8E8E8] bg-white bg-dots">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#999999] mb-6">
            <Link to="/locations" className="hover:text-[#F06445]">Locations</Link>
            <span>/</span>
            <span className="text-[#111111] font-semibold">{location.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl p-1 bg-white rounded-xl border border-[#E8E8E8]" role="img" aria-label={location.country}>
                  {location.flag}
                </span>
                <Badge
                  variant="coral"
                  size="sm"
                  dot
                  dotColor={location.isPrimary ? 'bg-emerald-500' : 'bg-amber-500'}
                >
                  {location.status}
                </Badge>
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.06]">
                {location.name}
              </h1>
              <p className="mt-4 text-xl sm:text-2xl text-[#F06445] font-medium">
                {location.tagline}
              </p>
              <p className="mt-5 text-base sm:text-lg text-[#666666] leading-relaxed max-w-3xl">
                {location.description}
              </p>
            </div>

            {/* Quick Contact Card */}
            <div className="lg:col-span-4 chrono-card p-6 bg-white space-y-4 text-xs">
              <div className="flex items-start gap-2.5 pb-3 border-b border-[#E8E8E8]">
                <MapPin className="w-4 h-4 text-[#F06445] shrink-0 mt-0.5" />
                <span className="text-[#666666]">{location.address}</span>
              </div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-[#E8E8E8]">
                <Phone className="w-4 h-4 text-[#F06445] shrink-0" />
                <a
                  href={`tel:${location.isPrimary ? CONTACT_INFO.phones[0].raw : '+918087601850'}`}
                  className="font-bold text-[#111111] hover:text-[#F06445] font-mono"
                >
                  {location.isPrimary ? CONTACT_INFO.phones[0].display : location.contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-[#E8E8E8]">
                <Mail className="w-4 h-4 text-[#F06445] shrink-0" />
                <a
                  href={`mailto:${location.contactInfo.email}`}
                  className="font-bold text-[#111111] hover:text-[#F06445]"
                >
                  {location.contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#999999] shrink-0" />
                <span className="text-[#666666]">{location.contactInfo.hours}</span>
              </div>

              <div className="pt-2">
                <Button
                  href={campusWhatsappUrl}
                  variant="whatsapp"
                  size="sm"
                  className="w-full text-xs"
                  icon={false}
                  customIcon={<MessageCircle className="w-4 h-4 ml-1 fill-current" />}
                >
                  WhatsApp Campus Enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 border-b border-[#E8E8E8]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-[#E8E8E8] shadow-sm h-[340px] sm:h-[460px] md:h-[520px]">
            <img
              src={location.heroImage}
              alt={location.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Studio Atmosphere & Design Culture */}
      <section className="py-16 md:py-24 border-b border-[#E8E8E8] bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <Badge variant="coral" size="sm">
                Creative Learning Atmosphere
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight">
                Studio Context & Design Culture
              </h2>
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                {location.campusAtmosphere}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-heading text-lg font-bold text-[#111111] mb-3">
                Disciplines & Study Programs Offered:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {location.programsOffered.map((prog, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-4 rounded-xl bg-white border border-[#E8E8E8] shadow-2xs flex items-center gap-3 text-xs sm:text-sm font-medium text-[#111111]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2684F7] shrink-0" />
                    <span>{prog}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-16 md:py-24 bg-[#FAFAFA] border-b border-[#E8E8E8]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F06445] font-semibold">
              Facilities & Laboratories
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight mt-2">
              Studio Infrastructure at {location.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {location.facilities.map((fac, fIdx) => (
              <div
                key={fIdx}
                className="chrono-card p-7 bg-white space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] text-[#F06445] flex items-center justify-center font-bold">
                  <Building className="w-5 h-5" />
                </div>
                <h4 className="font-heading text-lg font-bold text-[#111111]">
                  {fac.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="pt-16 md:pt-24">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <EnquiryForm
              formType={location.isPrimary ? 'campus-visit' : 'general'}
              initialCampus={location.slug}
              title={`Enquire About ${location.name}`}
              subtitle={
                location.isPrimary
                  ? 'Request a guided walkthrough of our Pune studios, ateliers, and material laboratories.'
                  : 'Register interest for upcoming international study residencies and global exchange programs.'
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}
