var divs = [];
var times = null;
window.onload = function() {
	var root = document.getElementById("tree");
	var divsList = document.getElementsByTagName("div");
	document.getElementById("preOrder").addEventListener("click", function() {
		clear();
		preOrder(root);
		changeColor();
	}, false);
	document.getElementById("postOrder").addEventListener("click", function() {
		clear();
		postOrder(root);
		changeColor();
	}, false);
	document.getElementById("preFind").addEventListener("click", function() {
		var key = document.getElementsByTagName("input")[0].value;
		if (key == "") {
			alert("请输入搜索值！")
		} else {
			clear();
			preOrder(root);
			changeColorFind();
		}
	}, false);
	document.getElementById("postFind").addEventListener("click", function() {
		var key = document.getElementsByTagName("input")[0].value;
		if (key == "") {
			alert("请输入搜索值！")
		} else {
			clear();
			postOrder(root);
			changeColorFind();
		}
	}, false);
	//为每个DIV绑定事件
	for (var i = 0; i < divsList.length; i++) {
		divsList[i].addEventListener("click", function(event) {
			for (var i = 0; i < divsList.length; i++) {
				divsList[i].style.background = "#fff";
			}
			this.style.background = "yellow";
			event.stopPropagation()
		}, false);
	}
	document.getElementById("delete").addEventListener("click", function() {
		deleteData(divsList);
	}, false);
	document.getElementById("putIn").addEventListener("click", function() {
		putIn(divsList);
	}, false);
}

function preOrder(node) {
	if (!(node == null)) {
		divs.push(node);
		for (var i = 0; i < node.children.length; i++) {
			preOrder(node.children[i]);
		}
	}
}

function postOrder(node) {
	if (!(node == null)) {
		for (var i = 0; i < node.children.length; i++) {
			if (node.children[i].tagName = "div") {
				postOrder(node.children[i]);
			}
		}
		divs.push(node);
	}
}

function changeColor() {
	var i = 0;

	function order() {
		if (divs[i - 1]) {
			divs[i - 1].style.background = "#fff";
		}
		if (i == divs.length) {
			clearInterval(times);
			return false;
		}
		divs[i].style.background = "#b2d235";
		i++;
	}
	times = setInterval(order, 200);
}

function changeColorFind() {
	var searched = 0;
	var key = document.getElementsByTagName("input")[0].value;
	var i = 0;

	function order() {
		if (divs[i - 1] && divs[i - 1].style.background == "rgb(178, 210, 53)") {
			divs[i - 1].style.background = "#fff";
		}
		if (i == divs.length) {
			clearInterval(times);
			if (searched == 0) {
				alert("没有搜索到任何结果！");
			} else {
				alert("搜索到" + searched + "个值！");
			}
			return false;
		}
		if (divs[i].firstChild.nodeValue.indexOf(key) > -1) {
			divs[i].style.background = "#faa755";
			searched++;
		} else {
			divs[i].style.background = "#b2d235";
		}
		i++;
	}
	times = setInterval(order, 200);
}

function clear() {
	clearInterval(times);
	divs = [];
	var divList = document.getElementsByTagName("div");
	for (var i = 0; i < divList.length; i++) {
		divList[i].style.background = "#fff";
	}

}

function deleteData(divsList) {
	for (var i = 0; i < divsList.length; i++) {
		if (divsList[i].style.background == "yellow") {
			divsList[i].parentNode.removeChild(divsList[i]);
		}
	}
}

function putIn(divsList) {
	var key = document.getElementsByTagName("input")[1].value;
	if (key == "") {
		alert("请输入需要插入的数据！")
	} else {
		var div = document.createElement("div");
		var textNode = document.createTextNode(key);
		div.appendChild(textNode);
		div.onclick = function(){
			for (var i = 0; i < divsList.length; i++) {
				divsList[i].style.background = "#fff";
			}
			this.style.background = "yellow";
			event.stopPropagation()
		}
		for (var i = 0; i < divsList.length; i++) {
			if (divsList[i].style.background == "yellow") {
				divsList[i].appendChild(div);
			}
		}
	}
}