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
        <div v-if="gameStr&&!gameOver"  class="bg-emerald-500" style="position: absolute;" 
        :style="{top:targetTop+'px', left:targetleft+'px'}" :class="diff" @click="hit"></div>
    </div>
    <div v-if="gameStr&&!gameOver">{{ x }}</div>
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



function start() {
  startBtn.value = true
}

function reset(){
  startBtn.value = false
  gameOver.value = false
  gameStr.value = false

}

function gameStart(){
  gameStr.value = true

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

  console.log(diff.value)
}


function randomPosition(){
  targetTop.value = `${Math.floor(Math.random()*400)}`
  targetleft.value = `${Math.floor(Math.random()*1890)}`
  enemy.value = true
  console.log(targetTop.value)
  console.log(targetleft.value)
}





</script>

<style scoped>

</style>
