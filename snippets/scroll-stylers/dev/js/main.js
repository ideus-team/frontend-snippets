
$(function() {
	initCustomContentScroller();
	initScrollStyler();
});

function initCustomContentScroller() {
	$('.js-scrollStyledBlock_1').mCustomScrollbar({
		theme: 'dark',
		setWidth: false, //false or value in pixels (integer) or percentage (string).
		setHeight: false,
		setTop: '0', //set the initial css top property of content, accepts string values (css top position), setTop: '-100px'.
		setLeft: '0',
		axis: 'yx', //y, x, yx
		scrollbarPosition: 'outside', //inside, outside
		scrollInertia: 0, //set the amount of scrolling momentum as animation duration in milliseconds, integer
		autoDraggerLength: true, //enable or disable auto-adjusting scrollbar dragger length in relation to scrolling amount, true or false
		autoHideScrollbar: true, //enable or disable auto-hiding the scrollbar when inactive, true or false
		autoExpandScrollbar: true, //expand scroll during scrolling
		alwaysShowScrollbar: 2, //0 – disable (default),  1 – keep dragger rail visible, 2 – keep all scrollbar components (dragger, rail, buttons etc.) visible
		snapAmount: 5, //make scrolling snap to a multiple of a fixed number of pixels, integer
		snapOffset: 0,
		mouseWheel: {  //enable or disable content scrolling via mouse-wheel.
			enable: true, 
			scrollAmount: 5, 
			axis: 'x', 
			preventDefault: true,
			deltaFactor: 'auto',
			normalizeDelta: false,
			invert: true,
			disableOver: ['select','option','keygen', 'datalist', 'textarea']
		},
		scrollButtons: { //enable or disable scrollbar buttons
			enable: true,
			scrollAmount: 50,
			scrollType: 'stepless', //stepped, stepless
			tabindex: 1
		},
		keyboard: { //enable or disable content scrolling via the keyboard
			enable: true,
			scrollAmount: 5,
			scrollType: 'stepped' //stepless, stepped
		},
		contentTouchScroll: 25, //enable or disable content touch-swipe scrolling for touch-enabled devices, false or integer
		//integer values define the axis-specific minimum amount required for scrolling momentum (default: 25)
		documentTouchScroll: true, //enable or disable document touch-swipe scrolling for touch-enabled devices, true or false
		advanced: {
			autoExpandHorizontalScroll: false,
			autoScrollOnFocus: false,
			updateOnContentResize: true,
			updateOnImageLoad: true,
			updateOnSelectorChange: true,
			extraDraggableSelectors: '.b-scrollbar',
			releaseDraggableSelectors: '.b-scrollbar',
			autoUpdateTimeout: 20
		},
		callbacks: {
			alwaysTriggerOffsets: false,
		 	onTotalScrollOffset: 0,
			onTotalScrollBackOffset: 0,
			onCreate:function() {
				console.log('created');
			},
			onInit:function() {},
			onScrollStart:function() {},
			onScroll:function() {},
			whileScrolling:function() {},
			onTotalScroll:function() {},
			onTotalScrollBack:function() {},
			onOverflowY: function(){},
			onOverflowX: function() {},
			onOverflowYNone: function() {},
			onOverflowXNone: function(){},
			onBeforeUpdate: function(){},
			onUpdate: function(){},
			onImageLoad: function(){},
			onSelectorChange: function(){},
		},
		live: 'on', //enable or disable applying scrollbar(s) on all elements matching the current selector
		liveSelector: ''
	});

	$('.js-scrollStyledBlock_2').mCustomScrollbar({
		scrollbarPosition: 'outside',
		scrollButtons: { 
			enable: true,
			scrollAmount: 50,
			scrollType: 'stepless', //stepped, stepless
			tabindex: 1
		}
	});

	$('.js-scrollBottom').click(function(e){
		e.preventDefault();
		$(this).nextAll().mCustomScrollbar('scrollTo','bottom', {
			scrollInertia: 3000, //scroll-to duration, value in milliseconds
			scrollEasing: 'linear', //linear, easeOut, easeInOut
			moveDragger: true, //scroll scrollbar dragger (instead of content)
			timeout: 500,
			callbacks: false //true or false
		});
	});

	$('.js-stop').on('click', function(e) {
		e.preventDefault();
		var block;
		block = $(this).nextAll('.js-scrollStyledBlock_1');
		if(block.hasClass('-type_play')) {
			block.mCustomScrollbar('stop');
			block.removeClass('-type_rebuilt');
		}
		else {
			block.mCustomScrollbar('update');
			block.addClass('-type_play');
		}
	});

	$('.js-update').on('click', function(e) {
		e.preventDefault();
		var text, block;
		text= 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? <br />';
		block = $(this).nextAll('.js-scrollStyledBlock_3');
		block.find('.mCSB_container').append(text);
		block.mCustomScrollbar('update');
	});

	$('.js-enable').on('click', function(e) {
		e.preventDefault();
		var block;
		block = $(this).nextAll('.js-scrollStyledBlock_3');
		if(block.hasClass('-type_enable')) {
			block.mCustomScrollbar('disable', true);
			block.removeClass('-type_enable');
		}
		else {
			block.mCustomScrollbar('update');
			block.addClass('-type_enable');
		}
	});

	$('.js-destroy').on('click', function(e) {
		e.preventDefault();
		var block;
		block = $(this).nextAll('.js-scrollStyledBlock_3');
		if(block.hasClass('-type_rebuilt')) {
			block.mCustomScrollbar('destroy');
			block.removeClass('-type_rebuilt');
		}
		else {
			initScrollStyler();
			block.addClass('-type_rebuilt');
		}
	});
}

function initScrollStyler() {
	$('.js-scrollStyledBlock_3').mCustomScrollbar({
		scrollbarPosition: 'outside',
		theme: 'dark',
		advanced: {
	    updateOnContentResize: true,
	    updateOnImageLoad:  true
		}
	});
}
