// click an event to mark it as finished status.
function markAsFinished(){
	$(this).toggleClass("completed");
}
$("ul").on("click", "li", markAsFinished);
// click to delete an event.
function deleteEvent()
{
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	}); //delete parent;
	event.stopPropagation();
}
$("ul").on("click", "span", deleteEvent);
// add a new event by input text area.
$("input[type='text']").on("change", function(){
	var newli = "<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>"+$("input").val()+"</li>";
	$("ul").prepend(newli);
	$(this).val("");
})
// hide text area.
$(".fa-pencil").on("click", function(){
	$("input").fadeToggle();
})