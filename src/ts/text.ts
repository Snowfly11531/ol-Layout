import Control from './control'
import { textBecomeImg } from './function'
class TextCtl extends Control {
  constructor (options: {[key: string]: any}) {
    super(options)
    this.setDataUrl(textBecomeImg('hahhaaa',32,'#000'))
  }
}
export default TextCtl
