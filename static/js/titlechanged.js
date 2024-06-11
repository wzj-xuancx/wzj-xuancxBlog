/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
	var OriginTitile = document.title;
	var titleTime;
	document.addEventListener('visibilitychange', function() {
	  if(document.hidden) {
            document.title = '😭你快回来啊!!!';
            clearTimeout(titleTime);
	  } else {
            document.title = '😳回来了就好!!!';
            titleTime = setTimeout(function() {
		        document.title = OriginTitile;
		    }, 2000);
	  }
	});
  }
