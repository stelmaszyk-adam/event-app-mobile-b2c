# Task 04: Detail Screens (Event, Venue, User Profile)

**Phase:** 1 — Core
**Priority:** P0
**Dependencies:** `tasks/phase-1-core/1-03-map-and-discovery.md`
**Reference:** `documentation/ROADMAP-mobile-b2c.md §1.4.1, §1.4.2, §1.4.3, §1.4.4, §1.4.5`

---

## Objective

Build the event detail, venue profile, and user profile screens. These are the primary screens users land on after tapping a map pin or a push notification.

## Deliverables

### Event details screen

- [ ] P0 Header: swipeable photo carousel (from `event_photos`; fallback `photo_url`), photo counter
- [ ] P0 Name, date, time, address
- [ ] P0 Description (max 500 chars; "Show more" toggle if longer)
- [ ] P0 Venue name with navigation link to venue profile screen
- [ ] P0 CTAs: "Buy tickets" (deep link to external), "Navigate" (Google Maps / Apple Maps deep link)
- [ ] P0 User actions: "Save event" (heart/bookmark), "Share" button, "Follow venue" button
- [ ] P0 Recurring event indicator: "Part of a weekly series" badge + "View all dates" link
- [ ] P0 Meta: "Report a problem" link, source attribution for aggregated events

### Venue profile screen

- [ ] P0 Swipeable photo carousel (up to 8 photos from `venue_photos`); tap → full-screen with pinch-to-zoom
- [ ] P0 Name, category, description, opening hours (including temporary closures and "open until late")
- [ ] P0 Follower count + Follow / Following toggle (prompt login on first follow)
- [ ] P0 Upcoming events list (from `GET /events?venue_id=`)
- [ ] P1 Per-venue notification mute toggle ("Mute notifications" option)

### User profile screen

- [ ] P0 Saved events list (from `GET /users/me/saved-events`)
- [ ] P0 Community Scout stats: badge level, "X events discovered" counter, "My Tips" link
- [ ] P0 Notification settings shortcut
- [ ] P0 Account settings: change password, delete account link
- [ ] P1 "My Events" screen: list of saved events sorted by date (soonest first)
- [ ] P0 Followed venues screen: list of all followed venues (accessible from user profile)

## Acceptance Criteria

- Event photo carousel swipes without jitter on iOS and Android
- "Follow venue" without login shows login prompt; after login, follow persists
- Opening hours display correctly including "Open until late" and temporary closures
- "Save event" heart persists across app restarts (via backend, not just local state)
