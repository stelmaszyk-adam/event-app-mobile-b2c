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

- [~] P1 Configure **CodePush** (App Center) or `react-native-ota` for JS bundle hotfixes without store review — deferred: Microsoft retired App Center, including CodePush, on 2025-03-31, so this can no longer target App Center; a replacement OTA provider (e.g. a self-hosted `microsoft/code-push-server`, `react-native-ota-hot-update`, or similar) must be chosen before this can be implemented; see `tasks/phase-4-testing/4-01-e2e-and-launch.md` §4.2
- [~] P1 Set up OTA deployment channels per environment (development / staging / production) — deferred: channel names/keys depend on the OTA provider chosen above, which no longer exists (App Center retired 2025-03-31); see `4-01-e2e-and-launch.md` §4.2
- [~] P1 Integrate OTA update push into CD workflow (optional manual trigger) — deferred: the `deploy-ota` job previously added here called `appcenter codepush release-react`, but App Center/CodePush was retired by Microsoft on 2025-03-31 and can never work; removed from `cd.yml` until an OTA provider is chosen in `4-01-e2e-and-launch.md` §4.2, then this job (and its manual `workflow_dispatch` trigger, guarded so it cannot also run `build-ios`/`build-android`) can be added for real

## Acceptance Criteria

- CI workflow runs on every push to `develop`/`main` and on PRs
- CI catches lint errors and type errors before merge
- CD workflow builds iOS and Android binaries on push to `main`
- CD workflow submits builds to App Store and Google Play via Fastlane
- OTA update channel is configured and tested (P1) — deferred, see §3 above
- Workflow uses pnpm caching for fast installs
