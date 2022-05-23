//这是封装的用于监听滚轮向下滑动时的事件

//在window对象上绑定鼠标滚轮监听事件
export let startListen = () => {
    window.addEventListener('mousewheel', ListenerCallback)
    //监听回调函数
    function ListenerCallback(e) {
        setTimeout(() => {
            // 向下滑动清除监听事件
            if (e.deltaY > 0) {
                document.getElementById("title").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                });
                window.removeEventListener('mousewheel', ListenerCallback)
            }
        }, 10)
    }

}