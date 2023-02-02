<template>
  <div class="w-screen h-screen">
    <div class="w-screen h-1/2 bg-gray-50 flex justify-center items-center" :class="gameStr==true?'cursor-crosshair':''">
        <div class="text-emerald-500 text-4xl font-bold flex">
          <button v-if="!startBtn" class="btn btn-ghost btn-xl" @click="start">AIM LAB</button>
          <div class="flex flex-col" v-if="startBtn&&!gameStr">
            <button class="btn m-2 " @click="[gameStart(),diffical('easy')]">easy</button>
            <button class="btn m-2" @click="[gameStart(),diffical('normal')]">normal</button>
            <button class="btn m-2" @click="[gameStart(),diffical('hard')]">hard</button>
          </div>
          <div v-if="gameOver" >
            <div class="text-5xl text-red-500 bg-slate-200 rounded-xl p-5">
              <p>Game Over</p>
              <p>Score: {{ scoreHit }}</p>
            </div>
            <div class="flex justify-center mt-7">
              <button class="btn" @click="reset">Reset</button>
            </div>
          </div>
        </div>
        <div v-if="gameStr&&!gameOver" v-show="enemy" class="bg-emerald-500" style="position: absolute;" 
        :style="{top:targetTop+'px', left:targetleft+'px'}" :class="diff" @click="hit"></div>
    </div>
    <div v-if="gameStr&&!gameOver">{{ x }}</div>
    <button class="btn" @click="print">press</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const startBtn = ref(false)
const diff = ref('')
const gameStr = ref(false)
const targetTop = ref('100')
const targetleft = ref('500')
const gameOver = ref(false)
const scoreHit = ref(0)
const x = ref(5)
const enemy = ref(true)
const winWidth = ref(window.innerWidth)
window.addEventListener('resize',()=>winWidth.value = window.innerWidth)

function start() {
  startBtn.value = true
}

function reset(){
  startBtn.value = false
  gameOver.value = false
  gameStr.value = false
  scoreHit.value = 0
  
}
function print(){
  console.log(winWidth.value);
}
function gameStart(){
  gameStr.value = true
  timer()
}

function diffical(diffi){
  switch (diffi) {
    case 'easy':
      diff.value = 'w-20 h-20'
      eJump(1200)
      break;
    case 'normal':
      diff.value = 'w-10 h-10'
      eJump(900)
      break;  
    case 'hard':
      diff.value = 'w-4 h-4'
      eJump(700)
      break;
    default:
      break;
  }
  x.value = 10
  console.log(diff.value)
}
function hit() {
  
  scoreHit.value++
  enemy.value = false
}

function randomPosition(){
  targetTop.value = `${Math.floor(Math.random()*400)}`
  targetleft.value = `${Math.floor(Math.random()*winWidth.value)}`
  enemy.value = true
  console.log(targetTop.value)
  console.log(targetleft.value)
}

function eJump(time){
  let textx = setInterval(() => {
    randomPosition()
    while(x.value ==0){
    return clearInterval(textx)}    
  }, time);
}

function timer() {
  let test = setInterval(() => {    
      console.log(--x.value) 
      while(x.value ==0){
        gameOver.value = true
    return clearInterval(test)
  }
  }, 1000);
 
}  

</script>

<style scoped>

</style>
