# Peers Global — Homepage Redesign Package

This package contains the complete, current homepage code, components, global styles, brand guidelines, and color contrast specifications for **Peers Global**. It is packaged specifically for you to upload to Claude (or any designer/LLM) to generate **5 to 6 brand-new homepage design concepts** with your own content.

---

## 📦 What's Inside This Package

```
peers-global-homepage-redesign-kit/
│
├── README.md                           # This file
├── COLOR_CONTRAST_AND_DESIGN_SYSTEM.md # Detailed WCAG color contrast, tokens, & rules
├── CLAUDE_PROMPT_REDESIGN_GUIDE.md     # Copy-paste prompt ready for Claude
│
├── app/
│   ├── page.tsx                        # Current Homepage route & section assembly
│   ├── layout.tsx                      # Root layout, fonts (Poppins, Montserrat), metadata
│   └── globals.css                     # Global styles, Tailwind setup, and 5 design presets (d1-d5)
│
├── components/
│   ├── home/                           # All 10 homepage section components
│   │   ├── hero.tsx                    # Main hero section with dual CTAs & trust stats
│   │   ├── sections.tsx                # Journey, Leadership, Unity, Closing sections
│   │   ├── circles-section.tsx         # Interactive Circles browser
│   │   ├── contrast-section.tsx        # "Other Networks vs Peers Global" matrix
│   │   ├── lsr-section.tsx             # LSR Framework
│   │   ├── outcomes-section.tsx        # Quantified proof points
│   │   ├── stories-section.tsx         # Member stories & testimonials
│   │   ├── membership-section.tsx      # Criteria & application tiers
│   │   ├── events-section.tsx          # Events calendar & roundtables
│   │   └── video-testimonials-section.tsx
│   │
│   ├── site/                           # Global site layout components
│   │   ├── site-header.tsx             # Navigation bar with mega-menus
│   │   ├── site-footer.tsx             # Comprehensive footer with legal & chapters
│   │   ├── logo.tsx                    # SVG brand emblem and wordmark
│   │   ├── ui.tsx                      # Button, Card, Badge, and utility elements
│   │   └── global-floating-trigger.tsx
│   │
│   └── design/                         # Real-time multi-theme switcher components
│       ├── design-provider.tsx         # Context provider for instant theme switching
│       └── design-switcher.tsx         # Floating preview toolbar
│
├── lib/
│   ├── data/site.ts                    # All site content, navigation, copy, stats, & FAQs
│   └── design.ts                       # Design direction definitions & color swatches
│
├── brand_assets/
│   └── brand_guidelines.txt            # Official brand voice, typography, & logo usage rules
│
├── public/                             # Brand icons, logo files, and placeholders
├── design_showcase.html                # Standalone interactive showcase of 5 design concepts
└── peers_global_content_spec.txt       # Complete textual content specification
```

---

## 🚀 How to Use with Claude

1. **Upload the Zip File:**
   Upload `peers-global-homepage-redesign-kit.zip` to your Claude conversation.
2. **Copy the Prompt:**
   Open `CLAUDE_PROMPT_REDESIGN_GUIDE.md`, copy the master prompt, fill in your new content (or ask Claude to write it for your niche), and send it to Claude.
3. **Review 5-6 Concepts:**
   Claude will read the exact files, adhere to the color contrast ratios (`#1E4ED8`, `#E53935`, `#FFFFFF`, `#14151A`), and output 5-6 high-fidelity designs ready to be implemented.
