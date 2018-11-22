
/*--------------------Display top responsive navigation on click--------------------*/


function topNavFunction () {
	var a = document.getElementById("topNavId");
	if (a.className === "topNavClass") {
		a.className += " responsive";
	} else {
		a.className = "topNavClass";
	}	

}


/*-----------------Add smooth scroll to all navigation links----------------*/

$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});

/*-----------------------Initialise AOS for animation on scroll------------------------*/


AOS.init({
	duration: 1200,
})


/*------------------------Play the home video once only--------------------------*/

$(document).ready(function() {
	// set this variable to the number of times you like to loop the video
	var loop = 0; 
	// this event will be invoked when the media has reached the end
	$('#myVideo').on('ended', function() {
		// check if we should replay the media
		if(loop--) {
			// replay the video
			this.play();
		} 
	});
});


$(document).ready(function() {
	// set this variable to the number of times you like to loop the video
	var loop = 0; 
	// this event will be invoked when the media has reached the end
	$('#myVideoMobile').on('ended', function() {
		// check if we should replay the media
		if(loop--) {
			// replay the video
			this.play();
		} 
	});
});


/*$(window).scroll(function(){
    var myVideo1 = document.getElementById("myVideo");

    if($(window).scrollTop() === 0){      
          myVideo1.play();

    }else{
            myVideo1.pause();
    }
})*/

/*$(window).scroll(function(){
    var upscroll1 = document.getElementById("upScrollBtn");

    if($(window).scrollTop() === 0){      
          upscroll1.fadeOut();

    }else{
            upscroll1.fadeIn();
    }
});*/

/*-------------------Hide upscroll button when scrollTop-----------------------*/


$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.upScrollC').fadeIn();
     }
    else
     {
      $('.upScrollC').fadeOut();
     }
 });


/*---------------------------Slide up the navigation when a link is clicked--------------*/


/*$(document).ready(function(){
    $("li a").click(function(){
        $(".topNavClass").slideUp("slow");
    });
});*/


/*------------------------- Validating contact form input fields------------------------*/

/*name1 = document.getElementById("name").value;
email1 = document.getElementById("email").value;
phone1 = document.getElementById("telephone").value;
event1 = document.getElementById("btnMsgSubmit").addEventListener('click', inputValidation());

function inputValidation(name) {
	if (name1 == '') {
		name.setCustomValidity('Required email address');
	}else if 
		(name.validity.typeMismatch){
			name.setCustomValidity('please enter a valid email address');
		} else{
			
			name.setCustomValidity('');

		}
}*/

/*--------------------------Open restaurant modal on more info link click---------------------------------*/

document.getElementById("viewProjectDetails").addEventListener("click", callModal);

function callModal() {
	
	document.getElementById("id01").style.display='block';
}


/*--------------------------Close restaurant modal---------------------------------*/

document.getElementById("modalCloseBtn").addEventListener("click", closeModal);

function closeModal() {
	
	document.getElementById("id01").style.display='none';
}

/*--------------------------Open javaScript quiz modal on more info link click---------------------------------*/

document.getElementById("viewProjectDetails2").addEventListener("click", callModal2);

function callModal2() {
	
	document.getElementById("id02").style.display='block';
}


/*--------------------------Close javaScript quiz  modal---------------------------------*/

document.getElementById("modalCloseBtn2").addEventListener("click", closeModal2);

function closeModal2() {
	
	document.getElementById("id02").style.display='none';
}

/*--------------------------Open taxi booking modal on more info link click---------------------------------*/

document.getElementById("viewProjectDetails3").addEventListener("click", callModal3);

function callModal3() {
	
	document.getElementById("id03").style.display='block';
}


/*--------------------------Close taxi booking  modal---------------------------------*/

document.getElementById("modalCloseBtn3").addEventListener("click", closeModal3);

function closeModal3() {
	
	document.getElementById("id03").style.display='none';
}

/*---------------------------Close tooltip-----------------------------*/

$('[data-toggle="tooltiptext"]').tooltiptext({
    trigger : 'hover'
})  


