window.onload = function(){
    const wrap = document.querySelector('.wrap');
    //const audio = document.querySelector('audio')
    //console.log(audio)
    wrap.onclick = function(event){
        var event = event || window.event;
        var oLi = event.srcElement || event.target;
        var liIndex =Array.prototype.indexOf.call(oLi.parentNode.parentNode.children, oLi.parentNode);
        console.log(oLi.parentNode.parentNode.children.length)
        console.log(liIndex)
        var b = window.getComputedStyle(oLi.parentNode, null)['transform']
        console.log(b)
        if (b === 'none') {
            oLi.parentNode.parentNode.children[liIndex].style.transform = `rotateY(${liIndex*40}deg) translateZ(275px)`
            oLi.parentNode.lastElementChild.currentTime = 0
            oLi.parentNode.lastElementChild.pause()
            return
        }
        oLi.parentNode.style.transform = `none`;
        oLi.parentNode.lastElementChild.play()
        console.log(oLi.parentNode.lastElementChild.seeked)
        for(var i = 0; i < oLi.parentNode.parentNode.children.length; i++){
            if (liIndex === i) {
                continue
            }
            console.log(i)
            var arr = Array.from(oLi.parentNode.parentNode.children)
            oLi.parentNode.parentNode.children[i].style.transform = `rotateY(${i*40}deg) translateZ(275px)`;
            //console.log(oLi.parentNode.parentNode.children[i].lastElementChild)
            oLi.parentNode.parentNode.children[i].lastElementChild.currentTime = 0
            oLi.parentNode.parentNode.children[i].lastElementChild.pause()
        }
    }

}