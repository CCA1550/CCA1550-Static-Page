let divTyping = document.getElementById('start_text')
let i = 0,
    timer = 0,
    str = '2021年，12121'

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