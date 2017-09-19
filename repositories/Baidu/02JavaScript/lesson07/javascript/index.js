var divs = [];
var times = null;
window.onload = function() {
	var root = document.getElementById("tree");
	document.getElementById("inOrder").addEventListener("click", function() {
		clear();
		inOrder(root);
		changeColor();
	}, false);
	document.getElementById("inOrderDesc").addEventListener("click", function() {
		clear();
		inOrderDesc(root);
		changeColor();
	}, false);
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

}

function inOrder(node) {

	if (!(node == null)) {
		inOrder(node.firstElementChild);
		divs.push(node);
		inOrder(node.lastElementChild);
	}
}

function inOrderDesc(node) {
	if (!(node == null)) {
		inOrderDesc(node.lastElementChild);
		divs.push(node);
		inOrderDesc(node.firstElementChild);
	}
}

function preOrder(node) {
	if (!(node == null)) {
		divs.push(node);
		preOrder(node.firstElementChild);
		preOrder(node.lastElementChild);
	}
}

function postOrder(node) {
	if (!(node == null)) {
		postOrder(node.firstElementChild);
		postOrder(node.lastElementChild);
		divs.push(node);
	}
}

function changeColor() {
	var i = 0;
	divs[i].style.background = "#b2d235";
	times = setInterval(function() {
		i++;
		if (i < divs.length) {
			divs[i - 1].style.background = "#fff";
			divs[i].style.background = "#b2d235";
		} else {
			clear();
		}
	}, 300)
}

function clear() {
	clearInterval(times);
	divs = [];
	var divList = document.getElementsByTagName("div");
	for (var i = 0; i < divList.length; i++) {
		divList[i].style.background = "#fff";
	}

}