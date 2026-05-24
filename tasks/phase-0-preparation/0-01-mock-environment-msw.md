# Task 01: Mock Environment (MSW) — Mobile B2C

**Phase:** 0 — Preparation (Week 1-2)
**Priority:** P0
**Dependencies:** None (project scaffold must exist first)
**Reference:** `documentation/ROADMAP-mobile-b2c.md` (Section 0.4.7), `documentation/ROADMAP.md` (Section 0.4.6), `documentation/ARCHITECTURE.md` (Section 5.2.1)

---

## Objective

Set up Mock Service Worker (MSW) for the mobile app so frontend development can proceed independently of the backend API. MSW intercepts network requests and returns mock responses matching the backend OpenAPI spec.

## Deliverables

### 1. MSW Installation

- [x] P0 Install `msw` as a dev dependency

### 2. Mock Handlers

- [x] P0 Create `src/mocks/` directory
- [x] P0 Create MSW handlers matching backend OpenAPI spec
  - Auth endpoints (login, register, verify email, password reset)
  - Events endpoints (list, detail, search, filters)
  - Venues endpoints (list, detail, follow/unfollow)
  - User endpoints (profile, saved events, followed venues)
  - Tips endpoints (submit, list user tips)

### 3. Server Interceptor Setup

- [x] P0 Create `src/mocks/server.ts` — MSW runs as Node.js server interceptor in React Native
- [x] P0 Configure MSW to start before the app initializes (conditional on environment variable)

### 4. Environment Configuration

- [x] P0 Environment variable toggle: `API_MOCKING=true` to enable mock mode
- [x] P0 Create `.env.mock` file with `API_MOCKING=true` and other mock-specific config
- [x] P0 Add `pnpm start:mock` script in `package.json` that loads `.env.mock`

## Acceptance Criteria

- Running `pnpm start:mock` starts the app with MSW intercepting all API calls
- Mock handlers return realistic data matching the OpenAPI spec shape
- Running without `API_MOCKING=true` (normal mode) makes real API calls — no MSW interference
- MSW server starts cleanly without errors on both iOS and Android simulators
- Adding new mock handlers is straightforward (documented pattern in `src/mocks/`)
