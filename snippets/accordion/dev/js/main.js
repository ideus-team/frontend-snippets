$(function(){
	initWokoAccordion();
	initKangaroo();
	initTcgElevator();
});

function initWokoAccordion() {
	$('.js-wokoAccordion').accordion({
		firstChildExpand: true, //whether the first section is expanded or not
		multiExpand: false, //whether expanding mulitple section is allowed or not
		slideSpeed: 500, //slide animation speed
		dropDownIcon: '&#9660', //drop down icon
	});
}


function initKangaroo() {
	$('.js-kangaroo').kangaroo({
		open: -1,
    oneOpenedItem: true, // if set to true, only one item can be opened. Once one item is opened, any other that is opened will be closed first
    speed: 600, // speed of the open / close item animation
    easing: 'easeOutCubic', // easing of the open / close item animation
    scrollSpeed: 900,  // speed of the scroll to action animation
    scrollEasing: 'easeOutCubic', // easing of the scroll to action animation
    responsiveClass: false // Throttled refresh time
	});
}

function initTcgElevator() {
	$('.js-elevator__item').tcgElevator({
		toggleSelector: '.js-elevator__title', //selector for hide/opening the tab content
		contentSelector: '.js-elevator__content', //selector for tab content
		speed: 500, 
		openingSpeed: 500, 
		closingSpeed: 1000,
		openClass: '-type_opened',
		openingClass: '-type_opening',
		closingClass: '-type_closing'
	});
		
	var closed = true;
	$('.js-elevator__toggleAll').click(function(e){
		e.preventDefault();
		var functionToCall = closed ? 'open' : 'close';
		closed = !closed;
		$('.js-elevator__item').tcgElevator(functionToCall);
	});
}
