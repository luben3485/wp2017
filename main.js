$('#first').on('click',function(){
	$(this).fadeOut();
	$('#second').fadeOut();
	$('#third').fadeOut();
	$('#forth').fadeOut();
	$('#fifth').fadeOut();
     window.location = "aboutme.html"; 

});
$('#second').on('click',function(){
	$(this).fadeOut();
	$('#first').fadeOut();
	$('#third').fadeOut();
	$('#forth').fadeOut();
	$('#fifth').fadeOut();
    window.location = "education.html";
});
$('#third').on('click',function(){
	$(this).fadeOut();
	$('#second').fadeOut();
	$('#first').fadeOut();
	$('#forth').fadeOut();
	$('#fifth').fadeOut();
    window.location = "story.html"; 

});
$('#forth').on('click',function(){
	$(this).fadeOut();
	$('#second').fadeOut();
	$('#third').fadeOut();
	$('#first').fadeOut();
	$('#fifth').fadeOut();
    window.location = "activity.html";

});
$('#fifth').on('click',function(){
	$(this).fadeOut();
	$('#second').fadeOut();
	$('#third').fadeOut();
	$('#forth').fadeOut();
	$('#first').fadeOut();
    window.location = "contactme.html";

});