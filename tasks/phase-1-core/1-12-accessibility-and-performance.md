# Task 12: Accessibility, Performance Budget & Splash Screen

**Phase:** 1 — Core
**Priority:** P0
**Dependencies:** `tasks/phase-1-core/1-03-map-and-discovery.md`
**Reference:** `documentation/ROADMAP-mobile-b2c.md §1.12, §1.13, §1.14`

---

## Objective

Meet accessibility requirements (WCAG AA on mobile), enforce the performance budget, and configure the branded splash screen and app icon.

## Deliverables

### Accessibility (§1.12)

- [ ] P0 All interactive elements ≥ 44×44pt (Apple HIG) / 48×48dp (Material Design)
- [ ] P0 `accessibilityLabel` on all buttons, icons, and interactive elements (especially map pins and icon-only buttons)
- [ ] P0 Color contrast: text and interactive elements meet WCAG AA (4.5:1 normal, 3:1 large text)
- [ ] P1 Dynamic type support (iOS): respect system font size settings for core text elements
- [ ] P1 VoiceOver (iOS) and TalkBack (Android) navigation verified for: map → event details → follow venue → share

### Performance budget (§1.13)

- [ ] P0 App binary < 50 MB (monitor in CI build size report; audit dependencies if over target)
- [ ] P0 Cold start to interactive map < 3 seconds on mid-range device (iPhone 12, Samsung Galaxy A54)
- [ ] P1 Peak memory usage < 300 MB during map interaction with 1000+ pins (measure with Xcode Instruments / Android Profiler)

### Splash screen & app icon (§1.14)

- [ ] P0 Branded splash screen via `react-native-splash-screen`:
  - App logo centered on brand primary background (`#4900cc`)
  - Smooth transition to map screen (no white flash)
  - Keep splash visible until initial data loads (map tiles + nearby events)
- [ ] P0 App icon:
  - iOS: 1024×1024 source in Xcode asset catalog (auto-generates all sizes)
  - Android: adaptive icon (foreground layer + brand-color background layer)
  - Matches design tokens from `documentation/designs/DESIGN.md`

## Acceptance Criteria

- Accessibility Inspector (Xcode) / Accessibility Scanner (Android) find no critical tap target violations
- Cold start measured at < 3s on iPhone 12 in Release mode
- Splash screen appears immediately on launch with no white frame before the map
