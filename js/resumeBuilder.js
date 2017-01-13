/*This code will build the resume, with the help of helper.js */
// BIO:
var bio = {
  "name": "Tim Hall",
  "role": "Software & Web Developer",
  "contacts": {
    "email": "timhall3000@gmail.com",
    "github": "timhall1",
    "twitter": "@timhaverford",
    "location": "Los Angeles, California, USA"
  },
  "picture": "images/Timothy_Hall_Photo.jpg",
  "welcomeMessage": "I'm currently working as a Software Quality Engineer in Los Angeles, CA.",
  "skills": ["Ruby/Rails", "Python", "Software Development", "Frontend Development (in progress)", "Quality Engineering"]
};
//BIO^
//WORK:
var work = {
  jobs: [{
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
//WORK^
// EDUCATION:
var education = {
  "schools": [{
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
  "onlineClasses": [{
      "title": "Frontend Developer Nanodegree",
      "school": "Udacity",
      "dates": "2016-Present",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "Machine Learning",
      "school": "Stanford (Coursera)",
      "dates": "2016",
      "url": "https://www.coursera.org/learn/machine-learning"
    },
    {
      "title": "Certificate in Ruby Programming",
      "school": "University of Washington",
      "dates": "2015",
      "url": "https://www.pce.uw.edu/certificates/ruby-programming"
    },
    {
      "title": "Relational Database Design and Data Modeling",
      "school": "UCLA Extension",
      "dates": "2014",
      "url": "https://www.uclaextension.edu/search/publicCourseSearchDetails.do?method=load&courseId=160012"
    },
    {
      "title": "Computer Science and Programming Using Python",
      "school": "MITx (edx)",
      "dates": "2014",
      "url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-9"
    }
  ]
};
//EDUCATION^
// PROJECTS: MORE COMING SOON!
var projects = {
  "projects": [{
      "title": "Sample Project 3",
      "dates": "2016",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "images": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    },
    {
      "title": "Sample Project 2",
      "dates": "2015",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "images": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    },
    {
      "title": "Sample Project 1",
      "dates": "2014",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "images": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    }
  ]
};
//PROJECTS^
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var contactInfo = [];
contactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
contactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
contactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
contactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var skill = 0; skill < bio.skills.length; skill++) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
  }
}
for (var contact = 0; contact < contactInfo.length; contact++) {
  $("#topContacts").append(contactInfo[contact]);
  $("#footerContacts").append(contactInfo[contact]);
}
for (var job = 0; job < work.jobs.length; job++) {
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
projects.display = function() {
  for (var project = 0; project < projects.projects.length; project++) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    if (projects.projects[project].images.length > 0) {
      for (var image = 0; image < projects.projects[project].images.length; image++) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}
projects.display();
education.display = function() {
  for (var school = 0; school < education.schools.length; school++) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedName + formattedDegree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);
  }
  if (education.onlineClasses.length > 0) {
    $("#education").append(HTMLonlineClasses);
  }
  for (var course = 0; course < education.onlineClasses.length; course++) {
    $("#education").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[course].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[course].school);
    $(".education-entry:last").append(formattedTitle + formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[course].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineClasses[course].url);
    $(".education-entry:last").append(formattedURL);
  }
};
education.display();
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