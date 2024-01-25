import {
  add_courses,
  add_days,
  add_faculty,
  add_classroom,
  add_sem,
  add_branch,
  add_time_slot,
  add_non_editable_cells,
  days,
  branch,
} from "./resourse.js";
import { days, sem, branch } from "./resourse.js";

// 3 dummy branch
add_branch("AIML");
add_branch("AIR");
add_branch("AIDS");

// 3 dummy sem
add_sem("1");
add_sem("2");
add_sem("3");

// 3 dummy faculty
add_faculty("Mir", ["cp", "ds", "os", "se"]);

//23 dummy courses codes are
/*"240601", "240603", "2270421", "2270424", "2240423", "270601", "3240224", "270603", "3240225", "3000002", "240602", "1000001", "2240425", "1000007", "2240426", "3000004", "240604", "2240422", "3240223", "3270225", "2240424", "2270423", "3240221" */
// in this  2280404 , 2280426, 2270424. 2270426 2240424,2240426, 280601, 280602, 280603, 270601, 270603, 270602, 240602, 240603,280604  are labs
// 1000007, 1000001, are online class
// 3000002, 3000004 are MAC
// 240601, 240603, 2270421, 2240423, 3240224, 3240225, 240604, 2240422, 3240223, 3270225, 2270423, 3240221 are theory classes

// Labs
add_courses("Lab1", "2280404", "lab", 4);
add_courses("Lab2", "2280426", "lab", 4);
add_courses("Lab3", "2270424", "lab", 4);
add_courses("Lab4", "2270426", "lab", 4);
add_courses("Lab5", "2240424", "lab", 4);
add_courses("Lab6", "2240426", "lab", 4);
add_courses("Lab7", "280601", "lab", 4);
add_courses("Lab8", "280602", "lab", 4);
add_courses("Lab9", "280603", "lab", 4);
add_courses("Lab10", "270601", "lab", 4);
add_courses("Lab11", "270603", "lab", 4);
add_courses("Lab12", "270602", "lab", 4);
add_courses("Lab13", "240602", "lab", 4);
add_courses("Lab14", "240603", "lab", 4);
add_courses("Lab15", "280604", "lab", 4);

// Online Classes
add_courses("Online1", "1000007", "online", 1);
add_courses("Online2", "1000001", "online", 1);

// MAC
add_courses("MAC1", "3000002", "mac", 0);
add_courses("MAC2", "3000004", "mac", 0);

// Theory Classes
add_courses("Theory1", "240601", "theory", 1);
add_courses("Theory2", "240603", "theory", 1);
add_courses("Theory3", "2270421", "theory", 1);
add_courses("Theory4", "2240423", "theory", 1);
add_courses("Theory5", "3240224", "theory", 1);
add_courses("Theory6", "3240225", "theory", 1);
add_courses("Theory7", "240604", "theory", 1);
add_courses("Theory8", "2240422", "theory", 1);
add_courses("Theory9", "3240223", "theory", 1);
add_courses("Theory10", "3270225", "theory", 1);
add_courses("Theory11", "2270423", "theory", 1);
add_courses("Theory12", "3240221", "theory", 1);

// dummy  faculity with selection of random 5 courses codes
// RRS,TS,PD,BSR,AS,KB,SM,SKS,VT,AK,MSA,DG,NT,GS,NA,RS,JKM,RKJ,PT,GH,DKM these are the faculity avilable in collage
// 5 courses codes are selected randomly from 23 courses codes
/*


 */
add_faculty("RRS", ["2280404", "2280426", "2270424", "2270426", "2240424"]);
add_faculty("TS", ["2240426", "280601", "280602", "280603", "270601"]);
add_faculty("PD", ["3240224", "270603", "3240225", "3000002", "240602"]);
add_faculty("BSR", ["1000001", "2240425", "1000007", "2240426", "3000004"]);
add_faculty("AS", ["240604", "2240422", "3240223", "3270225", "2240424"]);
add_faculty("KB", ["2270423", "3240221", "240601", "240603", "2270421"]);
add_faculty("SM", ["2240423", "3240224", "3240225", "2270424", "2270426"]);
add_faculty("SKS", ["2240426", "280601", "280602", "280603", "270601"]);
add_faculty("VT", ["270603", "270602", "240602", "240603", "280604"]);
add_faculty("AK", ["1000007", "1000001", "3000002", "3000004", "240601"]);
add_faculty("MSA", ["240603", "2270421", "2240423", "3240224", "3240225"]);
add_faculty("DG", ["240604", "2240422", "3240223", "3270225", "2270423"]);
add_faculty("NT", ["3240221", "2280404", "2280426", "2270424", "2270426"]);
add_faculty("GS", ["2240424", "280601", "280602", "280603", "270601"]);
add_faculty("NA", ["270603", "270602", "240602", "240603", "280604"]);
add_faculty("RS", ["1000007", "1000001", "3000002", "3000004", "240601"]);
add_faculty("JKM", ["240603", "2270421", "2240423", "3240224", "3240225"]);
add_faculty("RKJ", ["240604", "2240422", "3240223", "3270225", "2270423"]);
add_faculty("PT", ["3240221", "2280404", "2280426", "2270424", "2270426"]);
add_faculty("GH", ["2240424", "280601", "280602", "280603", "270601"]);
add_faculty("DKM", ["270603", "270602", "240602", "240603", "280604"]);

// dummy classroom
//avilable lab NL1,CI,CO,TOM
// avilable theory room are M103,M102,M101,SH2,M201,M202,M203
add_classroom("NL1", "lab");
add_classroom("CI", "lab");
add_classroom("CO", "lab");
add_classroom("TOM", "lab");
add_classroom("M103", "theory");
add_classroom("M102", "theory");
add_classroom("M101", "theory");
add_classroom("SH2", "theory");
add_classroom("M201", "theory");
add_classroom("M202", "theory");
add_classroom("M203", "theory");

// dummy days
add_days("MON");
add_days("TUE");
add_days("WED");
add_days("THU");
add_days("FRI");
add_days("SAT");

// dummy time slot
add_time_slot("9:00-10:00");
add_time_slot("10:00-11:00");
add_time_slot("11:00-12:00");
add_time_slot("12:00-1:00");
add_time_slot("1:00-2:00");
add_time_slot("2:00-3:00");
add_time_slot("3:00-4:00");
add_time_slot("4:00-5:00");
add_time_slot("5:00-6:00");

for (let i = 0; i < days.length * sem.length * branch.length; i++) {
  add_non_editable_cells("lunch_break", i, 4);
}

// printing dummy test data
function print_dummy() {
  console.log("dummy test data");
  console.log("branch: ", branch);
  console.log("sem: ", sem);
  console.log("faculty: ", faculty);
  console.log("classroom: ", classroom);
  console.log("days: ", days);
  console.log("courses: ", courses);
  console.log("time_slot: ", time_slot);
}
