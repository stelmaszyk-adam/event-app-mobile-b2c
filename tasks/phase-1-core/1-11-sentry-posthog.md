# Task 11: Error Monitoring & Analytics (Sentry + PostHog)

**Phase:** 1 — Core
**Priority:** P0
**Dependencies:** `tasks/phase-1-core/1-10-tos-and-consent.md`
**Reference:** `documentation/ROADMAP-mobile-b2c.md §1.10.1, §1.11`

---

## Objective

Configure Sentry for crash reporting and PostHog for product analytics. PostHog must only initialize after the user explicitly grants analytics consent.

## Deliverables

### Sentry (`@sentry/react-native`)

- [ ] P0 Install and configure `@sentry/react-native` (run `npx @sentry/wizard -i reactNative`)
- [ ] P0 Capture unhandled JS exceptions and native crashes
- [ ] P0 Attach `userId` and `correlationId` (from API responses) to error reports
- [ ] P0 Source maps upload in CI build hooks for readable stack traces in Sentry dashboard
- [ ] P0 Set `environment`: `development` / `staging` / `production`

### PostHog (`posthog-react-native`)

- [ ] P0 Install `posthog-react-native`
- [ ] P0 Initialize PostHog ONLY after user grants analytics consent (see task 1-10)
- [ ] P0 `posthog.identify(userId)` on login; `posthog.reset()` on logout
- [ ] P0 Track key events:
  - `app_open`, `map_view`, `event_detail_view`
  - `venue_follow`, `venue_unfollow`
  - `navigate_tap`, `ticket_link_tap`
  - `push_received`, `push_opened`
  - `event_share`
  - `search_performed`, `search_zero_results`
  - `event_tip_submitted`, `event_tip_view_status`

## Acceptance Criteria

- Sentry receives a test crash on all environments (call `Sentry.captureException(new Error('Sentry test'))`)
- PostHog dashboard shows no events until user opts in
- Source maps uploaded during CI build make stack traces readable in Sentry
