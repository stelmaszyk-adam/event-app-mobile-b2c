# Task 03: Map and Discovery

**Phase:** 1 — Core
**Priority:** P0
**Dependencies:** `tasks/phase-0-preparation/0-00-component-library.md`
**Reference:** `documentation/ROADMAP-mobile-b2c.md §1.3, §1.3.0, §1.3.1`

---

## Objective

Build the main map screen — the entry point of the app. MapLibre Native renders event pins; users can filter by date, category, and distance without logging in.

## Deliverables

### Main map screen

- [ ] P0 Map via `@maplibre/maplibre-react-native` (Stadia Maps tiles — see ARCHITECTURE.md ADR #17)
- [ ] P0 Geolocation: request permission on first launch; center map on user location if granted
- [ ] P0 Event pins loaded via `GET /events?lat=&lng=&radius=` — custom icon per category (12 unified categories)
- [ ] P0 Pin clustering at high zoom-out (avoid visual flood at city scale)
- [ ] P0 Event mini-card on pin click: photo, name, time, distance
- [ ] P0 Map ↔ List toggle (same data, two layouts)
- [ ] P0 **City selection:** detected from geolocation; manual override via city picker
  - Active cities list
  - "Coming soon to your city" section with "Express interest" button
  - New city request form (name + email)

### Filters

- [ ] P0 "Happening Now" filter — events in next 0–8 hours
- [ ] P0 Date filter: calendar range picker + presets (Today, Tomorrow, This weekend)
- [ ] P0 Category filter (multi-select — 12 unified categories)
- [ ] P0 Distance filter: 0.5 / 1 / 3 / 5 km radius

### Onboarding / first-time UX

- [ ] P0 Location permission rationale screen before system prompt
- [ ] P0 On location denied: city picker immediately; no automatic re-prompt
- [ ] P0 Settings redirect button: "Enable location in Settings"
- [ ] P0 Map loads WITHOUT login wall, tutorials, or carousel (map-first)
- [ ] P1 Push permission requested on first "Follow venue" action (not at launch)

### Offline / poor connectivity (P1)

- [ ] P1 Cache last-seen map data and event list (AsyncStorage / MMKV)
- [ ] P1 Offline banner + "Last updated X ago" indicator
- [ ] P1 Retry logic for failed API calls (exponential backoff, max 3 retries)
- [ ] P1 Network status indicator banner at screen top

## Acceptance Criteria

- Map loads and shows event pins without any login
- Geolocation denied → city picker appears immediately
- Category filter reduces pins to matching events only
- List view shows same events as map view
- 1000 event pins do not cause visible lag on a mid-range device
