module.export.getServerTime = function() { // 获取服务器时间
  var re = '';
  var xhr = new XMLHttpRequest();
  if (!xhr) {
    xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
  }
  xhr.open('HEAD', location.href, false);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      re = xhr.getResponseHeader('Date');
    }
  }
  xhr.send(null);
  return re
}
