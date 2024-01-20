import TimetableClass from "./classes.js";
import { Branch,Sem, Faculty, Classroom, Days, Courses, TimeSlot } from "./classes.js";

// branch array
const branch = [];

//sem array
const sem = [];

// faculty array
const faculty = [];

// classroom array
const classroom = [];

// courses array
const courses = [];

// days array
const days = [];

// time slot array
const time_slot = [];

//function to add branch
function add_branch(newbranchname) {
    const newBranch = new Branch(newbranchname);
    branch.push(newBranch);
}

//function to add sem
function add_sem(newsemname) {
    const newSem = new Sem(newsemname);
    sem.push(newSem);
}
    

//function to add faculty
function add_faculty(newfacultyname,course_list) {
    const newFaculty = new Faculty(newfacultyname, course_list);
    faculty.push(newFaculty);
}

//function to add classroom
function add_classroom(newclassroomname,classtype) {
    const newClassroom = new Classroom(newclassroomname,classtype);
    classroom.push(newClassroom);
}

//function to add days
function add_days(newdayname) {
    const newDays = new Days(newdayname);
    days.push(newDays);
}

//function to add courses
function add_courses(courseName, courseCode, courseType, credit) {
    const newCourses = new Courses(courseName, courseCode, courseType, credit);
    courses.push(newCourses);
}

//function to add time_slot
function add_time_slot(newtimeslotname) {
    const newTimeSlot = new TimeSlot(newtimeslotname);
    time_slot.push(newTimeSlot);
}

export { 
    branch, 
    sem, 
    faculty, 
    classroom, 
    days, 
    courses, 
    time_slot, 
    add_branch, 
    add_sem, 
    add_faculty, 
    add_classroom, 
    add_days, 
    add_courses, 
    add_time_slot
};
