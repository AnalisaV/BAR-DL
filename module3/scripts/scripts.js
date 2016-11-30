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
    		sessionStorage.setItem( "visitObjective", "visited" );
    		sessionStorage.setItem( "visitMySapl", "unvisited" );
    		sessionStorage.setItem( "visitMySaplVideo", "unvisited" );
    		sessionStorage.setItem( "visitOverdrive", "unvisited" );
    		sessionStorage.setItem( "visitOverdriveVideo", "unvisited" );
    		sessionStorage.setItem( "visitOneClick", "unvisited" );
    		sessionStorage.setItem( "visitOneClickDigital", "unvisited" );
    		sessionStorage.setItem( "visitFreegal", "unvisited" );
    		sessionStorage.setItem( "visitFreegalVideo", "unvisited" );
    		sessionStorage.setItem( "visitAppActivity", "unvisited" );
    		sessionStorage.setItem( "visitTutorApp", "unvisited" );
    		sessionStorage.setItem( "visitTutorVideo", "unvisited" );
    		sessionStorage.setItem( "visitReview", "unvisited" );
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
	oScorm.set("cmi.core.score.raw", score );
	oScorm.set("cmi.core.score.min", 0 );
	oScorm.set("cmi.core.score.max", 100 );
}

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


function visitCertificate()
{
	var learner_name = oScorm.get( "cmi.core.student_name" );
	document.getElementById( "content-frame" ).
contentWindow.document.getElementById( "user-name" ).innerHTML = learner_name;
}

function checkAllVisited()
{
	var objective = sessionStorage.getItem( "visitObjective" );
	var mysapl = sessionStorage.getItem( "visitMySapl" );
	var mysaplvideo = sessionStorage.getItem( "visitMySaplVideo" );
	var overdrive = sessionStorage.getItem( "visitOverdrive" );
	var overdrivevideo = sessionStorage.getItem( "visitOverdriveVideo" );
	var oneclick = sessionStorage.getItem( "visitOneClick" );
	var oneclickdigital = sessionStorage.getItem( "visitOneClickDigital" );
	var freegal = sessionStorage.getItem( "visitFreegal" );
	var freegalvideo = sessionStorage.getItem( "visitFreegalVideo" );
	var appactivity = sessionStorage.getItem( "visitAppActivity" );
	var tutorapp = sessionStorage.getItem( "visitTutorApp" );
	var tutorvideo = sessionStorage.getItem( "visitTutorVideo" );
	var review = sessionStorage.getItem( "visitReview" );
	var references = sessionStorage.getItem( "visitReferences" );

	if( objective == "visited" && mysapl == "visited" && mysaplvideo == "visited" && overdrive == "visited" && overdrivevideo == "visited" && oneclick == "visited" && oneclickdigital == "visited" && freegal == "visited" && freegalvideo == "visited" && appactivity == "visited" && tutorapp == "visited" && tutorvideo == "visited" && review == "visited" && references == "visited" )
		{
		document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link" ).style.display = "inline";
		}

}

function visitObjective()
{
sessionStorage.setItem( "visitObjective", "visited" );	
checkAllVisited();
}

function visitMySapl()
{
sessionStorage.setItem( "visitMySapl", "visited" );	
checkAllVisited();
}

function visitMySaplVideo()
{
sessionStorage.setItem( "visitMySaplVideo", "unvisited" );
checkAllVisited();
}

function visitOverdrive()
{
sessionStorage.setItem( "visitOverdrive", "unvisited" );
checkAllVisited();
}

function visitOverdriveVideo()
{
sessionStorage.setItem( "visitOverdriveVideo", "unvisited" );
checkAllVisited();
}

function visitOneClick()
{
sessionStorage.setItem( "visitOneClick", "unvisited" );
checkAllVisited();
}

function visitOneClickDigital()
{
sessionStorage.setItem( "visitOneClickDigital", "unvisited" );
checkAllVisited();
}


function visitFreegal()
{
sessionStorage.setItem( "visitFreegal" );
checkAllVisited();
}

function visitFreegalVideo()
{
sessionStorage.setItem( "visitFreegalVideo", "unvisited" );checkAllVisited();
}

function visitAppActivity()
{
sessionStorage.setItem( "visitAppActivity", "unvisited" );
checkAllVisited();
}

function visitTutorApp()
{
sessionStorage.setItem( "visitTutorApp", "unvisited" );
checkAllVisited();
}

function visitTutorVideo()
{
sessionStorage.setItem( "visitTutorVideo", "unvisited" );
checkAllVisited();
}

function visitReview()
{
sessionStorage.setItem( "visitReview", "unvisited" );
checkAllVisited();
}

function visitReferences()
{
sessionStorage.setItem( "visitReferences", "unvisited" );
}


