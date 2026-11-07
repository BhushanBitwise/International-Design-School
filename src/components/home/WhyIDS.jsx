import React from 'react';
import SectionHeading from '../common/SectionHeading';
import {
  Sparkles,
  Layers,
  Wrench,
  Users,
  Award,
  Globe2,
  ArrowUpRight
} from 'lucide-react';

export default function WhyIDS() {
  const reasons = [
    {
      icon: Wrench,
      title: 'Active Making Over Passive Lectures',
      desc: 'Over 80% of student hours are spent in physical ateliers, pattern cutting bays, CNC fabrication labs, and CAD suites. We build tangible artifacts, not exam notes.',
      iconColor: 'text-[#F06445]'
    },
    {
      icon: Users,
      title: 'Intimate Studio Cohorts',
      desc: 'We strictly cap studio sections at 18–22 students to guarantee extensive one-on-one portfolio critique with practicing creative directors and faculty leads.',
      iconColor: 'text-[#2684F7]'
    },
    {
      icon: Globe2,
      title: 'Intentional Global Perspective',
      desc: 'Conceived with hubs planned across Singapore, the USA, the UK, and Germany, alongside our primary Indian campus in Pune, exposing students to global creative markets.',
      iconColor: 'text-emerald-600'
    },
    {
      icon: Layers,
      title: 'Cross-Disciplinary Studio Dialogue',
      desc: 'Fashion designers study spatial illumination; interior architects collaborate with typographers. Real-world creative challenges demand multi-disciplinary fluency.',
      iconColor: 'text-purple-600'
    },
    {
      icon: Award,
      title: 'Industry-Grade Capstone Showcases',
      desc: 'Graduating students present fully realized runway collections, physical architectural section models, or live web apps at our public graduation exhibitions.',
      iconColor: 'text-amber-600'
    },
    {
      icon: Sparkles,
      title: 'Honest Academic Standards',
      desc: 'We never make inflated placement guarantees or invent false university rankings. We focus relentlessly on building market-commanding creative portfolios.',
      iconColor: 'text-[#F06445]'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E8E8E8] bg-dots">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Institutional Difference"
          title="Why Choose International"
          italicTitle="Design School"
          subtitle="Rejecting generic education templates. How our deliberate studio structure empowers designers to forge authentic global careers."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className="chrono-card p-7 sm:p-8 flex flex-col justify-between group bg-white"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform">
                    <Icon className={`w-5 h-5 ${r.iconColor}`} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#111111] tracking-tight group-hover:text-[#F06445] transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E8E8] flex items-center justify-between text-[11px] font-mono text-[#999999] uppercase tracking-wider">
                  <span>Standard 0{idx + 1}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#CCCCCC] group-hover:text-[#F06445] transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
