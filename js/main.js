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


/* COUNTDOWN */



/* END COUNTDOWN */
