jQuery(document).ready(function(){

	redactedWords;		
	
	newField = "<tr><td></td><td><input type='text' name='redactyl_settings[redactyl_text_field_1]' value = 'ding'>";
	newField += "<a class='delete' href='#'><span class='dashicons dashicons-dismiss'></span></a></td></tr>";
	


	var newField;	
	var totalFields = Object.keys(redactedWords).length;

	

	//On page load, generate correct number of fields based on data in DB	
	generate_fields_onload(redactedWords, newField);	
	function generate_fields_onload(redactedWords, newField){
		//find out how many options in the DB have been populated
		totalWords = Object.keys(redactedWords).length;
		
		//insert a new field for each populated option
		for(i = 1; i<totalWords; i++){
			jQuery(newField).insertAfter('tr:last-child');	
		}

		//find out how many fields are currently on the page
		totalFields = jQuery('.form-table input[type=text]');
		
		//increment their value
		jQuery.each(totalFields, function(key, value){
			console.log(value);
			jQuery(this).attr('name', 'redactyl_settings[redactyl_text_field_' + key + ']' );
			
		});
		
	}	




/*

//should be generating correct name and value for each field
function generate_unique_integer(redactedWords, newField){	


//problem is length is incorrect

	numberOfEntries = jQuery('.form-table input[type="text"]').length;
	//console.log(numberOfEntries);
	for(i = -1; i<numberOfEntries; i++){
	
newField = "<tr><td></td><td><input type='text' name='redactyl_settings[redactyl_text_field_"+ i +"]' value = 'ding'>";
newField += "<a class='delete' href='#'><span class='dashicons dashicons-dismiss'></span></a></td></tr>";

		
	}
		console.log(newField);
	console.log(redactedWords);

}


*/






jQuery('.form-table').append('<a class="add button button-secondary" href="#">+ Add another word</a>');


	//Add new fields
	jQuery('.add').bind('click', function(e){
		
		e.stopPropagation;
		add_new_field();
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







function add_new_field(){
	//find out how many fields are currently on the page
	totalFields = jQuery('.form-table input[type=text]').length;

	//Get the current parent tr
	var closestRow = jQuery('tr').last();
	//Insert the new field after
	jQuery(newField).insertAfter(closestRow);

	//Find the last field on the page and increment its value
	jQuery('.form-table input[type=text]').last().attr('name', 'redactyl_settings[redactyl_text_field_' + totalFields + ']' );
	totalFields++;


}



}, function(){});

