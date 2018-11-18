let images = document.querySelectorAll('.photos');
let hideBtn = document.getElementById('altBtn');
let hideAllBtn = document.getElementById('hideBtn');
let showAllBtn = document.getElementById('showBtn');
let isHidden = false;


// display only elements with specific alt
hideBtn.addEventListener('click', function() {	
	images.forEach(function(el) {
		if(el.alt !== 'tower'){
			el.classList.toggle('image-hide');
		}
	});
		isHidden = !isHidden;
	   if (isHidden) {
	       hideBtn.firstChild.data = "Pokaz wszystkie";
	   }
	   else {
	     hideBtn.firstChild.data = "Ukryj z alt";
	   }
});	

//hide all
hideAllBtn.addEventListener('click', () => {
	images.forEach((el) => { 
		el.classList.add('image-hide');
	})
	hideBtn.disabled = true;

})

//show all
showAllBtn.addEventListener('click', () => {
	images.forEach((el) => { 
		el.classList.remove('image-hide');
	})
	hideBtn.disabled = false;
})

images.forEach((el) => {
	//toogle zoom on images on mouse over and out
		el.addEventListener('mouseover', () => {
			el.classList.add('photos-zoom');
		});

		el.addEventListener('mouseout', () => {
			el.classList.remove('photos-zoom');
		});
});

		// el.addEventListener('click', () => {
		// 	console.log('clicked');
		// 	let title = document.createElement('h2');
		// 	title.textContent = 'Photo';
		// 	console.log(el);
		// 	el.appendChild(title);
		// });
