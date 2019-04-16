# Slider.js

> 循环轮播图

## 示例

```html
<style>
  .box {
    height: 200px;
    width: 30%;
    margin: 50px auto;
    overflow: hidden;
    background-color: gray;
  }
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .wraper {
    height: 100%;
  }
  .item {
    height: 100%;
    text-align: center;
  }
</style>
```

必须包含 class 名为 wraper，item 的节点，item 个数不限，结构如下

```html
<div class="box">
  <ul class="wraper">
    <li class="item">1</li>
    <li class="item">2</li>
    <li class="item">3</li>
    <li class="item">4</li>
    <li class="item">5</li>
  </ul>
</div>
```

new Slider(dom[,option]) option={interval,transition}, function
选填参数 option
interval [Number] 毫秒
transition [Number] 秒

```javascript
let slider = new Slider(document.querySelector('.box'), {}, function(index) {
  console.log(index) // 当前item
})
// 左移
slider.goLeft()
// 右移
slider.goRight()
// 移动到指定item
slider.skipTo(3)
// 开始移动
slider.start()
// 停止移动
slider.stop()
```
