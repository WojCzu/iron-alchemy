# Iron Alchemy

> 🚧 **Project Name**: "Iron Alchemy" is a working title for development purposes and may be subject to change before release.

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

## Roadmap

## Phase 1: Foundations (v0.2.x)

- [x] Environment setup (Next.js, Tailwind CSS)
- [ ] Core pages setup
  - [ ] Initial routing structure for `/login`, `/register`, `/tools`, `/journal`, `/blog`, `/coaching`
  - [ ] Under construction page template
  - [ ] Implement under construction state for all non-landing pages
- [ ] Landing page (initial version)
  - [ ] Hero section
  - [ ] Features overview
  - [ ] Testimonials section (static placeholder)
  - [ ] Call-to-action

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
- [ ] Update landing page testimonials with backend reviews

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

Scope:

- Login and registration
- Workouts: history and new entries
- Measurements: table and visualizations
- Tools: load drop, one rep max, dots calculators
- Blog with post management
- Reviews with moderation

### **Future Phases**

- **Coaching Panel**
  - Workout creator and planner
  - Client management features for trainers
  - Ability to assign workouts to clients
  - Workout simulation

---

> Note: This project is currently under development. Some features might be in progress or subject to change.
