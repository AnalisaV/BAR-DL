// this file holds any scripts that have to do with communicating with the learning management system (LMS)

// define a SCORM object to interface with LMS
var oScorm = pipwerks.SCORM;  

// This function starts the course.  This function should be called first to ensure that
// all session variables are created
function startCourse()
{
	// check to see if cookies is enabled, otherwise, this won't work
	if( typeof sessionStorage == "undefined" || sessionStorage.disabled )
	{
		alert( "You must enable cookies for this course to work properly." );
	}
	else
	{
		// if it is enabled, checked to see if this course was started
		// if it was not able to retrieve, the key "course_started", then
		// then this is the first time we are running the course
        if( !sessionStorage.getItem( "course_started" ) )
        {
        	// clear the session storage
            sessionStorage.clear();
            // set the "key" by giving it a value.  all values are strings!
            // course_started indicated that this OLM has started
    		sessionStorage.setItem( "course_started", "1" );
    			
			// set the values you want to persist throughout the website here
      		sessionStorage.setItem( "visitTitle", "visited" );
    		sessionStorage.setItem( "visitUseOfLibrary", "unvisited" );
    		sessionStorage.setItem( "visitGetCard", "unvisited" );
    		sessionStorage.setItem( "visitGuidelines", "unvisited" );
    		sessionStorage.setItem( "visitEtiquette", "unvisited" );
    		sessionStorage.setItem( "visitMaterials", "unvisited" );
    		sessionStorage.setItem( "visitActivity", "unvisited" );
    		sessionStorage.setItem( "visitVideo", "unvisited" );
    		sessionStorage.setItem( "visitReferences", "unvisited" );
        }
	}
	
	// initializeSCORM after the OLM environment has been set up
	initializeSCORM();
}

// This function initializes the course by connecting the course to the LMS 
// The SCORM connection is done once at the beginning of the course
// Another function, reportScores(), will connect again when the 
// user is done with the online learning module
function initializeSCORM()
{
	var lmsConnected = oScorm.init();
	
	// we only want to run initializeSCORM once, so use course_started
	// to keep track of how many times we have initialized 
	var getStarted = sessionStorage.getItem( "course_started" );
	
	// only do the following if we are connected to the LMS and
	// if course_started has a value of 1
	if( lmsConnected && getStarted == "1" )
	{
		// SCORM 1.2
        // always set the status to incomplete
		oScorm.set( "cmi.core.lesson_status", "incomplete" );
		
		// change course_started to another value so that this initializeSCORM
		// does not run the initialization code again; otherwise, this OLM
		// will be incomplete if the user goes back to the first page even after
		// passing the exam 
		sessionStorage.setItem( "course_started", "2" );
    		
		// retrieve the LMS values (like user name) here and 
		// integrate them into your course
		alert( "Welcome, " + oScorm.get( "cmi.core.student_name" ) + "!" );
	}
}

// This function reports the score from the assessment to the LMS
// This should only be called when the user submits the answers to the quiz
function reportScores( score )
{	
	//*************important part is FOUR LINES**********
	oScorm.set("cmi.core.score.raw", score );
	oScorm.set("cmi.core.score.min", 0 );
	oScorm.set("cmi.core.score.max", 100 );
	
	
	if( score >=70 )
		{		
document.getElementById( "content-frame" ).contentWindow.document.getElementById( "certificate-link" ).style.display = "inline";

		oScorm.set( "cmi.core.lesson_status", "passed" );
		}
	else
		{
		oScorm.set( "cmi.core.lesson_status", "failed" );
		}
	
	alert( "Reported " + score + " as your score." );
	
	oScorm.save();
}

// This function is called when the window is closed.  It saves and quits the course.

function finishCourse()
{
	sessionStorage.clear();
	oScorm.save();
	oScorm.quit();
}




//This function adds the student's name to the certificate page.
function visitCertificate()
{
	var learner_name = oScorm.get( "cmi.core.student_name" );
	document.getElementById( "content-frame" ).
contentWindow.document.getElementById( "user-name" ).innerHTML = learner_name;
}

function checkAllVisited()
{
	var title = sessionStorage.getItem( "visitTitle" );
	var useoflibrary = sessionStorage.getItem( "visitUseOfLibrary" );
	var getcard = sessionStorage.getItem ( "visitGetCard" );
	var guidelines = sessionStorage.getItem ( "visitGuidelines" );
	var etiquette = sessionStorage.getItem( "visitEtiquette" );
	var materials = sessionStorage.getItem( "visitMaterials" );
	var activity = sessionStorage.getItem( "visitActivity" );
	var video = sessionStorage.getItem( "visitVideo" );
	var references = sessionStorage.getItem( "visitReferences" );

	
	if( title == "visited" && useoflibrary == "visited" && getcard == "visited" && guidelines == "visited" && etiquette == "visited" && materials == "visited" && activity == "visited" && video == "visited" && references == "visited" )
		{
		document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link" ).style.display = "inline";
		}
	
}

function visitTitle()
{
sessionStorage.setItem( "visitTitle", "visited" );	
checkAllVisited();
}

function visitUseOfLibrary()
{
sessionStorage.setItem( "visitUseOfLibrary", "visited" );	
checkAllVisited();
}

function visitGetCard()
{
sessionStorage.setItem( "visitGetCard", "visited" );	
checkAllVisited();
}


function visitGuidelines()
{
sessionStorage.setItem( "visitGuidelines", "visited" );	
checkAllVisited();
}

function visitEtiquette()
{
sessionStorage.setItem( "visitEtiquette", "visited" );	
checkAllVisited();
}

function visitMaterials()
{
sessionStorage.setItem( "visitMaterials", "visited" );	
checkAllVisited();
}

function visitActivity()
{
sessionStorage.setItem( "visitActivity", "visited" );	
checkAllVisited();
}

function visitVideo()
{
sessionStorage.setItem( "visitVideo", "visited" );	
checkAllVisited();
}

function visitReferences()
{
sessionStorage.setItem( "visitReferences", "visited" );	
checkAllVisited();
}