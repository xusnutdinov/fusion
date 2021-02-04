const servicesItemBtn = document.querySelectorAll('.services__item-btn');
const servicesItemBtnClose = document.querySelectorAll('.services__details-back');

servicesItemBtn.forEach(function(item) {
	item.addEventListener('click', function(event) {
		let detailId = item.getAttribute('data-service');
		let detail = document.querySelector(detailId);

		detail.classList.add('active');
	});
});

servicesItemBtnClose.forEach(function(item) {
	item.addEventListener('click', function(event){
		item.closest('.services__details').classList.remove('active');
	}); 
});



let testimonialsSlider = new Swiper('.testimonials-slider', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 40,
	autoplay: {
	   delay: 5000,
	   disableOnInteraction: true,
	 },	
	pagination: {
		el: '.testimonials-slider-nav',
		clickable: true,
	},
});


const inputs = document.querySelectorAll('.input');
const labels = document.querySelectorAll('label');

inputs.forEach(function(item) {
	item.addEventListener('click', function(event) {
		labels.forEach(function(labl) {
			labl.classList.remove('focus');
		});
		let label = item.closest('.form__input').querySelector('label');
		console.log(label)
		label.classList.add('focus');
	});
});