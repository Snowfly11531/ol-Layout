import '../css/dropdown.css'

import { EventEmitter } from 'events'
class DropDown extends EventEmitter {
  rootElement: HTMLElement
  dropdownElement: HTMLElement
  dropBtnElement: HTMLElement
  dropdownContentElement: HTMLElement
  nameList: Array<string>
  appendList: Array<object>
  selectItem: number = 0
  selectValue: string = ''
  constructor (options: {[key: string]: any}) {
    super()
    switch (typeof options['target']) {
      case 'object':
        this.rootElement = options['target']
        break
      case 'string':
        this.rootElement = document.getElementById(options['target'])
        break
      default:
        break
    }
    this.rootElement.innerHTML = "<div class='dropdown'>" +
            "<button class='dropbtn'>下拉菜单</button>" +
            "<div class='dropdown-content'></div>" +
            '</div>'
    this.dropdownElement = this.rootElement.getElementsByClassName('dropdown')[0] as HTMLElement
    this.dropBtnElement = this.dropdownElement.getElementsByClassName('dropbtn')[0] as HTMLButtonElement
    this.dropdownContentElement = this.dropdownElement.getElementsByClassName('dropdown-content')[0] as HTMLElement
    this.dropBtnElement.innerHTML = options['text'] != null ? options['text'] : '默认'
    if (options['nameLists'] != null) {
      let lists: Array<string> = options['nameLists'] as Array<string>
      this.nameList = lists
      let innerHTML = ''
      for (let value of lists) {
        innerHTML += '<a>' + value + '</a>'
      }
      this.dropdownContentElement.innerHTML = innerHTML
    }
    if (options['appendLists'] != null) {
      this.appendList = options['appendLists'] as Array<object>
    }
    let alinks = this.dropdownContentElement.getElementsByTagName('a')
    for (let i = 0;i < alinks.length;i++) {
      alinks[i].onclick = () => {
        if (this.selectItem !== i + 1) {
          this.selectValue = alinks[i].innerHTML
          for (let j = 0;j < alinks.length;j++) {
            alinks[j].classList.remove('select')
          }
          alinks[i].classList.add('select')
          this.selectItem = i + 1
          this.emit('selectChange',[this.selectValue,this.appendList != null ? this.appendList[i] : null])
        } else {
          for (let j = 0;j < alinks.length;j++) {
            alinks[j].classList.remove('select')
          }
          this.selectValue = ''
          this.selectItem = 0
          this.emit('selectChange',null)
        }
      }
    }
  }
}
export default DropDown
