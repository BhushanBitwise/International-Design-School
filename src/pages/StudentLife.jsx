import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

export default function StudentLife() {
  const experiences = [
    {
      image: '/Events/Collaborative Design Studio Workshop.webp',
      title: 'Collaborative Design Studio Workshops',
      category: 'Studio Immersion',
      desc: 'Students actively collaborating in teams, sketching ideas, building mockups, and exploring interdisciplinary solutions.'
    },
    {
      image: '/Events/Design School Critique Workshop.webp',
      title: 'Studio Critiques & Project Defenses',
      category: 'Collaborative Making',
      desc: 'Interactive feedback sessions where students pin up work and engage in constructive dialogue with faculty and industry mentors.'
    },
    {
      image: '/Events/Collaborative Design Studio Workshop (1).webp',
      title: 'Hands-On Prototyping & Making Charrettes',
      category: 'Tactile Craft',
      desc: 'Dedicated workbench time with materials, physical scale models, and prototypes that bring two-dimensional concepts to life.'
    },
    {
      image: '/Events/Design Thinking Lecture at IDS.webp',
      title: 'Design Thinking & Interactive Lectures',
      category: 'Methodology & Research',
      desc: 'Engaging lectures and workshops exploring human-centered problem solving, cognitive ergonomics, and spatial systems.'
    },
    {
      image: '/Events/Design School Exhibition Critique.webp',
      title: 'Graduation Vernissage & Public Showcase',
      category: 'Public Showcase',
      desc: 'Curated gallery presentations of capstone prototypes, fashion collections, and models reviewed by visiting industry luminaries.'
    },
    {
      image: '/campus/IDS Design School Courtyard-1.webp',
      title: 'Courtyard Community & Spontaneous Discussions',
      category: 'Campus Culture',
      desc: 'Naturally lit open-air courtyards where professors, visiting designers, and student cohorts exchange spontaneous ideas over coffee.'
    }
  ];

  return (
    <div className="bg-white pb-24">
      {/* Header with Dotted Background */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-16 md:pb-20 border-b border-[#E8E8E8] bg-white bg-dots">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="coral" size="sm" dot className="mb-4">
            Studio Culture & Community
          </Badge>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.08] max-w-4xl">
            Life Inside The Atelier.{' '}
            <span className="block text-[#999999] font-normal">
              Obsession, Craft & Camaraderie.
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#666666] max-w-3xl leading-relaxed">
            At IDS, student life is defined by deep creative flow, vibrant critique culture, spontaneous collaborations across disciplines, and an atmosphere where creative risks are celebrated.
          </p>
        </div>
      </section>

      {/* Photography Cards Grid */}
      <section className="py-16 md:py-24 border-b border-[#E8E8E8]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="chrono-card overflow-hidden group flex flex-col justify-between bg-white"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#FAFAFA] border-b border-[#E8E8E8]">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-600 ease-out"
                  />
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#2638CC] block mb-1.5">
                    {exp.category}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#2638CC] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Communities & Clubs */}
      <section className="py-16 md:py-24 bg-[#FAFAFA] border-b border-[#E8E8E8]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Student Collectives"
            title="Self-Initiated Design"
            italicTitle="Collectives"
            subtitle="Student-led societies that organize independent zine publications, runway shows, hackathons, and design activism."
            align="split"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="chrono-card p-7 space-y-3 bg-white">
              <span className="font-mono text-xs font-bold text-[#F06445] uppercase">Society 01</span>
              <h4 className="font-heading text-lg font-bold text-[#111111]">The Risograph Press</h4>
              <p className="text-xs text-[#666666] leading-relaxed">
                An independent student publishing guild producing limited-edition riso posters, illustrated poetry books, and typographic zines.
              </p>
            </div>

            <div className="chrono-card p-7 space-y-3 bg-white">
              <span className="font-mono text-xs font-bold text-[#2684F7] uppercase">Society 02</span>
              <h4 className="font-heading text-lg font-bold text-[#111111]">Zero-Waste Couture Club</h4>
              <p className="text-xs text-[#666666] leading-relaxed">
                Fashion designers rescuing surplus mill deadstock to produce upcycled capsule collections and educational sustainability workshops.
              </p>
            </div>

            <div className="chrono-card p-7 space-y-3 bg-white">
              <span className="font-mono text-xs font-bold text-emerald-600 uppercase">Society 03</span>
              <h4 className="font-heading text-lg font-bold text-[#111111]">Spatial Explorers Lab</h4>
              <p className="text-xs text-[#666666] leading-relaxed">
                Architectural and interior design students conducting weekly urban sketch walks through Pune’s historic wadas and modern structures.
              </p>
            </div>

            <div className="chrono-card p-7 space-y-3 bg-white">
              <span className="font-mono text-xs font-bold text-purple-600 uppercase">Society 04</span>
              <h4 className="font-heading text-lg font-bold text-[#111111]">Creative Code Collective</h4>
              <p className="text-xs text-[#666666] leading-relaxed">
                UI/UX and digital designers exploring shader math, generative Three.js canvas art, and physical computing with sensors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="pt-16 md:pt-24 text-center">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="chrono-card p-10 sm:p-14 bg-white max-w-3xl mx-auto space-y-4">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#111111]">
              Experience Our Studio Atmosphere in Person
            </h3>
            <p className="text-sm text-[#666666] max-w-lg mx-auto">
              We welcome prospective students and parents to sit in on a studio critique, tour our fabrication workshops, and meet with students.
            </p>
            <div className="pt-2">
              <Button to="/contact" variant="primary" size="lg">
                Schedule Studio Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
