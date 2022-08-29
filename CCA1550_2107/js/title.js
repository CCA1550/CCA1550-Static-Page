let divTyping = document.getElementById('title')
let i = 0,
    timer = 0,
    str = '唯一的  2107'

function typing () {
    if (i <= str.length) {
        divTyping.innerHTML = str.slice(0, i++) + '_'
        timer = setTimeout(typing, 300)
    }
    else {
        divTyping.innerHTML = str//结束打字,移除 _ 光标
        clearTimeout(timer)
    }
}
typing()