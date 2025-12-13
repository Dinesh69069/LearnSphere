


const coursesData = [
{
img: "https://media.geeksforgeeks.org/wp-content/uploads/20251120155351707831/full_stack_development.webp",
title: "MERN Stack Development",
level: "Beginner → Intermediate",
description: "Learn to build full-stack web applications using MongoDB, Express, React, and Node.js.",
duration: "8 Weeks",
mode: "Online",
skills: [" MongoDB", "Express", "React", "Node.js"],
link: "../course-pages/mern-stack-development.html"
},


{
    img: "https://media.geeksforgeeks.org/img-practice/prod/courses/822/Web/Content/nextweb_1732621613.webp",
title: "NEXT JS  Development",
level: "Beginner → Intermediate",
description: "Build server-side rendered React applications with Next.js framework.",
duration: "9 Weeks",
mode: "In-Person",
skills: [   "Next.js", "React", "SSR", "API"],
link: "../course-pages/mern-stack-development.html"
},
{
    img: "https://media.geeksforgeeks.org/wp-content/uploads/20251119100432783088/JBDL1.webp",
title: "SPRING BOOT Development",
level: "Beginner → Intermediate",
description: "Learn to create Java-based web applications using Spring Boot framework.",
duration: "9 Weeks",
mode: "In-Person",
skills: [   "Spring Boot", "Java", "REST", "JPA"],
link: "../course-pages/spring-boot-development.html"
},
{
    img:"https://media.geeksforgeeks.org/img-practice/prod/courses/730/Web/Content/dj_1723005480.webp",
title: "Django Full-Stack Development",
level: "Beginner → Intermediate",
description: "Develop web applications using Django framework with Python and PostgreSQL.",
duration: "9 Weeks",
mode: "In-Person",
skills: [   "Django", "Python", "PostgreSQL", "MVC"],
link: "../course-pages/django-development.html"
},{
img: "https://media.geeksforgeeks.org/wp-content/uploads/20251115164301521507/jku1.webp",
title: "Machine Learning ",
level: "Beginner",
description: "Introduction to machine learning concepts, algorithms, and applications.",
duration: "8 Weeks",
mode: "Online",
skills: [   "Python", "Algorithms", "Data Science"],
link: "../course-pages/machine-learning-development.html"
},
{
    img:"https://media.geeksforgeeks.org/wp-content/uploads/20251129150026157429/data_science.webp",
title: "DATA SCIENCE",
level: "Beginner → Intermediate",
description: "Learn data analysis, visualization, and statistical modeling using Python.",
duration: "12 Weeks",
mode: "Online",
skills: [   "Python", "Pandas", "Matplotlib", "Statistics"],
link: "../course-pages/data-science-development.html"
},


{
    img:"https://media.geeksforgeeks.org/img-practice/prod/courses/221/Web/Content/cpp_1723009538.webp",
title: "C++",
level: "Beginner → Intermediate",
description: "  Master C++ programming language and object-oriented programming concepts.",
duration: "9 Weeks",
mode: "In-Person",
skills: [   "C++ Programming", "OOP", "STL"],
link: "../course-pages/cpp-development.html"
},
{
    img : "https://media.geeksforgeeks.org/wp-content/uploads/20251119100432783088/JBDL1.webp",
title: "Java",
level: "Beginner → Intermediate",
description: "  Learn Java programming language, OOP principles, and application development.",
duration: "9 Weeks",
mode: "In-Person",
skills: [   "Java Programming", "OOP", "JVM"],
link: "../course-pages/java-development.html"
},{
img: "https://media.geeksforgeeks.org/img-practice/prod/courses/256/Web/Content/py_1723007763.webp",
title: "    python",
level: "Beginner",
description: "  Get started with Python programming, syntax, and basic concepts.",
duration: "8 Weeks",
mode: "Online",
skills: ["Hardware", "Networking", "OS Basics"],
link: "../course-pages/python-development.html"
},
{
    img: "https://miro.medium.com/v2/resize:fit:1400/1*SpICWeRs7aILT8TPAFGIjg.png",
title: "MEAN Stack Development",
level: "Beginner → Intermediate",
description: "Build dynamic web apps using MongoDB, Express, Angular, and Node.js.",
duration: "12 Weeks",
mode: "Online",
skills: [   "MongoDB", "Express", "Angular", "Node.js"],
link: "../course-pages/mean-stack-development.html"
},

{
    img: "https://media.geeksforgeeks.org/img-practice/prod/courses/651/Web/Content/Soln_1720781579.webp",
title: "Cloud Computing ",
level: "Beginner → Intermediate",
description: "Understand cloud services, deployment models, and architecture.",
duration: "9 Weeks",
mode: "In-Person",
skills: [   "Cloud", "AWS", "Azure", "GCP"],
ink: "../course-pages/cloud-computing.html"
},
{
    img: "https://media.geeksforgeeks.org/wp-content/uploads/20251120155351845895/devops_engineering.webp",
title: "DevOps Fundamentals",
level: "Beginner → Intermediate",
description: "Learn CI/CD, automation, and infrastructure as code principles.",
duration: "9 Weeks",
mode: "In-Person",
skills: [   "CI/CD", "Automation", "Docker", "Kubernetes"],
link: "../course-pages/devops-development.html"
}

];



// Render Courses
function renderCourses(courses) {
const container = document.getElementById("courses");
container.innerHTML = courses.map(course => {
const skills = course.skills
.map(skill => `<span class="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">${skill}</span>`)
.join("");


return `
<div class="bg-white rounded-xl shadow-md hover:shadow-lg transition mx-1">
<div class="bg-blue-600 text-white rounded-t-xl flex flex-col items-center ">
<img src="${course.img}" alt="course thumbnail" class="w-full h-36 object-cover rounded-lg mb-2">
<h2 class="text-base font-semibold px-2">${course.title}</h2>
<p class="text-xs opacity-90 mb-2">${course.level}</p>
</div>


<div class="p-3 space-y-2">
<p class="text-xs text-gray-600 line-clamp-2">${course.description}</p>


<div class="flex justify-between text-xs">
<span class="font-medium">Duration:</span>
<span>${course.duration}</span>
</div>


<div class="flex justify-between text-xs">
<span class="font-medium">Mode:</span>
<span>${course.mode}</span>
</div>


<div class="flex flex-wrap gap-1">${skills}</div>


<a href="${course.link}" 
class="block w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-1.5 rounded-lg font-semibold text-xs text-center">
Enroll Now
</a>
</div>
</div>
`;
}).join("");
}


function enroll(courseName) {
alert(`You enrolled in ${courseName}!`);
}


// Initial Render
renderCourses(coursesData);