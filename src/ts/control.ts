abstract class Control {
  private dataUrl: string
  private image: HTMLImageElement
  constructor (options: {[key: string]: any}) {
    this.dataUrl = options['dataUrl'] != null ? options['dataUrl'] : null
    this.image = new Image()
    this.image.src = this.dataUrl
  }
  getImageElement () {
    return this.image
  }
  setImageElement (image: HTMLImageElement) {
    this.image = image
  }
  getDataUrl () {
    return this.dataUrl
  }
  setDataUrl (dataUrl: string) {
    this.dataUrl = dataUrl
    this.image.src = this.dataUrl
  }

}
export default Control
