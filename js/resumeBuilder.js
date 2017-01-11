/*
This is empty on purpose! Your code to build the resume will go here.
 */


// BIO:

var bio = {
 name: "Tim Hall",
 role: "Developer",
 contact: {
   email: "timhall3000@gmail.com",
   mobile: "858-472-6046",
   city: "Los Angeles"
 },
 pictureUrl: "images/Timothy_Hall_Photo.jpg",
 welcomeMessage: "Welcome to my site!",
 skills: ["Web Dev", "Front End", "MSCS Candidate"]
}

// BIO^

// WORK:

var work = {
 jobs: [
   {
     employer: "Apple",
     title: "Software Quality Engineer",
     dates: "2014-Present",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     location: "Los Angeles, CA, US"

   },
   {
     employer: "Beats by Dre",
     title: "Software Project Manager",
     dates: "2013-2014",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     location: "Los Angeles, CA, US"
   },
   {
     employer: "Beats by Dre",
     title: "Product Development Coordinator",
     dates: "July 2013-Sept. 2013",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     location: "Los Angeles, CA, US"
   },
   {
     employer: "Superfad",
     title: "IT & Production Coordinator",
     dates: "2011-2013",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     location: "Los Angeles, CA, US"
   }
 ],
 status: "Currently Employed"
}

for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
}


// WORK^

// work.position = "Software Quality Engineer";
// work.employer = "Udacity";
// work.years = "3";


// EDUCATION:
var education = {
  "schools": [
    {
      "name": "UCLA",
      "location": "Los Angeles, CA US",
      "degree": "BA",
      "major": ["Sociology"],
      "dates": "2005-2009",
      "url": "www.google.com"
    },
    {
      "name": "Georgia Tech",
      "location": "Atlanta, GA, US",
      "degree": "MS",
      "major": ["CompSci"],
      "dates": "2017-Present",
      "url": "www.google.com"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Syntax",
      "school": "Udacity",
      "dates": 2017,
      "url": "http://www.udacity.com/course/ud804"
    }
  ]
};


// PROJECTS:
var projects = {
  "projects": [
    {
      "title": "Sample Project 1",
      "dates": "2014",
      "description": "Blahblahblahblah",
      "images": [
        "images/fry.jpg",
        "images/197x148.gif"
      ]
    }
  ]
};

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".projects-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".projects-entry:last").append(formattedDates);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}
// PROJECTS ^

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(val) {
    console.log(val);
    var formattedSkill = HTMLskills.replace("%data%", val);
    $("#header").append(formattedSkill);
  });
};



// EDUCATION^

// HEADER:

$("#main").append(work["position"]);
$("#main").append(education["name"]);

// var awesomeThoughts = "I am Tim and I am AWESOME!"
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// console.log (funThoughts);


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureUrl);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);



// HEADER^


// LOG CLICKS:
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);  
});
//LOG CLICKS^


//MAP:
$("#mapDiv").append(googleMap);
//MAP^


// // education["name"] = "UCLA";



