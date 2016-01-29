var bio = {
	"name" : "Wilding Threlfall",
	"role" : "Web Developer",
	"location" : "Los Angeles",
	"email" : "wildingthrelfall@gmail.com",
	"phone" : "(707)-718-4517",
	"linkedin" : "linkedin.com/in/wildingthrelfall",
	"github" : "github.com/wilding",
	"pictureurl" : "images/3.jpg",
	"welcomemessage" : "Technical Skills:",
	"skills" : {
		"languages" : ["Python (intermediate)", "HTML (beginner)", "CSS (beginner)", "Javascript (beginner)", "Swift (beginner)"],
		"frameworks" : ["Flask (beginner)", "Bootstrap (beginner)", "SQLAlchemy (beginner)", "Google App Engine (beginner)", "Google Cloud Endpoints (beginner)", "OAuth (beginner)"],
		"IDEs" : ["Xcode (beginner)", "IDLE (beginner)"],
		"versioncontrol" : ["Git/Github (intermediate)"],
		"databases" : ["SQL (intermediate)", "SQLite (beginner)", "PostgreSQL (beginner)", "Datastore (beginner)"],
		"operatingsystems" : ["Linux (beginner)", "Ubuntu (beginner)", "OSX (advanced)", "iOS (advanced)", "Windows (beginner)"],
		"software" : ["Photoshop (intermediate)"]
	}
};
var work = {
	"jobs" : [
		{
			"employer" : "UCLA Health",
			"title" : "Care Extender",
			"dates" : "Aug. 2012 - July 2013",
			"location" : "Los Angeles, CA",
			"description" : "%data%"
		}
	]
};
var projects = {
	"projects" : [
		{
			"title" : "Conference Central",
			"dates" : "Oct. 2015",
			"description" : "A scalable web app to manage and register for user-created conferences using the Google Cloud Platform.",
			"picture" : [],
			"github" : "https://github.com/wilding/ConferenceCentral.git"
		},
				{
			"title" : "The Chronicle",
			"dates" : "Aug. 2015",
			"description" : "A newspaper web app with user-submitted content.",
			"picture" : [],
			"github" : "https://github.com/wilding/Catalog.git"
		},
				{
			"title" : "Swiss Pairings",
			"dates" : "Apr. 2015",
			"description" : "A Python script with functions for recording tournament data and generating player matchups.",
			"picture" : [],
			"github" : "https://github.com/wilding/SwissPairings.git"
		},
				{
			"title" : "Fresh Tomatoes",
			"dates" : "Mar. 2015",
			"description" : "%data%",
			"picture" : [],
			"github" : "https://github.com/wilding/FreshTomatoes"
		},
				{
			"title" : "Orange Mug",
			"dates" : "Feb. 2015",
			"description" : "A webpage created with HTML/CSS to match a mockup provided by Udacity.",
			"picture" : [],
			"github" : "https://github.com/wilding/OrangeMug.git"
		},
				{
			"title" : "Pitch Perfect",
			"dates" : "Jan. 2015",
			"description" : "An iPhone app that records audio and plays it back with a number of sound effects.",
			"picture" : [],
			"github" : "https://github.com/wilding/PitchPerfect.git"
		}
	]
};
var education = {
	"schools" : [
		{
			"name" : "UCLA",
			"location" : "Los Angeles, CA",
			"degree" : "Neuroscience, B.S.",
			"dates" : "2009-2014"
		},
		{
			"name" : "Udacity",
			"location" : " ",
			"degree" : "Full-Stack Web Development Nanodegree",
			"dates" : "2015-2016"
		}
	]
};



bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.phone);
	var formattedEmail = HTMLemail.replace("%data%", bio.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.github);
	var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.linkedin);
	var formattedPic = HTMLbioPic.replace("%data%", bio.pictureurl);
	//var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);
	$("#header").append(formattedName);
	$("#header").append(formattedRole);
	$("#header").append(formattedMobile);
	$("#header").append(formattedEmail);
	$("#header").append(formattedGithub);
	$("#header").append(formattedLinkedin);
	$("#header").append(formattedPic);
	//$("#header").append(formattedWelcome);
	$("#header").append(HTMLskillsStart);
	for (i in bio.skills) {
		if (bio.skills[i].length > 0) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#header").append(formattedSkill);
		}
	}
}
work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedworkEmployer + formattedworkTitle);
		$(".work-entry:last").append(formattedworkDates);
		$(".work-entry:last").append(formattedworkLocation);
		$(".work-entry:last").append(formattedworkDescription);
	}
}
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		formattedProjectTitle = formattedProjectTitle.replace("#", projects.projects[project].github);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		if (projects.projects[project].picture.length > 0) {
			for (image in projects.projects[project].picture) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].picture[image]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
	}
}

bio.display();
work.display();
projects.display();
education.display();


function inName(name) {
	var nameArray = name.split(" ");
	nameArray[1] = nameArray[1].toUpperCase()
	nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
	var finalName = nameArray.join(" ");
	return finalName;
}


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);