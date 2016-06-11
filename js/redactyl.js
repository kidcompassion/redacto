jQuery(document).ready(function(){

//need to add and delete fields appropriately
//need to ensure create fields remain on the page on reload.

//alert(bling);
counter = 1;

	var newField;
	newField = "<tr><td></td><td><div class = field ><input type='text' name='redactyl_settings[redactyl_text_field_1]' value = "+bling+">";
	newField += "<a class='delete' href='#'><span class='dashicons dashicons-dismiss'></span></a></div></td></tr>";


jQuery('.form-table').append('<a class="add" href="#">Add another word</a>');


	//Add new fields
	jQuery('.add').bind('click', function(e){
		e.stopPropagation;
		addCopy();
		//console.log('bling');
		jQuery('.field').each(function(key, value){
			jQuery(this).addClass('field-'+ key);
		});
		jQuery('.delete').bind('click', function(e){
			e.stopPropagation;
			jQuery(this).closest('tr').remove();
			console.log(jQuery(this));
		});
	});

	//remove field







function addCopy(){
	//Get the current parent tr
	var closestRow = jQuery('tr').last();
	//Insert the new field after
	jQuery(newField).insertAfter(closestRow);
	console.log(closestRow);
}



});

