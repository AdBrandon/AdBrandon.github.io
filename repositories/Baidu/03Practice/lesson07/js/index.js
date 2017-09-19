var Reg = /[\u4E00-\u9FA5\uf900-\ufa2d|\w]+\-[1]{0,1}[0-9]{1,2}\-[1]{0,1}[0-9]{1,2}\-[1]{0,1}[0-9]{1,2}$/
var data = [
	["小明", "80", "90", "70"],
	["小红", "90", "60", "90"],
	["小亮", "60", "100", "70"]
]
window.onload = function() {
		start();
		document.getElementsByTagName("button")[0].addEventListener("click", addData, false)
		document.getElementsByTagName("th")[1].getElementsByClassName("up")[0].addEventListener("click", function(){
			sortData(1, true);
		}, false);
		document.getElementsByTagName("th")[1].getElementsByClassName("down")[0].addEventListener("click", function(){
			sortData(1, false);
		}, false);
		document.getElementsByTagName("th")[2].getElementsByClassName("up")[0].addEventListener("click", function(){
			sortData(2, true);
		}, false);
		document.getElementsByTagName("th")[2].getElementsByClassName("down")[0].addEventListener("click", function(){
			sortData(2, false);
		}, false);
		document.getElementsByTagName("th")[3].getElementsByClassName("up")[0].addEventListener("click", function(){
			sortData(3, true);
		}, false);
		document.getElementsByTagName("th")[3].getElementsByClassName("down")[0].addEventListener("click", function(){
			sortData(3, false);
		}, false);
		document.getElementsByTagName("th")[4].getElementsByClassName("up")[0].addEventListener("click", function(){
			sortData(4, true);
		}, false);
		document.getElementsByTagName("th")[4].getElementsByClassName("down")[0].addEventListener("click", function(){
			sortData(4, false);
		}, false);
	}
	//向表格添加一条记录：数组格式
function createData(arrData) {
	var tbody = document.getElementsByTagName("tbody")[0];
	var tr = document.createElement("tr");
	var total = 0;
	for (var i = 0; i < 5; i++) {
		if (i == 4) {
			var data = document.createTextNode(total);
		} else {
			var data = document.createTextNode(arrData[i]);
		}
		var td = document.createElement("td");
		td.appendChild(data);
		tr.appendChild(td);
		if (i > 0) {
			total = total + parseInt(arrData[i]);
		}
	}
	tbody.appendChild(tr);
}
//初始化表格
function start() {
	for (var i = 0; i < data.length; i++) {
		createData(data[i]);
	}
}
//按钮事件
function addData() {
	var value = document.getElementsByTagName("input")[0].value
	if (Reg.test(value)) {
		var arrData = value.split("-");
		createData(arrData);
	} else {
		alert("请输入正确的格式！")
	}
}
//排序:序号，是否倒序
function sortData(index, boole){
	//取出表格数据
	var arrData = [];
	var tbody = document.getElementsByTagName("tbody")[0];
	var trList = tbody.getElementsByTagName("tr");
	for (var i = 0; i < trList.length; i++) {
		var tdList = trList[i].getElementsByTagName("td");
		var tdData = [];
		for (var j = 0; j < tdList.length; j++) {
			tdData.push(tdList[j].innerHTML);
		}
		arrData.push(tdData);
	}
	//排序
	arrData.sort(sortMath);
	if (boole) {
		arrData.reverse()
	}
	//排序函数
	function sortMath(a,b){
		return a[index] - b[index];
	}
	//清空表格
	document.getElementsByTagName("tbody")[0].innerHTML = "";
	//添加数据
	for (var i = 0; i < arrData.length; i++) {
		createData(arrData[i]);
	}
}