import { onSarpo, expandSarpo } from './sarpo.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 5
export function update(){
    if(onSarpo(food)){
        expandSarpo(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}

export function draw(playground){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    playground.appendChild(foodElement)
}

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSarpo(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}