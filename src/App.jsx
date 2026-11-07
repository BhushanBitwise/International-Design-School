import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Route-level code splitting for peak performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./pages/Programs'));
const ProgramDetail = lazy(() => import('./pages/ProgramDetail'));
const Locations = lazy(() => import('./pages/Locations'));
const LocationDetail = lazy(() => import('./pages/LocationDetail'));
const StudentLife = lazy(() => import('./pages/StudentLife'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Events = lazy(() => import('./pages/Events'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageFallback() {
  return (
    <div className="min-h-[60vh] bg-white bg-dots flex flex-col items-center justify-center p-8">
      <div className="w-10 h-10 border-2 border-[#F06445] border-t-transparent rounded-full animate-spin" />
      <span className="mt-4 font-mono text-xs uppercase tracking-widest text-[#999999]">
        Loading Studio Experience...
      </span>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:slug" element={<ProgramDetail />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:slug" element={<LocationDetail />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
