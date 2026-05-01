'use client';

import { useState, useEffect, useRef } from 'react';
import { askJayKnowledge } from '@/data/askJayKnowledge';
import { MessageCircle, X, Send, RotateCw } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
}

export default function AskJayChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: "Hey! I'm Ask Jay, Jayanth's AI assistant. Ask me anything about his experience, skills, education, or background. Try asking \"Tell me about yourself\" or \"What's your strongest skill?\"",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Fuzzy search to find best matching knowledge entry
  const findBestMatch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    let bestMatch: [string, any] | null = null;
    let bestScore = 0;

    for (const [key, entry] of Object.entries(askJayKnowledge)) {
      for (const keyword of entry.keywords) {
        const score = calculateSimilarity(lowerQuery, keyword.toLowerCase());
        if (score > bestScore) {
          bestScore = score;
          bestMatch = [key, entry];
        }
      }
    }

    return bestScore >= 0.4 ? bestMatch : null;
  };

  const calculateSimilarity = (a: string, b: string): number => {
    const longer = a.length > b.length ? a : b;
    const shorter = a.length > b.length ? b : a;

    if (longer.length === 0) return 1.0;

    const editDistance = getEditDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
  };

  const getEditDistance = (a: string, b: string): number => {
    const costs = [];
    for (let i = 0; i <= a.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= b.length; j++) {
        if (i === 0) {
          costs[j] = j;
        } else if (j > 0) {
          let newValue = costs[j - 1];
          if (a.charAt(i - 1) !== b.charAt(j - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          }
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
      if (i > 0) costs[b.length] = lastValue;
    }
    return costs[b.length];
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const match = findBestMatch(input);

      let botResponse = '';
      let suggestedFollowUps: string[] = [];

      if (match) {
        const [, entry] = match;
        botResponse = entry.answer;
        suggestedFollowUps = entry.suggestedFollowUps || [];
      } else {
        botResponse = "I didn't quite understand that. Could you ask me something about my experience, skills, education, or background? Try \"Tell me about yourself\" or \"What roles are you looking for?\"";
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: botResponse,
      };

      setMessages((prev) => [...prev, botMessage]);

      if (suggestedFollowUps.length > 0) {
        const followUpMessage: Message = {
          id: (Date.now() + 2).toString(),
          type: 'bot',
          text: `You might also want to ask: ${suggestedFollowUps.join(' or ')}`,
        };
        setTimeout(() => {
          setMessages((prev) => [...prev, followUpMessage]);
          setIsLoading(false);
        }, 300);
      } else {
        setIsLoading(false);
      }
    }, 500);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    setTimeout(() => {
      const form = document.querySelector('#ask-jay-form') as HTMLFormElement;
      if (form) form.dispatchEvent(new Event('submit', { bubbles: true }));
    }, 0);
  };

  const resetChat = () => {
    setMessages([
      {
        id: '1',
        type: 'bot',
        text: "Hey! I'm Ask Jay, Jayanth's AI assistant. Ask me anything about his experience, skills, education, or background. Try asking \"Tell me about yourself\" or \"What's your strongest skill?\"",
      },
    ]);
    setInput('');
  };

  return (
    <>
      {/* Chat widget */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Chat bubble button */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition transform"
            aria-label="Open Ask Jay chatbot"
          >
            <MessageCircle size={28} className="text-white" />
          </button>
        )}

        {/* Chat window */}
        {isOpen && (
          <div className="absolute bottom-0 right-0 w-96 max-w-full h-[600px] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-lg">Ask Jay</h3>
                <p className="text-sm text-purple-100">Jayanth's AI Assistant</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-full transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-900 to-slate-950">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom duration-300`}
                >
                  <div
                    className={`max-w-xs lg:max-w-sm px-4 py-2 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-purple-600 text-white rounded-br-none'
                        : 'bg-slate-800 text-slate-100 border border-slate-700 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg rounded-bl-none">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="border-t border-slate-700 bg-slate-900 p-4 space-y-3">
              {/* Quick questions */}
              {messages.length === 1 && (
                <div className="grid grid-cols-2 gap-2">
                  {['Tell me about yourself', "What's your strongest skill?", 'FTB work?', 'AWS experience?'].map((q) => (
                    <button
                      key={q}
                      onClick={() => handleQuickQuestion(q)}
                      className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-2 rounded transition border border-slate-700 hover:border-purple-500/50"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Input form */}
              <form id="ask-jay-form" onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed p-2 rounded-lg transition"
                >
                  <Send size={18} className="text-white" />
                </button>
              </form>

              {/* Reset button */}
              <button
                onClick={resetChat}
                className="w-full text-xs text-slate-500 hover:text-slate-400 transition flex items-center justify-center gap-1"
              >
                <RotateCw size={14} />
                Start over
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
