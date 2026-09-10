# Task 05: Push Notifications

**Phase:** 1 — Core
**Priority:** P0
**Dependencies:** `tasks/phase-1-core/1-01-auth-screens.md`
**Reference:** `documentation/ROADMAP-mobile-b2c.md §1.5.1`

---

## Objective

Integrate Firebase Cloud Messaging (FCM) for Android push and APNs for iOS push via `@react-native-firebase/messaging`.

## Deliverables

- [ ] P0 Install and configure `@react-native-firebase/app` + `@react-native-firebase/messaging`
- [ ] P0 Request push permission on first "Follow venue" action (not at app launch)
- [ ] P0 Pre-permission screen: "Get notified about new events from venues you follow" before system prompt
- [ ] P0 On permission granted: register FCM token with backend (`PATCH /users/me/push-token` with token + platform + device info)
- [ ] P0 Token refresh handler: re-register on `onTokenRefresh` event
- [ ] P0 Foreground message handler: show in-app notification banner (custom component, not just a system notification)
- [ ] P0 Background/killed message handler: deep link tapped notification → event details screen
- [ ] P1 Display "Weekend Digest" push (multi-event list format)
- [ ] P1 Display "Event starts in 2 hours" reminder push
- [ ] P1 Display "Event updated" push with change summary
- [ ] P1 **Notification preferences screen** (User Profile → Notification Settings):
  - Master push toggle (links to device Settings if system permission denied)
  - Per-type toggles: New events from followed venues / Event reminders / Weekend digest / Event updates
- [ ] P1 Per-venue mute: from venue profile screen → "Mute notifications" toggle

## Acceptance Criteria

- Push permission is NOT requested on app launch — only on first "Follow venue"
- Tapping a push notification with app closed opens the correct event screen
- Token re-registers correctly when FCM token rotates
- Muting a venue stops push delivery from that venue (verified with backend)
