const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: "https://kobevino.github.io",
    title: "kobevino",
    social: [
      { name: 'email', url: 'mailto:kobe8vino24@gmail.com' },
      { name: 'facebook', url: 'https://www.facebook.com/kobe8vino24' },
      { name: 'twitter', url: 'https://twitter.com/_kobevino' },
      { name: 'linkedin', url: 'https://www.linkedin.com/in/kobevino' },
    ],
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", // Needed for dynamic images
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        styles: path.join(__dirname, 'src/styles'),
        layout: path.join(__dirname, 'src/layout'),
        libs: path.join(__dirname, 'src/libs'),
      }
    },
  ],
};
