# Iron Alchemy

> 🚧 **Project Name**: "Iron Alchemy" is a working title for development purposes and may be subject to change before release.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technical Stack](#technical-stack)
- [Project Structure](#project-structure)
- [Git Workflow](#git-workflow)
  - [Branch Strategy](#branch-strategy)
  - [Branch Flow](#branch-flow)
  - [Branch Naming Convention](#branch-naming-convention)
  - [Merge Strategies](#merge-strategies)
  - [Hotfix Process](#hotfix-process)
  - [Commit Conventions](#commit-conventions)
- [Roadmap](#roadmap)
  - [Phase 1: Foundations (v0.2.x)](#phase-1-foundations-v02x)
  - [Phase 2: Tools (v0.3.x) (pre-release)](#phase-2-tools-v03x-pre-release)
  - [Phase 3: Authorization (v0.4.x)](#phase-3-authorization-v04x)
  - [Phase 4: Blog (v0.5.x) (pre-release)](#phase-4-blog-v05x-pre-release)
  - [Phase 5: Measurements (v0.6.x) (pre-release)](#phase-5-measurements-v06x-pre-release)
  - [Phase 6: Workouts (v1.x.x-beta)](#phase-6-workouts-v1xx-beta)
  - [Release: First Application Version (v1.0.0)](#release-first-application-version-v100)
  - [Future Phases](#future-phases)

## Overview

Iron Alchemy is a comprehensive web application designed for powerlifting enthusiasts, built with Next.js, React, TypeScript, and Tailwind CSS. The platform offers various tools and resources to optimize training and track progress. Using modern sports science principles, it helps athletes monitor crucial training metrics such as exertion load, relative intensity, and volume-load calculations. This data-driven approach enables smarter training decisions and helps prevent both overtraining and undertraining scenarios.

> ⚠️ **Note**: This repository contains only the frontend part of the application. A compatible backend service is required for full functionality.

## Features

### 🏋️‍♂️ Training Tools

- Load Drop Calculator
- One Rep Max Calculator
- DOTS Calculator

### 📝 Training Journal

- Log and track your workouts
- Monitor progress across different training cycles
- Visualize performance trends

### 📚 Blog

- Access articles about training techniques
- Learn about programming methodologies

### 👥 Coaching Panel

- Create and assign training plans
- Monitor client progress
- Manage multiple athletes

## Technical Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Project Structure

The project follows a modern Next.js 14 App Router structure:

```
iron-alchemy/
├── src/
│   ├── app/          # Next.js 14 App Router pages and layouts
│   ├── components/   # UI components
│   │   ├── common/   # Reusable components across the entire app
│   │   └── [page]/   # Page-specific components
│   ├── contexts/     # Context providers
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Core utilities and configurations
│   └── styles/       # Global styles
```

> Note: `[page]` represents feature-specific component directories (e.g., landing, tools, blog) that contain components used only within their respective pages.

## Git Workflow

> Note: This workflow is designed to support the phase-based development approach outlined in the project roadmap while maintaining clean version history.
> 🔄 **Future Automation**: Branch synchronization will be automated through CI/CD pipeline to eliminate manual force pushes and ensure consistent updates across all branches.

### Branch Types and Conventions

#### Long-lived Branches (use merge/pull)

- `master` - Production code
- `develop` - Integration and testing
- `feat/[phase]-develop` - Development branch for specific phase (e.g., `feat/foundations-develop`)

These shared, long-lived branches should:

- Never be rebased
- Use `pull` for updates from parent branches
- Use regular merges with `--no-ff`
- May require admin force push after syncing

#### Short-lived Branches (use rebase)

- `feat/[phase]/[name]` - Feature branches (e.g., `feat/foundations/landing-page`)
- `fix/[phase]/[name]` - Bug fixes (e.g., `fix/tools/calculator`)
- `test/[phase]/[name]` - Test additions or updates branches (e.g., `test/tools/calculator`)
- `docs/[name]` - Documentation updates (e.g., `docs/update-git-worfklow`)
- `ci/[name]` - CI/CD configuration (e.g., `ci/cascade-sync`)
- `hotfix/[name]` - Production hotfixes (e.g., `hotfix/jwt-refresh`)

These temporary branches should:

- Rebase onto their parent branch before PR
- Get deleted after merge

### Branch Flow

```
master
├── develop
│   ├── feat/[phase]-develop
│   │   ├── feat/[phase]/*
│   │   ├── test/[phase]/*
│   │   └── fix/[phase]/*
│   ├── ci/*
│   └── docs/*
└── hotfix/*
```

```
# Upstream (PRs):
Features:    feat/[phase]/[name] → feat/[phase]-develop → develop → master
Docs/CI:     (docs|ci)/[name] → develop → master
Hotfix:      hotfix/[name] → master

# Downstream (syncs):
master → develop → feat/[phase]-develop
```

### Merge Strategies

#### Into `master`:

```bash
# Always squash merge to keep master history clean
git checkout master
git merge --squash (develop | hotfix/*) # Only merge from develop or hotfix branches
```

#### Into `develop`:

```bash
# Regular merge with --no-ff to preserve feature history
git checkout develop
git merge --no-ff (feat/[phase]-develop | ci/* | docs/*)

# After release/hotfix
git checkout develop
git pull origin master
git push origin develop   # Admin might need to push
```

#### Into `feat/[phase]-develop`:

```bash
# Regular merge with --no-ff for features
git checkout feat/[phase]-develop
git merge --no-ff (feat|test|fix)/[phase]/*

# After develop updates
git checkout feat/[phase]-develop
git merge develop
git push origin feat/[phase]-develop  # Admin might need to push
```

#### Feature Development:

```bash
# Keep feature branches up-to-date with rebase
git checkout (feat|test|fix)/[phase]/[name]
git rebase feat/[phase]-develop
```

### Hotfix Process

```bash
# Create and merge hotfix
git checkout master
git checkout -b hotfix/*

# Merge to master
git checkout master
git merge --squash hotfix/*
git tag -a vX.Y.Z+1 -m "Hotfix: [description]"

# Update develop
git checkout develop
git pull origin master
git push origin develop   # Admin might need to push

# Update all [phase]-develop branches
git checkout feat/[phase]-develop
git pull origin develop
git push origin feat/[phase]-develop  # Admin might need to push
```

### Commit Conventions

Based on [Conventional Commits](https://www.conventionalcommits.org/):

```bash
type: description

# Types
feat:     New feature
fix:      Bug fix
docs:     Documentation changes
style:    Formatting, missing semi colons, etc
refactor: Code change that neither fixes a bug nor adds a feature
test:     Adding missing tests
chore:    Maintain dependencies, package updates, etc
ci:       CI/CD configuration and pipeline changes

# Examples
feat: add 1RM calculator
fix: resolve token refresh issue
docs: update git workflow
style: format component files
refactor: simplify calculator logic
test: add calculator validation tests
chore: update dependencies
ci: add cascade automation
```

## Roadmap

## Phase 1: Foundations (v0.2.x)

- [x] Environment setup (Next.js, Tailwind CSS)
- [x] Core pages setup
  - [x] Initial routing structure for `/tools`, `/dashboard`, `/blog`, `/trainer`
  - [x] Under construction page template
  - [x] Implement under construction state for all non-landing pages
- [x] Landing page (initial version)
  - [x] Hero section
  - [x] Features overview
  - [x] Reviews section (static placeholder)
  - [x] Call-to-action

## Phase 2: Tools (v0.3.x) (pre-release)

- [ ] Load Drop Calculator
- [ ] One Rep Max Calculator
- [ ] DOTS Calculator

## Phase 3: Authorization (v0.4.x)

- [ ] User login and registration
- [ ] Backend connection (API)
- [ ] Page protection with JWT tokens
- [ ] Admin panel and roles
- [ ] Review submission form
- [ ] Display approved reviews
- [ ] Review moderation (for admin)
- [ ] Integrate landing page reviews with backend API

## Phase 4: Blog (v0.5.x) (pre-release)

- [ ] Post list page (`/blog`) with SSG
- [ ] Post details page (`/blog/[slug]`) with ISR
- [ ] Post creation form (admin panel)

## Phase 5: Measurements (v0.6.x) (pre-release)

- [ ] Measurement input form
- [ ] Measurement history with table
- [ ] Data visualization (charts)

## Phase 6: Workouts (v1.x.x-beta)

- [ ] Workout creation form
- [ ] Workout history (`/dashboard/trainings`)
- [ ] Workout details (`/dashboard/trainings/[id]`)

## Release: First Application Version (v1.0.0)

**Scope:**

- Login and registration
- Workouts: history and new entries
- Measurements: table and visualizations
- Tools: load drop, one rep max, dots calculators
- Blog with post management
- Reviews with moderation

## Future Phases

- **Coaching Panel**
  - Workout creator and planner
  - Client management features for trainers
  - Ability to assign workouts to clients
  - Workout simulation

---

> Note: This project is currently under development. Some features might be in progress or subject to change.
