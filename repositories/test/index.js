$(function() {
	var btn = $("button");
	var URLS = [];
	var index = 0;
	btn.click(function() {
		if (btn.attr("data-index") == "0") {
			btn.text("正在获取");
			btn.attr("disabled", "disabled");
			getData(url, Fn1);
		} else {
			read();
		}
	})
	var url = window.location.protocol + "//" + window.location.host + "/archives/index.html"

	function Fn1() {
		var oldText = htmlobj.responseText;
		var next = oldText.indexOf("NEXT");
		var newText = oldText.split("<!-- for archive page-->")[1].split('<div class="right-container">')[0];
		var newTextList = newText.split('"post-title-link"')
		var text = null,
			href;
		for (var i = 0; i < newTextList.length - 1; i++) {
			href = newTextList[i].match(/href="(.*)"/)[1];
			href = window.location.protocol + "//" + window.location.host + href ;
			URLS.push(href);
			$(".list").append("<p class='url'>" + href + "</p>");
		}
		if (next > 0) {
			oldText = oldText.split("paginator")[1];
			if (oldText.indexOf("PREV") >= 0) {
				oldText = oldText.split("PREV")[1];
			}
			var u = oldText.match(/href="(.*)" class="next">/)[1];
			url = url.split("archives")[0] + u + "index.html";
			getData(url, Fn1);
		} else {
			btn.text("开始遍历");
			btn.removeAttr("disabled");
			btn.attr("data-index", "1");
		}
	}

	function getData(url, Fn) {
		htmlobj = $.ajax({ //所有参数均为可选
			type: "GET",
			url: url,
			beforeSend: function(XMLHttpRequest) {}, //用于自定义HTTP头
			complete: function(XMLHttpRequest, textStatus) {}, //无论是否成功，完成后的回调函数
			success: function(data, textStatus) {
				Fn()
			}, //请求成功后的回调函数
			error: function(XMLHttpRequest, textStatus, errorThrown) {}, //请求错误的回调函数（最后一个参数：错误对象可选）
			global: true //默认，表示是否触发全局Ajax事件
		})
	}

	function read() {
		$(".url").removeClass("ing");
		$(".url").eq(index).addClass("ing");
		// // $(".url:nth-child("+(index+1)+")").addClass("ing");
		$("iframe").attr("src", URLS[index])

	}
	// $("iframe").load(function(){
	// 	console.log("ifload")
	// 	index++;
	// 	read();
	// });
	var iframe = document.getElementsByTagName("iframe")[0];
	iframe.onload = function() {
		setTimeout(function() {
			//只访问某页面
			URLS = ['http://brandon.vc/about/'];
			
			if ($('.random')[0].checked) {
				index = Math.floor(Math.random()*(URLS.length+1))
				if(!URLS[index]){
					index = 0;
				}
			} else {
				index++;
				if (index == $(".url").length) {
					index = 0;
				}
			}
			$(".detail").text("正在访问："+index);
			read()
		}, 500)

	}
})