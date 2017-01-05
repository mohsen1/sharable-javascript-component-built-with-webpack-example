# Webpack sharable JavaScript components with assets

This is an example of sharable JavaScript components that have static assets like images.
Emitted code in `dist` folder does not include images and instead it's requiring images using `require` so user of this component can use Webpack to emit those files.
