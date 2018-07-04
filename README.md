# Pellego

A simple viewer for reading texts.

Pellego is designed to view texts, marked up according to the LombardPress XML Schema (a customization of the broader TEI Schema).

You can run this application as it own website to display your text, or you can embed it with your project site.

## Note

To build the electron app, the `homepage` value in the package.json needs to be set to "./".
Then the build needs to be run with `$ npm run build`.
Then electron can be run with `npm run electron` or `npm run eclectron-packager`

When deploying to github pages the `homepage` should be set to the github pages url, e.g. http://lombardpress.org/pellego or http://<username>.github.io/pellego
