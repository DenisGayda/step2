var popupMenu = document.querySelectorAll('.b-popup-menu__item');
console.log(popupMenu)

for (var i = 0; i < popupMenu.length; i++) {
	popupMenu[i].onclick = function() {
		console.log(this.dataset.tabs)
		var popupShow = document.querySelectorAll('.b-popup-show__item');
		for (var i = 0; i < popupShow.length; i++) {
			console.log(popupShow)
			popupShow[i].style.display = 'none';
		};
		
		document.getElementById(this.dataset.tabs).style.display = 'block';
	};
};

var sliderInner = document.querySelector('.b-main-slider__content');
var sliderIframe = document.querySelectorAll('.b-main-slider__content_item');
var arrowLeft = document.querySelector('.b-main-slider__arrow_left');
var arrowRight = document.querySelector('.b-main-slider__arrow_right');

arrowRight.onclick = function() {
	var currentMargin = parseInt(sliderInner.style.marginLeft || 0);

	if (currentMargin != (sliderIframe.length - 1)*-456) {
		sliderInner.style.marginLeft = (currentMargin - 456) + 'px';
	}
}

arrowLeft.onclick = function() {
	var currentMargin = parseInt(sliderInner.style.marginLeft || 0);
	
	if (currentMargin != 0) {
		sliderInner.style.marginLeft = (currentMargin + 456) + 'px';
	}
}