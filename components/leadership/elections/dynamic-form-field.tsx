'use client'

import React from 'react'
import { FormQuestion } from '@/lib/api/leadership'
import { Upload, Video, Calendar, CheckSquare } from 'lucide-react'

interface DynamicFormFieldProps {
  question: FormQuestion
  value: unknown
  onChange: (value: unknown) => void
  error?: string
}

export function DynamicFormField({ question, value, onChange, error }: DynamicFormFieldProps) {
  const { question_key, label, field_type, is_required, placeholder, options, help_text } = question

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={question_key}
        className="block text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200"
      >
        {label}
        {is_required && <span className="text-red-500 ml-1 font-bold">*</span>}
      </label>

      {/* TEXT / NUMBER / VIDEO URL / DATE */}
      {field_type === 'text' && (
        <input
          id={question_key}
          type="text"
          value={(value as string) || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || 'Enter your response...'}
          required={is_required}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all placeholder:text-slate-400"
        />
      )}

      {field_type === 'number' && (
        <input
          id={question_key}
          type="number"
          value={value !== undefined && value !== null ? String(value) : ''}
          onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))}
          placeholder={placeholder || '0'}
          min={question.validation_rules?.min}
          max={question.validation_rules?.max}
          required={is_required}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all placeholder:text-slate-400"
        />
      )}

      {field_type === 'video_url' && (
        <div className="relative">
          <input
            id={question_key}
            type="url"
            value={(value as string) || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder || 'https://youtube.com/watch?v=...'}
            required={is_required}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all placeholder:text-slate-400"
          />
          <Video className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        </div>
      )}

      {field_type === 'date' && (
        <div className="relative">
          <input
            id={question_key}
            type="date"
            value={(value as string) || ''}
            onChange={(e) => onChange(e.target.value)}
            required={is_required}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
          />
          <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        </div>
      )}

      {/* TEXTAREA */}
      {field_type === 'textarea' && (
        <textarea
          id={question_key}
          rows={3}
          value={(value as string) || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || 'Write your response here...'}
          required={is_required}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all placeholder:text-slate-400"
        />
      )}

      {/* SELECT */}
      {field_type === 'select' && (
        <select
          id={question_key}
          value={(value as string) || ''}
          onChange={(e) => onChange(e.target.value)}
          required={is_required}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
        >
          <option value="">-- Select an option --</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {/* DECLARATION / CHECKBOX */}
      {field_type === 'declaration' && (
        <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-100 transition-colors">
          <input
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => onChange(e.target.checked)}
            required={is_required}
            className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 mt-0.5"
          />
          <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            I confirm and endorse this declaration unconditionally.
          </span>
        </label>
      )}

      {help_text && <p className="text-[11px] text-slate-500 dark:text-slate-400">{help_text}</p>}
      {error && <p className="text-[11px] text-red-500 font-medium">{error}</p>}
    </div>
  )
}
