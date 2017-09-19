window.onload = function() {
		var cursor = document.getElementById("cursor")
		createDiv();
		document.getElementById("TLEF").addEventListener("click", function() {
			move("LEF");
		}, false)
		document.getElementById("TTOP").addEventListener("click", function() {
			move("TOP");
		}, false)
		document.getElementById("TRIG").addEventListener("click", function() {
			move("RIG");
		}, false)
		document.getElementById("TBOT").addEventListener("click", function() {
			move("BOT");
		}, false)
		document.getElementById("MLEF").addEventListener("click", function() {
			rotate("LEF");
			move("LEF");
		}, false)
		document.getElementById("MTOP").addEventListener("click", function() {
			rotate("TOP");
			move("TOP");
		}, false)
		document.getElementById("MRIG").addEventListener("click", function() {
			rotate("RIG");
			move("RIG");
		}, false)
		document.getElementById("MBOT").addEventListener("click", function() {
			rotate("BOT");
			move("BOT");
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
	var dir = angle;
	while (dir < 0 || dir >= 360){
		if (dir < 0) {
			dir = dir + 360;
		} else {
			dir = dir - 360;
		}
	}
	switch (direction) {
		case "TOP":
			switch (dir) {
				case 0: break;
				case 90: angle = angle - 90;break;
				case 180: angle = angle + 180;break;
				case 270: angle = angle + 90;break;
			}
			break;
		case "RIG":
			switch (dir) {
				case 0: angle = angle + 90;break;
				case 90: break;
				case 180: angle = angle - 90;break;
				case 270: angle = angle + 180;break;
			}
			break;
		case "LEF":
			switch (dir) {
				case 0: angle = angle - 90;break;
				case 90: angle = angle + 180;break;
				case 180: angle = angle + 90;break;
				case 270: break;
			}
			break;
		case "BOT":
			switch (dir) {
				case 0: angle = angle + 180;break;
				case 90: angle = angle + 90;break;
				case 180: break;
				case 270: angle = angle - 90;break;
			}
			break;
		default:
			return false;
	}
	cursor.style.transform = "rotate(" + angle + "deg)"
	return true;
}
//移动光标
function move(direction) {
	var content = document.getElementsByTagName("div")[1];
	var oldX = parseInt(cursor.style.left) / 40;
	var oldY = parseInt(cursor.style.top) / 40;
	switch (direction) {
		case "TOP":
			if (oldY < 1) {
				content.style.borderTopColor = "red";
			} else {
				cursor.style.top = (oldY - 1) * 40 + "px";
			}
			break;
		case "LEF":
			if (oldX < 1) {
				content.style.borderLeftColor = "red";
			} else {
				cursor.style.left = (oldX - 1) * 40 + "px";
			}
			break;
		case "BOT":
			if (oldY > 8) {
				content.style.borderBottomColor = "red";
			} else {
				cursor.style.top = (oldY + 1) * 40 + "px";
			}
			break;
		case "RIG":
			if (oldX > 8) {
				content.style.borderRightColor = "red";
			} else {
				cursor.style.left = (oldX + 1) * 40 + "px";
			}
			break;
		default:
			return false;
	}
	setTimeout(backColor, 500);
	//超时改回颜色
	function backColor() {
		content.style.borderColor = '#333'
	}
}