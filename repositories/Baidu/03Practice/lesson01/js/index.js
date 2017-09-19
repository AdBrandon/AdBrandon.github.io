window.onload = function() {
	var RegChinese = /[\u4E00-\u9FA5]/g; // 汉字
	var RegNotChinese = /[^\u4E00-\u9FA5\uf900-\ufa2d]/g; //非中文
	var RegTrim = /^\s+|\s+$/g; //匹配空字符
	var btn = document.getElementsByTagName("button")[0];
	btn.addEventListener("click", function() {
		var input = document.getElementById("inputname");
		var inputName = input.value.replace(RegTrim, "");
		var text = document.getElementsByTagName("p")[0];
		if (inputName.length == 0) {
			text.style.color = "red";
			input.style.borderColor = "#F00"
		} else {
			var inputLength = inputName.replace(RegChinese, "").length + inputName.replace(RegNotChinese, "").length * 2;
			if (inputLength >= 4 && inputLength <= 16) {
				text.style.color = "green";
				text.innerHTML = "验证成功";
				input.style.borderColor = "green"
			} else {
				text.style.color = "#C1189F";
				text.innerHTML = "字符数为4~16位!";
				input.style.borderColor = "#C1189F"
			}
		}
	}, false);
	var input = document.getElementById("inputname");
	input.addEventListener("focus", function() {
		var text = document.getElementsByTagName("p")[0];
		text.innerHTML = "必填，长度为4~16个字符";
		text.style.color = "#aaa";
		this.style.borderColor = "#999"
	}, false);
}