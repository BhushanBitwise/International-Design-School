import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import { facultyMembers } from '../data/faculty';

export default function About() {
  return (
    <div className="bg-white pb-24">
      {/* Page Header with Subtle Dotted Pattern */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-16 md:pb-20 border-b border-[#E8E8E8] bg-white bg-dots">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="coral" size="sm" dot className="mb-4">
            About International Design School
          </Badge>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.08] max-w-4xl">
            Where Imagination Meets Intention.{' '}
            <span className="block text-[#999999] font-normal">
              A Creative Manifesto.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#666666] max-w-3xl leading-relaxed">
            International Design School (IDS) was founded on a singular conviction: that the world does not need more generic technicians, but courageous visual thinkers, ethical spatial designers, and inventive craft masters.
          </p>
        </div>
      </section>

      {/* Image & Vision Grid */}
      <section className="py-16 md:py-24 border-b border-[#E8E8E8]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#E8E8E8] shadow-sm h-[360px] sm:h-[460px]">
              <img
                src="/images/ids-hero-studio.webp"
                alt="IDS Design Studio Philosophy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 text-white text-xs font-mono">
                Flagship Studio Environment • Pune, India
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 text-[#666666] text-base leading-relaxed">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F06445] font-semibold">
                Our Foundational Purpose
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight">
                Beyond Conventional Coaching. Toward Creative Selfhood.
              </h2>
              <p>
                Too much of design education has deteriorated into standardized syllabus memorization, software shortcuts, and diploma mills. At IDS, we dismantle this conveyor belt.
              </p>
              <p>
                Our learning model is rooted in the traditional atelier system: master practitioners mentoring apprentices through tactile iteration, critical analysis, and real material dialogue. From hand-loomed textiles and physical joinery to procedural web coding and spatial UI, our students learn by rigorous making.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#E8E8E8]">
                <div>
                  <h4 className="font-heading text-base font-bold text-[#111111]">Our Mission</h4>
                  <p className="mt-1 text-xs text-[#666666] leading-relaxed">
                    To cultivate culturally rooted, globally agile creative leaders capable of building sustainable, human-centric design futures.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-[#111111]">Our Vision</h4>
                  <p className="mt-1 text-xs text-[#666666] leading-relaxed">
                    A linked network of creative academies connecting South Asian craft heritage with international design centers across Singapore, Europe, and the US.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Methodology (80/20 Studio Model) */}
      <section className="py-16 md:py-24 bg-[#FAFAFA] border-b border-[#E8E8E8]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pedagogical Model"
            title="The 80/20 Studio"
            italicTitle="Methodology"
            subtitle="How we structure creative immersion: eighty percent active physical making and critique, twenty percent contextual inquiry."
            align="split"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
            <div className="chrono-card p-8 space-y-4 bg-white">
              <span className="font-mono text-3xl font-bold text-[#F06445]">01</span>
              <h3 className="font-heading text-xl font-bold text-[#111111]">
                Immersive Studio Making (80%)
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Hands-on tactile creation: pattern drafting, clay styling, architectural scale models, typography typesetting, and interactive code prototypes under active faculty mentorship.
              </p>
            </div>

            <div className="chrono-card p-8 space-y-4 bg-white">
              <span className="font-mono text-3xl font-bold text-[#2684F7]">02</span>
              <h3 className="font-heading text-xl font-bold text-[#111111]">
                Contextual Theory (20%)
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Critical design histories, visual semiotics, consumer psychology, ecological lifecycles, and copyright ethics that ground aesthetic choices in intellectual depth.
              </p>
            </div>

            <div className="chrono-card p-8 space-y-4 bg-white">
              <span className="font-mono text-3xl font-bold text-emerald-600">03</span>
              <h3 className="font-heading text-xl font-bold text-[#111111]">
                Peer Critique Culture
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Weekly pin-up sessions and verbal defenses where students learn to articulate design intent, receive constructive criticism, and refine work with humility and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Faculty Framework */}
      <section className="py-16 md:py-24 border-b border-[#E8E8E8] bg-white bg-dots">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Academic Mentorship"
            title="Studio Directors & Faculty"
            italicTitle="Leadership"
            subtitle="Seasoned practitioners who bring live commercial agency and atelier insights directly to the studio workbench."
            align="split"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {facultyMembers.map((f) => (
              <div
                key={f.id}
                className="chrono-card overflow-hidden bg-white group"
              >
                <div className="h-60 overflow-hidden bg-[#FAFAFA] border-b border-[#E8E8E8]">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-heading text-base font-bold text-[#111111] group-hover:text-[#F06445] transition-colors">
                    {f.name}
                  </h3>
                  <p className="text-xs text-[#F06445] font-medium mt-0.5">
                    {f.role}
                  </p>
                  <p className="mt-2.5 text-xs text-[#666666] leading-relaxed line-clamp-3">
                    {f.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip - Clean White Card with Subtle Border */}
      <section className="pt-16 md:pt-24">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="chrono-card text-center p-10 sm:p-14 bg-white border border-[#E8E8E8]">
            <span className="text-xs uppercase font-mono tracking-widest text-[#F06445] font-semibold">
              Join the Next Cohort
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mt-2 max-w-2xl mx-auto leading-tight">
              Discover What You Can Create at IDS.
            </h2>
            <p className="mt-3 text-sm text-[#666666] max-w-lg mx-auto">
              Schedule a physical campus tour in Pune or meet with an admissions advisor online to review your work.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button to="/admissions" variant="primary" size="lg">
                Apply for Admission
              </Button>
              <Button to="/contact" variant="glass" size="lg">
                Schedule Campus Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
