/*
This is empty on purpose! Your code to build the resume will go here.
 */



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

console.log(bio.contacts.location)

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  for(i in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
  }
}

for(i in formattedContactInfo) {
  $("#topContacts").append(formattedContactInfo[i]);
  $("#footerContacts").append(formattedContactInfo[i]);
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
  "onlineClasses": [
    {
      "title": "Some Title",
      "school": "Some School",
      "dates": "Some Dates",
      "url": "Some URL"
    },
    {
      "title": "Some Other",
      "school": "Some Other School",
      "dates": "Some Other Dates",
      "url": "Some Other URL"
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
        "images/197x148.gif",
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
projects.display();
// PROJECTS ^

// if (bio.skills.length > 0) {
//   $("#header").append(HTMLskillsStart);
//   bio.skills.forEach(function(val) {
//     console.log(val);
//     var formattedSkill = HTMLskills.replace("%data%", val);
//     $("#skills").append(formattedSkill);
//   });
// };


// EDUCATION:
education.display = function() {
  for (school in education.schools) {
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

  for (course in education.onlineClasses) {
    $("#education").append(HTMLschoolStart);
    
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[course].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[course].school);
    $(".education-entry:last").append(formattedTitle + formattedSchool);

    
    // $(".education-entry:last").append(formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[course].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineClasses[course].url);
    $(".education-entry:last").append(formattedURL);
  }

};

education.display();
// EDUCATION^




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



