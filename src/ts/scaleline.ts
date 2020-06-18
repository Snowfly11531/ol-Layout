import Control from './control'
import Map from 'ol/Map'
import { ScaleLine as OlScaleLine } from 'ol/control'
class Scaleline extends Control {
  map: Map
  barPercent: number
  fontPercent: number
  texts: HTMLCollectionOf<SVGTextElement>

  constructor (options: {[key: string]: any}) {
    super(options)
    this.map = options['map']
    let myOlScaleLine = new OlScaleLine({
      units: 'metric',
      bar: true,
      steps: 4,
      text: true,
      minWidth: 140
    })
    let embedElement = document.createElement('embed')
    embedElement.src = this.getDataUrl()
    embedElement.type = 'image/svg+xml'
    document.body.appendChild(embedElement)
    let div = null
    let imageurl = null
    embedElement.onload = () => {
      embedElement.height = '40'
      let svgElement = embedElement.getSVGDocument().documentElement
      div = document.createElement('div')
      div.appendChild(svgElement)
      let texts = svgElement.getElementsByTagName('text')
      this.texts = texts
      this.barPercent = parseInt(this.texts[this.texts.length - 1].getAttribute('x'),10) / 100.0
      this.fontPercent = ((100 - parseInt(this.texts[0].getAttribute('y'),10)) / 100.0)
      imageurl = 'data:image/svg+xml;utf8,' + div.innerHTML
      this.getImageElement().src = imageurl
      this.getImageElement().height = 40
      console.log(imageurl)
      console.log(this.barPercent)
    }
    console.log(myOlScaleLine.getProperties())
    this.map.addControl(myOlScaleLine)
    console.log(this.map)
    this.map.getView().on('change:resolution',() => {
      let resolution = this.map.getView().getResolution()
      console.log(resolution)
      let minwidth = 140
      let testScales = [1,2,5]
      let scale = 0
      while (scale === 0) {
        for (let i = 0;i < testScales.length;i++) {
          if (testScales[i] / resolution > minwidth) {
            scale = testScales[i]
            break
          }
          testScales[i] *= 10
        }
      }
      console.log(scale)
      console.log(this.barPercent)
      let width = Math.floor((scale / resolution) / this.barPercent)
      embedElement.width = width.toString()
      let scaleNum = scale
      let scaleUnits = 'm'
      if (scaleNum > 1000) {
        scaleNum /= 1000
        scaleUnits = 'km'
      }
      while (true) {
        if (this.texts != null) {
          break
        }
      }
      let innerTexts = this.texts
      console.log(innerTexts)
      innerTexts[0].innerHTML = '0'
      innerTexts[1].innerHTML = scaleNum / 2.0 + scaleUnits
      innerTexts[2].innerHTML = scaleNum + scaleUnits
      let fontSize = Math.floor(this.fontPercent * embedElement.clientHeight)
      for (let i = 0;i < 3;i++) {
        innerTexts[i].setAttribute('y','100%')
        innerTexts[i].setAttribute('style','font-size:' + fontSize + 'px;text-anchor: middle')
      }
      innerTexts[0].setAttribute('style','font-size:' + fontSize + 'px;text-anchor: start')
      innerTexts[2].setAttribute('x','100%')
      innerTexts[2].setAttribute('style','font-size:' + fontSize + 'px;text-anchor: end')
      imageurl = 'data:image/svg+xml;utf8,' + div.innerHTML
      this.getImageElement().width = width
      this.getImageElement().src = imageurl
    })
  }
}
export default Scaleline
