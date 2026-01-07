
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <header className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">Let's Build Something Great</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto text-center">
            Ready to discuss your next big project? Our consultants are here to help you navigate the digital landscape.
          </p>
        </div>
      </header>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24">
          <div className="mb-16 lg:mb-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Headquarters</h4>
                  <p className="text-slate-600">123 Innovation Drive<br />Silicon Valley, CA 94025</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Call Us</h4>
                  <p className="text-slate-600">+1 (555) 123-4567<br />Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Email Us</h4>
                  <p className="text-slate-600">hello@nexus-consulting.com<br />support@nexus-consulting.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="font-bold text-xl mb-4">Immediate Assistance?</h3>
              <p className="text-slate-600 mb-6">Try our Strategy AI for quick insights while you wait for our team to reply.</p>
              <a href="#/ai-assistant" className="text-indigo-600 font-bold hover:underline">Launch AI Strategy Hub &rarr;</a>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-slate-100 relative -mt-32 lg:mt-0">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Service of Interest</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Digital Transformation</option>
                    <option>Data & AI Strategy</option>
                    <option>IT Strategy Consulting</option>
                    <option>Cloud Infrastructure</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-indigo-100">
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
