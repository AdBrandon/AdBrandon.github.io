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
		document.getElementById("search").addEventListener("click", function() {
			search()
		}, false);

	}
	// 取得输入内容，返回所有数据的一个数组
function getData() {
	var data = document.getElementsByTagName("textarea")[0].value;
	if (data) {
		data = data.replace(/[^0-9a-zA-Z]+/g, "-");
		dataArr = data.split("-");
		return dataArr
	} else {
		alert("请输入数字或字母！")
		return false
	}
}
// 创建标签,返回包含所有p标签的数组集合
function createNode() {
	dataArr = getData();
	if (dataArr) {
		var nodeList = [];
		for (var i = 0; i < dataArr.length; i++) {
			if (dataArr[i] != "") {
				var pNode = document.createElement("p");
				var TextNode = document.createTextNode(dataArr[i]);
				pNode.appendChild(TextNode);
				nodeList.push(pNode);
			}
		}
		return nodeList;
	} else {
		return false
	}

}

function rightIn() {
	var nodeList = createNode()
	if (nodeList) {
		for (var i = 0; i < nodeList.length; i++) {
			document.getElementsByTagName("div")[0].appendChild(nodeList[i]);
		}
	}
}

function leftIn() {
	var nodeList = createNode()
	if (nodeList) {
		var firstP = document.getElementsByTagName("p")[0];
		for (var i = 0; i < nodeList.length; i++) {
			document.getElementsByTagName("div")[0].insertBefore(nodeList[i], firstP);
		}
	}
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

function search() {
	var key = document.getElementsByTagName("input")[0].value;
	if (key) {
		var NodeList = document.getElementsByTagName("p");
		// 删除上次标记记录
		for (var i = 0; i < NodeList.length; i++) {
			NodeList[i].removeAttribute("class")
		}
		// 标记记录
		for (var i = 0; i < NodeList.length; i++) {
			if (NodeList[i].innerHTML.indexOf(key) != -1) {
				NodeList[i].setAttribute("class", "green");
			}
		}
	} else {
		alert("请输入查询词！");
	}
}