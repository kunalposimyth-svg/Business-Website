
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, RefreshCcw } from 'lucide-react';
import { getStrategyAssistantResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await getStrategyAssistantResponse(userMessage);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response || "I'm sorry, I couldn't generate a response." }]);
    setIsLoading(false);
  };

  const clearChat = () => {
    setMessages([]);
    setInput('');
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 flex flex-col h-[750px]">
          {/* Header */}
          <div className="bg-indigo-600 p-6 text-white flex justify-between items-center shrink-0">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-500 rounded-lg">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="font-bold text-lg">Nexus Strategy AI</h2>
                <p className="text-xs text-indigo-100 opacity-80 uppercase tracking-widest">Powered by Gemini 3</p>
              </div>
            </div>
            <button 
              onClick={clearChat}
              className="p-2 hover:bg-indigo-500 rounded-full transition-colors"
              title="Clear Conversation"
            >
              <RefreshCcw size={20} />
            </button>
          </div>

          {/* Chat Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-600">
                  <Sparkles size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Hello! I'm your Nexus Digital Assistant</h3>
                <p className="text-slate-500 max-w-sm mx-auto mb-8">
                  Describe your business goal or a challenge you're facing, and I'll generate a high-level digital strategy for you.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                  <button 
                    onClick={() => setInput("How can I modernize my manufacturing business using IoT?")}
                    className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-600 hover:border-indigo-200 hover:bg-white transition-all text-left"
                  >
                    "How can I modernize my manufacturing business using IoT?"
                  </button>
                  <button 
                    onClick={() => setInput("What's a good data strategy for a retail startup?")}
                    className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-600 hover:border-indigo-200 hover:bg-white transition-all text-left"
                  >
                    "What's a good data strategy for a retail startup?"
                  </button>
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-4 sm:p-6 ${
                  msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-br-none' 
                  : 'bg-slate-100 text-slate-800 rounded-bl-none shadow-sm'
                }`}>
                  <div className="prose prose-sm md:prose-base max-w-none">
                    {msg.role === 'assistant' ? (
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    ) : (
                      <p>{msg.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 rounded-2xl p-6 rounded-bl-none shadow-sm flex items-center space-x-3">
                  <Loader2 className="animate-spin text-indigo-600" size={20} />
                  <span className="text-slate-500 font-medium">Synthesizing strategy...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-slate-200 bg-slate-50 shrink-0">
            <form onSubmit={handleSubmit} className="flex space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="E.g. Help me scale my e-commerce business..."
                className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 shadow-lg shadow-indigo-100"
              >
                <span className="hidden sm:inline">Ask AI</span>
                <Send size={18} />
              </button>
            </form>
            <p className="text-[10px] text-slate-400 mt-4 text-center">
              Nexus AI can provide strategic suggestions but should not replace professional consultation for critical business decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
