# Task 00: Component Library — Mobile B2C

**Phase:** 0 — Preparation (Week 1-2)
**Priority:** P0
**Dependencies:** None (project scaffold must exist first)
**Reference:** `documentation/ROADMAP-mobile-b2c.md` (Section 0.4.2), `documentation/designs/DESIGN.md`

---

## Objective

Build the core mobile component library using NativeWind (Tailwind for React Native), consuming design tokens from "The Radiant Curator" design system. Set up Zustand for client state management.

## Deliverables

### 1. UI Framework Setup

- [x] P0 **NativeWind** configured as UI framework (Tailwind for React Native) — decision documented in ARCHITECTURE.md ADR #14
- [x] P0 **Zustand** configured for state management — decision documented in ARCHITECTURE.md ADR #18
  - Used for: auth state, selected city, filter state, cached user preferences
  - API/server state handled by orval-generated Axios functions

### 2. Core Components

- [x] P0 **Button** — primary, secondary, ghost, destructive variants with loading state
- [x] P0 **Text / Heading** — using typography scale from design tokens
- [x] P0 **Card** — event card, venue card, mini-card
- [x] P0 **Input / TextArea / Select** — form components
- [x] P0 **Badge** — category badge, status badge
- [x] P0 **Avatar** — venue photo, user photo
- [x] P0 **Bottom Sheet** — event details, filters
- [x] P0 **Tab Bar / Navigation** — bottom tab navigation
- [x] P0 **Empty State** — no results, no connection
- [x] P0 **Skeleton loaders** — for map cards, lists

### 3. Map-Specific Components

- [x] P1 **Custom map pin** — per-category icon + color (12 unified categories)
- [x] P1 **Map mini-card** — photo + name + time + distance (shown on pin click)
- [x] P1 **Cluster indicator** — cluster visualization at high zoom-out

### 4. Image Placeholder / Loading Strategy

- [x] P1 **Placeholder images** — branded fallback per category when venues/events have no photos
- [x] P1 **Progressive image loading** — blur hash / LQIP from Cloudflare Images
- [x] P1 **Broken image fallbacks** — graceful fallback to placeholder on load error

## Acceptance Criteria

- NativeWind is configured and Tailwind classes work in React Native components
- Zustand stores are set up for auth state, selected city, filter state, and user preferences
- All P0 core components render correctly on both iOS and Android
- Components consume design tokens (colors, typography, spacing) from the design system
- Skeleton loaders display appropriately while data is loading
- Components are accessible (proper `accessibilityLabel`, adequate tap target sizes)
