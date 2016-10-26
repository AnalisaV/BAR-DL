var titles = new Array( "MySAPL", "Overdrive", "OneClickDigital", "Freegal", "App Activity" );

var captions = new Array( "The mySAPL app works on Android and Apple devices.  The phone app allows you to do the following:Browse the catalog Check the status of your account. Place holds on library materials, such as manga books, music CDs and DVDs. See a map of all the SAPL libraries.", "This is Overdrive.", "This is OneClickDigital.", 
		"This is Freegal.", "This is App Activity." );

var images = new Array( "images/cell-phone.png", "images/mysapl.png", "images/mobile-apps.jpg.png", "images/mobile-apps.jpg.png", "images/mobile-apps.jpg.png" );

var title = new Array( "The mySAPL app works on Android and Apple devices.  The phone app allows you to do the following:Browse the catalog Check the status of your account. Place holds on library materials, such as manga books, music CDs and DVDs. See a map of all the SAPL libraries.", "This is Overdrive.", "This is OneClickDigital.", 
		"This is Freegal.", "This is App Activity.");

var alt = new Array( "The mySAPL app works on Android and Apple devices.  The phone app allows you to do the following:Browse the catalog Check the status of your account. Place holds on library materials, such as manga books, music CDs and DVDs. See a map of all the SAPL libraries.", "This is Overdrive.", "This is OneClickDigital.", 
		"This is Freegal.", "This is App Activity." );

var index = 0;


function goNext()

{
	index = index + 1;
	
	if( index == 5 )
		{
		index = 4;
		}
	
	document.getElementById( "slideshowtitle" ).innerHTML = titles[ index ];	
	document.getElementById( "slideshowdescription" ).innerHTML = captions[ index ] ;	
	document.getElementById( "slideshowimage" ).src = images[ index ];
	document.getElementById( "slideshowimage" ).title = title[ index ];	
	document.getElementById( "slideshowimage" ).alt = alt[ index ];	
}

function swap( swapValue )
{
 index = swapValue;	
 
 document.getElementById( "slideshowtitle" ).innerHTML = titles[ index ];	
	document.getElementById( "slideshowdescription" ).innerHTML = captions[ index ] ;	
	document.getElementById( "slideshowimage" ).src = images[ index ];
	document.getElementById( "slideshowimage" ).title = title[ index ];	
	document.getElementById( "slideshowimage" ).alt = alt[ index];
	
}



function goPrevious()

{
	index = index - 1;
	
	if( index == 5 )
		{
		index = 4;
		}
	
	document.getElementById( "slideshowtitle" ).innerHTML = titles[ index ];	
	document.getElementById( "slideshowdescription" ).innerHTML = captions[ index ] ;	
	document.getElementById( "slideshowimage" ).src = images[ index ];
	document.getElementById( "slideshowimage" ).title = title[ index ];	
	document.getElementById( "slideshowimage" ).alt = alt[ index ];	
}

function swap( swapValue )
{
 index = swapValue;	
 
 document.getElementById( "slideshowtitle" ).innerHTML = titles[ index ];	
	document.getElementById( "slideshowdescription" ).innerHTML = captions[ index ] ;	
	document.getElementById( "slideshowimage" ).src = images[ index ];
	document.getElementById( "slideshowimage" ).title = title[ index ];	
	document.getElementById( "slideshowimage" ).alt = alt[ index ];
	
}