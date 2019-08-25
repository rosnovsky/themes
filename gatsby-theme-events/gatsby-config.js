module.exports = ({ contentPath = "data", baseUrl = "/"}) => ({
    plugins: [
        'gatsby-theme-ui',
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: contentPath
            },
        },
        {
            resolve: "gatsby-transformer-yaml",
            options: {
                typeName: "Event"
            }
        }
    ]
})
