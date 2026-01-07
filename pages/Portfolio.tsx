
import React from 'react';
import { CASE_STUDIES } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-20">
      <header className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Success Stories</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Real-world challenges met with innovative solutions. Explore how we've helped our clients transform.
          </p>
        </div>
      </header>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study) => (
              <div key={study.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-indigo-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {study.client}: {study.title}
                    </h2>
                    <ExternalLink size={20} className="text-slate-400 group-hover:text-indigo-600 transition-colors shrink-0" />
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                    <p className="text-indigo-900 font-bold mb-1">Impact:</p>
                    <p className="text-indigo-700">{study.results}</p>
                  </div>
                  <p className="text-slate-600 line-clamp-2">
                    <span className="font-bold text-slate-800">The Challenge:</span> {study.challenge}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Ready to write your success story?</h2>
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
