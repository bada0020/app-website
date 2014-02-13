
var rand=Math.round (Math.random() * 2);
var file='veg-' + rand +'.html';

$('.rand-veg').load(file);



var dinoData = $.ajax('dinos.json',{
	//tell jQuery we are loading a JSON file and to parse it properly
	dataType: 'json'
});

	//Because AJax takes time to download things of the internet 
	//.don() will be triggered only after the Jquuery has finished downloading 
	dinoData.done(function (data){ 
	var dino=Math.round( Math.random() * data.length - 1 ); 
	$('.amazing-name').html(data[dino].name);
	$('.dino-period').html(data[dino].period); 
	$('.dino-diet').html(data[dino].diet); });
