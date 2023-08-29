// 当页面滚动到一定高度时显示返回按钮
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// 点击按钮返回顶部
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});


const scrollBtn = document.getElementById('scroll-btn');
scrollBtn.addEventListener('click', scrollToBottom);

function scrollToBottom() {
  const pageHeight = document.documentElement.scrollHeight;
  const viewHeight = window.innerHeight;
  let scrollTop = window.pageYOffset;
  let scrollStep = Math.PI / (5000 / 15); // 调整滚动速度，这里为每秒滚动 500 像素

  const scrollInterval = setInterval(function() {
    if (scrollTop < pageHeight - viewHeight) {
      scrollTop += Math.PI / 2;
      window.scrollTo(0, Math.floor(scrollTop));
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}