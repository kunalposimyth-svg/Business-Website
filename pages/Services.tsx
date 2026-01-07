
import React from 'react';
import { SERVICES, getIcon } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      <header className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Innovative Solutions</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From cloud architecture to AI-driven automation, we provide the technical depth and strategic vision needed to succeed.
          </p>
        </div>
      </header>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-200">
                    {getIcon(service.icon, 32)}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.description} We don't just provide a service; we act as your long-term innovation partner, ensuring your business stays ahead of technological shifts.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.details.map((item, i) => (
                      <div key={i} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <Check size={18} className="text-indigo-600 shrink-0" />
                        <span className="font-semibold text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    src={`https://picsum.photos/seed/${service.id}/800/600`} 
                    alt={service.title} 
                    className="rounded-3xl shadow-2xl w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy AI Prompting */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need a custom roadmap?</h2>
          <p className="text-slate-400 mb-10">Our Strategy AI can help you identify high-impact opportunities in minutes.</p>
          <a href="#/ai-assistant" className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold transition-all inline-block">
            Launch AI Assistant
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
