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
  }
  .wraper {
    display: none;
    height: 100%;
  }
  .item {
    list-style: none;
    height: 100%;
    text-align: center;
  }

  </style>
```
必须包含class名为wraper，item的节点，结构如下
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
new Slider(dom[,object]) object={interval,transition}
```javascript
let slider = new Slider(document.querySelector('.box'))
```
