import {add_riddles, delete_riddles, edit_riddles, play, show_all_riddles} from "./utils/utils.js"
import {menu} from "./utils/prints.js"

let start = true
do{
    let choice = menu();
    switch (choice) {
        case 1: show_all_riddles();
            break;
        case 2: add_riddles();
            break;
        case 3: edit_riddles();
            break;
        case 4: delete_riddles();
            break;
        case 5: play();
            break;
        case 6: start = false;
            break;
        default: console.log("You entered an incorrect number. Please try again.");
    }
} while(start)
