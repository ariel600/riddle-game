import {print_riddles, show_stats} from "./utils/prints.js"
import {add_riddle, name} from "./utils/client.js"
import {measure_solve_time} from "./utils/tests.js"
import {player} from "./player.js"
import riddle from "../riddles/all.js"

export function show_all_riddles(){
    print_riddles()
}

export function add_riddles(){
    riddle.push(add_riddle())
}

export function edit_riddles(){

}

export function delete_riddles(){

}

export function play(){
    for(i = 0; i < riddle.length; i++){
        let riddles = 0
        console.log("Welcome to the Riddle Game!");
        player.name = name();
        const choice = measure_solve_time(riddle[riddles]);
        riddles += 1
    }
    show_stats();
}