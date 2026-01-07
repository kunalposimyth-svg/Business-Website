
import React from 'react';
import { Target, Users, Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <header className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8">We build foundations for the digital future.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Nexus was founded in 2015 with a simple mission: help legacy businesses survive and thrive in a digital-first world. 
              Today, we are a global team of 200+ consultants, engineers, and strategists.
            </p>
          </div>
        </div>
      </header>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Team" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
              <div className="space-y-8">
                <div className="flex space-x-6">
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Outcome Obsessed</h4>
                    <p className="text-slate-600">We don't just deliver reports; we deliver results that impact the bottom line.</p>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Lightbulb size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Constant Innovation</h4>
                    <p className="text-slate-600">Technology never stands still, and neither do we. We stay on the leading edge.</p>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Radical Collaboration</h4>
                    <p className="text-slate-600">We work as an extension of your team, not an external vendor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16">The Minds Behind Nexus</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Chen', role: 'Chief Executive Officer', img: 'https://picsum.photos/seed/sarah/400/400' },
              { name: 'Marcus Thorne', role: 'Head of AI Strategy', img: 'https://picsum.photos/seed/marcus/400/400' },
              { name: 'Elena Rodriguez', role: 'Director of Consulting', img: 'https://picsum.photos/seed/elena/400/400' },
              { name: 'David Kim', role: 'CTO', img: 'https://picsum.photos/seed/david/400/400' },
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img src={member.img} alt={member.name} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h4 className="font-bold text-lg text-slate-900">{member.name}</h4>
                <p className="text-indigo-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
