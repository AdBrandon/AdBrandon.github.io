window.onload = function() {
		var cursor = document.getElementById("cursor")
		
		createDiv();
		document.getElementById("GO").addEventListener("click", function() {
			moveCursor();
		}, false)
		document.getElementById("LEF").addEventListener("click", function() {
			rotate("LEF");
		}, false)
		document.getElementById("RIG").addEventListener("click", function() {
			rotate("RIG");
		}, false)
		document.getElementById("BAC").addEventListener("click", function() {
			rotate("BAC");
		}, false)
		document.getElementById("submit").addEventListener("click", function() {
			submit();
		}, false)
	}
	//新建100个网格
function createDiv() {
	var content = document.getElementsByTagName("div")[1];
	for (var i = 0; i < 100; i++) {
		var div = document.createElement("div")
		content.appendChild(div);
	}
}
//取得角度值
function getAngle() {
	var angle = parseInt(cursor.style.transform.split("(")[1]);
	if (!angle) {
		angle = 0
	}
	return angle;
}
//旋转
function rotate(direction) {
	var angle = getAngle();
	switch (direction) {
		case "LEF":
			angle = (angle + 270) % 360;
			break;
		case "RIG":
			angle = (angle + 90) % 360;
			break;
		case "BAC":
			angle = (angle + 180) % 360;
			break;
		default:
			return false;
	}
	cursor.style.transform = "rotate(" + angle + "deg)"
	return true;
}
//移动光标位置
function moveCursor() {
	var content = document.getElementsByTagName("div")[1];
	var oldX = parseInt(cursor.style.left) / 40;
	var oldY = parseInt(cursor.style.top) / 40;
	var angle = getAngle()
	switch (angle) {
		case 0:
			if (oldY < 1) {
				content.style.borderTopColor = "red";
			} else {
				cursor.style.top = (oldY - 1) * 40 + "px";
			}
			break;
		case 180:
			if (oldY > 8) {
				content.style.borderBottomColor = "red";
			} else {
				cursor.style.top = (oldY + 1) * 40 + "px";
			}
			break;
		case 90:
			if (oldX > 8) {
				content.style.borderRightColor = "red";
			} else {
				cursor.style.left = (oldX + 1) * 40 + "px";
			}
			break;
		case 270:
			if (oldX < 1) {
				content.style.borderLeftColor = "red";
			} else {
				cursor.style.left = (oldX - 1) * 40 + "px";
			}
			break;
	}
	setTimeout(backColor, 500);
	//超时改回颜色
	function backColor() {
		content.style.borderColor = '#333'
	}

}
//提交后
function submit() {
	var value = document.getElementsByTagName("input")[0].value.toUpperCase();
	if (value == "") {
		document.getElementsByTagName("input")[0].value = "GO";
		value = "GO"
	}
	switch (value) {
		case "GO":
			moveCursor();
			break;
		default:
			if (!rotate(value)) {
				alert("请输入有效指令！")
			}
	}
}