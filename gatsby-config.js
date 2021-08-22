const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: "https://kobevino.github.io",
    title: "kobevino",
  },
  plugins: [
    "gatsby-plugin-emotion",
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
