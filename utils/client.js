import input from 'analiza-sync';
import all from '../riddles/all.js';

let id = 0

export function name() {
    return input("What is your name? ")
}

export function choice() {
    return input("Select the desired option: ")
}

export function add_riddle() {
    return {
        id: (all.length + 1),
        name: input("Enter the name of the riddle: "),
        taskDescription: input("Enter the riddle: "),
        correctAnswer: input("Enter the answer: ")
    }
}

export function id_riddle() {
    return input("Enter the requested ID: ")
}
