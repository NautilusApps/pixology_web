$(document).ready(function(){
	$(".play-btn").click(function(){
		event.preventDefault();
		$("#modal").removeClass('modal-hide').addClass('modal-show');
		$('#video1').get(0).play();
	});
	$(".modal-bg").click(function(){
		$("#modal").removeClass('modal-show').addClass('modal-hide');
		$('#video1').get(0).pause();
	});
});