# Task 06: Social Sharing

**Phase:** 1 — Core
**Priority:** P0
**Dependencies:** `tasks/phase-1-core/1-04-detail-screens.md`
**Reference:** `documentation/ROADMAP-mobile-b2c.md §1.6`

---

## Objective

Implement native sharing from the event details screen. Users tap "Share" and choose from WhatsApp, SMS, Instagram, etc. via the OS-native share sheet.

## Deliverables

- [ ] P0 "Share" button on event details screen → opens native Share Sheet:
  - iOS: iOS Share Sheet (`Share.share()` from React Native core)
  - Android: Android Intent via the same API
  - Share payload: event title + web URL (`https://wydarzka.dev/events/:id`)
- [ ] P1 "Add to calendar" button:
  - Google Calendar: link with title/date/location parameters
  - Apple Calendar: `.ics` file generated client-side and opened via `react-native-fs`
  - Outlook: same `.ics` file
- [ ] P1 WhatsApp direct share button: `wa.me` deep link with pre-filled text (Poland = WhatsApp dominant)

## Acceptance Criteria

- Native share sheet opens on both iOS and Android
- Share URL is a valid `https://wydarzka.dev/events/:id` deep link
- Shared link opens the event details page in a browser
