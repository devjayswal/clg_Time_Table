import { generateTimeTable, formattedTimetable } from "./functions";
import { branch, sem, faculty, classroom, days, courses, time_slot } from "./resourse";
import {add_courses, add_days, add_faculty, add_classroom, add_sem, add_branch} from "./resourse";
import TimetableClass from "./classes";
import { Branch,Sem, Faculty, Classroom, Days, Courses, TimeSlot } from "./classes";


function handleAddCourse(event) {
        event.preventDefault();
        
        // Get input values from the form
        const courseName = document.getElementById("courseName").value;
        const courseCode = document.getElementById("courseCode").value;
        const courseType = document.querySelector('input[name="courseType"]:checked').value;
        const credit = document.getElementById("credit").value;
    
        // Add the course to the array
        add_courses(courseName, courseCode, courseType, credit);

        displayAddedCourses();
        document.getElementById("courseForm").reset();
        // Display the updated array (replace with your logic)
        console.log(courses);
}


function displayAddedCourses() {
    const coursesList = document.getElementById("coursesList");

    // Clear the existing list
    coursesList.innerHTML = "";

    // Add each course to the list
    courses.forEach(course => {
        const listItem = document.createElement("li");
        listItem.textContent = `${course.course_name} - ${course.course_code} (${course.type}), Credit: ${course.credit}`;
        coursesList.appendChild(listItem);
    });
}

function handleContinueButtonClick() {
    // Add your logic for the "Continue" button click
    console.log("Continue button clicked");
}



document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("courseForm").addEventListener("submit", handleAddCourse);
    document.getElementById("continueButton").addEventListener("click", handleContinueButtonClick);
});