
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "You can check out up to 50 books at one time. The loan period is 3 weeks.";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "Magazines, comic books and mangas all fall under the books category. They are included in the 50 book limit.";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "You can check out up to 5 dvds at a time. Most have a 3 week loan period." ;
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "You can have up to 15 audiobooks and ebooks checked out at a time.";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}