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
    		sessionStorage.setItem( "visitNavigation", "unvisited" );
    		sessionStorage.setItem( "visitOnlineResearchTitle", "unvisited" );
    		sessionStorage.setItem( "visitDatabases", "unvisited" );
    		sessionStorage.setItem( "visitDatabaseActivity", "unvisited" )
    		sessionStorage.setItem( "visitForeignLanguage", "unvisited" )
    		sessionStorage.setItem( "visitWebsites", "unvisited" )
    		sessionStorage.setItem( "visitDictionaries", "unvisited" )
    		sessionStorage.setItem( "visitDictionariesActivity", "unvisited" )
    		sessionStorage.setItem( "visitQuotes", "unvisited" )
    		sessionStorage.setItem( "visitVideo", "unvisited" )
    		sessionStorage.setItem( "visitReferences", "unvisited" )
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
function reportScores()
{	
	oScorm.save();
}

// This function is called when the window is closed.  It saves and quits the course.
function finishCourse()
{
	oScorm.save();
	oScorm.quit();
}




function checkAllVisited()
{
	var title = sessionStorage.getItem( "visitTitle" );
	var navigation = sessionStorage.getItem( "visitNavigation" );
	var onlineresearchtitle = sessionStorage.getItem( "visitOnlineResearchTitle" );
	var databases = sessionStorage.getItem ( "visitDatabases" );
	var databasesactivity = sessionStorage.getItem ( "visitDatabaseActivity" );
	var foreignlanguage = sessionStorage.getItem( "visitForeignLanguage" );
	var websites = sessionStorage.getItem( "visitWebsites" );
	var dictionaries = sessionStorage.getItem( "visitDictionaries" );
	var dictionariesactivity = sessionStorage.getItem( "visitDictionariesActivity" );
	var quotes = sessionStorage.getItem( "visitQuotes" );
	var video = sessionStorage.getItem( "visitVideo" );
	var references = sessionStorage.getItem( "visitReferences" );

	
	if( title == "visited" && navigation == "visited" && onlineresearchtitle == "visited" && databases == "visited" && databaseactivity == "visited" && foreignlanguage == "visited" && websites == "visited" && dictionaries == "visited" && dictionariesactivity == "visited" && quotes == "visited" && video == "visited" && references == "visited")
		{
		document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link" ).style.display = "inline";
		}
	
}

function visitTitle()
{
sessionStorage.setItem( "visitTitle", "visited" );	
checkAllVisited();
}

function visitNavigation()
{
sessionStorage.setItem( "visitNavigation", "visited" );	
checkAllVisited();
}

function visitOnlineResearchTitle()
{
sessionStorage.setItem( "visitOnlineResearchTitle", "visited" );	
checkAllVisited();
}

function visitDatabases()
{
sessionStorage.setItem( "visitDatabases", "visited" );	
checkAllVisited();
}


function visitDatabaseActivity()
{
sessionStorage.setItem( "visitDatabaseActivity", "visited" );	
checkAllVisited();
}

function visitForeignLanguage()
{
sessionStorage.setItem( "visitForeignLanguage", "visited" );	
checkAllVisited();
}

function visitWebsites()
{
sessionStorage.setItem( "visitWebsites", "visited" );	
checkAllVisited();
}

function visitDictionaries()
{
sessionStorage.setItem( "visitDictionaries", "visited" );	
checkAllVisited();
}

function visitDictionariesActivity()
{
sessionStorage.setItem( "visitDictionariesActivity", "visited" );	
checkAllVisited();
}

function visitQuotes()
{
sessionStorage.setItem( "visitQuotes", "visited" );	
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