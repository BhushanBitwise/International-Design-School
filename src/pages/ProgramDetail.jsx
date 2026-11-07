import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { disciplines } from '../data/programs';
import { CONTACT_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/contact';
import EnquiryForm from '../components/forms/EnquiryForm';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import {
  Clock,
  Award,
  CheckCircle2,
  MapPin,
  Wrench,
  Briefcase,
  MessageCircle
} from 'lucide-react';

export default function ProgramDetail() {
  const { slug } = useParams();
  const program = disciplines.find((d) => d.slug === slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <div className="bg-white pb-24">
      {/* Program Header with Dotted Background */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-16 md:pb-20 border-b border-[#E8E8E8] bg-white bg-dots">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#999999] mb-6">
            <Link to="/programs" className="hover:text-[#F06445]">Programs</Link>
            <span>/</span>
            <span>{program.category}</span>
            <span>/</span>
            <span className="text-[#111111] font-semibold">{program.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <Badge variant="coral" size="sm" dot className="mb-4">
                {program.level}
              </Badge>
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.06]">
                {program.name}
              </h1>
              <p className="mt-4 text-xl sm:text-2xl text-[#F06445] font-medium">
                {program.headline}
              </p>
              <p className="mt-5 text-base sm:text-lg text-[#666666] leading-relaxed max-w-3xl">
                {program.overview}
              </p>
            </div>

            {/* Quick Facts Card */}
            <div className="lg:col-span-4 chrono-card p-6 bg-white space-y-4 text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8]">
                <span className="text-[#666666] flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#F06445]" /> Duration
                </span>
                <span className="font-bold text-[#111111]">{program.duration}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8]">
                <span className="text-[#666666] flex items-center gap-1.5 font-medium">
                  <Award className="w-4 h-4 text-[#F06445]" /> Credential
                </span>
                <span className="font-bold text-[#111111]">{program.level.split('/')[0].trim()}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8]">
                <span className="text-[#666666] flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-[#F06445]" /> Campuses
                </span>
                <span className="font-bold text-[#111111] text-right">{program.campuses.join(', ')}</span>
              </div>

              <div className="pt-2 space-y-2.5">
                <Button to="#enquire-now" variant="primary" size="md" className="w-full">
                  Apply for this Discipline
                </Button>

                <Button
                  href={getWhatsAppUrl(
                    program.slug === 'fashion-design'
                      ? WHATSAPP_MESSAGES.fashion
                      : program.slug === 'interior-design'
                      ? WHATSAPP_MESSAGES.interior
                      : program.slug === 'ui-ux-design'
                      ? WHATSAPP_MESSAGES.uiux
                      : WHATSAPP_MESSAGES.program(program.name)
                  )}
                  variant="whatsapp"
                  size="md"
                  className="w-full"
                  icon={false}
                  customIcon={<MessageCircle className="w-4 h-4 ml-1 fill-current" />}
                >
                  WhatsApp Syllabus Enquiry
                </Button>
              </div>

              <div className="pt-2 text-center text-[11px] text-[#999999]">
                <span>Call Admissions: </span>
                <a href={`tel:${CONTACT_INFO.phones[0].raw}`} className="font-bold text-[#111111] hover:text-[#F06445]">
                  {CONTACT_INFO.phones[0].display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Visual Image */}
      <section className="py-12 border-b border-[#E8E8E8]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-[#E8E8E8] shadow-sm h-[340px] sm:h-[460px] md:h-[520px]">
            <img
              src={program.heroImage}
              alt={program.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Curriculum & Semester Roadmap */}
      <section className="py-16 md:py-24 border-b border-[#E8E8E8]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F06445] font-semibold">
              Curriculum Roadmap
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight mt-2">
              Semester-by-Semester Studio Modules
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[#666666]">
              Each term combines intensive hands-on workshop modules, physical artifact production, and formal jury critiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {program.curriculum.map((term, tIdx) => (
              <div
                key={tIdx}
                className="chrono-card p-7 bg-white"
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E8E8E8]">
                  <span className="font-mono text-xs font-bold text-[#F06445] uppercase tracking-wider">
                    {term.semester}
                  </span>
                  <span className="text-[11px] text-[#999999] font-mono">
                    Term 0{tIdx + 1}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-[#111111] mb-4">
                  {term.title}
                </h3>

                <ul className="space-y-2.5">
                  {term.modules.map((mod, mIdx) => (
                    <li key={mIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#666666]">
                      <CheckCircle2 className="w-4 h-4 text-[#2684F7] shrink-0 mt-0.5" />
                      <span>{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Facilities & Equipment */}
      <section className="py-16 md:py-24 bg-[#FAFAFA] border-b border-[#E8E8E8]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <Badge variant="coral" size="sm">
                Equipment & Atelier Access
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight">
                Industrial Studio Hardware
              </h2>
              <p className="text-sm text-[#666666] leading-relaxed">
                Students work with commercial-grade equipment and licensed software suites matching the standard of leading design studios worldwide.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {program.studioEquipment.map((eq, eqIdx) => (
                <div
                  key={eqIdx}
                  className="bg-white p-5 rounded-xl border border-[#E8E8E8] shadow-2xs flex items-start gap-3 text-xs sm:text-sm text-[#111111]"
                >
                  <Wrench className="w-4 h-4 text-[#F06445] shrink-0 mt-0.5" />
                  <span>{eq}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-16 md:py-24 border-b border-[#E8E8E8] bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F06445] font-semibold">
              Future Prospects
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight mt-2">
              Career Trajectories & Creative Roles
            </h2>
            <p className="mt-2.5 text-sm text-[#666666]">
              Graduates from this discipline step into influential roles across international creative agencies, architectural studios, and fashion houses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {program.careerOpportunities.map((career, cIdx) => (
              <div
                key={cIdx}
                className="chrono-card p-6 flex items-center gap-4 bg-white"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F06445] flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-[#111111]">
                    {career}
                  </h4>
                  <span className="text-[11px] text-[#999999] font-mono">
                    Professional Role
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program FAQs */}
      <section className="py-16 md:py-24 bg-[#FAFAFA] border-b border-[#E8E8E8]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-[#111111] tracking-tight text-center mb-8">
            Frequently Asked Questions about {program.name}
          </h2>

          <div className="space-y-4">
            {program.faqs.map((faq, fIdx) => (
              <div key={fIdx} className="chrono-card p-6 bg-white">
                <h4 className="font-heading text-base sm:text-lg font-bold text-[#111111]">
                  {faq.q}
                </h4>
                <p className="mt-2 text-sm text-[#666666] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquire-now" className="pt-16 md:pt-24">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <EnquiryForm
              formType="program"
              initialProgram={program.slug}
              title={`Enquire About ${program.name}`}
              subtitle="Connect directly with the discipline coordinator for syllabus counselling and portfolio requirements."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
