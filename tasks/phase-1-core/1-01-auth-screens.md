# Task 01: Auth Screens

**Phase:** 1 — Core
**Priority:** P0
**Dependencies:** `tasks/phase-0-preparation/0-00-component-library.md`
**Reference:** `documentation/ROADMAP-mobile-b2c.md §1.1, §1.10`

---

## Objective

Build the consumer authentication screens: registration, login, password reset, email verification, account deletion, and ToS acceptance.

## Deliverables

### Registration screen

- [ ] P0 Email + password form (password min 8 chars)
- [ ] P0 Google Sign In button (OAuth via `@react-native-google-signin/google-signin`)
- [ ] P0 Apple Sign In button (required for iOS App Store — `@invertase/react-native-apple-authentication`)
- [ ] P0 Required ToS checkbox: link to Privacy Policy and ToS, cannot register without checking
- [ ] P0 Send `tos_accepted: true` + current ToS version in registration API call

### Login screen

- [ ] P0 Email + password form
- [ ] P0 Google Sign In, Apple Sign In buttons
- [ ] P0 "Forgot password?" link

### Password reset screens

- [ ] P0 Enter email screen → `POST /auth/forgot-password`
- [ ] P0 Set new password screen (opened via deep link from email with `?token=`)

### Email verification screen

- [ ] P0 "Check your email" screen with resend button
- [ ] P0 Handle deep link `wydarzka://verify-email?token=` → `POST /auth/verify-email`

### Account deletion screen (GDPR)

- [ ] P0 Accessible from User Profile → Settings
- [ ] P0 Confirmation: type "DELETE" to confirm → `DELETE /users/me`
- [ ] P0 On success: clear Zustand auth store, navigate to onboarding/map

### ToS re-consent screen

- [ ] P0 Shown on app launch when backend returns `TOS_ACCEPTANCE_REQUIRED`
- [ ] P0 Full-screen modal: ToS summary + "I accept" → `POST /auth/tos/accept`
- [ ] P0 Block all app navigation until accepted

## Acceptance Criteria

- Registration with email creates account and triggers verification email
- Apple Sign In works on a physical iOS device
- Deep link from password reset email opens correct screen and submits new password
- GDPR deletion clears all local data (Zustand + AsyncStorage)
