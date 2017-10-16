#### 手机QQ分享设置标题、链接等

  引入js：//qzonestyle.gtimg.cn/qzone/qzact/common/share/share.js
  
  调用：
  
    setShareInfo({
      title:          '此处为标题',<br/>
      summary:        '此处为摘要',<br/>
      pic:            'http://qzonestyle.gtimg.cn/aoi/sola/20150617094556_OvfOpoRKRB.png',<br/>
      url:            window.location.href<br/>
    });
  
  注：虽然文档说可以支持微信分享，但为免日后出现问题，生产环境中分开实现。
  
  附文档地址：https://open.mobile.qq.com/api/component/share
