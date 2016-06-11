jQuery(document).ready(function(){
		
var newField;	
generate_unique_integer(newField);


function generate_unique_integer(){	
	length = jQuery('.form-table input[type="text"]').length+1;
	console.log(length);
	for(i = 0; i<length; i++){

		newField = "<tr><td></td><td><input type='text' name='redactyl_settings[redactyl_text_field_"+ i +"]' value = "+bling+">";
		newField += "<a class='delete' href='#'><span class='dashicons dashicons-dismiss'></span></a></td></tr>";
		console.log(i);
	}

}

//	i=jQuery('.form-table input[type="text"]').length;	




//alert(bling);



console.log();


//Increment the number in the name value on the fields so i can pass it to the database

//So the problem is that i is always overwritten by its global value

//on load, the loaded fields should already increment

	
generate_fields_onload();	
function generate_fields_onload(newField){
	jQuery(newField).insertAfter('tr:last-child');	
}	

jQuery('.form-table').append('<a class="add button button-secondary" href="#">+ Add another word</a>');


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

	i++;
	console.log(i);
	console.log(newField);
	//Get the current parent tr
	var closestRow = jQuery('tr').last();
	//Insert the new field after
	jQuery(newField).insertAfter(closestRow);
	generate_unique_integer(newField);


}



}, function(){});

