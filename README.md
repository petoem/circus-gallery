<p align="center">
  <img width="225" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@11/svg/1f3aa.svg">
  <h2 align="center">Circus Gallery</h2>
  <p align="center">~30KB (gziped) Javascript lightbox gallery<p>
  <p align="center">
    <a href="https://github.com/petoem/circus-gallery/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square"></a>
    <a href="https://github.com/petoem/circus-gallery/releases"><img src="https://img.shields.io/github/release/petoem/circus-gallery.svg?style=flat-square"></a>
  </p>
</p>

Uses [`Preact`](https://github.com/developit/preact), [`react-images`](https://github.com/jossmac/react-images) for lightbox, [`parcel`](https://github.com/parcel-bundler/parcel) for bundling and a `Gallery` component from a previous project of mine.

![circus-gallery demo image](https://raw.githubusercontent.com/petoem/circus-gallery/master/demo.gif)

## Installation

Embed the `dist/circus.js` file into your document.

```html
<script src="https://cdn.jsdelivr.net/gh/petoem/circus-gallery@1/dist/circus.js"></script>
```

## Usage

Add a div to your HTML document. (This div element will hold the gallery.)

```html
<div id="gallery"></div>
```

Finally you need to create the gallery and supply it a list of images.

```js
circusGallery.create(document.getElementById('gallery'), [
    {
      title: "Random example",
      images: [
        {
          src: "https://example.com/image_1.jpg",
          caption: "Random 1",
          alt:"1"
        },
        {
          src: "https://example.com/image_2.jpg",
          caption: "Random 2",
          alt:"2"
        },
        ...
      ]
    },
    {
      title: "Some more example images",
      images: [
        {
          src: "https://example.com/image_3.jpg",
          caption: "More 1",
          alt:"1"
        },
        ...
      ]
    },
    ...
  ]);
```

## Bookmarking images

`window.location.hash` is used to make an open image bookmarkable. A `base64` encoded version of the image `src` is used as a `hash` value.

## Contributing

1. [Fork it!](https://github.com/petoem/circus-gallery/fork)
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

## Contributors

- [petoem](https://github.com/petoem) Michael Petö - creator, maintainer

## License

Code licensed under the MIT [License](https://github.com/petoem/circus-gallery/blob/master/LICENSE)

Circus Tent image from [Twitter Emoji (Twemoji)](https://github.com/twitter/twemoji)

Example photos from [Unsplash Source](https://source.unsplash.com/)
