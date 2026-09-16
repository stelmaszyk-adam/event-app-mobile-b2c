# Task Sequence — mobile-b2c

> **Do not edit ticks or the Next line by hand.** Progress is derived from the
> `[ ]`/`[x]` checkboxes inside each task file. Regenerate this file with
> `python3 scripts/task-utils.py sync mobile-b2c` (run from the workspace root).

**Next:** `tasks/phase-0-preparation/0-02-github-actions-ci-cd.md`

---

## How to run the task loop

From the workspace root (one task file per fresh Claude session, with plan →
implement → verify → review → commit):

```
./scripts/run-tasks.sh mobile-b2c              # run until done or blocked
./scripts/run-tasks.sh mobile-b2c --max-tasks 1
./scripts/run-tasks.sh mobile-b2c --dry-run
```

Interactive alternative inside this repo: open the file named in **Next**,
implement its open items, tick each `[x]` only once the code and tests exist,
run `pnpm lint && pnpm type-check` (backend/mobile: also `pnpm test`), then run
`sync` again.

---

## Task Sequence

### Phase 0 — Preparation
- [x] `tasks/phase-0-preparation/0-01-mock-environment-msw.md`
- [ ] `tasks/phase-0-preparation/0-02-github-actions-ci-cd.md` *(3 open)*
- [ ] `tasks/phase-0-preparation/0-00-component-library.md` *(6 open)*

### Phase 1 — Core
- [ ] `tasks/phase-1-core/1-01-auth-screens.md` *(18 open)*
- [ ] `tasks/phase-1-core/1-03-map-and-discovery.md` *(20 open)*
- [ ] `tasks/phase-1-core/1-04-detail-screens.md` *(19 open)*
- [ ] `tasks/phase-1-core/1-05-push-notifications.md` *(12 open)*
- [ ] `tasks/phase-1-core/1-06-social-sharing.md` *(3 open)*
- [ ] `tasks/phase-1-core/1-07-event-submission.md` *(8 open)*
- [ ] `tasks/phase-1-core/1-08-deep-linking.md` *(9 open)*
- [ ] `tasks/phase-1-core/1-09-i18n.md` *(7 open)*
- [ ] `tasks/phase-1-core/1-10-tos-and-consent.md` *(7 open)*
- [ ] `tasks/phase-1-core/1-11-sentry-posthog.md` *(9 open)*
- [ ] `tasks/phase-1-core/1-12-accessibility-and-performance.md` *(10 open)*

### Phase 4 — Testing & Launch
- [ ] `tasks/phase-4-testing/4-01-e2e-and-launch.md` *(12 open)*

### Phase 5 — Post-Launch (P2 — after PMF validation)
- [ ] `tasks/phase-5-postlaunch/5-01-postlaunch-overview.md` *(6 open)*
