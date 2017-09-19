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
}

function InData() {
	var data = document.getElementsByTagName("input")[0].value;
	var item = document.createElement("p");
	var domData = document.createTextNode(data);
	item.appendChild(domData);
	return item;
}

function rightIn() {
	if (document.getElementsByTagName("input")[0].value == "") {
		alert("请输入数字！")
		return;
	}
	var p = InData();
	document.getElementsByTagName("div")[0].appendChild(p);
}

function leftIn() {
	if (document.getElementsByTagName("input")[0].value == "") {
		alert("请输入数字！")
		return;
	};
	var p = InData();
	var firstP = document.getElementsByTagName("p")[0];
	document.getElementsByTagName("div")[0].insertBefore(p, firstP);
}

function leftOut() {
	var box = document.getElementsByTagName("div")[0];
	var data = box.removeChild(box.getElementsByTagName("p")[0]);
	alert(data.innerHTML);
}

function rightOut() {
	var box = document.getElementsByTagName("div")[0];
	var child = box.getElementsByTagName("p")
	var lastNode = child[child.length - 1];
	var data = box.removeChild(lastNode);
	alert(data.innerHTML);
}