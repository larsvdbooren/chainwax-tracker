# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Working with this user

Lars leert React, Next.js, shadcn/ui en de rest van de stack. Houd hier rekening mee:

- Geef bij elke code-wijziging uitleg over *waarom* iets werkt, niet alleen *wat* er staat.
- Schrijf kleine stukjes code per keer zodat Lars bij kan houden wat er verandert en vragen kan stellen voor je verder gaat.
- Als je een concept introduceert dat nieuw kan zijn (Server Components, Server Actions, hooks, etc.), leg het kort uit.
- Vraag tussendoor of iets duidelijk is als je een grote stap neemt.

## Commands

```bash
npm run dev      # start dev server (Next.js 16, Turbopack)
npm run build    # production build
npm run lint     # ESLint
```

No test runner is configured yet.

## Project purpose

**Chainwax Tracker** — a Strava-connected web app that tracks bicycle chain wear per bike and per chain, and notifies the user when a chain needs waxing or replacement. See `Vision.md` for the full design spec (in Dutch) and `V0.md` for the initial scope.

## Stack

- **Next.js 16** (App Router) with React 19 and the React Compiler (`reactCompiler: true` in `next.config.ts`)
- **Tailwind CSS v4** — configured via CSS imports in `src/app/globals.css` (`@import "tailwindcss"`, no `tailwind.config.js`)
- **shadcn/ui** with `radix-nova` style, `lucide-react` icons; components live in `src/components/ui/`; add new ones with `npx shadcn add <component>`
- **Database**: not yet wired up — the design doc recommends Supabase or Neon (Postgres)
- **Auth**: not yet wired up — planned as Strava OAuth

## Key architectural decisions (from Vision.md)

- **Ride-to-bike matching ladder**: Strava Gear ID → activity type → manual "Unassigned rides" inbox
- **Chain km are computed, not stored**: `current_cycle_km` = sum of activities since last WaxEvent; `total_km` = sum of all non-excluded activities. The chain's initial odometer reading is stored as a synthetic Activity with `match_source = baseline`.
- **Two wear thresholds per chain**: wax interval (km) and replacement threshold (km + rotation count); warnings fire when either is reached.
- **Notifications are idempotent**: flags on Chain (`last_wax_notif_at`, `replacement_notif_sent`) prevent duplicate sends.
- **No historical import**: users enter current odometer at chain creation; the app only tracks forward from that point.

## Tailwind v4 note

Tailwind v4 uses CSS-first configuration. All theme tokens and custom variants are declared in `src/app/globals.css` with `@theme inline { … }`. There is no `tailwind.config.js`. Use CSS variables for colors (`--color-primary`, etc.) rather than arbitrary values.

## shadcn/ui note

The `components.json` uses `"style": "radix-nova"` — this is the newer shadcn style variant. Path aliases: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`.
