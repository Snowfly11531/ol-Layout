class Http {
  static getContent (url) {
    let p = new Promise((resolve,reject) => {
      let conn = new XMLHttpRequest()
      conn.open('get',url,true)
      conn.onload = function () {
        if (this.status >= 200 && conn.status < 300) {
          resolve(this.responseText)
        } else {
          reject(this.responseText)
        }
      }
      conn.send()
    })
    return p
  }
}
export default Http
