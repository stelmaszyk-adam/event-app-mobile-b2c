# Task 10: ToS Acceptance & Analytics Consent

**Phase:** 1 — Core
**Priority:** P0
**Dependencies:** `tasks/phase-1-core/1-01-auth-screens.md`
**Reference:** `documentation/ROADMAP-mobile-b2c.md §1.10, §1.11`

---

## Objective

Implement ToS acceptance (required by Apple and Google) and the analytics opt-in/opt-out toggle (GDPR).

## Deliverables

### ToS Acceptance

- [ ] P0 Required ToS checkbox on registration screen (links to Privacy Policy and ToS)
- [ ] P0 Send `tos_accepted: true` + ToS version in registration API call
- [ ] P0 Re-consent screen on app launch when backend returns `TOS_ACCEPTANCE_REQUIRED`:
  - ToS summary display (or link to full text in in-app browser)
  - "I accept" → `POST /auth/tos/accept`; block app until accepted
- [ ] P0 ToS and Privacy Policy links in User Profile → Settings (open in in-app browser via `react-native-inappbrowser-reborn` or `Linking.openURL`)

### Analytics Consent

- [ ] P0 First-launch analytics disclosure: brief notice explaining what is tracked + link to Privacy Policy
- [ ] P0 Analytics opt-in/opt-out toggle in User Profile → Settings:
  - Default: opt-out (user must explicitly grant consent)
  - On opt-out: PostHog tracking completely disabled (`posthog.optOut()`)
  - Persist preference locally + sync to backend (`users.analytics_consent`)
- [ ] P0 If user opts in: initialize PostHog and start tracking key events (see task 1-11-analytics)

## Acceptance Criteria

- Cannot register without accepting ToS
- PostHog fires no events before the user explicitly opts in
- Re-consent modal blocks all navigation on app launch until accepted
