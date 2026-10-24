::: {align="center"}
# K-Drishti

### Your City. Your Services. Your Voice.

**A civic-tech platform for Kanpur that helps residents find the right
municipal service, report local issues, and follow progress with greater
transparency.**

Built by **Team SYNAPSE** · **IMPACTX Hackathon**

[Overview](#-overview) · [Features](#-key-features) · [Tech
Stack](#-tech-stack) · [Run Locally](#-getting-started) · [Demo
Data](#-important-demo-data-notice)
:::🏙️ Overview
Problem statement --- "Your City, Your Services"

Help residents report local issues and find the right municipal service,
with better routing and clearer updates.

Citizens can struggle to identify the correct municipal service and may
not know what happens after they submit a complaint. Reports can feel
fragmented when ownership, progress, and next steps are not visible.

K-Drishti --- K for Kanpur and Drishti for vision --- is our
response to this challenge. It brings civic reporting, service
discovery, location-based issue visibility, complaint tracking, and
public-funding information into one responsive web experience.
Our goal: Turn a complaint from a one-time submission into a
visible journey --- from reporting to tracking and understanding the
action taken.

✨ Key Features
- Civic dashboard --- View issue summaries, recent reports,
  resolution progress, and community activity.
- Find the right service --- Browse civic-service categories and
  start a report with the relevant category selected.
- Report an issue --- Submit a title, category, locality,
  description, priority, and optional image preview.
- Track a complaint --- Use a complaint reference ID to find a
  report and view its status timeline.
- Kanpur issue map --- Explore issue markers by location and
  filter reports by category or status.
- Community support --- Support issues to help surface community
  priorities.
- Funding & transparency --- Explore illustrative project budgets,
  releases, expenses, verification status, and allocation summaries.
- City analytics --- Review visual summaries generated from the
  issue dataset.
- Responsive interface --- Designed for laptop, tablet, and mobile
  screens.
- Light/dark mode --- Switch the visual theme to suit your
  preference.
🔄 How It Works
1. Discover --- Choose the municipal service or issue category that
   best matches the problem.
2. Report --- Add the issue details, locality, priority, and
   optional image preview.
3. Reference --- Receive a complaint ID that can be used to find
   the report.
4. Locate --- View the issue on the Kanpur-focused map and explore
   available filters.
5. Track --- Follow the displayed status and timeline.
6. Understand --- Explore city-level summaries and illustrative
   funding information.
🧰 Tech Stack
  Technology                          Purpose
  React                               Component-based user interface

  Vite                                Development server and production
                                      build

  JavaScript (ES modules)             Application logic

  CSS                                 Responsive styling and themes

  Leaflet + React Leaflet             Interactive issue map

  Lucide React                        Interface icons

  Browser localStorage              Persist demo reports and community
                                      support in the current browser

  OpenStreetMap tiles                 Map background when internet access
                                  is available
🚀 Getting Started
Prerequisites
- Node.js and npm installed
- Git (optional, for cloning the repository)
Run the project locally
# Clone your repository (replace with your actual GitHub repository URL)
git clone <YOUR_REPOSITORY_URL>

# Enter the project folder
cd <PROJECT_FOLDER>

# Install dependencies
npm install

# Start the development server
npm run dev
Open the local address printed in the terminal by Vite.
Production build
npm run build
npm run preview
Useful project commands
npm run dev             # Start the local development server
npm run build           # Create the production build in dist/
npm run preview         # Preview the production build locally
npm run lint             # Run Oxlint
npm run validate:issues  # Run issue-data validation
npm run validate:support # Run support-data validation
🌐 Deployment
This project uses Vite, so the deployment configuration depends on
the hosting provider and repository URL.

For GitHub Pages: 1. Push the project source to a GitHub repository. 2.
If deploying to a project site such as
https://<username>.github.io/<repository>/, configure Vite's base in
vite.config.js to '/<repository>/' before building. For a
user/organization site at https://<username>.github.io/, the base is
usually '/'. 3. Run npm run build. 4. Publish the generated dist/
directory using GitHub Actions or your chosen Pages workflow. 5. Open
Settings → Pages in the repository and confirm the deployment source
and published URL.

Live demo: Add your deployed URL here after hosting:
YOUR_LIVE_DEMO_URL
🧪 Demo Scope & Data Notice
K-Drishti is a hackathon prototype, not a live municipal service.
- The issue reports, locations, engagement counts, status summaries,
  budgets, expenses, and project-ledger records shown in the demo are
  fictional illustrative data.
- Funding values are demonstration figures and must not be
  interpreted as real government accounts or expenditure.
- New reports and support selections are stored in the browser's
  localStorage; they are not sent to a central server and may not
  appear on another device or browser.
- The current prototype does not connect to Kanpur Nagar Nigam or any
  official municipal complaint system.
- Optional images are handled as a local preview in the interface; the
  app does not upload them to a backend.
- Map tiles are provided by OpenStreetMap when an internet connection
  is available.
🛣️ Roadmap
The presentation outlines a staged delivery path:
- Phase 1 --- Core civic loop: Responsive reporting, complaint
  tracking, map, and seeded demo data.
- Phase 2 --- Transparency and analytics: Funding visibility,
  analytics, and project-verification workflows.
- Phase 3 --- Future capability: AI-assisted camera detection for
  potholes and work zones, with map layers for awareness and planning.
AI-assisted camera detection is a planned capability, not a feature
represented as already implemented. Any future deployment would need to
address data quality, privacy, false positives, ownership handoffs, and
public adoption.
👥 Team
Team SYNAPSE --- IMPACTX Hackathon
- Ashish
- Aseem
- Ruthvik
- Hitesh
🎯 Why K-Drishti?
Traditional reporting can leave residents wondering what happened after
they pressed Submit. K-Drishti brings the report, location, status,
responsible service area, and related illustrative project information
into a clearer civic journey.

See the issue. Track the action. Build trust through visibility.
::: {align="center"}
**K-Drishti · Connecting Citizens, Streamlining Services, Transforming
Kanpur**

Made for **IMPACTX Hackathon** by **Team SYNAPSE**.
:::
