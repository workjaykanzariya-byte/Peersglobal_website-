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
  Building2,
  MoreVertical,
  Phone,
  Video,
  Smile,
  ShieldCheck,
  Clock,
  Pin,
  Check,
} from 'lucide-react'

interface ChatUser {
  id: string
  sender: string
  company: string
  role: string
  avatar: string
  avatarBg: string
  unread: number
  time: string
  online: boolean
  lastMsg: string
}

interface MessageItem {
  id: string
  chatId: string
  sender: string
  isMe: boolean
  text: string
  time: string
  status?: 'sent' | 'delivered' | 'read'
}

export default function AdminMessagesPage() {
  const [selectedChatId, setSelectedChatId] = useState('1')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState<'all' | 'unread'>('all')
  const [msgInput, setMsgInput] = useState('')

  const [chats, setChats] = useState<ChatUser[]>([
    {
      id: '1',
      sender: 'Vikram Singhania',
      company: 'Apex Logistics',
      role: 'Managing Director',
      avatar: 'VS',
      avatarBg: 'from-blue-600 to-indigo-600',
      unread: 2,
      time: '10:45 AM',
      online: true,
      lastMsg: 'Can we schedule the MOU review call for tomorrow?',
    },
    {
      id: '2',
      sender: 'Rohan Deshmukh',
      company: 'EcoPower Tech',
      role: 'Founder & CEO',
      avatar: 'RD',
      avatarBg: 'from-emerald-500 to-teal-600',
      unread: 0,
      time: 'Yesterday',
      online: false,
      lastMsg: 'Clean energy brief uploaded to the deal room.',
    },
    {
      id: '3',
      sender: 'Ananya Sharma',
      company: 'Zen Cloud Solutions',
      role: 'Chief Strategy Officer',
      avatar: 'AS',
      avatarBg: 'from-fuchsia-500 to-pink-600',
      unread: 1,
      time: 'Sep 14',
      online: true,
      lastMsg: 'Contract documents approved by legal team.',
    },
    {
      id: '4',
      sender: 'Harish Mehta',
      company: 'Horizon Polymers',
      role: 'Promoter',
      avatar: 'HM',
      avatarBg: 'from-amber-500 to-orange-600',
      unread: 0,
      time: 'Sep 12',
      online: false,
      lastMsg: 'Thanks for connecting us with the Dahej cluster.',
    },
  ])

  const [messages, setMessages] = useState<MessageItem[]>([
    {
      id: 'm1',
      chatId: '1',
      sender: 'Vikram Singhania',
      isMe: false,
      text: 'Hello Team Peers Global, we have reviewed the terms with Zen Cloud.',
      time: '10:30 AM',
    },
    {
      id: 'm2',
      chatId: '1',
      sender: 'Admin',
      isMe: true,
      text: 'Excellent Vikram. The joint venture framework is in place and verified by the governance board.',
      time: '10:38 AM',
      status: 'read',
    },
    {
      id: 'm3',
      chatId: '1',
      sender: 'Vikram Singhania',
      isMe: false,
      text: 'Can we schedule the MOU review call for tomorrow?',
      time: '10:45 AM',
    },
    {
      id: 'm4',
      chatId: '2',
      sender: 'Rohan Deshmukh',
      isMe: false,
      text: 'Clean energy brief uploaded to the deal room. Please have the advisors review section 4.',
      time: 'Yesterday 04:15 PM',
    },
    {
      id: 'm5',
      chatId: '3',
      sender: 'Ananya Sharma',
      isMe: false,
      text: 'Contract documents approved by legal team. Ready for promoter signature.',
      time: 'Sep 14 11:20 AM',
    },
    {
      id: 'm6',
      chatId: '4',
      sender: 'Harish Mehta',
      isMe: false,
      text: 'Thanks for connecting us with the Dahej cluster. Initial discussions went very smoothly.',
      time: 'Sep 12 02:40 PM',
    },
  ])

  const activeChat = chats.find((c) => c.id === selectedChatId) || chats[0]
  const currentMessages = messages.filter((m) => m.chatId === activeChat.id)

  const quickReplies = [
    'Schedule MOU Review',
    'Share Term Sheet',
    'Verified by Advisory Board',
    'Request Deal Room Access',
  ]

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || msgInput).trim()
    if (!text) return

    const now = new Date()
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    const newMsg: MessageItem = {
      id: `m_${Date.now()}`,
      chatId: activeChat.id,
      sender: 'Admin',
      isMe: true,
      text,
      time: timeStr,
      status: 'sent',
    }

    setMessages((prev) => [...prev, newMsg])
    setMsgInput('')

    // Update last message in chats list
    setChats((prev) =>
      prev.map((c) =>
        c.id === activeChat.id ? { ...c, lastMsg: text, time: 'Just now' } : c
      )
    )
  }

  const filteredChats = chats.filter((c) => {
    const matchesSearch =
      c.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.lastMsg.toLowerCase().includes(searchQuery.toLowerCase())
    if (filterType === 'unread') {
      return matchesSearch && c.unread > 0
    }
    return matchesSearch
  })

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 font-sans">
      {/* 1. Header Hero Banner Card */}
      <div className="relative overflow-hidden rounded-3xl bg-white border border-[#E2E8F4] p-6 md:p-8 shadow-sm">
        {/* Gradient Mesh Aura */}
        <div className="absolute top-0 right-0 w-80 h-full pointer-events-none opacity-60">
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-gradient-to-br from-purple-300/50 via-cyan-200/60 to-blue-400/40 blur-2xl transform rotate-12" />
          <div className="absolute top-8 right-16 w-44 h-44 rounded-full bg-gradient-to-tr from-pink-200/40 via-blue-200/50 to-indigo-300/40 blur-xl" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start md:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1769FF]/10 via-[#08C7E8]/15 to-purple-500/10 border border-[#1769FF]/20 flex items-center justify-center text-[#1769FF] shadow-inner shrink-0">
              <MessageSquare className="w-7 h-7" />
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#101B35] tracking-tight">
                Direct Collaboration Messages
              </h1>
              <p className="text-sm text-slate-500 mt-1 font-medium">
                Real-time direct messaging between promoter chapters, advisory desks, and administrators.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Secure Deal Desk Active
            </span>
          </div>
        </div>
      </div>

      {/* 2. Chat Workspace Container */}
      <div className="bg-white border border-[#E2E8F4] rounded-3xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
        {/* Left Panel: Conversation List (4 cols) */}
        <div className="lg:col-span-5 xl:col-span-4 border-r border-[#E2E8F4] flex flex-col bg-[#FAFBFD]">
          {/* Search & Tabs */}
          <div className="p-4 border-b border-[#E2E8F4] space-y-3 bg-white">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search promoters, companies, keywords..."
                className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl pl-10 pr-3 py-2 text-xs text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:border-[#1769FF] focus:bg-white transition"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  filterType === 'all'
                    ? 'bg-[#1769FF] text-white shadow-xs'
                    : 'bg-[#F0F4FA] text-slate-600 hover:bg-[#E4ECF7]'
                }`}
              >
                All Chats ({chats.length})
              </button>
              <button
                onClick={() => setFilterType('unread')}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  filterType === 'unread'
                    ? 'bg-[#1769FF] text-white shadow-xs'
                    : 'bg-[#F0F4FA] text-slate-600 hover:bg-[#E4ECF7]'
                }`}
              >
                Unread ({chats.filter((c) => c.unread > 0).length})
              </button>
            </div>
          </div>

          {/* Chat List Items */}
          <div className="divide-y divide-slate-100 flex-1 overflow-y-auto">
            {filteredChats.map((chat) => {
              const isSelected = selectedChatId === chat.id
              return (
                <div
                  key={chat.id}
                  onClick={() => {
                    setSelectedChatId(chat.id)
                    // Mark as read
                    setChats((prev) =>
                      prev.map((c) => (c.id === chat.id ? { ...c, unread: 0 } : c))
                    )
                  }}
                  className={`p-4 flex items-start gap-3 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#1769FF]/8 border-l-4 border-[#1769FF]'
                      : 'hover:bg-white'
                  }`}
                >
                  {/* Avatar with Online Dot */}
                  <div className="relative shrink-0">
                    <div
                      className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${chat.avatarBg} text-white flex items-center justify-center font-bold text-xs shadow-xs`}
                    >
                      {chat.avatar}
                    </div>
                    {chat.online && (
                      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white" />
                    )}
                  </div>

                  {/* Text details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <p
                        className={`text-xs font-bold truncate ${
                          isSelected ? 'text-[#1769FF]' : 'text-[#101B35]'
                        }`}
                      >
                        {chat.sender}
                      </p>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {chat.time}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium mb-1 truncate">
                      <Building2 className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="truncate">{chat.company}</span>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-1 leading-snug">
                      {chat.lastMsg}
                    </p>
                  </div>

                  {/* Unread Counter Badge */}
                  {chat.unread > 0 && (
                    <span className="w-5 h-5 rounded-full bg-[#1769FF] text-white text-[10px] font-bold flex items-center justify-center shrink-0 shadow-xs">
                      {chat.unread}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Panel: Active Chat Thread (7 or 8 cols) */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between bg-[#F8FAFD]">
          {/* Active Contact Header */}
          <div className="p-4 border-b border-[#E2E8F4] bg-white flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${activeChat.avatarBg} text-white flex items-center justify-center font-bold text-xs shadow-xs`}
                >
                  {activeChat.avatar}
                </div>
                {activeChat.online && (
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                )}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-sm text-[#101B35] leading-tight">
                    {activeChat.sender}
                  </h2>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 text-[#1769FF] text-[10px] font-semibold border border-blue-100">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Promoter
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  {activeChat.role} • {activeChat.company}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <button
                className="p-2 rounded-xl hover:bg-[#F6F9FF] hover:text-[#1769FF] border border-transparent hover:border-[#E2E8F4] transition cursor-pointer"
                title="Search conversation"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                className="p-2 rounded-xl hover:bg-[#F6F9FF] hover:text-[#1769FF] border border-transparent hover:border-[#E2E8F4] transition cursor-pointer"
                title="Options"
              >
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Stream Area */}
          <div className="p-6 space-y-4 flex-1 overflow-y-auto">
            {/* Date Tag */}
            <div className="flex items-center justify-center my-2">
              <span className="px-3 py-1 rounded-full bg-white border border-[#E2E8F4] text-[11px] font-medium text-slate-500 shadow-2xs">
                Today, October 14
              </span>
            </div>

            {currentMessages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.isMe ? 'justify-end' : 'justify-start'}`}
              >
                <div className="max-w-lg space-y-1">
                  <div
                    className={`p-4 rounded-3xl text-xs leading-relaxed shadow-xs ${
                      m.isMe
                        ? 'bg-gradient-to-r from-[#1769FF] to-[#1255db] text-white rounded-br-sm'
                        : 'bg-white border border-[#E2E8F4] text-[#101B35] rounded-bl-sm'
                    }`}
                  >
                    <p>{m.text}</p>
                  </div>

                  <div
                    className={`flex items-center gap-1 text-[10px] px-1 ${
                      m.isMe ? 'justify-end text-slate-400' : 'justify-start text-slate-400'
                    }`}
                  >
                    <span>{m.time}</span>
                    {m.isMe && (
                      <CheckCheck className="w-3.5 h-3.5 text-[#1769FF] inline" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick AI Suggestions & Input Area */}
          <div className="bg-white border-t border-[#E2E8F4] p-4 space-y-3">
            {/* Quick Action Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1 shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-[#08C7E8]" /> Quick Actions:
              </span>
              {quickReplies.map((reply, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSendMessage(reply)}
                  className="px-3 py-1 rounded-full bg-[#F6F9FF] hover:bg-[#EEF4FF] border border-[#E2E8F4] hover:border-[#1769FF]/40 text-[11px] font-medium text-slate-600 hover:text-[#1769FF] whitespace-nowrap transition cursor-pointer shrink-0"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="flex items-center gap-2"
            >
              <button
                type="button"
                className="p-2.5 rounded-xl bg-[#F6F9FF] hover:bg-[#EEF4FF] border border-[#E2E8F4] text-slate-500 hover:text-[#1769FF] transition cursor-pointer"
                title="Attach Document or Deal Memo"
              >
                <Paperclip className="w-4 h-4" />
              </button>

              <input
                type="text"
                value={msgInput}
                onChange={(e) => setMsgInput(e.target.value)}
                placeholder={`Type a secure response to ${activeChat.sender}...`}
                className="flex-1 bg-[#F6F9FF] border border-[#E2E8F4] rounded-2xl px-4 py-2.5 text-xs text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:border-[#1769FF] focus:bg-white focus:ring-3 focus:ring-[#1769FF]/10 transition"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#1769FF] to-[#08C7E8] hover:from-[#1357D6] hover:to-[#06ACC8] text-white text-xs font-bold shadow-md shadow-[#1769FF]/20 hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

