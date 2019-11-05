$?null:alert('I need JQ');

$('.triggerScroll').click(startScroll);
function startScroll(e) {
	e.preventDefault();
	var id = e.target.getAttribute("data-id");
	var elem = document.getElementById(id);
	$('html, body').animate({
		scrollTop: $(elem).offset().top
	}, 1300);
}