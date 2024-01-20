import {sem, branch,days,time_slot} from './dummy_test.js'




// branch one year(3 branch(aiml,air,aids))
export class Branch {
  constructor(branch) {
      this.branch = branch;
  }
}

// sem one year(3 sem)
export class Sem {
  constructor(sem) {
      this.sem = sem;
  }
}

// class faculty and their priority-wise course list(5 courses per faculty)
export class Faculty {
  constructor(name, subjects) {
      this.name = name;
      this.subjects = subjects;
  }
}

// classrooms available
export class Classroom {
  constructor(room,type) {
      this.room = room;
      this.type = type;
  }
}

// days in a week
export class Days {
  constructor(days) {
      this.days = days;
  }
}

// Courses and code, type (mandatory_audit_course, lab_class, online_class)
export class Courses {
  constructor(course_name, course_code, type,credit) {
      this.course_name = course_name;
      this.course_code = course_code;
      this.type = type;
      this.credit = credit;
  }
}

// time slot in a day
export class TimeSlot {
  constructor(time) {
      this.time = time;
  }
}

//time table (a master time table is object of this class)
class TimetableClass {
  constructor(num1 , num2) {
    this.timetable = new Array(num1).fill(null).map(()=>new Array(num2).fill(null));
  }

}




export default TimetableClass;
 
 