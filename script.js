import {branch, sem, faculty, classroom, days, courses, time_slot} from './dummy_test.js'
import { Branch,Sem, Faculty, Classroom, Days, Courses, TimeSlot } from "./classes.js";
import TimetableClass from "./classes.js";
import {generateRandomTimetable, generateTimeTable} from './functions.js'


let populationSize = 10;
let generations = 10;

const timetable1 = generateRandomTimetable();

timetable1.displayTimetable();
