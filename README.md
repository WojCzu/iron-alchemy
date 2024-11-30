# Iron Alchemy

## Overview

Iron Alchemy is a comprehensive web application designed for powerlifting enthusiasts, built with Next.js, React, TypeScript, and Tailwind CSS. The platform offers various tools and resources to optimize training and track progress. Using modern sports science principles, it helps athletes monitor crucial training metrics such as exertion load, relative intensity, and volume-load calculations. This data-driven approach enables smarter training decisions and helps prevent both overtraining and undertraining scenarios.

> 🚧 **Project Name**: "Iron Alchemy" is a working title for development purposes and may be subject to change before release.

## Table of Contents

- [Features](#features)
- [Technical Stack](#technical-stack)
- [Project Structure](#project-structure)
- [Git Workflow](#git-workflow)
- [Roadmap](#roadmap)

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

Based on [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)

### Workflow Steps

1. Create a branch from `master`
2. Add commits
3. Open a Pull Request
4. Review
5. Deploy & Test
6. Merge to `master`

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

- [Phase 1: Foundations (v0.2.x)](#phase-1-foundations-v02x)
- [Phase 2: Tools (v0.3.x) (pre-release)](#phase-2-tools-v03x-pre-release)
- [Phase 3: Authorization (v0.4.x)](#phase-3-authorization-v04x)
- [Phase 4: Blog (v0.5.x) (pre-release)](#phase-4-blog-v05x-pre-release)
- [Phase 5: Measurements (v0.6.x) (pre-release)](#phase-5-measurements-v06x-pre-release)
- [Phase 6: Workouts (v1.x.x-beta)](#phase-6-workouts-v1xx-beta)
- [Release: First Application Version (v1.0.0)](#release-first-application-version-v100)
- [Future Phases](#future-phases)

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
