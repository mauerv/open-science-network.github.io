function panel() {
	this.div = ".panel-left";
	this.btnClose= ".btn-close";
	this.btnShow = ".btn-show";
	this.backdrop = ".background-black";
	this.hide = function (){
		var pantalla = $(window).width();
		var ancho = pantalla * 0.8;
		ancho = ancho * -3;
		$(this.div).animate({left:ancho});
		$(this.backdrop).hide();
	};
	this.show = function (){
		$(this.div).animate({left:0});
		$(this.backdrop).fadeIn();
	};
}

$panel = new panel();

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
		const slackTeam = "open-science-network";
		const token = 'xoxp-228228151030-228228151126-229029923764-220c63612dad016fe7d3a1fb16ba766c';
		const url = `https://${slackTeam}.slack.com/api/users.admin.invite`;

		fetch(url, {
		  method: 'POST',
		  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		  body: `token=${token}&email=${email}`
		})
		.then(function(res) {
		  return res.text();
		})
		.then(function(body) {
			const data = JSON.parse(body)
			if(data.ok === true) {
				$("#binput-form").append("<p id='binput-success'>Check your email for an invitation</p>")
				$("#binput-form").off()
			}
		})
		.catch(() => {

		});
	})
})
