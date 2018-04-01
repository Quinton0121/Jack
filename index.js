var open = document.getElementById('open'),
	pages = document.getElementById('nextPage'),
	status = 0,
	cursor = document.getElementById("cursor"),
	disp = document.getElementById("display");

disp.addEventListener('mousemove',function(ev){
	cursor.style.left = (ev.pageX - 50) + "px";
    cursor.style.top = (ev.pageY - 50) + "px";
})

open.addEventListener("click",function(){
	if (status == 0){
		pages.style.right = 0 + 'px';
		status =1;
	}else{
		pages.style.right = -160 + 'px';
		status = 0;
	}
	
})	