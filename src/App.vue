<template>
  <div class="w-screen h-screen  ">

    <div class="w-screen h-screen px-32 bg-slate-800"> <!--Full Screen-->

      <div class="h-screen bg-gray-400 flex flex-col rounded-2xl"> <!--Screen-->
        <div v-if="startBtn && !gameStr" class="flex justify-end"> <!--Back btn-->
            <div class="bg-white m-4 w-28 h-16 rounded-2xl ">
                <button
                class="btn hover:bg-red-500 border  border-transparent hover:border-transparent m-2 bg-black  text-slate-50  w-24 "
                @click="reset">BACK TO MENU</button>
            </div>
        </div>
        <div v-if="gameStr && !gameOver" class=" flex justify-end "> <!--Timer-->
          <div class="bg-black m-4 p-3 border-8 rounded-2xl">
            <h1 class="text-white">Timer: {{ x }}</h1>
          </div>
        </div>
<!-- ===================================================================================================================== -->
        <div class="flex flex-col items-center my-auto" v-if="!bg" :class="gameStr == true ? 'cursor-crosshair' : ''"> <!--Play Screen-->

          <div class="flex flex-col"> <!--Menu-->
            <div v-if="!startBtn" class="flex flex-col  space-y-8 "> <!-- Play btn -->
                <button class="btn h-16 hover:border-white hover:bg-emerald-500 border-white rounded-2xl border-8" @click="start"><span class="text-white">Play</span></button>
                <button class="btn h-16 hover:border-white hover:bg-emerald-500 border-white rounded-2xl border-8" @click="Cr"><span class="text-white">CROSSHAIR</span></button>
            </div>
              
            <div class="flex flex-col space-y-10" v-if="startBtn && !gameStr && !cross"> <!-- Level btn -->
                <div v-if="startBtn && !gameStr" class="rounded-2xl p-4 border-8 bg-black">
                    <h1 class="text-slate-50 text-xl font-bold text-center ">
                      LEVEL
                    </h1>
                </div>
                <div v-if="startBtn && !gameStr" class="rounded-2xl bg-white">
                  <button
                    class="btn hover:bg-green-500  border-transparent hover:border-transparent m-2 bg-green-600 w-24 "
                    @click="[gameStart(), diffical('easy')]"><span class="text-slate-50">easy</span></button>
                </div>
                <div v-if="startBtn && !gameStr" class="rounded-2xl bg-white">
                  <button
                    class="btn hover:bg-yellow-400 border-transparent hover:border-transparent m-2 bg-yellow-500 w-24 "
                    @click="[gameStart(), diffical('normal')]"><span class="text-slate-50">normal</span></button>
                </div>
                <div v-if="startBtn && !gameStr" class="rounded-2xl bg-white">
                  <button
                    class="btn hover:bg-red-500 border-transparent hover:border-transparent m-2 bg-red-800 w-24 "
                    @click="[gameStart(), diffical('hard')]"><span class="text-slate-50">hard</span></button>
                </div>
            </div>
            
            
            <div v-if="gameOver"> <!--Game Over-->
              <div class="text-5xl text-red-500 bg-slate-200 rounded-xl p-5">
                <p>Game Over</p>
                <p>Score: {{ scoreHit }}</p>
              </div>
              <div class="flex justify-center mt-7">
                <button class="btn" @click="reset">Reset</button>
              </div>
            </div>
          </div>
          
          <div v-if="gameStr && !gameOver" v-show="enemy" class="bg-emerald-200 rounded-full" :style="{position: 'absolute', top: targetTop + 'px', left: targetleft + 'px' }" :class="diff" @click="hit"></div> <!--Hit Box-->
        </div>
<!-- ===================================================================================================================== -->
        <div v-if="cross" class="w-full"> <!--Crosshair Screen-->
          <div class=" flex flex-row h-full ">
              <div class="flex items-center justify-center w-1/2 bg-white">
                  <p>1asdasdasd</p>
              </div>
              <div class="flex w-1/2 bg-teal-600">
                  <p>0891209812</p>
              </div> 
          </div>
               
        </div>
        <!-- <div v-if="gameStr&&!gameOver" v-show="enemy" class="bg-emerald-500" style="position: absolute;"
        :style="{top:targetTop+'px', left:targetleft+'px'}" :class="diff" @click="hit"></div> Hit Box -->
      </div>

    <!-- <div v-if="gameStr&&!gameOver">{{ x }}</div>
    <button class="btn" @click="print">press</button> -->
  </div>
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
const cross = ref(false)
window.addEventListener('resize',()=>winWidth.value = window.innerWidth)

function start() {
  startBtn.value = true
}

function ht() {

}

function Cr() {
  cross.value = true
  startBtn.value = true
  // bg.value = true
}

function reset() {
  startBtn.value = false
  gameOver.value = false
  gameStr.value = false
  scoreHit.value = 0
  cross.value = false
}

// function print(){
//   console.log(winWidth.value);
// }

function gameStart(){
  gameStr.value = true
  timer()
}

function diffical(diffi) {
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