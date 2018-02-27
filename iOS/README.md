### iOS在滚动时fixed需要touchend才生效?

    transform: translate3d(0,0,0);

### iOS滚动条滑动卡顿？

    -webkit-overflow-scrolling:touch

### iphoneX的fixed不到底？

    <meta name="viewport" content="viewport-fit=cover"/>

### 判断是否iphoneX

    /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)
    
```
@media (device-width: 375px) and (device-height: 812px) and (-webkit-min-device-pixel-ratio : 3){
  #app,.home-bg,.bg-wrap{
    padding-bottom: 34px;
  }
    //如果以后出现375*812,非ios机型，可以加上下面语句
    @supports (bottom: constant(safe-area-inset-bottom)) {

    }
}
```
