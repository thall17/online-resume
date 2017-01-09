/*
This is empty on purpose! Your code to build the resume will go here.
 */

// HEADER

$("#main").append(work["position"]);
$("#main").append(education["name"]);

// var awesomeThoughts = "I am Tim and I am AWESOME!"
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// console.log (funThoughts);


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


// HEADER^


// BIO

var bio = {
 name: "Tim",
 role: "Developer",
 contact: {
   email: "timhall3000@gmail.com",
   mobile: "858-472-6046",
   city: "Los Angeles"
 },
 pictureUrl: "Timothy_Hall_Photo.jpg",
 welcomeMessage: "Welcome to my site!",
 skills: ["Web Dev", "Front End", "MSCS Candidate"]
}

// BIO^


// WORK

var work = {
 jobs: [
   {
     employer: "Apple",
     title: "Software Quality Engineer",
     years: "2014-Present"
   },
   {
     employer: "Beats by Dre",
     title: "Software Project Manager",
     years: "2013-2014"
   },
   {
     employer: "Beats by Dre",
     title: "Product Development Coordinator",
     years: "July 2013-Sept. 2013"
   },
   {
     employer: "Superfad",
     title: "IT & Production Coordinator",
     years: "2011-2013"
   }
 ],
 status: "Currently Employed"
}

for (job in work.jobs) {
  console.log("JOB:");
  console.log(work.jobs[job]);
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);
}


// WORK^

// work.position = "Software Quality Engineer";
// work.employer = "Udacity";
// work.years = "3";

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

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  
}




// // education["name"] = "UCLA";



