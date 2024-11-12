# BookWorm Website

This is the code for BookWorm's website, aimed at showcasing the BookWorm Project

## Technical Setup

This is a React + TypeScript application hosted on GitHub Pages. The website is served at:

- `https://bookwormio.com`
- `https://www.bookwormio.com`
- `https://bookwormio.github.io`

## Development

This project uses Yarn as its package manager. To get started with local development:

### Install dependencies:

```bash
yarn install
```

### Start the development server:

```bash
yarn start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deployment

Deployment is handled automatically through GitHub Actions. When you push to the main branch:

1. A GitHub Action workflow triggers
2. The application is built
3. The built files are deployed to GitHub Pages

You don't need to run any deployment commands manually - just commit and push your changes!

## Domain Setup

The domain routing is configured using AWS Route 53:

- Domain records for `bookwormio.com` and `www.bookwormio.com` are managed in Route 53
- These domains are configured to point to our GitHub Pages site (`bookwormio.github.io`)
- The CNAME record in this repository ensures GitHub Pages serves the site at our custom domain

## Available Scripts

- `yarn start` - Runs the app in development mode
- `yarn test` - Launches the test runner
- `yarn build` - Builds the app for production

## GitHub Pages Configuration

The site is configured to deploy automatically to GitHub Pages through the `gh-pages` branch. The workflow file can be found in `.github/workflows/deploy.yml`.
