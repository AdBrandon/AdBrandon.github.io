var RegChinese = /[\u4E00-\u9FA5]/g; // 汉字
var RegNotChinese = /[^\u4E00-\u9FA5\uf900-\ufa2d]/g; //非中文
var RegTrim = /^\s+|\s+$/g; //匹配空字符
var RegEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/; //匹配邮箱
var RegPhone = /^[1][3-9][0-9]{9}$/; //匹配手机号
window.onload = function() {
		document.getElementById("name").addEventListener("focus", function() {
			information(this, "必填，长度为4~16个字符", "#aaa");
		}, false);
		document.getElementById("name").addEventListener("blur", function() {
			checkName();
		}, false);
		document.getElementById("password").addEventListener("focus", function() {
			information(this, "必填，请输入您的密码", "#aaa");
		}, false);
		document.getElementById("password").addEventListener("blur", function() {
			if (checkPassword() & document.getElementById("password2").value.replace(RegTrim, "").length > 0) {
				checkPassword2();
			}
		}, false);
		document.getElementById("password2").addEventListener("focus", function() {
			information(this, "必填，请再次输入相同密码", "#aaa");
		}, false);
		document.getElementById("password2").addEventListener("blur", function() {
			checkPassword2();
		}, false);
		document.getElementById("email").addEventListener("focus", function() {
			information(this, "必填，请输入常用邮箱", "#aaa");
		}, false);
		document.getElementById("email").addEventListener("blur", function() {
			checkEmail()
		}, false);
		document.getElementById("tel").addEventListener("focus", function() {
			information(this, "必填，请输入您的手机号", "#aaa");
		}, false);
		document.getElementById("tel").addEventListener("blur", function() {
			checkPhone()
		}, false);
		document.getElementById("submit").addEventListener("click", function(event) {
			if (!checkAll()) {
				event.preventDefault();
			};
		}, false);
	}
	// 验证数据不为空通用函数：input节点
function checkNotEmpty(node) {
	var data = node.value.replace(RegTrim, "");
	if (data.length == 0) {
		information(node, "不能为空！", "#FF4444");
		node.style.borderColor = "#FF4444"
		return false;
	} else {
		return true;
	}
}
// 验证数据长度通用函数：input节点
function checkLength(node) {
	if (checkNotEmpty(node)) {
		var data = node.value.replace(RegTrim, "");
		var inputLength = data.replace(RegChinese, "").length + data.replace(RegNotChinese, "").length * 2;
		if (inputLength >= 4 & inputLength <= 16) {
			information(node, "验证成功！", "#00C113");
			node.style.borderColor = "#00C113"
			return true;
		} else {
			information(node, "字符数为4~16位！", "#C1189F");
			node.style.borderColor = "#C1189F"
			return false;
		}
	} else {
		return false;
	}
}
// 验证数据一致：input节点，参照节点
function checkAgain(node, passwordNode) {
	var data = node.value.replace(RegTrim, "");
	var password = passwordNode.value.replace(RegTrim, "");
	if (data == password) {
		information(node, "验证成功！", "#00C113");
		node.style.borderColor = "#00C113"
		return true;
	} else {
		information(node, "请再次输入相同密码！", "#C1189F");
		node.style.borderColor = "#C1189F"
		return false;
	}
}
// 验证数据正则通用函数：input节点，正则表达
function checkReg(node, Reg) {
	var data = node.value.replace(RegTrim, "");
	if (Reg.test(data)) {
		return true;
	} else {
		return false;
	}
}
//验证名称
function checkName() {
	var node = document.getElementById("name");
	return checkLength(node);
}
//验证密码
function checkPassword() {
	var node = document.getElementById("password");
	return checkLength(node);
}
//验证密码2
function checkPassword2() {
	var passwordNode = document.getElementById("password");
	var node = document.getElementById("password2");
	if (checkLength(node)) {
		return checkAgain(node, passwordNode);
	} else {
		return false;
	}
}
// 验证邮箱
function checkEmail() {
	var node = document.getElementById("email");
	if (checkNotEmpty(node)) {
		if (checkReg(node, RegEmail)) {
			information(node, "验证成功！", "#00C113");
			node.style.borderColor = "#00C113"
			return true;
		} else {
			information(node, "请输入正确的邮箱地址！", "#C1189F")
			node.style.borderColor = "#C1189F"
			return false;
		}
	} else {
		return false;
	}
}
// 验证手机号
function checkPhone() {
	var node = document.getElementById("tel");
	if (checkNotEmpty(node)) {
		if (checkReg(node, RegPhone)) {
			information(node, "验证成功！", "#00C113");
			node.style.borderColor = "#00C113"
			return true;
		} else {
			information(node, "请输入正确的手机号码！", "#C1189F")
			node.style.borderColor = "#C1189F"
			return false;
		}
	} else {
		return false;
	}
}
// 验证所有信息
function checkAll() {
	if (checkName() && checkPassword() && checkPassword2() &&  checkEmail() && checkPhone()) {
		alert("提交成功!")
		return true;
	} else {
		alert("提交失败!")
		return false;
	}
	
}
//创建提醒通用函数：input节点，提醒内容，文本颜色
function information(node, text, color) {
	var pNode = document.getElementById(node.getAttribute("id") + "p");
	if (pNode == null) {
		pNode = document.createElement("p");
		pNode.setAttribute("id", node.getAttribute("id") + "p")
		insertAfter(pNode, node);
	}
	pNode.innerHTML = text;
	pNode.style.color = color;
}

//在原节点后插入新节点：新节点，原节点
function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.insertBefore(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}