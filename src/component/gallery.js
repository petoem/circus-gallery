import { Component } from 'preact'
import { StyleSheet, css } from 'aphrodite/no-important'
import Lightbox from 'react-images'

const columnCount = 4

class Gallery extends Component {
  getImageList = () => [].concat(...this.props.data.map(({ images }) => images))

  render ({ data }) {
    return (
      <div>
        <Overlay images={this.getImageList()} />
        { data.map(content => <Category {...content} />) }
      </div>
    )
  }
}

class Overlay extends Component {
  constructor () {
    super()
    this.state = {
      lightboxIsOpen: false,
      currentImage: -1
    }

    window.onhashchange = (e) => {
      if (!this.state.lightboxIsOpen) {
        this.openLightboxHash()
      } else {
        const hashIndex = this.getImageIndex(window.location.hash.slice(1))
        if (hashIndex !== this.state.currentImage) {
          this.openLightboxHash()
        }
      }
    }
  }

  lightboxProps = {
    backdropClosesModal: true,
    enableKeyboardInput: true,
    showCloseButton: true,
    showImageCount: true,
    preventScroll: true,
    onClose: () => {
      this.setState({ lightboxIsOpen: false })
      window.history.pushState(null, null, window.location.pathname)
    },
    onClickPrev: () => {
      this.prevImage()
      window.location.hash = `#${window.btoa(this.props.images[this.state.currentImage].src)}`
    },
    onClickNext: () => {
      this.nextImage()
      window.location.hash = `#${window.btoa(this.props.images[this.state.currentImage].src)}`
    },
    theme: {
      container: {
        background: 'rgba(255, 255, 255, 0.9)'
      },
      close: {
        fill: 'rgba(0, 0, 0, 0.7)'
      },
      arrow: {
        fill: 'rgba(0, 0, 0, 0.7)'
      },
      footer: {
        color: 'black'
      }
    }
  }

  componentDidMount () {
    this.openLightboxHash()
  }

  openLightboxHash = () => {
    const currentImage = this.getImageIndex(window.location.hash.slice(1))
    this.setState({
      lightboxIsOpen: currentImage !== -1,
      currentImage: currentImage
    })
  }

  getImageIndex = (id) => this.props.images.findIndex((image) => window.btoa(image.src) === id)

  nextImage = () => this.setState({ currentImage: this.state.currentImage + 1 })

  prevImage = () => this.setState({ currentImage: this.state.currentImage - 1 })

  render ({ images }) {
    return (
      <Lightbox
        {...this.lightboxProps}
        images={this.props.images}
        currentImage={this.state.currentImage}
        isOpen={this.state.lightboxIsOpen && this.state.currentImage !== -1}
      />
    )
  }
}

const Category = ({ title, images }) => {
  const renderData = new Array(columnCount).fill([]).map(x => x.slice(0))
  images.forEach((image, index) => {
    renderData[index % columnCount].push(image)
  })
  return (
    <div className={css(styles.container)}>
      <h1 className={css(styles.title)}>{title}</h1>
      {/* <pre>{JSON.stringify(renderData, null, 2)}</pre> */}
      { renderData.map(column => <div className={css(styles.column)}>{column.map(image => <img className={css(styles.image)} src={image.src} alt={image.alt} onClick={() => { window.location.hash = `#${window.btoa(image.src)}` }} />)}</div>) }
    </div>
  )
}

const styles = StyleSheet.create({
  title: {
    width: '100%'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: 0,
    paddingRight: 4,
    width: '100%'
  },
  column: {
    flex: '25%',
    maxWidth: '25%',
    paddingTop: 0,
    paddingRight: 15,
    '@media (max-width: 768px)': {
      flex: '50%',
      maxWidth: '50%'
    },
    '@media (max-width: 450px)': {
      flex: '100%',
      maxWidth: '100%',
      paddingRight: 0
    }
  },
  image: {
    width: '100%',
    height: 'auto',
    marginTop: '8px',
    verticalAlign: 'middle',
    filter: 'brightness(1)',
    transition: 'filter .4s ease-out',
    ':hover': {
      filter: 'brightness(0.5)'
    }
  }
})

export default Gallery
