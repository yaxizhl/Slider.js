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
    display: none; // 初始化不显示，防止js没有加载的时候显示错落布局
    height: 100%;
  }
  .item {
    height: 100%;
    text-align: center;
  }

  </style>
```
必须包含class名为wraper，item的节点，item个数不限，结构如下
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
new Slider(dom[,option]) option={interval,transition}
选填参数option
interval   [Number] 毫秒
transition [Number] 秒
```javascript
let slider = new Slider(document.querySelector('.box'))
// 左移
slider.goLeft()
// 右移
slider.goRight()
```
