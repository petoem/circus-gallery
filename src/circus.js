/*! circus-gallery v1.0.0 | MIT License | github.com/petoem/circus-gallery */
// Polyfills
import 'promise-polyfill/src/polyfill'
// Based on https://github.com/parcel-bundler/parcel/issues/261#issuecomment-351807677
import { render } from 'preact'
import Gallery from './component/gallery'

if (process.env.NODE_ENV === 'development') {
  // Enable preact devtools
  // eslint-disable-next-line import/no-unassigned-import
  require('preact/debug')
}

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}

export function create (mountNode, galleryData) {
  render(<Gallery data={galleryData} />, mountNode, mountNode.lastChild)
}
