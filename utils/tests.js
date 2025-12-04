import {player} from "./player.js"
import {ask_riddle} from "./prints.js"

export function test_answer(riddle, answer) {
    if(riddle.correctAnswer == answer) {
        return true
    } else {
        return false
    }
}

export function add_solve_time(start, end) {
    player.times.push((end - start) / 1000)
}

export function total_calculation() {
    let sum_time = 0
    player.times.array.forEach(element => {
        sum_time += element
    });
    return sum_time
}

export function calculation_average() {
    return total_calculation() / player.times.length
}

export function measure_solve_time(riddle) {
    const start = Date.now()
    ask_riddle(riddle)
    const end = Date.now()
    add_solve_time(start, end)
}