// @TODO: break this up into different config files
// rename parent dir from data to config
module.exports = {
  // Site Meta Config
  siteTitle: "Castmaker", // Site title.
  siteTitleAlt: "with-pulp-castmaker", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://withpulp.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/castmaker", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A static page builder for coming soon pages powered by With Pulp", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  // Lib Config
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  mailchimpAction: "//damir.us11.list-manage.com/subscribe/post?u=800bfb6e2a03c12de30b3eff1&amp;id=9a5ebe0d08", // Mailchimp form action url
  // Subscribe Form Info
  subscribeTitle: "Keep Up With Us", // Subscribe Form title.
  subscribeCaption: "Enter your email into the form below and hit subscribe to receive monthly newsletters.", // Subscribe Form caption.
  subscribeDisclaimer: "We will send regular updates to your inbox at no cost, you can unsubscribe at any time.", // Subscribe Form disclaimer message.
  // Blog Config
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogPostPrefix: "/updates",
  postDefaultCategoryID: "Updates", // Default category for posts.
  // Counter Info
  countupTitle: "You've Been Waiting For", // Title for the lazy countup counter
  countupDate: "January 1, 2017", // Date of birth for project/idea for lazy countup counter
  countdownTitle: "Ready To Launch In", // Title for the countdown counter
  countdownDate: "January 1, 2020", // Date the project or idea will be finished for countdown counter
  counterMessage: "Subscribe to our newsletter to receive monthly progress reports about the development of our product.", // Message to show below the counter
  // Author Info
  userName: "With Pulp", // Username to display in the author segment.
  userLocation: "New York, New York", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription: "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/withpulp/castmaker",
      icon: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/_withpulp",
      icon: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:damir@withpulp.com",
      icon: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. With Pulp", // Copyright string for the footer of the website and RSS feed.
  // 404 Page Config
  errorTitle: '404', // Title for 404 page
  errorCaption: 'You are lost', // Caption for 404 page
  // Design Config
  themeColor: "#aa5d4e", // Used for setting manifest and progress theme colors.
  headerColor: "#3b3c3e", // Global header font color
  bodyColor: "#515254", // Global body font color
  backgroundColor: "#fff" // Used for setting manifest background color.
};
