module.exports = ({ contentPath = "data", baseUrl = "/"}) => ({
    plugins: [
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
