function canvasWrapText (options) {
  let settings = {
    canvas: document.createElement('canvas'), // canvas对象，必填，不填写默认找到页面中的第一个canvas
    canvasWidth: 200, // canvas的宽度
    drawStartX: 10, // 绘制字符串起始x坐标
    drawStartY: 30, // 绘制字符串起始y坐标
    lineHeight: 30, // 文字的行高
    font: "24px 'Microsoft Yahei'", // 文字样式
    text: '请修改掉默认的配置', // 需要绘制的文本
    drawWidth: 460, // 文字显示的宽度
    color: '#000000', // 文字的颜色
    backgroundColor: '#ffffff' // 背景颜色
  }

    // 将传入的配置覆盖掉默认配置
  if (!options && typeof options === 'object') {
    for (let i in options) {
      settings[i] = options[i]
    }
  }

  console.log(settings)
    // 获取2d的上线文开始设置相关属性
  let canvas = settings.canvas
  canvas.width = settings.canvasWidth
  let ctx = canvas.getContext('2d')

    // 绘制背景色
  ctx.fillStyle = settings.backgroundColor
  ctx.fillRect(0,0,canvas.width,canvas.height)

    // 绘制文字
  ctx.font = settings.font
  ctx.fillStyle = settings.color
  let lineWidth = 0 // 当前行的绘制的宽度
  let lastTextIndex = 0 // 已经绘制上canvas最后的一个字符的下标
    // 由于改变canvas 的高度会导致绘制的纹理被清空，所以，不预先绘制，先放入到一个数组当中
  let arr = []
  for (let i = 0; i < settings.text.length; i++) {
        // 获取当前的截取的字符串的宽度
    lineWidth = ctx.measureText(settings.text.substr(lastTextIndex,i - lastTextIndex)).width

    if (lineWidth > settings.drawWidth) {
            // 判断最后一位是否是标点符号
      if (judgePunctuationMarks(settings.text[i - 1])) {
        arr.push(settings.text.substr(lastTextIndex,i - lastTextIndex))
        lastTextIndex = i
      } else {
        arr.push(settings.text.substr(lastTextIndex,i - lastTextIndex - 1))
        lastTextIndex = i - 1
      }
    }
        // 将最后多余的一部分添加到数组
    if (i === settings.text.length - 1) {
      arr.push(settings.text.substr(lastTextIndex,i - lastTextIndex + 1))
    }
  }

    // 根据arr的长度设置canvas的高度
  canvas.height = arr.length * settings.lineHeight + settings.drawStartY

  ctx.font = settings.font
  ctx.fillStyle = settings.color
  for (let i = 0; i < arr.length; i++) {
    ctx.fillText(arr[i],settings.drawStartX,settings.drawStartY + i * settings.lineHeight)
  }
    // 判断是否是需要避开的标签符号
  function judgePunctuationMarks (value) {
    let arr = ['.',',',';','?','!',':','"','，','。','？','！','；','：','、']
    for (let i = 0; i < arr.length; i++) {
      if (value === arr[i]) {
        return true
      }
    }
    return false
  }
  return canvas.toDataURL()
}

function textBecomeImg (text,fontsize,fontcolor) {
  let canvas = document.createElement('canvas')
    // 小于32字加1  小于60字加2  小于80字加4    小于100字加6
  let buHeight = 0
  if (fontsize <= 32) {
    buHeight = 1
  } else if (fontsize > 32 && fontsize <= 60) {
    buHeight = 2
  } else if (fontsize > 60 && fontsize <= 80) {
    buHeight = 4
  } else if (fontsize > 80 && fontsize <= 100) {
    buHeight = 6
  } else if (fontsize > 100) {
    buHeight = 10
  }
    // 对于g j 等有时会有遮挡，这里增加一些高度
  canvas.height = fontsize + buHeight
  let context = canvas.getContext('2d')
    // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = fontcolor
  context.font = fontsize + 'px Arial'
    // top（顶部对齐） hanging（悬挂） middle（中间对齐） bottom（底部对齐） alphabetic是默认值
  context.textBaseline = 'middle'
  context.fillText(text,0,fontsize / 2)

    // 如果在这里直接设置宽度和高度会造成内容丢失 , 暂时未找到原因 , 可以用以下方案临时解决
    // canvas.width = context.measureText(text).width;

    // 方案一：可以先复制内容  然后设置宽度 最后再黏贴
    // 方案二：创建新的canvas,把旧的canvas内容黏贴过去
    // 方案三： 上边设置完宽度后，再设置一遍文字

    // 方案一： 这个经过测试有问题，字体变大后，显示不全,原因是canvas默认的宽度不够，
    // 如果一开始就给canvas一个很大的宽度的话，这个是可以的。
    // var imgData = context.getImageData(0,0,canvas.width,canvas.height);  //这里先复制原来的canvas里的内容
    // canvas.width = context.measureText(text).width;  //然后设置宽和高
    // context.putImageData(imgData,0,0); //最后黏贴复制的内容

    // 方案三：改变大小后，重新设置一次文字
  canvas.width = context.measureText(text).width
  context.fillStyle = fontcolor
  context.font = fontsize + 'px Arial'
  context.textBaseline = 'middle'
  context.fillText(text,0,fontsize / 2)

  let dataUrl = canvas.toDataURL('image/png')// 注意这里背景透明的话，需要使用png
  return dataUrl
}
export { canvasWrapText,textBecomeImg }
