import { Master_Timetable, Faculty_Timetable,Classroom_Timetable} from "./classes.js";
import {branch, sem, courses,faculty, days,classroom,time_slot } from "./resourse.js";

//generateTimeTable function
function generateTimeTable( populationSize, generations) {
    
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

        console.log('Generation: ', generation+1);
        console.log('----------------------')
        

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
    console.log('Final Timetable:', finalSchedule);
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
function generateRandomTimetable(){
    // Sample data for faculty, course codes, and classrooms (adjust as needed)
    const facultyData = faculty.map(f => f.name);
    const courseCodes = courses.map(course => course.course_code);
    const classrooms = classroom.map(c => c.room);

    // Create a new Timetable object
    const timetable = new Master_Timetable(branch.length * sem.length * days.length , time_slot.length);
    
    // intialize the timetable with empty array
    for(let i =0;i<timetable.timetable.length;i++){
        for(let j=0;j<timetable.timetable[i].length;j++){
            timetable.timetable[i][j] = [];
        }
    }

    //iterate overreachcell of timetable
    for (let b = 0; b < branch.length; b++) {
        for (let s = 0; s < sem.length; s++) {
            for (let d = 0; d < days.length; d++) {
                for (let t = 0; t < time_slot.length; t++) {
                    const randomFaculty = facultyData[Math.floor(Math.random() * facultyData.length)];
                    const randomCourseCode = courseCodes[Math.floor(Math.random() * courseCodes.length)];
                    const randomClassroom = classrooms[Math.floor(Math.random() * classrooms.length)];
                    
                    //assign the value to the time table cell
                    timetable.timetable[d+days.length*s+days.length*sem.length*b][t] = [randomFaculty, randomCourseCode, randomClassroom];

                }
            }
        }
    }

    return timetable;

}



//calculateFitness function
function calculateFitness(population) {
    
}

//selection function
function selection(population) {

}

//crossover function
function crossover(selectedPopulation) {

}

//mutation function
function mutation(offspringPopulation) {

}

//getBestSchedule function
function getBestSchedule(population) {

}


//format TimeTable function
function formatTimetable(timetable){

    return formattedData;
}


//In this function we need to pass master timetable and it return  faculty time_Table
function get_faculty_time_table( master ){


    return faculity_sheet;
}


// in this function we need to pass master timetable and it return classroom time_table
function get_classroom_time_table(master){

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
    formattedTimetable,
    get_classroom_time_table,
    get_faculty_time_table
};

// You can export the genetic algorithm function
export default geneticAlgorithm;