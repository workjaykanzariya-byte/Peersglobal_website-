'use client'

import React, { useState } from 'react'
import {
  MessageSquare,
  Search,
  Send,
  User,
  CheckCheck,
  Paperclip,
  Sparkles,
  Building,
  MoreVertical,
} from 'lucide-react'

export default function AdminMessagesPage() {
  const [selectedChat, setSelectedChat] = useState('1')
  const [msgText, setMsgText] = useState('')

  const chats = [
    {
      id: '1',
      sender: 'Vikram Singhania',
      company: 'Apex Logistics',
      avatar: 'VS',
      unread: 2,
      time: '10:45 AM',
      lastMsg: 'Can we schedule the MOU review call for tomorrow?',
    },
    {
      id: '2',
      sender: 'Rohan Deshmukh',
      company: 'EcoPower Tech',
      avatar: 'RD',
      unread: 0,
      time: 'Yesterday',
      lastMsg: 'Clean energy brief uploaded to the deal room.',
    },
    {
      id: '3',
      sender: 'Ananya Sharma',
      company: 'Zen Cloud Solutions',
      avatar: 'AS',
      unread: 1,
      time: 'Sep 14',
      lastMsg: 'Contract documents approved by legal team.',
    },
    {
      id: '4',
      sender: 'Harish Mehta',
      company: 'Horizon Polymers',
      avatar: 'HM',
      unread: 0,
      time: 'Sep 12',
      lastMsg: 'Thanks for connecting us with the Dahej cluster.',
    },
  ]

  const messages = [
    { id: 'm1', sender: 'Vikram Singhania', isMe: false, text: 'Hello Team Peers Global, we have reviewed the terms with Zen Cloud.', time: '10:30 AM' },
    { id: 'm2', sender: 'Admin', isMe: true, text: 'Excellent Vikram. The joint venture framework is in place.', time: '10:38 AM' },
    { id: 'm3', sender: 'Vikram Singhania', isMe: false, text: 'Can we schedule the MOU review call for tomorrow?', time: '10:45 AM' },
  ]

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!msgText.trim()) return
    setMsgText('')
  }

  return (
    <div className="space-y-6 font-sans pb-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2.5">
        <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-[#1769FF] to-[#08C7E8] text-white flex items-center justify-center shadow-md shadow-[#1769FF]/20">
          <MessageSquare className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101B35] font-display">
            Direct Collaboration Messages
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Real-time direct messaging between promoter chapters, advisory desks, and administrators.
          </p>
        </div>
      </div>

      {/* Chat Container */}
      <div className="bg-white border border-[#E2E8F4] rounded-3xl shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[580px]">
        {/* Chat List */}
        <div className="md:col-span-4 border-r border-slate-100 flex flex-col">
          <div className="p-4 border-b border-slate-100">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl pl-9 pr-3 py-2 text-xs text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:border-[#1769FF]"
              />
            </div>
          </div>

          <div className="divide-y divide-slate-100 flex-1 overflow-y-auto">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className={`p-4 flex items-start gap-3 cursor-pointer transition ${
                  selectedChat === chat.id ? 'bg-[#1769FF]/5 border-l-4 border-[#1769FF]' : 'hover:bg-[#F6F9FF]'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1769FF] to-[#08C7E8] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                  {chat.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="font-bold text-xs text-[#101B35] truncate">{chat.sender}</p>
                    <span className="text-[10px] text-slate-400">{chat.time}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium truncate">{chat.company}</p>
                  <p className="text-xs text-slate-600 truncate mt-1">{chat.lastMsg}</p>
                </div>
                {chat.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[#1769FF] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    {chat.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Feed */}
        <div className="md:col-span-8 flex flex-col justify-between bg-[#F6F9FF]/40">
          {/* Active Chat Header */}
          <div className="p-4 border-b border-slate-100 bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1769FF] to-[#08C7E8] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                VS
              </div>
              <div>
                <p className="font-bold text-xs text-[#101B35]">Vikram Singhania</p>
                <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online • Apex Logistics
                </p>
              </div>
            </div>
            <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="p-6 space-y-4 flex-1 overflow-y-auto">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.isMe ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-md p-3.5 rounded-2xl text-xs space-y-1 shadow-xs ${
                    m.isMe
                      ? 'bg-[#1769FF] text-white rounded-br-none'
                      : 'bg-white border border-[#E2E8F4] text-[#101B35] rounded-bl-none'
                  }`}
                >
                  <p className="leading-relaxed">{m.text}</p>
                  <div className={`flex items-center justify-end gap-1 text-[9px] ${m.isMe ? 'text-blue-100' : 'text-slate-400'}`}>
                    <span>{m.time}</span>
                    {m.isMe && <CheckCheck className="w-3 h-3" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Send Input */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              value={msgText}
              onChange={(e) => setMsgText(e.target.value)}
              placeholder="Type your message to promoter..."
              className="flex-1 bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-4 py-2.5 text-xs text-[#101B35] focus:outline-none focus:border-[#1769FF]"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-[#1769FF] hover:bg-[#1357D6] text-white shadow-sm transition cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
