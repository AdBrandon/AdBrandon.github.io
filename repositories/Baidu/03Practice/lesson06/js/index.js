window.onload = function() {
		document.getElementById("open").addEventListener("click", function() {
			createBox();
		}, false)
	}
	//创建层
function createBox() {
	//阴影
	var shadow = document.createElement("div");
	shadow.setAttribute("id", "shadow");
	shadow.style.width = "100%";
	shadow.style.height = document.body.clientHeight + "px";
	shadow.style.position = "absolute";
	shadow.style.left = "0px";
	shadow.style.top = "0px";
	shadow.style.backgroundColor = "rgba(0,0,0,0.5)";
	shadow.addEventListener("click", delectBox, false);
	document.body.appendChild(shadow);
	//窗口
	var content = document.createElement("div");
	content.setAttribute("id", "content");
	content.style.width = "400px";
	content.style.height = "300px";
	content.style.backgroundColor = "white";
	content.style.border = "1px solid #5C5C5C";
	content.style.position = "fixed";
	content.style.left = (window.innerWidth / 2 - 200) + "px";
	content.style.top = (window.innerHeight / 2 - 150) + "px";
	content.addEventListener("click", stop, false); //给窗体绑定一个阻止冒泡事件
	shadow.appendChild(content);
	//标题
	var head = document.createElement("p");
	var headText = document.createTextNode("这是一个浮出层")
	head.style.width = "400px";
	head.style.height = "40px";
	head.style.lineHeight = "40px";
	head.style.color = "white";
	head.style.backgroundColor = "#858585";
	head.style.textAlign = "center";
	head.style.cursor = "move";
	var oDiv = document.getElementById('content');
	head.addEventListener("mousedown", down, false);
	head.appendChild(headText);
	content.appendChild(head);

	//内容
	var info = document.createElement("p");
	var infoText = document.createTextNode("这是一个浮出层")
	info.style.width = "400px";
	info.style.lineHeight = "40px";
	info.style.color = "#888";
	info.style.margin = "0px 10px";
	info.appendChild(infoText);
	content.appendChild(info);
	//按钮1
	var btn1 = document.createElement("button");
	var btn1Text = document.createTextNode("确认")
	btn1.style.width = "100px";
	btn1.style.height = "40px";
	btn1.style.margin = "160px 20px 0px 160px";
	btn1.style.cursor = "pointer";
	btn1.appendChild(btn1Text);
	content.appendChild(btn1);
	//按钮2
	var btn2 = document.createElement("button");
	var btn2Text = document.createTextNode("取消")
	btn2.style.width = "100px";
	btn2.style.height = "40px";
	btn2.style.cursor = "pointer";
	btn2.appendChild(btn2Text);
	content.appendChild(btn2);
	//跟随鼠标拖拽
	function down(en) {
		mouse = true;
		var en = en || event;
		var disX = en.clientX - oDiv.offsetLeft;
		var disY = en.clientY - oDiv.offsetTop;
		if (oDiv.setCapture) {
			oDiv.setCapture();
		}
		document.onmousemove = function(en) {
			var en = en || event;
			oDiv.style.top = en.clientY - disY + 'px';
			oDiv.style.left = en.clientX - disX + 'px';
		}
		document.onmouseup = function() {
			document.onmousemove = null;
			if (oDiv.releaseCapture) {
				oDiv.releaseCapture()
			}
		}
	}
}
//删除层
function delectBox() {
	var shadow = document.getElementById('shadow');
	document.body.removeChild(shadow);
}
//阻止事件冒泡
function stop(e) {
	e.stopPropagation();
	return false;
}