var citySchool = [
	["北京", "北京大学", "Peking University", "清华大学", "Tsinghua University", "北京师范大学", "Beijing Normal University"],
	["上海", "复旦大学", "Fudan University", "同济大学", "Tongji University", "上海大学", "Shanghai University"],
	["浙江", "浙江大学", "Zhejiang University", "浙江理工大学", "Zhejiang SCI-TECH University", "浙江工业大学", "Zhejiang University Of Technology"],
	["广东", "中山大学", "Sun Yat-sen University", "华南理工大学", "South China University Of Technology", "华南农业大学", "South China Agricultural University"],
]
window.onload = function() {
	checkChoice();
	document.getElementById("inSchool").addEventListener("change", function() {
		checkChoice();
	})
	document.getElementById("outSchool").addEventListener("change", function() {
		checkChoice();
	})
	document.getElementById("city").addEventListener("change", function() {
		selectChange();
	})
}

function checkChoice() {
	if (document.getElementById("inSchool").checked) {
		document.getElementById("selectSchool").style.display = "block";
		document.getElementById("selectWork").style.display = "none";
		selectChange();
	} else {
		document.getElementById("selectSchool").style.display = "none";
		document.getElementById("selectWork").style.display = "block";
	}
}

function selectChange() {
	var index = document.getElementById("city").selectedIndex;
	var value = document.getElementById("city").options[index].value;
	if (document.getElementById("school").options.length) {
		document.getElementById("school").options.length = 0;
	}
	switch (value) {
		case citySchool[0][0]:
			addOption(citySchool[0][1], citySchool[0][2]);
			addOption(citySchool[0][3], citySchool[0][4]);
			addOption(citySchool[0][5], citySchool[0][6]);
			break;
		case citySchool[1][0]:
			addOption(citySchool[1][1], citySchool[1][2]);
			addOption(citySchool[1][3], citySchool[1][4]);
			addOption(citySchool[1][5], citySchool[1][6]);
			break;
		case citySchool[2][0]:
			addOption(citySchool[2][1], citySchool[2][2]);
			addOption(citySchool[2][3], citySchool[2][4]);
			addOption(citySchool[2][5], citySchool[2][6]);
			break;
		case citySchool[3][0]:
			addOption(citySchool[3][1], citySchool[3][2]);
			addOption(citySchool[3][3], citySchool[3][4]);
			addOption(citySchool[3][5], citySchool[3][6]);
			break;
	}
}

function addOption(text, value) {
	var option = document.createElement("option");
	option.text = text;
	option.value = value;
	document.getElementById("school").add(option, null);
}