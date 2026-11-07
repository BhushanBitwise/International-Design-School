import React from 'react';
import { TEAM_MOSAIC } from '../../data/team';
import TeamPortraitCard from './TeamPortraitCard';
import Badge from '../common/Badge';
import { ArrowUpRight, Users, Sparkles } from 'lucide-react';

export default function MeetOurTeam() {
  const { featuredLead, members, blueTileCopy } = TEAM_MOSAIC;

  // Map members by role / id for explicit layout placement
  const member02 = members.find((m) => m.id === 'member-02');
  const member03 = members.find((m) => m.id === 'member-03');
  const member04 = members.find((m) => m.id === 'member-04');
  const member05 = members.find((m) => m.id === 'member-05');
  const member06 = members.find((m) => m.id === 'member-06');
  const member07 = members.find((m) => m.id === 'member-07');
  const member08 = members.find((m) => m.id === 'member-08');
  const member09 = members.find((m) => m.id === 'member-09');

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-[#E8E8E8]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Context Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="blue" size="sm" dot>
                Faculty & Creative Mentors
              </Badge>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666]">
                Design Academy Leadership
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-[1.12]">
              The People Shaping{' '}
              <span className="bg-gradient-to-r from-[#2638CC] to-[#3D53E8] bg-clip-text text-transparent">
                Design Education
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#666666] max-w-md leading-relaxed">
            A collective of practicing architects, couture atelier directors, typographers, and cognitive ergonomists mentoring the next generation of creative pioneers.
          </p>
        </div>

        {/* ========================================================= */}
        {/* MODULAR MOSAIC GRID — REPRODUCING REFERENCE COMPOSITION   */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl p-2 sm:p-3 border border-[#E8E8E8] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
            
            {/* ------------------------------------------------------- */}
            {/* COLUMN 1, ROWS 1 & 2: Featured Lead (Tall Color Tile)   */}
            {/* ------------------------------------------------------- */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-1 lg:row-span-2 rounded-2xl overflow-hidden">
              <TeamPortraitCard member={featuredLead} isTall={true} />
            </div>

            {/* ------------------------------------------------------- */}
            {/* ROW 1: Portraits 02, 03, 04                             */}
            {/* ------------------------------------------------------- */}
            <div className="col-span-1 rounded-2xl overflow-hidden">
              {member02 && <TeamPortraitCard member={member02} />}
            </div>

            <div className="col-span-1 rounded-2xl overflow-hidden">
              {member03 && <TeamPortraitCard member={member03} />}
            </div>

            <div className="col-span-1 rounded-2xl overflow-hidden">
              {member04 && <TeamPortraitCard member={member04} />}
            </div>

            {/* ------------------------------------------------------- */}
            {/* ROW 2: White Tile ("Meet our Team!") + Blue Tile + P08  */}
            {/* ------------------------------------------------------- */}
            
            {/* CENTER WHITE TILE — Exact Reference Composition */}
            <div className="col-span-2 sm:col-span-1 rounded-2xl bg-white border border-[#E8E8E8] p-5 sm:p-8 flex flex-col justify-center relative aspect-auto sm:aspect-square min-h-[200px] sm:min-h-[220px] shadow-2xs group hover:border-[#2638CC]/40 transition-colors">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                {/* Two-tone accent block matching reference: dark + brand blue */}
                <div className="flex h-5 rounded-xs overflow-hidden shadow-2xs">
                  <div className="w-3.5 bg-[#111111]" />
                  <div className="w-5 bg-[#2638CC]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#2638CC] font-bold">
                  STUDIO FACULTY
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#111111] leading-[1.08] tracking-tight">
                Meet our
                <span className="block text-[#2638CC]">Team!</span>
              </h3>
              <p className="text-xs text-[#777777] mt-2 sm:mt-3 font-medium hidden sm:block">
                Dedicated mentors across Pune and global studio satellites.
              </p>
            </div>

            {/* BLUE INFORMATION TILE — Brand Blue (#2638CC) */}
            <div className="col-span-2 sm:col-span-1 rounded-2xl bg-gradient-to-br from-[#1B2799] via-[#2638CC] to-[#3D53E8] p-5 sm:p-8 flex flex-col justify-center items-center text-center aspect-auto sm:aspect-square min-h-[200px] sm:min-h-[220px] shadow-[0_15px_30px_-8px_rgba(38,56,204,0.3)] relative overflow-hidden">
              {/* Subtle ambient circle in background */}
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />
              
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 flex items-center justify-center text-white mb-3 sm:mb-4">
                <Sparkles className="w-4 h-4" />
              </div>

              <p className="font-sans text-xs sm:text-base text-white/95 leading-relaxed font-medium max-w-xs text-balance">
                "{blueTileCopy}"
              </p>

              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/20 w-full flex items-center justify-center gap-2 text-[9px] sm:text-[10px] font-mono text-white/80 uppercase tracking-widest">
                <span>International Design School</span>
              </div>
            </div>

            {/* Portrait 08 */}
            <div className="col-span-1 rounded-2xl overflow-hidden">
              {member08 && <TeamPortraitCard member={member08} />}
            </div>

            {/* ------------------------------------------------------- */}
            {/* ROW 3: Portraits 05, 06, 07, 09                         */}
            {/* ------------------------------------------------------- */}
            <div className="col-span-1 rounded-2xl overflow-hidden">
              {member05 && <TeamPortraitCard member={member05} />}
            </div>

            <div className="col-span-1 rounded-2xl overflow-hidden">
              {member06 && <TeamPortraitCard member={member06} />}
            </div>

            <div className="col-span-1 rounded-2xl overflow-hidden">
              {member07 && <TeamPortraitCard member={member07} />}
            </div>

            <div className="col-span-1 rounded-2xl overflow-hidden">
              {member09 && <TeamPortraitCard member={member09} />}
            </div>

          </div>
        </div>

        {/* Bottom Sub-indicator */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#888888] px-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Academic Dean & Studio Leaders in Residence • Pune Flagship Campus</span>
          </div>
          <span>Hover tiles for discipline specializations</span>
        </div>
      </div>
    </section>
  );
}
