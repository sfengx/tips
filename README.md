# tips
记录一些有用的代码片段

<h1>IOS</h1>

1、ios滚动条滑动卡顿？<br/>
  -webkit-overflow-scrolling:touch

<h1>Android</h1>
<h1>手机QQ</h1>
1、手机QQ分享设置标题、链接等<br/>
  引入js：//qzonestyle.gtimg.cn/qzone/qzact/common/share/share.js<br/>
  调用：<br/>
  setShareInfo({<br/>
    title:          '此处为标题',<br/>
    summary:        '此处为摘要',<br/>
    pic:            'http://qzonestyle.gtimg.cn/aoi/sola/20150617094556_OvfOpoRKRB.png',<br/>
    url:            window.location.href<br/>
  });<br/>
  注：虽然文档说可以支持微信分享，但为免日后出现问题，生产环境中分开实现。<br/>
  附文档地址：https://open.mobile.qq.com/api/component/share<br/>
 
