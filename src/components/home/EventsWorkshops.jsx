import React from 'react';
import { Link } from 'react-router-dom';
import { events } from '../../data/events';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';

export default function EventsWorkshops() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E8E8E8] bg-dots">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Events & Dialogues"
          title="Colloquiums, Exhibitions &"
          italicTitle="Masterclasses"
          subtitle="Explore recurring design summits, seasonal runway showcases, and hands-on material fabrication workshops."
          align="split"
          action={
            <Button to="/events" variant="dark" size="md">
              View All Academic Events
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.slice(0, 4).map((evt) => (
            <div
              key={evt.id}
              className="chrono-card overflow-hidden flex flex-col justify-between group bg-white"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden bg-[#FAFAFA] border-b border-[#E8E8E8]">
                <img
                  src={evt.image}
                  alt={evt.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-600 ease-out"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-[#F06445] text-white shadow-xs">
                    {evt.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-white/95 text-[#111111] shadow-2xs border border-[#E8E8E8]">
                    {evt.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#666666] mb-2.5">
                    <span className="flex items-center gap-1.5 text-[#F06445] font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {evt.dateLabel}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#999999]" />
                      {evt.location.split('—')[0].trim()}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#111111] tracking-tight group-hover:text-[#F06445] transition-colors leading-snug">
                    {evt.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-3">
                    {evt.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E8E8] flex items-center justify-between">
                  <Link
                    to="/events"
                    className="text-xs sm:text-sm font-medium text-[#111111] group-hover:text-[#F06445] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Event Schedule & Modules</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#999999] group-hover:text-[#F06445] transition-transform" />
                  </Link>

                  <span className="text-[11px] text-[#999999] font-mono">
                    Open to Students
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
