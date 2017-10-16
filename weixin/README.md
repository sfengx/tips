# 微信开发

### 音乐

#### 解决微信端自动播放

    window.wx.ready(function () {
      // 配置微信分享
      document.querySelector('audio').play();
    })