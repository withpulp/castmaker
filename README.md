<img src="static/logos/logo-1024.png" alt="Logo" width='200px' height='200px'/>

# Castmaker

A static page builder for coming soon pages powered by With Pulp.

Built with [GatsyJS](https://github.com/gatsbyjs/gatsby/).

## Features

* Blog
  * Categories
  * Tags
  * Navigation
  * Disqus
  * Share
* Subscribe
  * Mailchimp (incomplete)
    * form validation doesn't work
    * needs to be refactored (currently depends on jquery)
  * Social Media
* Counter
  * countdown from future date
  * countup from past date

## Backlog

* Create modules for containers and pages (to edit copy in single file)
* Move CSS to Glamor (or other alternative)
  * create design module to update color scheme in one place
* Configure typography to use modular scale on text
* Refactor all containers for nesting of components
  * Rename Blog to Listing or Feed
  * Merge Markdown with Article
  * Rename Subscribe to Contact or CTA
* Refactor Footer condition to show quotes on all pages except post page
* Move global element styles to typography
* Edit markup of markdown HTML renders (see marked.renderer())
* Find a way to send graphql queries up the tree into Footer (may not be possible)

## Getting Started

Install this starter (assuming [Gatsby](https://github.com/gatsbyjs/gatsby/) is installed) by running from your CLI:

```sh
gatsby new castmaker https://github.com/withpulp/castmaker
npm run develop
```

Or you can fork the project, make your changes there and merge new features when needed.

Alternatively:

```sh
git clone https://github.com/withpulp/castmaker castmaker # Clone the project
cd castmaker
rm -rf .git # So you can have your own changes stored in VCS.
npm install # or yarn
npm run develop
```

## Configuration

 Edit the export object in `data/config`:

 You can also optionally set `pathPrefix`:
 ```js
 module.exports = {
  // Note: it must *not* have a trailing slash.
       pathPrefix: '/castmaker', // Prefixes all links. For cases when deployed to withpulp.github.io/castmaker/.
}

 ```

 WARNING: Make sure to edit `static/robots.txt` to include your domain for the sitemap!
