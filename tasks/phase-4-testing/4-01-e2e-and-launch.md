# Task 01: E2E Tests, OTA Updates & App Store Submission

**Phase:** 4 — Testing & Launch
**Priority:** P0
**Dependencies:** All phase-1 tasks complete
**Reference:** `documentation/ROADMAP-mobile-b2c.md §4.1, §4.2, §4.3`

---

## Objective

Write critical E2E tests, configure CodePush for OTA updates, and prepare all App Store / Google Play submission assets.

## Deliverables

### E2E Tests (§4.1)

- [ ] P0 E2E: event discovery → follow venue → receive push → navigate (full happy path)
- [ ] P0 Push delivery tests: verify push arrives on physical iOS device (APNs) and Android device (FCM)
- [ ] P0 Load test: map with 1000+ pins renders without lag on mid-range phone (manual test or scripted)
- [ ] P1 Accessibility: color contrast check, tap target sizes audit (Accessibility Inspector / Scanner)
- [ ] P1 Beta test with 20–30 real users (TestFlight + Android beta channel)

### OTA Updates / CodePush (§4.2)

- [ ] P0 Configure CodePush (App Center) or `react-native-ota`:
  - Deployment channels: development / staging / production
  - Background update check on app launch (non-blocking)
  - End-to-end OTA update flow tested before launch
- [ ] P1 OTA rollback procedure: document process for rolling back a bad bundle via CodePush if crash rate spikes > 5%

### App Store Submission (§4.3)

- [ ] P0 **iOS (App Store):**
  - App icon 1024×1024, screenshots (iPhone 6.5", iPad optional)
  - App description in EN + PL
  - Privacy Policy URL at `https://wydarzka.dev/privacy`
  - Apple Privacy Nutrition Labels: email, location (while using), analytics identifiers; data linked/not linked to user; ATT prompt if needed
- [ ] P0 **Android (Google Play):**
  - Icon, feature graphic, screenshots
  - Description EN + PL
  - Google Play Data Safety section (same data categories as Apple labels; declare sharing with PostHog, Sentry)
- [ ] P0 Submit both for review (Apple 24-48h, Google Play a few hours)
- [ ] P1 App Store Optimization: keywords (events nearby, what to do today, events warsaw), iOS subtitle: "Find events in your area"
- [ ] P0 Universal Links (iOS) + App Links (Android) verified end-to-end before submission

## Acceptance Criteria

- All P0 E2E tests pass on physical iOS and Android devices
- CodePush OTA update delivers a new JS bundle without App Store review
- Both stores approve the submissions
