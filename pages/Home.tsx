
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Globe } from 'lucide-react';
import { SERVICES, getIcon } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
                Digital Excellence for Modern Enterprise
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                Redefine Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Business Horizon</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                We combine strategic consulting with world-class engineering to help organizations thrive in a rapidly evolving digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/portfolio"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 text-center"
                >
                  View Success Stories
                </Link>
                <Link
                  to="/ai-assistant"
                  className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:border-indigo-600 hover:text-indigo-600 transition-all text-center flex items-center justify-center space-x-2"
                >
                  <span>AI Strategy Planner</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/10 rounded-3xl blur-3xl -z-10 transform rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Digital Strategy Team" 
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-50 rounded-lg text-green-600">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">ROI Improved</p>
                    <p className="text-2xl font-bold text-slate-900">+142%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-slate-900 mb-2">500+</p>
              <p className="text-slate-500">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-slate-900 mb-2">50+</p>
              <p className="text-slate-500">Fortune 1000 Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-slate-900 mb-2">99%</p>
              <p className="text-slate-500">Retention Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-slate-900 mb-2">12</p>
              <p className="text-slate-500">Global Offices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Solving complex business challenges</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-indigo-200 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {getIcon(service.icon, 28)}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-500">
                      <CheckCircle2 size={16} className="text-green-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-4xl font-extrabold mb-6">Why industry leaders trust Nexus</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-indigo-500/20 rounded text-indigo-400">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Uncompromising Security</h4>
                    <p className="text-slate-400">SOC2 Type II certified and deep expertise in highly regulated industries.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-indigo-500/20 rounded text-indigo-400">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Global Perspective</h4>
                    <p className="text-slate-400">Our consultants bring localized expertise from 4 different continents.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-slate-800 p-8 rounded-xl flex items-center justify-center h-24 w-40">
                    <span className="text-slate-500 font-bold opacity-50">PARTNER_{i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">Ready to scale your digital presence?</h2>
          <p className="text-indigo-100 text-xl mb-10 leading-relaxed">
            Join the ranks of high-growth companies using Nexus to build the future of their industry.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-indigo-50 transition-all shadow-xl"
          >
            Start Your Transformation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
