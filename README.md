# Gatsby themes

With `yarn workspaces`, graphql, and more.

## Theme

The theme itself is rather primitive proof of concept. It is stored in `gatsby-theme-events` and published to `npm` at `@rosnovsky/gatsby-theme-events`.

## Site

`site` folder contains a developer version of the site; it has been used to develop the theme.

## Theme Test

In `theme-test` folder there's an actual `gatsby` website that utilizes the theme. It uses it as a dependency from `npm`, and intentionally overrides it using _component shadowing_ technique.

## Try it!

To try the final website with the theme applied but not overridden by the _component shaddowing_, go to `theme-test` folder, delete `components` folder inside of `src/@rosnovsky/gatsby-theme-events`, and run `gatsby develop`. The resulting website will have its header color overridden, and if you want this override removed, just comment appropriate lines in `theme.js` in the same folder.
