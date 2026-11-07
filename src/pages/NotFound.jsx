import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-white bg-dots px-4 py-20">
      <div className="max-w-xl mx-auto text-center chrono-card p-10 sm:p-14 space-y-6">
        <Badge variant="default" size="sm" dot>
          Error 404 • Page Not Found
        </Badge>

        <h1 className="font-heading text-6xl sm:text-8xl font-black text-[#111111] tracking-tight">
          404
        </h1>

        <p className="font-editorial italic text-2xl text-[#666666]">
          Lost in the creative canvas.
        </p>

        <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-md mx-auto">
          The studio space or resource you are looking for has been moved, archived, or does not exist at this address.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Button to="/" variant="primary" size="md">
            Return to Homepage
          </Button>
          <Button to="/programs" variant="glass" size="md">
            Explore Disciplines
          </Button>
        </div>
      </div>
    </div>
  );
}
