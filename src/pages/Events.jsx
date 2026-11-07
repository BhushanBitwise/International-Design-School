import React, { useState } from 'react';
import { events, eventCategories } from '../data/events';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import { Calendar, MapPin, Clock, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  const [expandedEventId, setExpandedEventId] = useState(events[0]?.id || null);

  const filteredEvents =
    selectedCategory === 'All Events'
      ? events
      : events.filter((e) => e.category === selectedCategory);

  return (
    <div className="bg-white pb-24">
      {/* Header with Dotted Background */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-16 md:pb-20 border-b border-[#E8E8E8] bg-white bg-dots">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="coral" size="sm" dot className="mb-4">
            Colloquiums & Showcases
          </Badge>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.08] max-w-4xl">
            Exhibitions, Workshops &{' '}
            <span className="block text-[#999999] font-normal">
              Design Dialogues.
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#666666] max-w-3xl leading-relaxed">
            Our academic calendar features recurring seasonal design colloquiums, graduation runway presentations, material innovation labs, and student design sprints.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {eventCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'bg-white text-[#666666] hover:text-[#111111] hover:bg-[#FAFAFA] border border-[#E8E8E8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Listing */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {filteredEvents.map((evt) => {
            const isExpanded = expandedEventId === evt.id;

            return (
              <div
                key={evt.id}
                className="chrono-card overflow-hidden bg-white"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 md:p-10">
                  <div className="lg:col-span-5 relative rounded-xl overflow-hidden h-64 sm:h-80 bg-[#FAFAFA] border border-[#E8E8E8]">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
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

                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#666666]">
                      <span className="flex items-center gap-1.5 text-[#F06445] font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        {evt.dateLabel}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#999999]" />
                        {evt.duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#999999]" />
                        {evt.location}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
                      {evt.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                      {evt.fullDescription}
                    </p>

                    <div>
                      <h4 className="font-heading text-xs uppercase tracking-wider font-bold text-[#111111] mb-2">
                        Session Highlights:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#666666]">
                        {evt.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2684F7] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setExpandedEventId(isExpanded ? null : evt.id)}
                        className="text-xs font-medium text-[#111111] hover:text-[#F06445] inline-flex items-center gap-1.5"
                      >
                        <span>{isExpanded ? 'Hide Program Schedule' : 'View Program Schedule'}</span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>

                      <Button to="/admissions" variant="glass" size="sm">
                        Attend as Prospective Student
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Collapsible Timeline Schedule */}
                {isExpanded && (
                  <div className="bg-[#FAFAFA] border-t border-[#E8E8E8] p-6 sm:p-10 animate-fadeIn">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#111111] mb-4">
                      Curated Event Program & Schedule
                    </h4>
                    <div className="space-y-2.5 max-w-2xl">
                      {evt.scheduleTimeline.map((item, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E8E8E8] text-xs shadow-2xs"
                        >
                          <span className="font-mono font-medium text-[#F06445]">
                            {item.time}
                          </span>
                          <span className="font-medium text-[#111111]">
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
