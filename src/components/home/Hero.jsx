import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import IDSBrandLogo from '../common/IDSBrandLogo';
import { CONTACT_INFO } from '../../data/contact';
import {
  Check,
  Clock,
  MapPin,
  Sparkles,
  Scissors,
  Home,
  Palette,
  Smartphone,
  Layers,
  Award,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const appIconRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        appIconRef.current,
        { opacity: 0, scale: 0.8, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, delay: 0.1 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.5'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          '.chrono-floating-item',
          { opacity: 0, scale: 0.9, y: 25 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, stagger: 0.12 },
          '-=0.4'
        );

      // Subtle natural floating animation (like ChronoTask reference)
      gsap.to('.float-slow', {
        y: '-=8',
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to('.float-reverse', {
        y: '+=8',
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const disciplinesStrip = [
    { name: 'Fashion Design', icon: Scissors },
    { name: 'Interior Design', icon: Home },
    { name: 'Graphic Design', icon: Palette },
    { name: 'UI/UX Design', icon: Smartphone },
    { name: 'Product Design', icon: Layers },
    { name: 'Jewellery Design', icon: Award },
    { name: 'Animation', icon: Sparkles }
  ];

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-white bg-dots pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 border-b border-[#E8E8E8]"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative min-h-[680px] lg:min-h-[780px] flex flex-col justify-between">
        {/* ========================================================= */}
        {/* CENTERED HERO CONTENT (Matching ChronoTask Reference)    */}
        {/* ========================================================= */}
        <div className="max-w-3xl mx-auto text-center pt-4 sm:pt-8 md:pt-12 relative z-20">
          {/* Top Embossed 3D Squircle Logo Emblem */}
          <div
            ref={appIconRef}
            className="w-16 h-16 bg-white rounded-2xl shadow-[0_15px_30px_-5px_rgba(38,56,204,0.14),0_0_0_1px_rgba(38,56,204,0.08)] flex items-center justify-center mx-auto mb-6 sm:mb-8 hover:scale-105 transition-transform"
          >
            <IDSBrandLogo variant="monogram" size="md" linkToHome={false} />
          </div>

          {/* Centered Main Headline */}
          <h1
            ref={headlineRef}
            className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight text-[#111111] leading-[1.08] text-balance"
          >
            Imagine, create, and shape{' '}
            <span className="block text-[#999999] font-normal mt-1 sm:mt-2">
              the future of design.
            </span>
          </h1>

          {/* Supporting Text */}
          <p
            ref={subtitleRef}
            className="text-[#666666] text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-5 sm:mt-6 leading-relaxed font-normal text-balance"
          >
            Explore a world of creative learning, where imagination becomes innovation and future designers discover their potential.
          </p>

          {/* Centered Action CTAs */}
          <div
            ref={ctaRef}
            className="pt-6 sm:pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Button to="/programs" variant="primary" size="lg">
              Explore Programs
            </Button>
            <Button to="/about" variant="glass" size="lg">
              Discover IDS
            </Button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* FLOATING CREATIVE CARDS (ChronoTask Signature Layout)    */}
        {/* ========================================================= */}

        {/* 1. UPPER-LEFT: Yellow Sticky Note Inspiration Card */}
        <div className="chrono-floating-item float-slow hidden lg:block absolute top-6 left-4 xl:left-8 z-10">
          <div className="relative">
            {/* Subtle under-paper card for physical depth */}
            <div className="absolute inset-0 bg-[#FFFBEB] rounded-sm transform rotate-3 scale-95 border border-[#FEF3C7] opacity-60" />

            {/* Main Yellow Creative Sticky Note */}
            <div className="relative w-64 bg-[#FEF08A] rounded-sm p-5 shadow-[0_15px_30px_-8px_rgba(0,0,0,0.12)] border border-[#FDE047] transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              {/* Red Pin Detail at Top Center */}
              <div className="w-3.5 h-3.5 rounded-full bg-[#F06445] shadow-xs mx-auto -mt-6 border-2 border-white" />

              <p className="font-sans text-[13px] leading-relaxed text-[#713F12] font-medium pt-2 italic">
                “Every great design begins with an idea. Explore. Experiment. Create.”
              </p>

              <div className="mt-4 pt-2 border-t border-[#FACC15]/60 flex items-center justify-between text-[10px] font-mono text-[#854D0E]">
                <span>Studio Note</span>
                <span>IDS Pune</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. LEFT-MIDDLE: 3D Squircle Checkmark Portfolio Approved Card */}
        <div className="chrono-floating-item float-reverse hidden lg:block absolute top-64 left-10 xl:left-16 z-20">
          <div className="bg-white rounded-2xl p-3 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.04)] border border-[#E8E8E8] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2684F7] text-white flex items-center justify-center shadow-xs shrink-0">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="pr-2">
              <span className="text-xs font-bold text-[#111111] block leading-tight">
                Portfolio Approved
              </span>
              <span className="text-[10px] text-[#999999] font-mono">
                Studio Cohort 2026
              </span>
            </div>
          </div>
        </div>

        {/* 3. UPPER-RIGHT: Tabbed Folder "Global Creative Campuses" Card */}
        <div className="chrono-floating-item float-slow hidden lg:block absolute top-4 right-4 xl:right-10 z-10">
          <div className="w-64 bg-white rounded-2xl p-4 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] border border-[#E8E8E8] transform rotate-2 hover:rotate-0 transition-transform duration-300">
            {/* Top Tab Header */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F0F0F0]">
              <span className="text-xs font-bold text-[#111111]">
                Global Campuses
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                Active & Planned
              </span>
            </div>

            <div className="space-y-1.5 text-xs text-[#555555]">
              <div className="flex items-center justify-between py-0.5">
                <span className="font-medium text-[#111111] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F06445]" /> Pune (India)
                </span>
                <span className="text-[10px] text-[#F06445] font-mono font-bold">Flagship</span>
              </div>
              <div className="flex items-center justify-between py-0.5">
                <span className="flex items-center gap-1.5">
                  <span className="text-xs">🇸🇬</span> Singapore
                </span>
                <span className="text-[10px] text-[#999999] font-mono">Hub</span>
              </div>
              <div className="flex items-center justify-between py-0.5">
                <span className="flex items-center gap-1.5">
                  <span className="text-xs">🇺🇸</span> USA
                </span>
                <span className="text-[10px] text-[#999999] font-mono">Hub</span>
              </div>
              <div className="flex items-center justify-between py-0.5">
                <span className="flex items-center gap-1.5">
                  <span className="text-xs">🇬🇧</span> London
                </span>
                <span className="text-[10px] text-[#999999] font-mono">Hub</span>
              </div>
              <div className="flex items-center justify-between py-0.5">
                <span className="flex items-center gap-1.5">
                  <span className="text-xs">🇩🇪</span> Berlin
                </span>
                <span className="text-[10px] text-[#999999] font-mono">Hub</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. RIGHT-MIDDLE: Creative Clock & Studio Activity Card */}
        <div className="chrono-floating-item float-reverse hidden lg:block absolute top-60 right-8 xl:right-16 z-20">
          <div className="bg-white rounded-2xl p-3.5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.04)] border border-[#E8E8E8] flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-slate-50 border border-[#E8E8E8] text-[#111111] flex items-center justify-center shrink-0 shadow-2xs">
              <Clock className="w-5 h-5 text-[#F06445]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#111111] block leading-tight">
                Creative Learning
              </span>
              <span className="text-[10px] text-[#666666] block mt-0.5">
                Studio • Workshops • Projects
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 font-semibold mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Critique Session
              </span>
            </div>
          </div>
        </div>

        {/* 5. BOTTOM-LEFT: Student Creative Projects Card ("Today's Tasks" style) */}
        <div className="chrono-floating-item float-slow hidden md:block absolute bottom-24 left-2 lg:left-6 xl:left-8 z-10">
          <div className="w-72 bg-white rounded-2xl p-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.09),0_0_0_1px_rgba(0,0,0,0.04)] border border-[#E8E8E8]">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#F0F0F0]">
              <span className="text-xs font-bold text-[#111111]">
                Student Creative Projects
              </span>
              <span className="text-[10px] font-mono text-[#999999]">Cohort A</span>
            </div>

            <div className="space-y-3">
              {/* Project 1 */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-medium text-[#111111] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F06445]" />
                    Fashion Collection
                  </span>
                  <span className="text-[10px] font-mono text-[#666666]">92%</span>
                </div>
                <div className="w-full bg-[#F5F5F5] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#F06445] h-full rounded-full w-[92%]" />
                </div>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-medium text-[#111111] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#2684F7]" />
                    Interior Concepts
                  </span>
                  <span className="text-[10px] font-mono text-[#666666]">85%</span>
                </div>
                <div className="w-full bg-[#F5F5F5] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#2684F7] h-full rounded-full w-[85%]" />
                </div>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-medium text-[#111111] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Visual Identity
                  </span>
                  <span className="text-[10px] font-mono text-[#666666]">78%</span>
                </div>
                <div className="w-full bg-[#F5F5F5] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#F59E0B] h-full rounded-full w-[78%]" />
                </div>
              </div>

              {/* Project 4 */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-medium text-[#111111] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Digital Experiences
                  </span>
                  <span className="text-[10px] font-mono text-[#666666]">95%</span>
                </div>
                <div className="w-full bg-[#F5F5F5] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full w-[95%]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. BOTTOM-RIGHT: Creative Disciplines 4-Icon Card ("100+ Integrations" style) */}
        <div className="chrono-floating-item float-reverse hidden md:block absolute bottom-24 right-2 lg:right-6 xl:right-8 z-10">
          <div className="w-64 bg-white rounded-2xl p-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.09),0_0_0_1px_rgba(0,0,0,0.04)] border border-[#E8E8E8]">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#F0F0F0]">
              <span className="text-xs font-bold text-[#111111]">
                Creative Disciplines
              </span>
              <span className="text-[10px] font-mono text-[#999999]">12 Pathways</span>
            </div>

            {/* 4 App-style squircle icons */}
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col items-center gap-1">
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F06445] shadow-2xs hover:scale-105 transition-transform">
                  <Scissors className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-medium text-[#666666]">Fashion</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2684F7] shadow-2xs hover:scale-105 transition-transform">
                  <Home className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-medium text-[#666666]">Interior</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-[#F59E0B] shadow-2xs hover:scale-105 transition-transform">
                  <Palette className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-medium text-[#666666]">Graphic</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#8B5CF6] shadow-2xs hover:scale-105 transition-transform">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-medium text-[#666666]">UI/UX</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* LOWER HERO SECTION: Clean Horizontal Discipline Strip     */}
        {/* ========================================================= */}
        <div className="mt-14 sm:mt-20 pt-6 border-t border-[#E8E8E8] relative z-20">
          <div className="flex items-center justify-center flex-wrap gap-y-3 gap-x-4 sm:gap-x-6 text-xs text-[#666666]">
            {disciplinesStrip.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <React.Fragment key={item.name}>
                  <Link
                    to="/programs"
                    className="flex items-center gap-2 font-medium hover:text-[#F06445] transition-colors"
                  >
                    <IconComp className="w-3.5 h-3.5 text-[#F06445]" />
                    <span>{item.name}</span>
                  </Link>
                  {idx < disciplinesStrip.length - 1 && (
                    <span className="text-[#D1D5DB] hidden sm:inline">|</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
