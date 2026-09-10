# Task 07: Event Submission & Community Scout

**Phase:** 1 — Core
**Priority:** P0/P1
**Dependencies:** `tasks/phase-1-core/1-01-auth-screens.md`
**Reference:** `documentation/ROADMAP-mobile-b2c.md §1.7, §1.7.1`

---

## Objective

Build two user contribution flows: the full event submission form (P1) and the lightweight Community Scout event tip bottom sheet (P0).

## Deliverables

### Community Scout — Event Tips (P0)

- [ ] P0 Floating action button (FAB) on home/map screen — "Know about an event?" — glassmorphic, above bottom navigation
- [ ] P0 Event tip bottom sheet (minimal form):
  - Link (URL — optional)
  - Photo (camera or gallery, upload to Cloudflare R2 — optional)
  - Title (optional)
  - Date picker (optional)
  - Category (single select from 12 — optional)
  - Note (max 500 chars — optional)
  - Validation: at least one of link, photo, or title+note required
  - Submit → `POST /event-tips`
  - Confirmation: "Thanks! We'll review your tip and publish it if it checks out."
- [ ] P0 "My Tips" in user profile: list with status badges (Pending / Approved / Rejected / Published); tap published → event detail
- [ ] P0 Scout badge on user profile (based on `scout_level` from API): new / scout / top_scout
- [ ] P0 "Tipped by @username" attribution on event detail screen for community-sourced events
- [ ] P1 Push notification when tip approved/converted → tapping opens the event

### Event submission form (P1)

- [ ] P1 "Submit an event" screen (accessible from user profile or FAB secondary option):
  - Event name (required)
  - Date and time (required, must be future date)
  - Category (required)
  - Address or select from venue list
  - Description (optional, max 500 chars)
  - Photo (optional, upload)
  - Ticket link (optional)
- [ ] P1 Submission status screen: Pending / Approved / Rejected + reason shown in "My Submissions"

## Acceptance Criteria

- Scout FAB visible on map screen without login
- Tip submission requires at least one of link, photo, or title+note
- Scout badge updates when API returns a new `scout_level`
- "Tipped by" attribution appears on events sourced from community tips
