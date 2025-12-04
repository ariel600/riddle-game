import {choice} from "./client.js"
import all from "../riddles/all.js"
import {calculation_average, total_calculation} from "./tests.js"

export function menu() {
    console.log("1 - Show all riddles");
    console.log("2 - Add riddles");
    console.log("3 - Edit riddles");
    console.log("4 - Delete riddles");
    console.log("5 - Play");
    console.log("6 - Exit");
    return choice();
}

export function print_riddles() {
    console.log(all);
}

export function ask_riddle(riddle) {
    let cho = true
    do{
        console.log(riddle.name);
        console.log(riddle.taskDescription);
        cho = choice()
    } while(cho)
}

export function show_stats() {
    console.log(total_calculation());
    console.log(calculation_average());
}