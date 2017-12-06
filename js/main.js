function panel() {
	this.div = ".panel-left";
	this.btnClose= ".btn-close";
	this.btnShow = ".btn-show";
	this.backdrop = ".background-black";
	this.hide = () => {
		var screen = $(window).width();
		var width = screen * 0.8;
		width = width * -3;
		$(this.div).animate({left: width});
		$(this.backdrop).hide();
	};
	this.show = () => {
		$(this.div).animate({left:0});
		$(this.backdrop).fadeIn();
	};
}

let $panel = new panel();

$(document).on("click",$panel.btnShow,function(){
	$panel.show();
});

$(document).on("click",$panel.btnClose + "," + $panel.backdrop + "," + $panel.div + " ul li" ,function(){
	$panel.hide();
});

$(document).ready(function() {
	$("#binput-form").submit(e => {
		e.preventDefault()
		const email = $("#binput").val()
		const url = `http://osn-web.herokuapp.com`;

		fetch(url, {
		  method: 'POST',
		  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		  body: `email=${email}`
		})
		.then(function(res) {
		  return res.text();
		})
		.then(function(text) {
			const data = JSON.parse(text)
			if(data.ok === true) {
				$("#binput-message").remove()
				$("#binput-form").append("<p id='binput-message'>Check your email for an invitation</p>")
			} else {
				if(data.error === "already_invited") {
					$("#binput-message").remove()
					$("#binput-form").append("<p id='binput-message'>Your email was already invited</p>")
				} else {
					$("#binput-message").remove()
					$("#binput-form").append("<p id='binput-message'>Please input a valid email</p>")
				}
			}
		})
		.catch((err) => {
			$("#binput-message").remove()
			$("#binput-form").append("<p id='binput-message'>Something went wrong, please try again later</p>")
		});
	})
})
