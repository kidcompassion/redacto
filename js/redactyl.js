jQuery(document).ready(function(){


counter = 1;

	var newField;
	newField = "<div class = field ><input type='text' name='redactyl_settings[redactyl_text_field_0]'>";
	newField += "<a class='add' href='#'>+</a>";
	newField += "<a class='delete' href='#'>-</a></div>";


jQuery('.add').bind('click', function(e){
	e.stopPropagation;
	addCopy();
	jQuery('.field').each(function(key, value){
		jQuery(this).addClass('field-'+ key);
	});

	jQuery('.delete').bind('click', function(e){
		jQuery(this).parent().remove();
	});

});




function addCopy(counter){
	field = '<td>brrrrap</td>';
	jQuery(newField).insertAfter('tr');



}



});

