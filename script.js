const mainBtn = document.querySelector(".mainbutton");

const primaryBtn = document.querySelector(".primarybutton");

function scrollMyBtnIntoView() {
	const myContainer = document.querySelector(".movement");
	myContainer.scrollIntoView({ behavior: "smooth" });
}

$('#recentWokSliderDesktop').slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 0,
	speed: 3000,
	arrows: false,
	swipe: false,
	slidesToShow: 4,
	cssEase: 'linear',
	pauseOnFocus: false,
	pauseOnHover: false,
	rtl: true,
	variableWidth: true,
});

$('#recentWokSliderMobile').slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 0,
	speed: 3000,
	arrows: false,
	swipe: false,
	slidesToShow: 3,
	cssEase: 'linear',
	pauseOnFocus: false,
	pauseOnHover: false,
	rtl: true,
	variableWidth: true,
	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			speed: 1000,
		  }
		}
	  ]
});