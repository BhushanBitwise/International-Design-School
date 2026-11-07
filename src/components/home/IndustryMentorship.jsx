import React from 'react';
import { facultyMembers } from '../../data/faculty';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { Briefcase, Compass, Award } from 'lucide-react';

export default function IndustryMentorship() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-[#E8E8E8]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Industry Exposure Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-16 md:pb-20 border-b border-[#E8E8E8]">
          <div className="lg:col-span-5 space-y-4">
            <Badge variant="coral" size="sm" dot>
              Creative Mentorship & Realism
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-[1.12]">
              Guided by Practicing{' '}
              <span className="block text-[#999999] font-normal">
                Visionaries.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              At IDS, faculty members are not career academics reciting slide decks. They are creative directors, master patternmakers, spatial architects, and design leads with active commercial practices.
            </p>
            <div className="pt-2">
              <Button to="/about" variant="glass" size="md">
                Meet Academic Leadership
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="chrono-card p-6 space-y-3 bg-white">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-[#F06445] flex items-center justify-center font-bold">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-[#111111]">
                Live Client Briefs
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Senior studio modules partner with boutique fashion ateliers, sustainable architecture firms, and tech studios.
              </p>
            </div>

            <div className="chrono-card p-6 space-y-3 bg-white">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-[#2684F7] flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-[#111111]">
                Portfolio Juries
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Every term concludes with rigorous external critiques where students defend concepts before invited design professionals.
              </p>
            </div>

            <div className="chrono-card p-6 space-y-3 bg-white">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-[#111111]">
                Career Direction
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                One-on-one portfolio polishing, bespoke lookbook curation, and mock technical design interview simulations.
              </p>
            </div>
          </div>
        </div>

        {/* Faculty Mentors Grid */}
        <div className="pt-16 md:pt-20">
          <SectionHeading
            eyebrow="Academic Mentors"
            title="Studio Leads & Discipline"
            italicTitle="Directors"
            subtitle="The educators shaping everyday studio critique, technical fabrication standards, and creative excellence at IDS."
            align="split"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyMembers.map((member) => (
              <div
                key={member.id}
                className="chrono-card overflow-hidden group flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="h-64 overflow-hidden bg-[#FAFAFA] relative border-b border-[#E8E8E8]">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-600 ease-out"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-white/95 text-[#111111] shadow-2xs border border-[#E8E8E8]">
                        {member.discipline.split('&')[0].trim()}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-heading text-base font-bold text-[#111111] group-hover:text-[#F06445] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#F06445] font-medium mt-0.5">
                      {member.role}
                    </p>
                    <p className="mt-2.5 text-xs text-[#666666] leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-[#E8E8E8]">
                  <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FAFAFA] text-[#666666] border border-[#E8E8E8]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
