import {
  Master_Timetable,
  Faculty_Timetable,
  Classroom_Timetabl,
  cells,
} from "./classes.js";
import {
  branch,
  sem,
  faculty,
  classroom,
  days,
  courses,
  time_slot,
  non_editable_cells,
  get_Online_class,
  get_lab_class,
  get_thoery_class,
} from "./resourse.js";

let online_class_cells_array = [];
let practicals_class_cells_array = [];
let theory_class_cells_array = [];

//generateTimeTable function
function generateTimeTable(populationSize, generations) {
  let bestSchedule = geneticAlgorithm(populationSize, generations);

  const formattedTimetable = formatTimetable(bestSchedule);

  return formattedTimetable;
}

// Genetic Algorithm function
function geneticAlgorithm(populationSize, generations) {
  //polulation is the array of master_time_table
  // Initialize population randomly
  let population = initializePopulation(populationSize);

  for (let generation = 0; generation < generations; generation++) {
    console.log("Generation: ", generation + 1);
    console.log("----------------------");

    // Fitness evaluation
    population = calculateFitness(population);

    // Selection
    const selectedPopulation = selection(population);

    // Crossover
    const offspringPopulation = crossover(selectedPopulation);

    // Mutation
    const mutatedPopulation = mutation(offspringPopulation);

    // Replace the old population with the new one
    population = mutatedPopulation;
  }

  // Get the best schedule
  let finalSchedule = getBestSchedule(population);

  // Output the final timetable
  console.log("Final Timetable:", finalSchedule);
  return finalSchedule;
}

//initializePopulation function
function initializePopulation(populationSize) {
  const population = [];
  for (let i = 0; i < populationSize; i++) {
    const timetable = generateRandomTimetable();
    population.push(timetable);
  }
  return population;
}

//Initalization function
function generateRandomTimetable() {
  // Create a new Empty Timetable object
  const timetable = new Master_Timetable(
    branch.length * sem.length * days.length,
    time_slot.length
  );

  // intialize the timetable with empty array
  for (let i = 0; i < timetable.timetable.length; i++) {
    for (let j = 0; j < timetable.timetable[i].length; j++) {
      timetable.timetable[i][j] = [];
    }
  }

  //Seprating  particular type courses form courses Array
  let Onlineclass = get_Online_class(courses);
  let labclass = get_lab_class(courses);
  let theoryclass = get_thoery_class(courses);

  //creatinon of noneditable cells
  let non_editable_cells_array = Non_editable_cells_creation();

  //Scheduling of non Editable cells
  for (let i = 0; i < non_editable_cells_array.length(); i++) {
    let row = non_editable_cells_array[i].row;
    let col = non_editable_cells_array[i].col;
    let text = non_editable_cells_array[i].text;

    timetable.timetable[row][col] = text;
  }

  //Creation of online classes cells
  Online_class_cells_creation(Onlineclass, faculity);

  //Scheduling  of online classes cells
  /* if practicals classes <=2 then any where  else only saturday*/

  //Creation of Practical class cells
  Practical_class_cells_creation(labclass, faculity);

  //Scheduling  of Practicals block Radomly

  //Creation of Theory classes cells
  Theory_class_cells_creation(theoryclass, faculity);

  //Scheduling of  Theory blocks

  return timetable;
}

//Creation of non editable cells
function Non_editable_cells_creation() {
  let cells = new Array();
  cells = [];

  for (let i = 0; i < non_editable_cells.length(); i++) {
    let row = non_editable_cells[i].row;
    let col = non_editable_cells[i].col;
    let text = non_editable_cells[i].text;
    let tempcell = new Cell(row, col, text);
    cells.push(tempcell);
  }

  return cells;
}

//Creation of online class cells
function Online_class_cells_creation(Onlineclass) {
  Onlineclass.forEach((course) => {
    const faculityteaching = faculity.find((faculity) =>
      faculity.subjects.includes(course.course_code)
    );

    if (faculityteaching) {
      online_class_cells_array.push({
        course_code: course.course_code,
        faculty_name: facultyTeaching.name,
      });
    }
  });

  return cells;
}

//Creation of Practical class cells
function Practical_class_cells_creation(labclass) {
  labclass.forEach((course) => {
    // Find the faculty teaching the current course
    const facultyTeaching = faculty.find((faculty) =>
      faculty.subjects.includes(course.course_code)
    );

    // If a faculty is found, add a cell with course code and faculty name
    if (facultyTeaching) {
      practicals_class_cells_array.push({
        course_code: course.course_code,
        faculty_name: facultyTeaching.name,
      });

      for (let i = 1; i < course.credit; i++) {
        theory_class_cells_array.push({
          course_code: course.course_code,
          faculty_name: facultyTeaching.name,
        });
      }
    }
  });
}
//Crreation of Theory class cells
function Theory_class_cells_creation(theoryclass) {
  // Iterate over each course in theoryclass
  theoryclass.forEach((course) => {
    // Find the faculty teaching the current course
    const facultyTeaching = faculty.find((faculty) =>
      faculty.subjects.includes(course.course_code)
    );

    // If a faculty is found, add a cell with course code and faculty name
    if (facultyTeaching) {
      for (let i = 1; i < course.credit; i++) {
        theory_class_cells_array.push({
          course_code: course.course_code,
          faculty_name: facultyTeaching.name,
        });
      }
    }
  });
}

//calculateFitness function
function calculateFitness(population) {}

//selection function
function selection(population) {}

//crossover function
function crossover(selectedPopulation) {}

//mutation function
function mutation(offspringPopulation) {}

//getBestSchedule function
function getBestSchedule(population) {}

//format TimeTable function
function formatTimetable(timetable) {
  return formattedData;
}

//In this function we need to pass master timetable and it return  faculty time_Table
function get_faculty_time_table(master) {
  return faculity_sheet;
}

// in this function we need to pass master timetable and it return classroom time_table
function get_classroom_time_table(master) {
  return classroom_sheet;
}

export {
  generateRandomTimetable,
  initializePopulation,
  calculateFitness,
  selection,
  crossover,
  mutation,
  generateTimeTable,
  formatTimetable,
  get_classroom_time_table,
  get_faculty_time_table,
};

// You can export the genetic algorithm function
export default geneticAlgorithm;
