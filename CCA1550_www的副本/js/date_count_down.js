function Date_count_down(jztime, divname) {
	var now = new Date();
	var endDate = new Date(Date.parse(jztime.replace(/-/g, "/")));
	var leftTime = endDate.getTime() - now.getTime();
	var leftsecond = parseInt(leftTime / 1000);
	var day = Math.floor(leftsecond / (60 * 60 *24)); 
	var hour = Math.floor((leftsecond - day * 24 * 60 * 60) / 3600);
	var minute = Math.floor((leftsecond - day * 24 * 60 * 60 - hour * 3600) / 60);
	var seconds = Math.floor((leftsecond - day * 24 * 60 * 60 - hour * 3600 - minute * 60));
	var date_d = document.getElementById(divname)
	date_d.innerHTML = "距离高考开考还剩 " + day + "天" + hour + "小时" + minute + "分钟" + seconds + "秒";
	
}

var engTime = "2024-06-07 9:00";
window.setInterval(function() {
	Date_count_down(engTime, 'date');
}, 1000);

window.onload = function() {
	var fade = document.querySelector('header');
	fade.querySelector('#date').style.opacity = 1;
}