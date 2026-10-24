<div align="center">

K-Drishti
See the issue. Track the action.
A Kanpur-focused civic-tech demo for reporting community issues, tracking complaint progress, and exploring public-service transparency.

Features · Tech Stack · Run Locally · Deploy · Demo Data Notice
</div>

🌆 About the Project
K-Drishti is a responsive civic-services prototype designed around a simple idea: residents should be able to raise local concerns, follow their progress, and better understand how civic projects are presented. The interface is themed for Kanpur and is intended for hackathon demonstrations and prototyping.
✨ Features
- Civic overview — a dashboard of issue summaries, recent reports, and city activity.
- Report an issue — submit a concern with a category, locality, description, and optional image preview.
- Track a complaint — find a complaint by its generated ID and view its status timeline.
- City issue map — explore demo issue markers on a Leaflet map, with category/status filters and a corresponding list.
- Community support — support an issue and see support counts in the demo interface.
- City services — service cards can take users to the report flow with a relevant category selected.
- Funding & transparency — inspect illustrative project budgets, releases, expenditure, verification indicators, and expense records.
- City analytics — view summaries derived from the app's issue data.
- Responsive interface — navigation and layouts designed for desktop and smaller screens.
🧰 Tech Stack
- React 19 — UI components
- Vite 8 — development server and production build
- JavaScript (ES modules)
- CSS — application styling and theme
- Leaflet + React Leaflet — interactive map
- Lucide React — interface icons
- Browser localStorage — local persistence for reports and support selections
- OpenStreetMap tiles — map tiles when an internet connection is available
🚀 Getting Started
Prerequisites
Install a current Node.js LTS version compatible with the Vite version in package.json, plus npm.
Install and run
git clone https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPOSITORY-NAME>.git
cd <YOUR-REPOSITORY-NAME>
npm install
npm run dev
Open the local URL printed in the terminal (usually http://localhost:5173).
Available scripts
npm run dev             # Start the Vite development server
npm run build           # Create the production build in dist/
npm run preview         # Preview the production build locally
npm run lint            # Run Oxlint
npm run validate:issues # Run issue validation checks
npm run validate:support # Run support repository validation checks
🌐 Deploy to GitHub Pages
This repository includes a GitHub Actions workflow at .github/workflows/deploy.yml to build and publish the Vite site to GitHub Pages.
1. Create a GitHub repository and push the project files to its main branch. Do not upload node_modules/.
2. On GitHub, open Settings → Pages.
3. Under Build and deployment, choose GitHub Actions as the source.
4. Push to main (or manually run the workflow from Actions → Deploy to GitHub Pages).
5. When the workflow succeeds, GitHub Pages will show the published site URL in Settings → Pages.
Your URL will generally follow this format:
https://<YOUR-GITHUB-USERNAME>.github.io/<YOUR-REPOSITORY-NAME>/
Replace the placeholders with your actual GitHub username and repository name. The public link becomes live only after the repository is pushed and the Pages workflow completes successfully.
🧪 Validation Notes
The uploaded archive includes a previously generated dist/ build. During this review, the source tree and package scripts were inspected, but a fresh production build could not be completed from the bundled node_modules: its Vite executable did not have execute permission and the bundled Rolldown native binding for this environment was missing. Run npm install followed by npm run build in a clean environment before publishing.
⚠️ Important Demo Data Notice
K-Drishti is a prototype, not an official Kanpur government service. All seeded civic issues, project budgets, expenditure figures, verification indicators, and ledger records are fictional demonstration data. They must not be presented as real government records.
- New reports and support selections are stored in the visitor's browser using localStorage.
- Data is not sent to a municipal authority or shared with other users.
- Clearing browser storage may remove locally saved demo data.
- The map uses online OpenStreetMap tiles and therefore requires internet access for the map background.
- This prototype does not provide authenticated accounts, a production backend, or official complaint submission.
🔮 Future Improvements
- Add a secure backend and database for shared reports.
- Add user authentication and role-based access for residents and administrators.
- Connect complaint status to verified municipal workflows.
- Replace fictional funding records with authenticated, sourced public data before any real-world deployment.
- Add automated accessibility and end-to-end tests.
🤝 Contributing
Contributions and suggestions are welcome. For changes, create a branch, make a focused update, and open a pull request describing the change and how it was tested.
<div align="center">

K-Drishti · Civic technology for a more connected city

Built as a hackathon demonstration.
</div>
