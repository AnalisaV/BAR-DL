
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "Tutor.com is a 24/7 tutoring service that assists with various subjects, including research.";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "Merriam-Webster Dictionary has quizzes and fun facts about words. A free version is also available.";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "Bartleby.com allows you to search for specific quotes at no cost.";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "Thesaurus.com allows you to search for specific words and synonyms, and includes a pronunciation tool.";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}