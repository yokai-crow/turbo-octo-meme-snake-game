import{ update as updateSarpo, draw as drawSarpo, SNAKE_SPEED, getSarpoHead, sarpoIntersection} from './sarpo.js'
import{ update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
let lastRenderTime = 0
let gameOver = false

const playground = document.getElementById('play-ground')
//alert after player died in game, '/' denote the target self
function main(currentTime){
    if(gameOver){
        if(confirm("¸„.-•~¹°”ˆ˜¨   🎀  𝓁🌺𝓈𝓉 𝒾𝓃 𝒶 𝓉𝒾𝓂𝑒  🎀   ¨˜ˆ”°¹~•-.„¸")){
            window.location = '/'
        }
        return
    }



    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    
    //😁😁 alxi lagyo comments lekhna
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSarpo()
    updateFood()
    checkDeath()
}

function draw(){
    playground.innerHTML = ''
    drawSarpo(playground)
    drawFood(playground)
}

function checkDeath(){
    gameOver = outsideGrid(getSarpoHead()) || sarpoIntersection()
}