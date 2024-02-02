import {
  Master_Timetable,
  Faculty_Timetable,
  Classroom_Timetable,
} from "./classes.js";
import {
  Branch,
  Sem,
  Faculty,
  Classroom,
  Days,
  Courses,
  TimeSlot,
  Non_editable_cells,
} from "./classes.js";

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

// non_editable  cells in  Master_time_table
const non_editable_cells = [];

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
function add_faculty(newfacultyname, course_list) {
  const newFaculty = new Faculty(newfacultyname, course_list);
  faculty.push(newFaculty);
}

//function to add classroom
function add_classroom(newclassroomname, classtype) {
  const newClassroom = new Classroom(newclassroomname, classtype);
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

//function to add non_editable_cells
function add_non_editable_cells(text, row, col) {
  const newNon_editable_cell = new Non_editable_cells(text, row, col);
  non_editable_cells.push(newNon_editable_cell);
}

function get_Online_class(Courses) {
  let Onlineclass = new Array();
  Onlineclass = [];
  for (let i = 0; i < courses.length(); i++) {
    if (courses[i].type == "Online") {
      Onlineclass.push(courses[i]);
    }
  }

  return Onlineclass;
}

function get_lab_class(Courses) {
  let Onlineclass = new Array();
  Onlineclass = [];
  for (let i = 0; i < courses.length(); i++) {
    if (courses[i].type == "lab") {
      Onlineclass.push(courses[i]);
    }
  }

  return labclass;
}

function get_thoery_class(Courses) {
  let Onlineclass = new Array();
  Onlineclass = [];
  for (let i = 0; i < courses.length(); i++) {
    if (courses[i].type == "theory") {
      Onlineclass.push(courses[i]);
    }
  }

  return theoryclass;
}

export {
  branch,
  sem,
  faculty,
  classroom,
  days,
  courses,
  time_slot,
  non_editable_cells,
  add_branch,
  add_sem,
  add_faculty,
  add_classroom,
  add_days,
  add_courses,
  add_time_slot,
  add_non_editable_cells,
  get_lab_class,
  get_thoery_class,
  get_Online_class,
};
