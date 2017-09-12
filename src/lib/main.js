;(function () {
    var list;
    var i;
    var node;
    var timestamp;
    list = [
        {
            name: 'position',
            link: './qq/position.html'
        },
        {
            name: 'position-map',
            link: './qq/position2.html'
        },
        {
            name: 'share',
            link: './qq/share.html'
        }
    ];
    timestamp =  Math.random().toString().substr(2, 10);
    for (i = 0; i < list.length; i++) {
        node = document.createElement('a');
        node.innerHTML = list[i].name;
        node.href = list[i].link + '?t=' + timestamp;
        document.querySelector('#app').appendChild(node);
    }

})();
