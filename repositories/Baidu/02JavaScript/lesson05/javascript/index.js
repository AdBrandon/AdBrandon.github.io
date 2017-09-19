window.onload = function() {
	document.getElementById("rightIn").addEventListener("click", function() {
		rightIn()
	}, false);
	document.getElementById("leftIn").addEventListener("click", function() {
		leftIn()
	}, false);
	document.getElementById("leftOut").addEventListener("click", function() {
		leftOut()
	}, false);
	document.getElementById("rightOut").addEventListener("click", function() {
		rightOut()
	}, false);
	document.getElementById("sort").addEventListener("click", function() {
		sortData()
	}, false);
}

function checkNumber() {
	var value = document.getElementsByTagName("input")[0].value
	if (value >= 10 & value <= 100) {
		return true;
	} else {
		alert("请输入 10-100 的数字！")
		return false;
	}
}

function checkLength() {
	var number = document.getElementsByTagName("div")[0].getElementsByTagName("p").length
	if (number < 60) {
		return true;
	} else {
		alert("最大上限为60！")
		return false;
	}
}

function createNewP(data) {
	var item = document.createElement("p");
	item.setAttribute("style", "height:" + data + "px")
	return item;
}

function InFromInput() {
	var data = document.getElementsByTagName("input")[0].value;
	return createNewP(data);
}

function InFromData(data) {
	return createNewP(data);
}

function getNumber(node) {
	var style = node.getAttribute("style");
	var number = style.split(":")[1].split("p")[0];
	return number;
}

function rightIn() {
	if (checkNumber()) {
		if (checkLength()) {
			var p = InFromInput();
			document.getElementsByTagName("div")[0].appendChild(p);
		}
	}
}

function leftIn() {
	if (checkNumber()) {
		if (checkLength()) {
			var p = InFromInput();
			var firstP = document.getElementsByTagName("p")[0];
			document.getElementsByTagName("div")[0].insertBefore(p, firstP);
		}
	}
}

function leftOut() {
	var box = document.getElementsByTagName("div")[0];
	var node = box.getElementsByTagName("p")[0]
	var number = getNumber(node);
	box.removeChild(node);
	alert(number);
}

function rightOut() {
	var box = document.getElementsByTagName("div")[0];
	var child = box.getElementsByTagName("p")
	var lastNode = child[child.length - 1];
	var number = getNumber(lastNode);
	box.removeChild(lastNode);
	alert(number);
}

function sortData() {
	if (document.getElementsByTagName("div")[0].getElementsByTagName("p").length > 0) {
		var data = document.getElementsByTagName("p");
		var arr = [];
		for (var i = 0; i < data.length; i++) {
			arr.push(getNumber(data[i]));
		}
		arr.sort(sortnumber);
		var div = document.getElementsByTagName("div")[0]
		div.innerHTML = "";
		for (var i = 0; i < arr.length; i++) {
			var p = InFromData(arr[i]);
			div.appendChild(p);
		}
	} else {
		alert("还没有数据！")
	}
}

function sortnumber(a, b) {
	return a - b
}