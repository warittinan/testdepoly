<template>
  <div class="w-screen h-screen  ">

    <div class="w-screen h-screen pl-32 bg-slate-800">

      <div class=" w-11/12 h-screen bg-gray-400 flex  rounded-2xl">
        <div class="m-auto " v-if="!bg" :class="gameStr == true ? 'cursor-crosshair' : ''">
          <div class="text-emerald-500 text-4xl font-bold flex flex-col ml-36 ">
            <!-- //index -->
            <div v-if="!startBtn" class="flex w-28 h-16 rounded-2xl  bg-white">
              <button v-if="!startBtn" class="btn border-none btn-xl bg-black text-slate-50 m-auto w-24"
                @click="start">Play</button>
            </div>
            <div v-if="!startBtn" class="flex w-28 h-16 rounded-2xl  bg-white mt-10 ">
              <button v-if="!startBtn" class="btn border-none btn-xl bg-black text-slate-50 m-auto w-24"
                @click="Cr">CROSSHAIR</button>
            </div>

            <!-- game -->
            <div class="flex  " v-if="startBtn && !gameStr && !cross">
              <div class="flex flex-col ">
                <div v-if="startBtn && !gameStr" class="flex w-28 h-16 rounded-2xl  bg-white">
                  <div class=" w-24 h-12 bg-black  rounded-2xl m-auto ">
                    <h1 class="text-slate-50 text-sm text-center pt-4">
                      LEVEL
                    </h1>
                  </div>
                </div>
                <div v-if="startBtn && !gameStr" class="flex w-28 h-16 rounded-2xl  bg-white mt-10">
                  <button
                    class="btn hover:bg-green-500 border  border-transparent hover:border-transparent m-2 bg-green-600  text-slate-50  w-24 "
                    @click="[gameStart(), diffical('easy')]">easy</button>
                </div>
                <div v-if="startBtn && !gameStr" class="flex w-28 h-16 rounded-2xl  bg-white mt-10">
                  <button
                    class="btn hover:bg-yellow-400 border  border-transparent hover:border-transparent m-2 bg-yellow-500  text-slate-50  w-24 "
                    @click="[gameStart(), diffical('normal')]">normal</button>
                </div>
                <div v-if="startBtn && !gameStr" class="flex w-28 h-16 rounded-2xl  bg-white mt-10">
                  <button
                    class="btn hover:bg-red-500 border  border-transparent hover:border-transparent m-2 bg-red-800  text-slate-50  w-24 "
                    @click="[gameStart(), diffical('hard')]">hard</button>
                </div>
              </div>
            </div>
            <!-- croo -->
            



            <div v-if="gameOver">
              <div class="text-5xl text-red-500 bg-slate-200 rounded-xl p-5">
                <p>Game Over</p>
                <p>Score: {{ scoreHit }}</p>
              </div>
              <div class="flex justify-center mt-7">
                <button class="btn" @click="reset">Reset</button>
              </div>
            </div>
          </div>
          
          <div v-if="gameStr && !gameOver" v-show="enemy" class="bg-emerald-500 rounded-full"
            style="position: absolute;" :style="{ top: targetTop + 'px', left: targetleft + 'px' }" :class="diff"
            @click="hit"></div>


        </div>
        <div v-if="cross == true">
              <!-- <div class=" w-96 h-screen bg-red-500 flex ">

              </div> -->
              <div class=" flex  h-full w-full">
                <div class="  flex flex-col  bg-white h-full w-full ">
                  asdasdasd
                </div>

                <div class=" flex   h-full w-full bg-teal-600 ">
                  
                </div> 
               </div>
               
            </div>
        <div v-if="startBtn && !gameStr" class=" flex flex-col  ">
          <div class="bg-white  w-28 h-16 rounded-2xl ">
            <button
              class="btn hover:bg-red-500 border  border-transparent hover:border-transparent m-2 bg-black  text-slate-50  w-24 "
              @click="reset">BACK TO MENU</button>
          </div>
        </div>
        <div v-if="!startBtn" class="flex flex-col w-12"> <!-- ทำให้ตรงเฉยๆๆ -->
        </div>

        <div v-if="gameStr && !gameOver" class=" flex flex-col  ">
          <div class="bg-white  w-28 h-16 rounded-2xl ">
            <div class=" w-24 h-12 bg-black  rounded-2xl mt-2 ml-2 ">
              <h1 class="text-slate-50 text-sm text-center pt-4">
                Timer:{{ x }}
              </h1>
            </div>

          </div>
        </div>
        
      </div>


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
const bg = ref(false)
window.addEventListener('resize', () => winWidth.value = window.innerWidth)
function start() {
  startBtn.value = true
}
function ht() {

}
function Cr() {
  cross.value = true
  startBtn.value = true
  bg.value = true
}
function reset() {
  startBtn.value = false
  gameOver.value = false
  gameStr.value = false
  scoreHit.value = 0
  cross.value = false
  bg.value = false
}
// function black(){
//   gameStr.value = false
// }
function print() {
  console.log(winWidth.value);
}
function gameStart() {
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
function randomPosition() {
  targetTop.value = `${Math.floor(Math.random() * 400)}`
  targetleft.value = `${Math.floor(Math.random() * 1200)}`
  enemy.value = true
  console.log(targetTop.value)
  console.log(targetleft.value)
}
function eJump(time) {
  let textx = setInterval(() => {
    randomPosition()
    while (x.value == 0) {
      return clearInterval(textx)
    }
  }, time);
}
function timer() {
  let test = setInterval(() => {
    console.log(--x.value)
    while (x.value == 0) {
      gameOver.value = true
      return clearInterval(test)
    }
  }, 1000);

}  
</script>

<style scoped>

</style>