# Claude Master Prompt & Redesign Guide

When you upload this zip file to **Claude**, you can copy and paste the prompt below. It provides Claude with full context on our current homepage code, design tokens, color contrast standards, and exact instructions to generate **5 to 6 new homepage designs** tailored to your new content.

---

## 📋 Copy & Paste Prompt for Claude

```text
Hi Claude! I have uploaded the complete codebase, design system, and components of our current website (Peers Global).

I want you to act as an elite UI/UX Principal Designer and Senior Frontend Architect. I want you to redesign our homepage with my own new content and generate 5 to 6 distinct, production-ready homepage design concepts.

### 🎨 CRITICAL DESIGN & COLOR CONTRAST RULES:
1. Adhere to or intelligently remix our approved brand colors:
   - Primary Brand Blue: #1E4ED8 (RGB: 30, 78, 216)
   - Brand Red / Accent: #E53935 (RGB: 229, 57, 53)
   - Sky Blue / Highlight: #3B82F6 (RGB: 59, 130, 246)
   - Premium Gold: #D4AF37 (RGB: 212, 175, 55)
   - Dark Charcoal / Ink: #14151A
   - Canvas / Surface Light: #FFFFFF, #F5F7FA, #FBFAF7
   - Canvas Dark: #070D1B
2. WCAG 2.1 Contrast Standards:
   - All text must maintain minimum 4.5:1 contrast (AA) for regular text and 3:1 for large text.
   - White text on Brand Blue (#FFFFFF on #1E4ED8) is 8.6:1 (AAA Pass).
   - Ink on White (#14151A on #FFFFFF) is 16.8:1 (AAA Pass).
   - Never use Light Blue (#3B82F6) directly on White for body text (use #1E4ED8 instead).
3. Typography:
   - Primary: Poppins (Clean, geometric, modern)
   - Display / Sub-headings: Montserrat
   - Maintain a crisp visual hierarchy with uppercase letter-spaced eyebrows.

---

### 🚀 MY NEW CONTENT (Fill in or adapt):
[INSERT YOUR CONTENT HERE OR TELL CLAUDE TO ENHANCE / REVISE YOUR CURRENT CONTENT]
- Company / Brand Name: Peers Global
- Tagline / Hero Heading: [Your new headline]
- Sub-headline / Core Promise: [Your new subhead]
- Value Proposition / What we do: [Your key value points]
- Target Audience: [e.g. Founders, CXOs, High-growth business owners]
- Key Numbers / Stats to highlight: [e.g. Member counts, cities, outcomes]
- Primary Call to Action: [e.g. "Apply for Membership" / "Explore Circles"]

---

### 🎯 DELIVERABLES REQUIRED:
Please present 5 to 6 distinct homepage design concepts. For each design concept:
1. Concept Name & Philosophy (e.g. Concept 1: Institutional Authority, Concept 2: Minimalist Editorial, Concept 3: Dark Luxury / Private Club, Concept 4: High-Conversion Bold, Concept 5: Fluid Bento Grid, Concept 6: Modern SaaS / Interactive).
2. Visual Aesthetic Breakdown (Colors used, typography weights, corner radius, borders, spacing, micro-interactions).
3. Layout Structure (Hero, Value Pillars, Proof/Case Studies, Pricing/Tiers, Interactive components, Final CTA).
4. Complete Component Code (Next.js / React + Tailwind CSS or clean HTML/CSS) so I can directly drop it into my project.
5. Exact Color Contrast Check proving WCAG compliance for that design.

Start by giving me an overview of the 6 concepts and the first complete homepage design code.
```

---

## 💡 Pro-Tips for Getting the Best Results from Claude:

1. **Step-by-Step Code Generation:**
   Ask Claude to outline the 5-6 concepts first, and then generate the code for Concept 1, followed by Concept 2, etc., so Claude doesn't run into output token limits.

2. **Customizing the Sections:**
   If you want to keep some sections from our existing homepage (like the `ContrastSection`, `CirclesSection`, or `EventsSection`), tell Claude:
   *"Keep the structure of our existing CirclesSection and OutcomesSection from `components/home/sections.tsx`, but restyle them to match Concept X."*

3. **Live Testing:**
   All 5-6 concepts can be dropped directly into the `components/home/` folder or referenced in `app/page.tsx`.
