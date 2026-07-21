# ROHITH.OS

MASTER SPECIFICATION

PART 5 — TECHNICAL ARCHITECTURE & IMPLEMENTATION

===========================================================
MISSION
===========================================================

The codebase should be as impressive as the UI.

A developer reading the repository should think:

"This is maintainable."

"This is scalable."

"This is production quality."

===========================================================
ARCHITECTURE PRINCIPLES
===========================================================

1.

Single responsibility.

2.

Reusable components.

3.

Composition over duplication.

4.

Accessibility by default.

5.

Performance first.

6.

Mobile-first responsive design.

7.

Truthful content only.

===========================================================
TECH STACK
===========================================================

Framework

React + TypeScript

Build Tool

Vite

Routing

React Router

Styling

Tailwind CSS

Animations

GSAP

Framer Motion (only where appropriate)

Icons

Lucide React

3D (minimal)

Three.js + React Three Fiber

Forms

React Hook Form

Validation

Zod

State

Zustand

Data Fetching

TanStack Query (if needed)

Charts

Recharts

Markdown

react-markdown

Deployment

GitHub Pages / Vercel

===========================================================
PROJECT STRUCTURE
===========================================================

src/

app/

components/

features/

pages/

layouts/

hooks/

contexts/

store/

lib/

utils/

constants/

types/

styles/

assets/

data/

animations/

services/

===========================================================
COMPONENT RULES
===========================================================

Every component should:

Have a single purpose.

Be reusable.

Accept typed props.

Avoid unnecessary state.

Expose only required APIs.

===========================================================
FEATURE MODULES
===========================================================

Hero

Projects

Knowledge Graph

Production Journey

Recruiter Mode

Command Palette

AI Assistant

Contact

Each feature owns:

components/

hooks/

types/

data/

styles/

===========================================================
STATE MANAGEMENT
===========================================================

Global state only for:

Theme

Recruiter Mode

Command Palette

Search

AI Assistant

Everything else should remain local.

===========================================================
DATA MODEL
===========================================================

Store portfolio content as structured data.

Example:

projects.json

experience.json

technologies.json

certifications.json

timeline.json

Avoid hardcoding content inside components.

===========================================================
CONTENT STRATEGY
===========================================================

All text should be editable
without changing UI components.

Separate:

Content

Presentation

Logic

===========================================================
ANIMATION ARCHITECTURE
===========================================================

Create reusable hooks.

Examples

useReveal()

useScrollProgress()

usePipelineAnimation()

useKnowledgeGraph()

Avoid animation code inside JSX.

===========================================================
DESIGN TOKENS
===========================================================

Centralize

Colors

Spacing

Typography

Border radius

Shadows

Motion durations

Never duplicate values.

===========================================================
PERFORMANCE
===========================================================

Lazy load:

Heavy sections

Three.js

Knowledge Graph

AI Assistant

Architecture Explorer

Code split routes.

Preload critical assets.

===========================================================
IMAGE STRATEGY
===========================================================

Use modern formats.

AVIF

WebP

Responsive images.

Lazy loading.

Proper dimensions.

===========================================================
ICON STRATEGY
===========================================================

Use Lucide only.

Consistent sizing.

Consistent stroke width.

===========================================================
ACCESSIBILITY
===========================================================

Semantic HTML.

ARIA labels.

Keyboard navigation.

Focus trapping.

Reduced motion support.

Screen reader testing.

===========================================================
SEO
===========================================================

Unique page titles.

Meta descriptions.

Open Graph tags.

Twitter cards.

Structured data (JSON-LD).

Canonical URLs.

Sitemap.

Robots.txt.

===========================================================
RESPONSIVENESS
===========================================================

Breakpoints

Mobile

Tablet

Laptop

Desktop

Ultra-wide

Every feature tested independently.

===========================================================
ERROR BOUNDARIES
===========================================================

Wrap major feature modules.

Provide graceful recovery.

Never crash the application.

===========================================================
FORMS
===========================================================

React Hook Form

Zod validation

Inline errors

Accessible labels

Success confirmation

Spam protection

===========================================================
COMMAND PALETTE
===========================================================

Index:

Projects

Technologies

Experience

Education

Commands

Search should be fuzzy.

Keyboard-first.

===========================================================
AI ASSISTANT
===========================================================

Knowledge source:

Local JSON/Markdown.

No invented facts.

Deterministic responses.

Future-ready for RAG.

===========================================================
KNOWLEDGE GRAPH
===========================================================

Represent as graph data.

Nodes

Edges

Categories

Evidence links

Projects

Experience

===========================================================
TESTING
===========================================================

Unit Tests

Utility functions

Hooks

Core components

Integration Tests

Navigation

Search

Recruiter Mode

Command Palette

Accessibility Tests

Keyboard

Focus

Contrast

Screen readers

===========================================================
CODE QUALITY
===========================================================

ESLint

Prettier

TypeScript strict mode

No unused imports

No console logs in production

Consistent naming

===========================================================
GIT STRATEGY
===========================================================

Meaningful commits.

Feature branches.

Conventional commit messages.

Example

feat(hero): redesign hero section

fix(search): improve fuzzy matching

===========================================================
CI/CD
===========================================================

GitHub Actions

↓

Install

↓

Lint

↓

Type Check

↓

Test

↓

Build

↓

Deploy

===========================================================
SECURITY
===========================================================

No secrets in repository.

Environment variables.

Input sanitization.

Dependency auditing.

===========================================================
PERFORMANCE TARGETS
===========================================================

Lighthouse

Performance >95

Accessibility >100 (target 100)

Best Practices >100 (target 100)

SEO >100 (target 100)

First Contentful Paint <1.5s

Largest Contentful Paint <2.5s

Interaction to Next Paint <200ms

===========================================================
DOCUMENTATION
===========================================================

README should include:

Overview

Architecture

Features

Setup

Development

Deployment

Folder structure

Future roadmap

===========================================================
FUTURE EXTENSIBILITY
===========================================================

Portfolio should support:

New projects

New technologies

Blog

Speaking

Research

Publications

Without restructuring.

===========================================================
SUCCESS
===========================================================

The repository should be understandable
within 10 minutes by another engineer.

The architecture should support
years of future growth without major rewrites.

END PART 5
