let images = document.querySelectorAll('img');

images.forEach(function(el) {
	el.classList.add('mystyle');
	el.addEventListener('click', function() {
		el.classList.toggle('redstyle');
	})
});

