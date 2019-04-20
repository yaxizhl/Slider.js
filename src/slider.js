class Slider {
  constructor(box, options, cb) {
    this.box = box
    this.cb = cb
    this.config = Object.assign(
      {
        interval: 5000,
        transition: 1
      },
      options
    )
    this.wraper = this.box.querySelector('.wraper')
    this.moving = false
    if (this.items().length) {
      this.init()
      window.addEventListener('resize', this.init.bind(this))
      this.box.addEventListener('mouseover', this.stop.bind(this))
      this.box.addEventListener('mouseout', this.start.bind(this))
    }
  }
  items() {
    return this.box.querySelectorAll('.wraper .item')
  }
  init() {
    this.moving = false
    this.boxWidth = parseInt(
      window.getComputedStyle(this.box, null).getPropertyValue('width')
    )
    this.wraper.style.width = this.boxWidth * (this.items().length + 1) + 'px'
    this.items().forEach((el, index) => {
      el.style.width = this.boxWidth + 'px'
      el.style.float = 'left'
      el.dataset.index = index + 1
    })
    this.stop()
    this.start()
  }
  reset(l) {
    this.stop()
    setTimeout(() => {
      this.wraper.style.marginLeft = null
      this.wraper.style.transition = null
      this.moving = false
      if (l) {
        this.wraper.removeChild(this.items()[0])
      } else {
        this.items()[0].style.transition = null
        this.items()[0].style.marginLeft = null
        let last = this.items()[this.items().length - 1]
        this.wraper.removeChild(last)
      }
      this.start()
    }, this.config.transition * 1000)
  }
  goLeft() {
    // 往左移动
    if (this.moving) return
    this.moving = true
    this.cloneItem = this.items()[0].cloneNode(true)
    this.wraper.appendChild(this.cloneItem)
    this.cb&&this.cb(this.items()[1].dataset.index,this.items().length)
    this.wraper.style.transition = 'all ' + this.config.transition + 's ease'
    this.wraper.style.marginLeft = '-' + this.boxWidth + 'px'
    this.reset(true)
  }
  goRight() {
    // 往右移动
    if (this.moving) return
    this.moving = true
    this.wraper.style.marginLeft = '-' + this.boxWidth + 'px'
    this.cloneItem = this.items()[this.items().length - 1].cloneNode(true)
    this.wraper.insertBefore(this.cloneItem, this.items()[0])
    setTimeout(() => {
      this.wraper.style.transition = 'all ' + this.config.transition + 's ease'
      this.wraper.style.marginLeft = 0 + 'px'
    })
    this.cb&&this.cb(this.items()[0].dataset.index,this.items().length)
    this.reset()
  }
  skipTo(index) {
    let n
    if (index > this.items().length) return
    this.stop()
    this.items().forEach((val, i) => {
      if (val.dataset.index == index) n = i
    })
    this.wraper.style.transition = 'all ' + this.config.transition + 's ease'
    this.wraper.style.marginLeft = '-' + this.boxWidth * n + 'px'
    this.cb&&this.cb(index,this.items().length)
    // 对节点进行排序
    setTimeout(() => {
      this.wraper.style.transition = null
      this.wraper.style.marginLeft = null
      let nodeArr = [...this.items()]
      let newArr = nodeArr.slice(n).concat(nodeArr.slice(0, n))
      this.wraper.innerHTML = ''
      newArr.forEach(val => {
        this.wraper.appendChild(val)
      })
      this.start()
    }, this.config.transition * 1000)
  }
  start() {
    this.t = setTimeout(() => {
      this.goLeft()
    }, this.config.interval)
  }
  stop() {
    clearTimeout(this.t)
  }
}
window.Slider = Slider
