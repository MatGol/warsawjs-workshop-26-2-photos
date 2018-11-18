let imageList = ["./images/photo1.jpg", "./images/photo2.jpg","./images/photo3.jpg","./images/photo4.jpg"];
let active = 0;
let time = 1000;
let imgHtml = document.querySelector('.image-slide');
let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');

function slideImage () {
	imgHtml.src = imageList[active];
	active++;
	if(active == imageList.length){
		active = 0;
	}
	setTimeout(slideImage, time);
};

nextBtn.addEventListener('click', function(){
	active++;
	if(active == imageList.length){
		active = 0;
	}
	imgHtml.src = imageList[active];
});

prevBtn.addEventListener('click', function(){
	active--;
	if(active < 0) active = imageList.length - 1;
	else if (active == imageList.length - 1) active = 0;
	imgHtml.src = imageList[active];
});

slideImage();

