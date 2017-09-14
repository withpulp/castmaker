<img src="static/logos/logo-1024.png" alt="Logo" width='200px' height='200px'/>

# Castmaker

A static page builder for coming soon pages powered by With Pulp.

Built with [GatsyJS](https://github.com/gatsbyjs/gatsby/).

## Features

* Markdown Blog
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

* Create reusable templates for different pages
  * Can use single template for: `/updates`, `/updates/categories/`, `/updates/tags/`
  * Homepage template (unique)
  * About Page Template (default page template)
* Create a remark plugin for gatsby
  * See this issue https://github.com/gatsbyjs/gatsby/issues/1997
  * Use this plugin as example: https://github.com/zestedesavoir/zmarkdown/tree/master/packages/remark-align

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

 ### Pages and Templates

 * Edit export objects for pages in `data/pages`
 * Edit export objects for templates in `data/templates`

 These objects are options for the containers and components used on the pages

## Deployment

Add your domain to `src/CNAME`

To deploy to github pages run: `build:gh`

Make sure you update your registrars DNS to point to github's IP
