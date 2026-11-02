'use client'

import React, { useState } from 'react'
import { FormQuestion } from '@/lib/api/leadership'
import { Video, Calendar, Upload, UploadCloud, FileVideo, X, Link as LinkIcon, CheckCircle2 } from 'lucide-react'

interface DynamicFormFieldProps {
  question: FormQuestion
  value: unknown
  onChange: (value: unknown) => void
  error?: string
}

export function DynamicFormField({ question, value, onChange, error }: DynamicFormFieldProps) {
  const { question_key, label, field_type, is_required, placeholder, options, help_text } = question

  // State for video fields: toggle between URL and file upload
  const [videoMode, setVideoMode] = useState<'url' | 'file'>('url')
  const [videoFile, setVideoFile] = useState<{ name: string; size?: number } | null>(null)

  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setVideoFile({ name: file.name, size: file.size })
      // Generate a client-safe URL reference or blob URL
      const fileUrl = URL.createObjectURL(file)
      onChange(fileUrl)
    }
  }

  const handleRemoveVideoFile = () => {
    setVideoFile(null)
    onChange('')
  }

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <label
          htmlFor={question_key}
          className="block text-xs md:text-sm font-bold text-slate-900"
        >
          {field_type === 'video_url' ? 'Candidate Pitch Video' : label}
          {is_required && <span className="text-[#E11D48] ml-1 font-bold">*</span>}
        </label>

        {/* Video Type Mode Switcher: Link vs File Upload */}
        {field_type === 'video_url' && (
          <div className="inline-flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            <button
              type="button"
              onClick={() => {
                setVideoMode('url')
                if (videoFile) {
                  setVideoFile(null)
                  onChange('')
                }
              }}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                videoMode === 'url'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <LinkIcon className="w-3 h-3 text-slate-500" />
              Video Link (YouTube/Drive)
            </button>
            <button
              type="button"
              onClick={() => {
                setVideoMode('file')
                onChange('')
              }}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                videoMode === 'file'
                  ? 'bg-white text-[#1D4ED8] shadow-2xs font-bold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Upload className="w-3 h-3 text-[#1D4ED8]" />
              Upload Video File
            </button>
          </div>
        )}
      </div>

      {/* TEXT / NUMBER / VIDEO URL / DATE */}
      {field_type === 'text' && (
        <input
          id={question_key}
          type="text"
          value={(value as string) || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || 'Enter your response...'}
          required={is_required}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-sm focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] focus:outline-none transition-all placeholder:text-slate-400 shadow-xs"
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
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-sm focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] focus:outline-none transition-all placeholder:text-slate-400 shadow-xs"
        />
      )}

      {/* VIDEO URL OR DIRECT FILE UPLOAD */}
      {field_type === 'video_url' && (
        <div>
          {videoMode === 'url' ? (
            <div className="relative">
              <input
                id={question_key}
                type="url"
                value={(value as string) || ''}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder || 'https://youtube.com/watch?v=... or Vimeo, Loom, Google Drive link'}
                required={is_required}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-sm focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] focus:outline-none transition-all placeholder:text-slate-400 shadow-xs"
              />
              <Video className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            </div>
          ) : (
            <div>
              {!videoFile ? (
                <label
                  htmlFor={`file-upload-${question_key}`}
                  className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300 hover:border-[#1D4ED8] rounded-2xl bg-white hover:bg-blue-50/40 transition-all cursor-pointer group"
                >
                  <input
                    id={`file-upload-${question_key}`}
                    type="file"
                    accept="video/mp4,video/webm,video/quicktime,video/x-m4v,video/*"
                    onChange={handleVideoFileChange}
                    className="hidden"
                  />
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-[#1D4ED8] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    Click to browse video file or drag &amp; drop
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1">
                    Accepted formats: MP4, MOV, WebM (Recommended max 150MB)
                  </span>
                </label>
              ) : (
                <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/70 flex items-center justify-between gap-3 shadow-2xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0">
                      <FileVideo className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 truncate">
                        {videoFile.name}
                      </div>
                      <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>
                          {videoFile.size ? `${(videoFile.size / (1024 * 1024)).toFixed(1)} MB` : 'Attached'} · Video File Uploaded
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveVideoFile}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer shrink-0"
                    title="Remove uploaded video"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
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
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-sm focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] focus:outline-none transition-all shadow-xs"
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
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-sm focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] focus:outline-none transition-all placeholder:text-slate-400 shadow-xs"
        />
      )}

      {/* SELECT */}
      {field_type === 'select' && (
        <select
          id={question_key}
          value={(value as string) || ''}
          onChange={(e) => onChange(e.target.value)}
          required={is_required}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-sm focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] focus:outline-none transition-all shadow-xs"
        >
          <option value="">-- Select an option --</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value} className="text-slate-900 bg-white">
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {/* DECLARATION / CHECKBOX */}
      {field_type === 'declaration' && (
        <label className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-300 cursor-pointer hover:bg-slate-50 transition-colors shadow-xs">
          <input
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => onChange(e.target.checked)}
            required={is_required}
            className="w-4 h-4 rounded border-slate-300 text-[#1D4ED8] accent-[#1D4ED8] focus:ring-[#1D4ED8] mt-0.5 cursor-pointer"
          />
          <span className="text-xs font-semibold text-slate-900 leading-relaxed">
            I confirm and endorse this declaration unconditionally.
          </span>
        </label>
      )}

      {help_text && <p className="text-[11px] text-slate-500 font-medium">{help_text}</p>}
      {error && <p className="text-[11px] text-rose-600 font-semibold">{error}</p>}
    </div>
  )
}
