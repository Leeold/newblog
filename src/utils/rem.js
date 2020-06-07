/* rem.js文件内容 */
(function () {
    var html = document.documentElement;

    function onWindowResize() {
        html.style.fontSize = html.getBoundingClientRect().width / 20 + 'px';
    }

    window.addEventListener('resize', onWindowResize);
    onWindowResize();
})();



/**
 *
 * 在我们实际切图的时候，对于视觉稿上的元素尺寸换算，只需要元素的 原始的px值(即你量的大小) 除以 rem基准值 即可。
 * 例如设计稿的大小为640px， rem基准值 = 375px/10 = 37.5px ，有个元素的大小你量出来是 140px286px*
 * ，那么换算过来就是：
    140px = 140/37.5 = 3.73rem
    286px = 286/37.5 = 7.62rem

 */

