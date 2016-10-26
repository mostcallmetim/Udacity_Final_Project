var bio = {
    "name": "Tim Newton",
    "role": "Web Developer",
    "contacts": {
        "mobile": "530-555-8888",
        "email": "mostcallmetim@gmail.com",
        "github": "mostcallmetim",
        "location": "Orem, UT"
    },
    "welcomeMessage": "Chop your own wood and it will warm you twice.",
    "skills": ["WordPress", "HTML", "CSS", "Python", "JS"],
    "biopic": "images/Tim01.jpg",
};

bio.display = function () {
    $("#header").append(HTMLheaderStart);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedglance = HTMLglance.replace("%data%", bio.glance);
    var formattedskills = HTMLskills.replace("%data%", bio.skills);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedbioPic);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    $("#header").append(formattedglance);
    $("#header").append(formattedwelcomeMsg);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
};

bio.display();

var education = {
    "schools": [{
        "name": "Citrus College",
        "location": "Glendora",
        "degree": "",
        "majors": ["General Education"],
        "dates": "2015-2016",
        "url": "citruscollege.edu"
    }, {
        "name": "Lassen Community College",
        "location": "Susanville",
        "degree": "",
        "majors": ["General Education"],
        "dates": "2010",
        "url": "lassencollege.edu"
    }],
    "onlineCourses": [{
        "title": "Intro to Programming",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }]
};

education.display = function () {

    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedschoolURL = HTMLschoolURL.replace("%data%", education.schools[i].url);

        $(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
        $(".education-entry:last").append(formattedschoolDates);
        $(".education-entry:last").append(formattedschoolLocation);
        $(".education-entry:last").append(formattedschoolMajor);
        $(".education-entry:last").append(formattedschoolURL);

    }


    for (var i2 = 0; i < education.onlineCourses.length; i++) {
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);

        $(".education-entry.last").append(HTMLonlineClasses);
        $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
        $(".education-entry:last").append(formattedonlineDates);
        $(".education-entry:last").append(formattedonlineURL);

    }

};
education.display();
var work = {
    "jobs": [{
        "workStart": "One",
        "employer": "Blue Host",
        "title": "Web Advisor",
        "dates": "2016-Current",
        "location": "Orem, UT",
        "description": "Troubleshoot customers’ technical and non-technical issues over the phone."
    }, {
        "workStart": "Two",
        "employer": "Freelance",
        "title": "Set Dresser",
        "dates": "2013-2016",
        "location": "Burbank, CA",
        "description": "Arrange objects on a film set before shooting."
    }]
};


work.display = function () {
    for (var i2 = 0; i2 < work.jobs.length; i2++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedworkStart = HTMLworkStart.replace("%data%", work.jobs[i2].workStart);
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i2].employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i2].title);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i2].location);
        var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i2].dates);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i2].description);

        $(".work-entry:last").append(formattedworkEmployer);
        $(".work-entry:last").append(formattedworkLocation);
        $(".work-entry:last").append(formattedworkTitle);
        $(".work-entry:last").append(formattedworkDates);
        $(".work-entry:last").append(formattedworkDescription);

    }
};
work.display();
var project = {
    "projects": [{
        "start": "2014",
        "title": "Once Upon A Tree Woodshop",
        "date": 2016,
        "description": "Website developed for a woodshop.",
        "images": ["images/Photo.jpg"],
    }, {
        "start": "2014",
        "title": "Personal Webpage",
        "date": 2015,
        "description": "Website developed for a woodshop.",
        "images": ["images/Photo1.jpg"],
    }]
};
project.display = function () {
    for (var i2 = 0; i2 < work.jobs.length; i2++) {

        $("#project").append(HTMLprojectStart);
        var formattedprojectStart = HTMLprojectStart.replace("%data%", project.projects[i2].start);
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.projects[i2].title);
        var formattedprojectDate = HTMLprojectDate.replace("%data%", project.projects[i2].date);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.projects[i2].description);

        var image = "projecti";

        for (image in project.projects[i2].images) {
            var formattedprojectImage = HTMLprojectImage.replace("%data%", project.projects[i2].images[image]);
            $(".project-entry:last").append(formattedprojectTitle);
            $(".project-entry:last").append(formattedprojectDate);
            $(".project-entry:last").append(formattedprojectImage);
            $(".project-entry:last").append(formattedprojectDescription);


        }
    }
};
project.display();
$("#mapDiv").append(googleMap);