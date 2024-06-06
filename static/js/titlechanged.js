/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
	var OriginTitile = document.title;
	var titleTime;
	document.addEventListener('visibilitychange', function() {
	  if(document.hidden) {
            document.title = '😭燕子!你快回来啊!!!';
            clearTimeout(titleTime);
	  } else {
            document.title = '😳嘿嘿你回来了!';
            titleTime = setTimeout(function() {
		        document.title = OriginTitile;
		    }, 2000);
	  }
	});
  }
