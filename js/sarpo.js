import { getInputDirection } from "./input.js"


export const SNAKE_SPEED = 5
const sarpoKoBody = [ {x: 11, y: 11 }]
let newSegments = 0

export function update(){
    addSegments()

    const inputDirection = getInputDirection()
    for (let i = sarpoKoBody.length - 2; i >= 0; i--){
        sarpoKoBody[i + 1] = { ...sarpoKoBody[i] }
    }
    sarpoKoBody[0].x += inputDirection.x
    sarpoKoBody[0].y += inputDirection.y
}

export function draw(playground){
    sarpoKoBody.forEach(segment => {
        const sarpoElement = document.createElement('div')
        sarpoElement.style.gridRowStart = segment.y
        sarpoElement.style.gridColumnStart = segment.x
        sarpoElement.classList.add('sarpo')
        playground.appendChild(sarpoElement)
    })
}

export function expandSarpo(amount){
    newSegments += amount
}

export function onSarpo(position, {ignoreHead = false} = {}){
    return sarpoKoBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSarpoHead(){
    return sarpoKoBody[0]
}

export function sarpoIntersection(){
    return onSarpo(sarpoKoBody[0], { ignoreHead: true})
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments(){
    for(let i = 0; i < newSegments; i++){
        sarpoKoBody.push({ ...sarpoKoBody[sarpoKoBody.length - 1]})
    }

    newSegments = 0
}