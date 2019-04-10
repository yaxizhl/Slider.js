function Slider(box, options) {
  this.box = box
  this.config = Object.assign({
      interval: 3000, // 轮播时间,毫秒
      transition: 1 // 移动过渡时间,秒
    },
    options
  )
  this.wraper = this.box.querySelector('.wraper')
  this.items = this.box.querySelectorAll('.wraper .item')
  this.isMoving = false
  this.init()
  window.addEventListener('resize', this.init.bind(this))
  this.box.addEventListener('mouseover', this.stop.bind(this))
  this.box.addEventListener('mouseout', this.start.bind(this))
}
// 容器宽度变化需要初始化一次
Slider.prototype.init = function() {
  var self = this
  this.isMoving = false
  this.boxWidth = parseInt(
    window.getComputedStyle(this.box, null).getPropertyValue('width')
  )
  this.wraper.style.width = this.boxWidth * this.wraper.children.length + 'px'
  this.wraper.style.marginLeft = '-' + this.boxWidth + 'px'
  this.items.forEach(function(el) {
    el.style.width = self.boxWidth + 'px';
    el.style.float = 'left'
  })
  this.wraper.style.display = 'block'
  this.stop()
  this.start()
}

Slider.prototype.goLeft = function() {
  if (this.isMoving) return
  this.isMoving = true
  this.wraper.style.transition = 'all ' + this.config.transition + 's ease'
  this.wraper.style.marginLeft = '-' + 2 * this.boxWidth + 'px'
  this.reset()
}
Slider.prototype.goRight = function() {
  if (this.isMoving) return
  this.isMoving = true
  this.wraper.style.transition = 'all ' + this.config.transition + 's ease'
  this.wraper.style.marginLeft = '0'
  this.reset(true)
}
Slider.prototype.reset = function(isRight) {
  let self = this
  setTimeout(function() {
    self.wraper.style.transition = null
    if (isRight) {
      var last = self.wraper.lastElementChild
      self.wraper.insertBefore(last, self.wraper.children[0])
    } else {
      self.wraper.appendChild(self.wraper.children[0])
    }
    self.wraper.style.marginLeft = '-' + self.boxWidth + 'px'
    self.isMoving = false
  }, this.config.transition * 1000)
}
Slider.prototype.stop = function() {
  clearInterval(this.t)
}
Slider.prototype.start = function() {
  this.t = setInterval(this.goLeft.bind(this), this.config.interval)
}
