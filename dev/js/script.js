$(document).ready(function() {
	$('.slider_upper_block.nOvariableWidth').slick({
		infinite: true,
		adaptiveHeight: true,
		prevArrow: '<button class="left slider_navigation"></button>',
	    nextArrow: '<button class="right slider_navigation"></button>',
		
	});

	$('#reviews_slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		// centerMode: true,
		// variableWidth: true,
		prevArrow: '<button class="left slider_navigation"></button>',
	    nextArrow: '<button class="right slider_navigation"></button>',
		lazyLoad: 'ondemand',
		 responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
      
        slidesToShow: 1
      }
    }
  ]
	});
	$('#photo_slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		adaptiveHeight: true,
		// centerMode: true,
		// variableWidth: true,
		prevArrow: '<button class="left slider_navigation"></button>',
	    nextArrow: '<button class="right slider_navigation"></button>',
		lazyLoad: 'ondemand',
		 responsive: [
    {
      breakpoint: 768,
      settings: {
      
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
       
        slidesToShow: 1
      }
    }
  ]
	});

	$('#sertificate_slider').slick({
		infinite: true,
		speed: 300,
		// slidesToShow: 3,
		 slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		prevArrow: '<button class="left slider_navigation"></button>',
	    nextArrow: '<button class="right slider_navigation"></button>',
		lazyLoad: 'ondemand',
		 responsive: [
    {
      breakpoint: 768,
      settings: {
      
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
       
        slidesToShow: 1
      }
    }
  ]
	});

	$('.service_slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 6000,
	});


	$('#reviews_slider, #photo_slider, .service_slider, #sertificate_slider').each(function() {
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title');
				}
			},
			zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		});
	});
});


$( "input[type=checkbox]" ).on( "click", function(){
	$(this).parent('.for_input').toggleClass('check')
})


// ADDITIONAL INFORMATION
function additionalFunc(){
	var checkedValue = '';
	var priceChecks = $('.price_block input[type="checkbox"]:checked');
	var peopleNum = $('.price_block input[type="number"]')[0].value;

	$.each(priceChecks, function(val) {
		this.value;
		value = this.value;
		checkedValue += value + ' </br>';
		return checkedValue;
	});

	if(peopleNum > 0){
		checkedValue = checkedValue + '</br>Количества участников от компании ' + peopleNum + ' человек';
	};
	try{
		$('input[name="additional"]')[0].value = checkedValue;
	} catch(e){

	}
	
	return checkedValue;
};

 // load seminars

$.post('https://seminarna.ru/seminari-i-treningi/?type=4', function (content) {
    content = $('<div>' + content + '</div>');
    $('.distant-container').append(content.find('.seminar.row'));
});

$.post('https://seminarna.ru/', function (content) {
    content = $('<div>' + content + '</div>');
    $('.trust-container').append(content.find('.section.clients'));
});

$('[data-reveal-id]').on('click', function(event){
	event.preventDefault()
	if($('.price_block').length !== 0){
		additionalFunc();
	}
	
	var textHeader = $(this).attr('data-text-form');
	var textareaHeader = $(this).attr('data-textarea-form');

	$('.lead').text(textHeader);
	$('label[for="message"]').html(textareaHeader + '<textarea id="message" name="message" rows="3" placeholder="(Ваши комментарии, пожелания к программе, целевая аудитория, количество участников и тд.)"></textarea>');

	if($(this).text().length == 0){
		$('input[name="request"]')[0].value = $(this).val();
	} else{
		$('input[name="request"]')[0].value = $(this).text();
	}
	
})