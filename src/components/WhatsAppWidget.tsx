import React, { useState } from 'react';
import { MessageCircle, Send, Phone, User, Clock } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import { mockLeads } from '../data/mockData';
import { format } from 'date-fns';

interface Message {
  id: string;
  text: string;
  isFromLead: boolean;
  timestamp: Date;
  leadName?: string;
}

const mockMessages: Message[] = [
  {
    id: '1',
    text: 'Olá! Gostaria de saber mais sobre o Honda CR-V que vocês têm disponível.',
    isFromLead: true,
    timestamp: new Date(Date.now() - 30 * 60000),
    leadName: 'Carlos Silva'
  },
  {
    id: '2',
    text: 'Olá Carlos! Claro, tenho todas as informações do CR-V. Ele está seminovo, com apenas 15.000 km rodados. Posso te passar mais detalhes.',
    isFromLead: false,
    timestamp: new Date(Date.now() - 25 * 60000)
  },
  {
    id: '3',
    text: 'Perfeito! Qual o valor e as condições de financiamento?',
    isFromLead: true,
    timestamp: new Date(Date.now() - 20 * 60000),
    leadName: 'Carlos Silva'
  },
  {
    id: '4',
    text: 'Oi! Vocês têm o Toyota Corolla 2023?',
    isFromLead: true,
    timestamp: new Date(Date.now() - 10 * 60000),
    leadName: 'Maria Santos'
  }
];

export const WhatsAppWidget: React.FC = () => {
  const [messages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState('');

  const formatTime = (date: Date) => {
    return format(date, 'HH:mm');
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message via WhatsApp API
      setNewMessage('');
    }
  };

  const activeLeads = mockLeads.filter(lead => lead.whatsappNumber);

  return (
    <Card variant="glass" className="h-[600px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-silver-900">WhatsApp</h2>
            <p className="text-sm text-silver-600">Conversas ativas</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-green-600">Online</span>
        </div>
      </div>

      {/* Active Leads */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-silver-700 mb-2">Leads Ativos no WhatsApp</h3>
        <div className="space-y-2">
          {activeLeads.slice(0, 3).map(lead => (
            <div key={lead.id} className="flex items-center justify-between p-2 bg-white/50 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 text-primary-600" />
                </div>
                <span className="text-sm font-medium text-silver-700">{lead.name}</span>
              </div>
              <Button variant="ghost" size="sm" icon={<Phone className="w-3 h-3" />} />
            </div>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto mb-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isFromLead ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-3 py-2 rounded-lg ${
                message.isFromLead
                  ? 'bg-white shadow-sm border'
                  : 'bg-primary-600 text-white'
              }`}
            >
              {message.isFromLead && message.leadName && (
                <p className="text-xs font-medium text-primary-600 mb-1">
                  {message.leadName}
                </p>
              )}
              <p className="text-sm">{message.text}</p>
              <div className="flex items-center justify-end mt-1">
                <Clock className="w-3 h-3 mr-1 opacity-60" />
                <span className="text-xs opacity-60">
                  {formatTime(message.timestamp)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="flex space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="flex-1 px-3 py-2 border border-silver-200 rounded-lg bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <Button
          onClick={handleSendMessage}
          size="sm"
          icon={<Send className="w-4 h-4" />}
          disabled={!newMessage.trim()}
        />
      </div>
    </Card>
  );
};