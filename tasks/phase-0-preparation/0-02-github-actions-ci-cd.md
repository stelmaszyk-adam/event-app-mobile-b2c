# Task 02: GitHub Actions — CI/CD

**Phase:** 0 — Preparation (Week 1-2)
**Priority:** P0
**Dependencies:** None (project scaffold must exist first)
**Reference:** `documentation/ROADMAP-mobile-b2c.md` (Section 0.5.4)

---

## Objective

Set up GitHub Actions workflows for continuous integration and continuous deployment of the React Native mobile app.

## Deliverables

### 1. CI Workflow

- [x] P0 Create `.github/workflows/ci.yml`
- [x] P0 **Triggers:** push to `develop`, push to `main`, PR to either
- [x] P0 **Steps:**
  - `pnpm install` with dependency caching (pnpm store cache)
  - `pnpm lint` — ESLint
  - `pnpm type-check` — `tsc --noEmit`

### 2. CD Workflow

- [x] P0 Create `.github/workflows/cd.yml`
- [x] P0 **Trigger:** push to `main` only
- [x] P0 **iOS build:**
  - Fastlane build for iOS (Xcode)
  - Submit to App Store via Fastlane
- [x] P0 **Android build:**
  - Fastlane build for Android (Gradle)
  - Submit to Google Play via Fastlane

### 3. OTA Updates

- [ ] P1 Configure **CodePush** (App Center) or `react-native-ota` for JS bundle hotfixes without store review
- [ ] P1 Set up OTA deployment channels per environment (development / staging / production)
- [ ] P1 Integrate OTA update push into CD workflow (optional manual trigger)

## Acceptance Criteria

- CI workflow runs on every push to `develop`/`main` and on PRs
- CI catches lint errors and type errors before merge
- CD workflow builds iOS and Android binaries on push to `main`
- CD workflow submits builds to App Store and Google Play via Fastlane
- OTA update channel is configured and tested (P1)
- Workflow uses pnpm caching for fast installs
