/*
This is empty on purpose! Your code to build the resume will go here.
 */

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

var work = {};
work.position = "Software Quality Engineer";
work.employer = "Udacity";
work.years = "3";

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


// $("#main").append(work["position"]);
// $("#main").append(education["name"]);

// // var awesomeThoughts = "I am Tim and I am AWESOME!"
// // console.log(awesomeThoughts);

// // var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// // console.log (funThoughts);


// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

