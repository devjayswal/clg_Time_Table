import TimetableClass from "./classes";
import geneticAlgorithm from "./genetic_algorithm";

//generateTimeTable function
function generateTimeTable( populationSize, generations) {
    
    let bestSchedule = geneticAlgorithm(populationSize, generations);
    

    const formattedTimetable = formattedTimetable(bestSchedule);

    return formattedTimetable;
}


// Genetic Algorithm function
function geneticAlgorithm(populationSize, generations) {
    let population = initializePopulation(populationSize);

    for (let generation = 0; generation < generations; generation++) {
        console.log('Population: ', population)
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




//format TimeTable function
function formattedTimetable(timetable){

    return formattedData;
}




export {
    generateRandomTimetable,
    initializePopulation,
    calculateFitness,
    selection,
    crossover,
    mutation,
    getBestSchedule,
    generateTimeTable,
    formattedTimetable
};

// You can export the genetic algorithm function
export default geneticAlgorithm;