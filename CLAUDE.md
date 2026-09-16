# mobile-b2c — React Native (CLI) consumer app for Wydarzka

No Expo. The workspace-level `../CLAUDE.md` describes the multi-repo setup and the task pipeline.

## Commands (from the workspace root: `pnpm -C mobile-b2c <script>`)

```bash
pnpm start            # metro
pnpm start:mock       # metro with MSW mocking (API_MOCKING=true)
pnpm ios | android    # needs a simulator/emulator — not available in the pipeline
pnpm lint             # eslint .
pnpm type-check       # tsc --noEmit
pnpm test             # jest (unit: stores, utils, components with RNTL)
```

Native projects: `ios/Wydarzka` (bundle id / package `com.wydarzka`), `android/app/src/main/java/com/wydarzka`. Builds via Fastlane, OTA via CodePush, push via `@react-native-firebase/messaging`.

## Layout

- `App.tsx` entry, navigation set up by the phase-1 tasks (React Navigation).
- `src/components/` shared UI (Button, Card, Input, Badge, Avatar, Skeleton, EmptyState, TabBar, BottomSheetWrapper, Typography), exported from `index.ts`.
- `src/stores/` Zustand stores (`auth-store`, `city-store`, `filter-store`, `preferences-store`), re-exported from `index.ts`. Persisted slices use the existing persistence helper; never store tokens outside the auth store.
- `src/theme/tokens.ts` design tokens; NativeWind classes via `tailwind.config.ts` and `global.css`.
- `src/mocks/` MSW server + handlers mirroring the backend contract.
- API client generated with orval into `src/api/generated/` (added by the api-client task); never hand-write fetch URLs.
- Tests under `__tests__/` or next to the file as `*.test.tsx`.

## Conventions

- Screens are thin: data via the generated API functions + Zustand; presentational components in `src/components`.
- Every user-facing string through react-i18next with `pl` and `en` resources; device locale from `react-native-localize`.
- Icons from `react-native-vector-icons`; splash via `react-native-splash-screen`.
- Design system "Radiant Curator" (`documentation/designs/DESIGN.md`): use `src/theme/tokens.ts`, no 1px borders, glass surfaces for floating elements.
- Accessibility props (`accessibilityRole`, `accessibilityLabel`) on every touchable; 44pt minimum hit targets.
- Performance: FlatList/FlashList for lists, memoized items, images with caching.
- Strict TypeScript, exact dependency versions, no `any`, no `@ts-ignore`, no `eslint-disable` to hide real errors.

## Task files

Work is defined in `tasks/<phase>/*.md`. Progress is the checkboxes inside those files; `CURRENT_TASK.md` is generated (`python3 scripts/task-utils.py sync mobile-b2c` from the root). Tick an item only when code and tests exist and lint/type-check/test pass; use `- [~] … — deferred: reason` for anything that needs a device, store credentials or staging.
