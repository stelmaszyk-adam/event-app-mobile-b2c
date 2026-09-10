# Task 08: Deep Linking & Universal Links

**Phase:** 1 — Core
**Priority:** P0
**Dependencies:** `tasks/phase-1-core/1-04-detail-screens.md`
**Reference:** `documentation/ROADMAP-mobile-b2c.md §1.8, §1.8.1`

---

## Objective

Configure deep links so push notifications, shared event links, and web-to-app redirects all open the correct in-app screen.

## Deliverables

### URL scheme configuration

- [ ] P0 Define app URL scheme: `wydarzka://event/:id`, `wydarzka://venue/:id`, `wydarzka://verify-email`, `wydarzka://reset-password`
- [ ] P0 iOS `Info.plist`: add URL type for `wydarzka://`
- [ ] P0 Android `AndroidManifest.xml`: add intent filters for the scheme
- [ ] P0 Universal Links (iOS) + App Links (Android): associate `https://wydarzka.dev/events/:id` and `https://wydarzka.dev/venues/:id` with the app

### React Navigation linking config

- [ ] P0 Configure `linking` prop in root `NavigationContainer`:
  - `wydarzka://event/:id` → EventDetailScreen
  - `wydarzka://venue/:id` → VenueProfileScreen
  - `wydarzka://verify-email?token=` → EmailVerificationScreen
  - `wydarzka://reset-password?token=` → PasswordResetScreen
  - Unrecognized deep links → HomeScreen (graceful fallback)

### Android back button

- [ ] P0 Back from deep link target with no navigation history → HomeScreen (not app exit)
- [ ] P0 Back from tab root screens (Map, Profile) → exit app (default behavior, no interception)
- [ ] P0 Back from modals / bottom sheets → close modal, return to underlying screen
- [ ] P1 Swipe-back gesture (Android 10+): verify works with React Navigation stack

## Acceptance Criteria

- Shared `https://wydarzka.dev/events/:id` link opens EventDetailScreen on iOS and Android
- Push notification deep link opens correct screen even when app is killed
- Password reset deep link opens the correct screen and token is passed to the API call
- Unrecognized URLs open HomeScreen without crashing
