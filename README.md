# K-Drishti

**See the issue. Track the action.**

K-Drishti is a responsive civic-tech platform for reporting and following illustrative community issues in Kanpur.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run `npm run build`; `npm run lint` runs Oxlint.

## Features

- Overview with community issue summaries, recent reports, and a city activity snapshot.
- Issue reporting with validation, optional local image preview, generated complaint IDs, and browser localStorage persistence.
- Complaint tracking with seeded examples and a status timeline.
- Leaflet map with fictional issue markers, category/status filters, and an accompanying list.
- Service cards that preselect the report category.
- Funding & Transparency with illustrative budgets, releases, expenditure, verification status, a project ledger, and allocation bars.
- City analytics based on the shared issue data.

All issue locations, reports, budgets, and ledger records are fictional presentation data. Reports are saved in the current browser only. The app does not upload images or connect to a municipal system. Leaflet uses OpenStreetMap tiles when an internet connection is available.

## Deploy to GitHub Pages

The repository is configured for GitHub Pages through GitHub Actions.

1. Create a public repository named `K-DRISHTI` under the target GitHub account.
2. Push the project to the repository's default branch.
3. In **Settings → Pages**, select **GitHub Actions** as the build and deployment source.
4. The workflow publishes the site at:

   `https://synapse.github.io/K-DRISHTI/`

If the repository is owned by a different account, replace `synapse` in the URL with that account's GitHub username or organization name.
