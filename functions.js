import TimetableClass from "./classes";
import geneticAlgorithm from "./genetic_algorithm";


//Initalization function
function generateRandomTimetable(){

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

function getBestSchedule(population) {
    
}




// genetic Algorithm function 
function geneticAlgorithm(populationSize, generations) {
    let population = initializePopulation(populationSize);

    for (let generation = 0; generation < generations; generation++) {
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
        const finalSchedule = getBestSchedule(population);
        return finalSchedule;
}

//format TimeTable function
function formattedTimetable(timetable){

    return formattedData;
}

//generateTimeTable function
function generateTimeTable() {
    const populationSize = 9;
    const generations = 10;
    geneticAlgorithm(populationSize, generations);
    
    const bestSchedule = getBestSchedule(population);

    const formattedTimetable = formattedTimetable(bestSchedule);

    return formattedTimetable;
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