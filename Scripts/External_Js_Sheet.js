

  $(document).ready(function() {
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
                    }, 800, function() {

                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                } // End if
            });
        });
// main page slider font
function showValue(this.value)
{
	document.getElementById("range").innerHTML=this.value;
}
    
  



$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
// product page validations
function verification(){
    var fName= document.getElementById("Firstname").value;
     var lName= document.getElementById("Lastname").value;
     var Email= document.getElementById("Email").value;
    if(!(isNaN(lName))){
       document.getElementById("fName_vad").innerHTML=Valid;
       }else{
         document.getElementById("fName_vad").innerHTML=INValid;   
       }
    if(!(isNaN(fName))){
       document.getElementById("lName_vad").innerHTML=Valid;
       }else{
         document.getElementById("lName_vad").innerHTML=INValid;   
       }
}