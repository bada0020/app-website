var $dialog = $('#video');
var $placeholder = $('#video-placeholder');

dialogPolyfill.registerDialog($dialog.get(0));
	
	$placeholder.html('<iframe src="http://player.vimeo.com/video/81326455?color=ff9933" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	/*
		.get() returns the native Javascript element for us to access
		when using jQuery we dont have to access to the original HTML 
			elements directly, we are using jQuery to manipulate them.
		Example:
		$dialog.show ()- will call jQuery's 'show()' function
		$diaog.get(0).show()- Will call Javascript's native 'show()' function
		*/	

		$dialog.get(0).showModal();
		//show() -> allows multiple dialogs
		//showModal () -> single dialog, with no user interaction behind
