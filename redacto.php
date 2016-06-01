<?php
/*
Plugin Name: Redacto 1.0
*/
//go through every post 
//hook on page load
//redact whatever word has been indicated in the admin panel

add_action( 'admin_menu', 'redacto_add_admin_menu' );
add_action( 'admin_init', 'redacto_settings_init' );


function redacto_add_admin_menu(  ) { 

	add_options_page( 'Redacto', 'Redacto', 'manage_options', 'redacto', 'redacto_options_page' );

}


function redacto_settings_init(  ) { 

	register_setting( 'pluginPage', 'redacto_settings' );

	add_settings_section(
		'redacto_pluginPage_section', 
		__( 'What word[s] would you like to redact?', 'http://sallypoulsen.com' ), 
		'redacto_settings_section_callback', 
		'pluginPage'
	);

	add_settings_field( 
		'redacto_text_field_0', 
		__( 'Enter a word to redact', 'http://sallypoulsen.com' ), 
		'redacto_text_field_0_render', 
		'pluginPage', 
		'redacto_pluginPage_section' 
	);


}


function redacto_text_field_0_render(  ) { 

	$options = get_option( 'redacto_settings' );
	?>
	<input type='text' name='redacto_settings[redacto_text_field_0]' value='<?php echo $options['redacto_text_field_0']; ?>'>
	<?php

}


function redacto_settings_section_callback(  ) { 

	echo __( 'This section description', 'http://sallypoulsen.com' );

}


function redacto_options_page(  ) { 

	?>
	<form action='options.php' method='post'>

		<h2>Redacto</h2>

		<?php
		settings_fields( 'pluginPage' );
		do_settings_sections( 'pluginPage' );
		submit_button();
		?>

	</form>
	<?php

}


//get data from a setting field



add_action('wp', 'redacto_content');

function redacto_content(){
	$test = get_option('redacto_settings', 'Way to go, you broke it.');

	print_r($test['redacto_text_field_0']);
	global $post;

	$redact = $test['redacto_text_field_0'];

	//$redact = 'test';
	$wordLength = strlen($redact);
	//print_r($wordLength);
	$boxLength = 10*$wordLength;
	$blackBox = '<span style="background-color: black;width:'. $boxLength .'px; display: inline-block; height: 16px;"></span>';

	$pageContent = $post->post_content;
	if (strpos ( $pageContent , $redact) == true){		
		$pageContent = str_replace($redact, $blackBox, $pageContent);
		$post->post_content = $pageContent;
		//echo $pageContent;
	}
	//print_r($post);
		echo $redact;
}



?>