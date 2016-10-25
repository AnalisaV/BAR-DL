function processForm()
{
	var numberOfCorrectResponses = 0;
	
var q1 = document.forms.quiz1.question1;
if ( q1[ 0 ].checked )
	{
	numberOfCorrectResponses = numberOfCorrectResponses + 1;
}

var q2 =document.forms.quiz1.question2;
if( q2[ 1 ].checked )
	{
	numberOfCorrectResponses = numberOfCorrectResponses + 1;
	}

var q3 =document.forms.quiz1.question3;
if( q3[ 2 ].checked )
	{
	numberOfCorrectResponses = numberOfCorrectResponses + 1;
	}

var score = numberOfCorrectResponses / 3;

if( score > .6 )
{
alert( "Congratulations, you passed!" );
 }
else
	{
	alert( "Sorry, you did not pass." );
	}


}

