![deploy-website](https://github.com/fweinaug/wikini-website-v2/workflows/deploy-website/badge.svg)

# Wikini for Wikipedia Website

Website for the Windows 10/11 (UWP) app [Wikini for Wikipedia](https://github.com/fweinaug/wikini/), built with [Gatsby](https://www.gatsbyjs.org/) and [Bulma](https://bulma.io/).

During build, it automatically reads the release notes (JSON) from the app's repository and generates an overview page for all releases.

## Development

Running the website locally requires a [GitHub access token](https://github.com/settings/tokens) to generate the release notes.

Use the following command to run the website locally:

`GITHUB_ACCESS_TOKEN=<your-token> npm start`

## Deployment

The website is deployed automatically after each push to this repository.
Also, after each push to the [app repository](https://github.com/fweinaug/wikini/) to update the release notes.
