import '../css/dialog.css'
import { EventEmitter } from 'events'

class Dialog extends EventEmitter {
  static staticDialog: Dialog
  dialogDiv: HTMLDivElement
  containerDiv: HTMLDivElement
  header: HTMLDivElement
  closeButton: HTMLDivElement
  titleDiv: HTMLDivElement
  ensureBtn: HTMLButtonElement
  cancelBtn: HTMLButtonElement
  footer: HTMLDivElement
  backgroundDiv: HTMLDivElement
  constructor () {
    super()

    this.backgroundDiv = document.createElement('div')
    this.backgroundDiv.classList.add('background_dialog')
    document.body.appendChild(this.backgroundDiv)

    this.backgroundDiv.innerHTML =
    `<div class="dialog">
      <header>
          <div class='title'></div>
          <div class="x">X</div>
      </header>
      <div class='container'>
      </div>
      <footer>
          <button class='primary'>确认</button>
          <button class='default' style="margin-left: 10px;">取消</button>
      </footer>
    </div>`
    this.dialogDiv = this.backgroundDiv.getElementsByClassName('dialog')[0] as HTMLDivElement
    this.containerDiv = this.dialogDiv.getElementsByClassName('container')[0] as HTMLDivElement
    this.header = this.dialogDiv.getElementsByTagName('header')[0] as HTMLDivElement
    this.closeButton = this.header.getElementsByClassName('x')[0] as HTMLDivElement
    this.titleDiv = this.header.getElementsByClassName('title')[0] as HTMLDivElement
    this.footer = this.dialogDiv.getElementsByTagName('footer')[0] as HTMLDivElement
    this.ensureBtn = this.footer.getElementsByClassName('default')[0] as HTMLButtonElement
    this.cancelBtn = this.footer.getElementsByClassName('primary')[0] as HTMLButtonElement

    this.closeButton.onclick = () => {
      this.emit('close')
    }   // 发送关闭事件

    this.ensureBtn.onclick = () => {
      this.emit('ensure')
    }   // 发送确认事件

    this.cancelBtn.onclick = () => {
      this.emit('cancel')
    }   // 发送取消事件
  }

  setContent (content: HTMLElement) {
    this.containerDiv.appendChild(content)
  }

  setTitle (title: string) {
    this.titleDiv.innerHTML = title
  }

  static showDialog (args) {
    if (this.staticDialog == null) {
      this.staticDialog = new Dialog()
    }
    if (args['target'] != null) {
      let target: HTMLElement = args['target']
      let content: HTMLElement = args['content']
      let top = target.offsetTop + target.offsetHeight / 2
      let left = target.offsetLeft + target.offsetWidth / 2
      this.staticDialog.dialogDiv.style.left = left + 'px'
      this.staticDialog.dialogDiv.style.top = top + 'px'
      this.staticDialog.dialogDiv.style.transition = 'all 0s'

      setTimeout(() => {
        this.staticDialog.setContent(content)
        this.staticDialog.backgroundDiv.classList.add('show')
        this.staticDialog.dialogDiv.classList.add('show')
        this.staticDialog.dialogDiv.style.left = '50%'
        this.staticDialog.dialogDiv.style.top = '50%'
        this.staticDialog.dialogDiv.style.marginTop = (0 - this.staticDialog.dialogDiv.clientHeight / 2) + 'px'
        this.staticDialog.dialogDiv.style.transition = 'all 0.3s'
      },20)
    }
    return this.staticDialog
  }

  transfrom (element: HTMLElement,top: number,left: number,time: number= 1000) {
    let toTop = element.offsetTop
    let toLeft = element.offsetLeft
    element.style.position = 'absolute'
    let xDeviation = toLeft - left
    let yDeviation = toTop - top
    let hDeviation = element.clientHeight
    let wDeviation = element.clientWidth
    let division = 20
    let xIntervalDevia = xDeviation / (time / division)
    let yIntervalDevia = yDeviation / (time / division)
    let hIntervalDevia = hDeviation / (time / division)
    let wIntervalDevia = wDeviation / (time / division)
    let timer = 0
    let interval = setInterval(() => {
      if (timer * division > time) {
        clearInterval(interval)
        return
      }
      let nowtop = top + yIntervalDevia * timer
      let nowleft = left + xIntervalDevia * timer
      element.style.height = hIntervalDevia * timer + 'px'
      element.style.width = wIntervalDevia * timer + 'px'
      element.style.top = nowtop + 'px'
      element.style.left = nowleft + 'px'
      timer++
    },division)
  }
}
export default Dialog
