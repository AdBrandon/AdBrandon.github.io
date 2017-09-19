var divs = [];
var times = null;
window.onload = function() {
	var root = document.getElementById("tree");

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

}

function preOrder(node) {
	if (!(node == null)) {
		var name = node.nodeName
		if (node.nodeName === "DIV") {
			divs.push(node);
		}
		if (node.children.length > 0) {
			for (var i = 0; i < node.children.length; i++) {
				preOrder(node.children[i]);
			}
		}
	}
}

function postOrder(node) {
	if (!(node == null)) {
		if (node.children.length > 0) {
			for (var i = 0; i < node.children.length; i++) {
				if (node.children[i].tagName = "div") {
					postOrder(node.children[i]);
				}
			}
		}
		if (node.tagName === "DIV") {
			divs.push(node);
		}
	}
}

function changeColor() {
	var i = 0;
	divs[i].style.background = "#b2d235";
	times = setInterval(function() {
		i++;
		if (i < divs.length) {
			divs[i].style.background = "#b2d235";
			divs[i - 1].style.background = "#fff";
		} else {
			clear();
		}
	}, 300)
}

function changeColorFind() {
	var key = document.getElementsByTagName("input")[0].value;
	var i = 0;
	if (divs[i].firstElementChild.innerHTML.indexOf(key) > -1) {
		divs[i].style.background = "#faa755";
	} else {
		divs[i].style.background = "#b2d235";
	}
	times = setInterval(function() {
		i++;
		if (i < divs.length) {
			var valuei = divs[i].firstElementChild.innerHTML;
			var valuej = divs[i - 1].firstElementChild.innerHTML;
			if (valuei.indexOf(key) > -1) {
				divs[i].style.background = "#faa755";
			} else {
				divs[i].style.background = "#b2d235";
			}
			if (valuej.indexOf(key) < 0) {
				divs[i - 1].style.background = "#fff";
			}
		} else {
			clearWhite();
		}
	}, 200)
}

function clear() {
	clearInterval(times);
	divs = [];
	var divList = document.getElementsByTagName("div");
	for (var i = 0; i < divList.length; i++) {
		divList[i].style.background = "#fff";
	}

}

function clearWhite() {
	clearInterval(times);
	divs = [];
	var count = 0;
	var divList = document.getElementsByTagName("div");
	for (var i = 0; i < divList.length; i++) {
		if (divList[i].style.background !== "rgb(250, 167, 85)") {
			divList[i].style.background = "#fff";
		} else {
			count++;
		}
	}
	setTimeout(function() {
		if (count > 0) {
			alert("搜索到" + count + "个值！");
		} else {
			alert("没有搜索到任何结果！");
		}
	}, 200);

}