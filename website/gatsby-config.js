module.exports = {
    pathPrefix: "/react-lib-template",
    siteMetadata: {
        title: `react-lib-template`,
        description: `A sample opinionated boilerplate to build react npm packages. Uses ReactJs, Babel, SCSS and Rollup.`,
        author: `@swain_binod`,
        github: `https://github.com/binodswain`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        // {
        //   resolve: `gatsby-plugin-manifest`,
        //   options: {
        //     name: `gatsby-starter-default`,
        //     short_name: `starter`,
        //     start_url: `/`,
        //     background_color: `#663399`,
        //     theme_color: `#663399`,
        //     display: `minimal-ui`,
        //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        //   },
        // },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
