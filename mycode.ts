type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string
}

const myCourses: Array<Course> = [
    {   courseNumber: "CIS 350",
        courseName: "Software Development",
        semesterTaken: "Fall 2021"
    },
    {   courseNumber: "CIS 263",
        courseName: "Data Structures and Algorithms",
        semesterTaken: "Fall 2022"
    },
    {   courseNumber: "CIS 241",
        courseName: "System-level Programming and Utilities",
        semesterTaken: "Fall 2021"
    },
    {   courseNumber: "CIS 353",
        courseName: "Database",
        semesterTaken: "Winter 2022" 
    }
]

const tArea4 = document.getElementById("area4-table")

const buildTable = (courses: Array<Course>) => {
    // Create table
    const course_table = document.createElement("table");
    
    // Create headers
    const header_row = document.createElement("tr");
    const course_number_header = document.createElement("th");
    course_number_header.textContent = "Course Number";
    header_row.appendChild(course_number_header);
    
    const course_name_header = document.createElement("th");
    course_name_header.textContent = "Course Name";
    header_row.appendChild(course_name_header);
    
    const semester_header = document.createElement("th");
    semester_header.textContent = "Semester Taken";
    header_row.appendChild(semester_header);
    
    course_table.appendChild(header_row);
    
    // Add courses
    for (const course of courses) {
      const row = document.createElement("tr");
      
      const course_number = document.createElement("td");
      course_number.textContent = course.courseNumber;
      row.appendChild(course_number);
      
      const course_name = document.createElement("td");
      course_name.textContent = course.courseName;
      row.appendChild(course_name);
      
      const semester = document.createElement("td");
      semester.textContent = course.semesterTaken;
      row.appendChild(semester);
      
      course_table.appendChild(row);
    }
    
    // Add table
    tArea4.appendChild(course_table);
  };
  
  buildTable(myCourses);

type Company = {
    name: string,   
    abbreviation: string,   
    url: string             
}

const companies: Array<Company> = [
    {   name: "Amazon",
        abbreviation: "AMZ",
        url: "https://www.amazon.com"
    },
    {   name: "Google",
        abbreviation: "GGL",
        url: "https://www.google.com"
    }
]

const companiesList = document.getElementById("area6-list");

const createList = (companies: Array<Company>) => {
  // Create list
  const list = document.createElement("ul");

  // Add companies
  for (const company of companies) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = company.abbreviation;
    link.href = company.url;
    item.appendChild(link);
    list.appendChild(item);
  }

  // Add list
  companiesList.appendChild(list);
};

createList(companies);

type SocialMedia = {
    icon: string;   
    url: string;
}

const social_media: Array<SocialMedia> = [
    {   icon: "twitter.png", 
        url: "https://twitter.com"
    },
    {   icon: "facebook.png",  
        url: "https://facebook.com"
    },
    {   icon: "instagram.png", 
        url: "https://instagram.com"
    },
    {   icon: "github.png", 
        url: "https://github.com"
    },
    {   icon: "discord.png", 
        url: "https://discord.com"
    }
]

const social_media_list = document.getElementById("area8-list");

const createSocialList = (social_media: Array<SocialMedia>) => {
    social_media.forEach(media => {
      const img = document.createElement("img");
      img.src = media.icon;
      img.width = 25;
      img.height = 25;
      const a = document.createElement("a");
      a.href = media.url;
      a.appendChild(img);
      social_media_list.appendChild(a);
    });
  };

createSocialList(social_media);
