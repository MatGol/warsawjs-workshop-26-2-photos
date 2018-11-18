let imgs = document.querySelectorAll('.photos');

imgs.forEach(function(el) {
		el.addEventListener('click', () => {
			console.log('zoom in');
		});
	});