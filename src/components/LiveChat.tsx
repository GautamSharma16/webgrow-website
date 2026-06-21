'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, CornerDownLeft, Sparkles } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [leadStage, setLeadStage] = useState<'none' | 'asked_name' | 'asked_email' | 'complete'>('none');
  const [leadInfo, setLeadInfo] = useState({ name: '', email: '', service: '' });
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Initialize with welcome message
  useEffect(() => {
    setMessages([
      {
        id: 'msg-1',
        sender: 'bot',
        text: "Hi! Welcome to WebGrow Technologies. I'm GrowBot, your digital growth assistant. How can we help you today?",
        timestamp: new Date()
      }
    ]);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    console.log(`[Google Analytics Event]: chat_message_sent, text: ${text}`);

    // Trigger bot reply logic after short delay
    setTimeout(() => {
      handleBotReply(text);
    }, 1000);
  };

  const handleBotReply = (userText: string) => {
    let replyText = '';
    const lower = userText.toLowerCase();

    // Check if we are capturing lead info
    if (leadStage === 'asked_name') {
      setLeadInfo(prev => ({ ...prev, name: userText }));
      setLeadStage('asked_email');
      replyText = `Thanks, ${userMsgName(userText)}! What is your business email address so an expert can contact you?`;
      addBotMessage(replyText);
      return;
    }

    if (leadStage === 'asked_email') {
      if (!/\S+@\S+\.\S+/.test(userText)) {
        replyText = "That email format looks incorrect. Could you please double check it?";
        addBotMessage(replyText);
        return;
      }
      setLeadInfo(prev => {
        const next = { ...prev, email: userText };
        console.log(`[CRM Submission - Live Chat Lead]: Name: ${next.name}, Email: ${next.email}, Service Interested: ${next.service || 'General'}`);
        return next;
      });
      setLeadStage('complete');
      replyText = `Great! I've routed your inquiry to our engineering team. We'll reach out to you at ${userText} within 2 hours. Have a great day!`;
      addBotMessage(replyText);
      return;
    }

    // Standard responses based on keyword mapping
    if (lower.includes('ai') || lower.includes('agent') || lower.includes('chat') || lower.includes('automation')) {
      replyText = "AI Automation is our specialty! We build custom autonomous agents and chatbots. To get pricing or a developer consultation, could you tell me your name?";
      setLeadStage('asked_name');
      setLeadInfo(prev => ({ ...prev, service: 'AI & Automation' }));
    } else if (lower.includes('develop') || lower.includes('web') || lower.includes('mobile') || lower.includes('shopify')) {
      replyText = "We build high-performance web applications, iOS/Android apps, and custom Shopify experiences. What is your name?";
      setLeadStage('asked_name');
      setLeadInfo(prev => ({ ...prev, service: 'Software Development' }));
    } else if (lower.includes('seo') || lower.includes('market') || lower.includes('ad') || lower.includes('ppc')) {
      replyText = "Our marketing team helps businesses scale through technical SEO, Google Ads, and social media funnels. May I know your name to schedule a free review?";
      setLeadStage('asked_name');
      setLeadInfo(prev => ({ ...prev, service: 'Digital Marketing' }));
    } else if (lower.includes('price') || lower.includes('cost') || lower.includes('quote')) {
      replyText = "We offer competitive project scaling packages starting from $4,500. May I have your name to arrange a custom quote?";
      setLeadStage('asked_name');
      setLeadInfo(prev => ({ ...prev, service: 'Pricing Query' }));
    } else {
      replyText = "I'd love to connect you with one of our business consultants. Could you please share your name to get started?";
      setLeadStage('asked_name');
    }

    addBotMessage(replyText);
  };

  const addBotMessage = (text: string) => {
    setMessages(prev => [
      ...prev,
      {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text,
        timestamp: new Date()
      }
    ]);
  };

  const userMsgName = (fullName: string) => {
    return fullName.split(' ')[0];
  };

  const handleQuickOptionClick = (option: string) => {
    handleSend(option);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="pointer-events-auto w-80 sm:w-96 h-[480px] rounded-2xl glass border border-card-border shadow-2xl flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-gradient-to-r from-brand-blue/80 to-brand-purple/80 backdrop-blur border-b border-card-border flex items-center justify-between text-white">
              <div className="flex items-center space-x-2.5">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <h4 className="text-xs font-bold tracking-wide">Solutions Support</h4>
                  <span className="text-[10px] text-white/80">Alex & GrowBot online</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-white/90 hover:text-white transition-all cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Chat Body Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                      msg.sender === 'bot' ? 'bg-brand-blue/10 text-brand-blue' : 'bg-brand-purple/10 text-brand-purple'
                    }`}>
                      {msg.sender === 'bot' ? <Bot className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-[11px] leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-brand-blue text-white rounded-tr-none'
                        : 'bg-card border border-card-border text-foreground rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Helper Choices */}
            {leadStage === 'none' && (
              <div className="px-4 py-2 border-t border-card-border flex flex-wrap gap-1.5 bg-background/40">
                <button
                  onClick={() => handleQuickOptionClick("AI Agents & Chatbots")}
                  className="px-2.5 py-1 rounded-full border border-card-border text-[9px] text-brand-muted hover:text-brand-blue hover:border-brand-blue transition-all cursor-pointer"
                >
                  🤖 AI Solutions
                </button>
                <button
                  onClick={() => handleQuickOptionClick("Custom Web App development")}
                  className="px-2.5 py-1 rounded-full border border-card-border text-[9px] text-brand-muted hover:text-brand-blue hover:border-brand-blue transition-all cursor-pointer"
                >
                  💻 Web/App Dev
                </button>
                <button
                  onClick={() => handleQuickOptionClick("SEO & Marketing Campaigns")}
                  className="px-2.5 py-1 rounded-full border border-card-border text-[9px] text-brand-muted hover:text-brand-blue hover:border-brand-blue transition-all cursor-pointer"
                >
                  📈 SEO & Marketing
                </button>
              </div>
            )}

            {/* Message Input Panel */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-card-border flex items-center space-x-2 bg-background/80"
            >
              <input
                type="text"
                placeholder={leadStage !== 'none' ? "Enter details here..." : "Ask us anything..."}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 px-3 py-1.5 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-xs"
              />
              <button
                type="submit"
                className="p-2 rounded-lg bg-brand-blue text-white hover:bg-brand-blue/90 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto p-4 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple text-white shadow-xl shadow-brand-blue/20 hover:scale-105 transition-all flex items-center justify-center cursor-pointer relative"
        aria-label="Open Chat"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <MessageSquare className="h-6 w-6" />
      </motion.button>

    </div>
  );
}
