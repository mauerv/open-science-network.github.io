
function panel(){

	this.div = ".panel-left";
	this.btnClose= ".btn-close";
	this.btnShow = ".btn-show";
	this.backdrop = ".background-black";
	this.hide = function (){
		var pantalla = $(window).width();
		var ancho = pantalla * 0.8;
		ancho = ancho * -1; 
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



