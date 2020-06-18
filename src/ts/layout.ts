import Map from 'ol/Map'
import View from 'ol/View'
import { Tile as TileLayer } from 'ol/layer'
import { OSM } from 'ol/source'
import Control from './control'
import DropDownBox from './dropdownbox'

class Layout {
  layoutNode: HTMLElement // layout Dom Element
  controlContainerNode: HTMLElement
  layoutFrameNode: HTMLElement  // layoutFrame Dom Element
  controlSelectNode: HTMLElement
  currentWidth: number
  currentControl: Control
  dropdownbox: DropDownBox
  map: Map
  refMap: Map
  layoutBorderWidth: number = 2
  controlMap = {
    '指北针': ['Compass','./compass'],
    '比例尺' : ['Scaleline','./scaleline'],
    '文字': ['TextCtl','./text']
  }
  constructor (options: {[key: string]: any; }) {

    if (options['target'] != null) {
      // 设置基本框架/div位置
      this.layoutFrameNode = document.getElementById(options['target'])
      this.layoutNode = document.createElement('div') as HTMLElement
      this.controlSelectNode = document.createElement('input') as HTMLElement
      this.controlSelectNode.setAttribute('type','dropdown')
      this.controlSelectNode.setAttribute('list',`["指北针","比例尺","文字"]`)
      this.controlContainerNode = document.createElement('div') as HTMLElement
      this.layoutFrameNode.appendChild(this.layoutNode)
      this.layoutFrameNode.appendChild(this.controlSelectNode)
      this.layoutNode.appendChild(this.controlContainerNode)
      this.layoutNode.style.position = 'absolute'
      this.controlSelectNode.style.position = 'absolute'
      this.controlContainerNode.style.position = 'absolute'
      this.controlContainerNode.style.height = '100%'
      this.controlContainerNode.style.width = '100%'
      this.controlContainerNode.style.zIndex = '10'
      this.resize(this.layoutNode)
      window.addEventListener('resize',this.resize.bind(this,this.layoutNode))

      // 设置参考图层和控件容器
      this.map = new Map({
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: [0,0],
          zoom: 2
        })
      })
      this.map.setTarget(this.layoutNode)
      if (options['refMap'] != null) {
        this.refMap = options['refMap']
        this.refMap.getTargetElement().addEventListener('mouseup',this.refMapChange.bind(this))
        this.refMap.getTargetElement().addEventListener('mousewheel',this.refMapChange.bind(this))
      }
      // (this.layoutNode.getElementsByClassName('ol-viewport')[0].
      //   getElementsByClassName('ol-overlaycontainer-stopevent')[0] as HTMLElement).style.display = 'none'

      this.dropdownbox = new DropDownBox({
        target: this.controlSelectNode
      })
      this.dropdownbox.on('select:change',() => {
        let value = this.dropdownbox.target.value
        value = '文字'
        console.log(value)
        console.log()
        // let controlname = this.controlMap[value][0]
        let importUrl = this.controlMap[value][1]
        let myControl = require(`${importUrl}`).default
        let control: Control
        control = new myControl({ dataurl: '' })
        this.currentControl = control
      })
            // 设置需要插入的控件
      // this.dropdown = new DropDown({
      //   target: this.controlSelectNode,
      //   text: '插入控件',
      //   nameLists: ['指北针','比例尺','标题'],
      //   appendLists: [new Compass({ dataUrl: require(`../image/compass.svg`) }),
      //     new Scaleline({
      //       dataUrl: require(`../image/scaleline.svg`),
      //       map: this.map
      //     }),
      //     new Compass({})]
      // })
      // this.dropdown.on('selectChange',(args) => {
      //   if (args !== null) {
      //     this.currentControl = args[1]
      //   } else {
      //     this.currentControl = null
      //   }
      // })

      // 设置控件容器div
      this.controlContainerNode.addEventListener('click',(e) => {
        if (this.currentControl != null) {
          let image = this.currentControl.getImageElement()

          image.style.position = 'absolute'
          image.style.top = e.offsetY + 'px'
          image.style.left = e.offsetX + 'px'
          this.controlContainerNode.appendChild(image)
        }
      })
    }
  }
  refMapChange () {
    console.log('移动')
    this.map.getView().setCenter(this.refMap.getView().getCenter())
    this.map.getView().setZoom(this.refMap.getView().getZoom())
  }
  resize (node: HTMLElement) {
    let value = this.calculateWidthAndHeight(this.layoutFrameNode.clientHeight,this.layoutFrameNode.clientWidth,this.layoutBorderWidth)
    node.style.width = value.width + 'px'
    node.style.height = value.height + 'px'
    node.style.marginTop = Math.floor((this.layoutFrameNode.clientHeight - value.height - this.layoutBorderWidth * 2) / 2) + 'px'
    node.style.marginLeft = Math.floor((this.layoutFrameNode.clientWidth - value.width - this.layoutBorderWidth * 2) / 2) + 'px'
    node.style.border = this.layoutBorderWidth + 'px solid red'
  }
  calculateWidthAndHeight (containerHeight: number,containerWidth: number,borderWidth: number,radio: number = 1.414286) {
    containerHeight -= Math.floor(containerHeight / 30) * 2 + borderWidth * 2
    containerWidth -= Math.floor(containerWidth / 30) * 2 + borderWidth * 2
    let height = 0
    let width = 0
    if (containerWidth / containerHeight > radio) {
      height = containerHeight
      width = Math.floor(containerHeight * radio)
    } else {
      width = containerWidth
      height = Math.floor(containerWidth / radio)
    }
    return { width,height }
  }
}
export default Layout
