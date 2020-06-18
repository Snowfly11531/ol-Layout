import '../css/dropdownbox.css'
import { EventEmitter } from 'events'
class DropDownBox extends EventEmitter {
  target: HTMLInputElement
  constructor (options: any) {
    super()
    if (options['target'] != null) {
      this.target = options['target']

      this.target.disabled = true
      let parentElement = this.target.parentElement
      let containerDiv = document.createElement('div')
      containerDiv.setAttribute('style',this.target.getAttribute('style'))
      this.target.setAttribute('style','')
      let containerDiv1 = document.createElement('div')
      let iconDiv = document.createElement('div')
      iconDiv.innerHTML = '^'
      containerDiv.appendChild(containerDiv1)
      containerDiv1.appendChild(this.target)
      containerDiv1.appendChild(iconDiv)
      containerDiv.classList.add('dropdownbox_container')
      containerDiv1.classList.add('dropdownbox_container')
      containerDiv1.style.position = 'relative'
      this.target.classList.add('dropdownbox_input')
      iconDiv.classList.add('dropdownbox_icon')
      parentElement.appendChild(containerDiv)

      let contentDiv = document.createElement('div')
      contentDiv.classList.add('dropdownbox-content')
      let innerHTML = ''
      if (this.target.getAttribute('type') === 'dropdown') {
        let list = JSON.parse(this.target.getAttribute('list'))
        for (let value of list) {
          innerHTML += `<a>${value.toString()}</a>`
        }
      }

      contentDiv.innerHTML = innerHTML
      containerDiv1.appendChild(contentDiv)
      contentDiv.addEventListener('click',(e) => {
        let parentDiv = (e.target as HTMLElement).parentElement
        let links = parentDiv.getElementsByTagName('a')
        for (let i = 0;i < links.length;i++) {
          links[i].classList.remove('select')
        }
        (e.target as HTMLElement).classList.add('select')
        this.emit('select:change')
        this.target.value = (e.target as HTMLElement).innerHTML
        contentDiv.style.transform = 'scaleY(0)'
      })
      containerDiv1.addEventListener('mouseover',() => {
        contentDiv.style.transform = 'scaleY(1)'
      })
      containerDiv1.addEventListener('mouseout',() => {
        contentDiv.style.transform = 'scaleY(0)'
      })
    }
  }
}
export default DropDownBox
