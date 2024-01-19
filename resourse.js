import TimetableClass from "./classes";
import { Branch,Sem, Faculty, Classroom, Days, Courses, TimeSlot } from "./classes";

// branch array
const branch = [];

//sem array
const sem = [];

// faculty array
const faculty = [];

// classroom array
const classroom = [];

// days array
const days = [];

// courses array
const courses = [];

// time slot array
const time_slot = [];

//function to add branch
function add_branch(newbranchname) {
    const newBranch = new Branch(branchName, /* add_sem_value_here */);
    branch.push(newBranch);
}

//function to add sem
function add_sem(newsemname) {
    const newSem = new Sem(semValue);
    sem.push(newSem);
}
    

//function to add faculty
function add_faculty(newfacultyname) {
    const newFaculty = new Faculty(facultyName, facultySubjects);
    faculty.push(newFaculty);
}

//function to add classroom
function add_classroom(newclassroomname) {
    const newClassroom = new Classroom(classroomName);
    classroom.push(newClassroom);
}

//function to add days
function add_days(newdayname) {
    const newDays = new Days(daysValue);
    days.push(newDays);
}

//function to add courses
function add_courses(courseName, courseCode, courseType, credit) {
    const newCourses = new Courses(courseName, courseCode, courseType, credit);
    courses.push(newCourses);
}

//function to add time_slot
function add_time_slot(newtimeslotname) {
    const newTimeSlot = new TimeSlot(timeValue);
    time_slot.push(newTimeSlot);
}

export { branch, sem, faculty, classroom, days, courses, time_slot };
