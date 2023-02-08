<template>
  <div class="w-screen h-screen">
    <div class="w-screen h-screen px-32 bg-slate-800">
      <!--Full Screen-->

      <div v-if="!gameStr" class="h-screen bg-gray-400 flex flex-col rounded-2xl">
        <!--Screen-->
        <div v-if="startBtn && !gameStr" class="flex justify-end">
          <!--Back btn-->
          <div class="bg-white m-4 w-28 h-16 rounded-2xl">
            <button
              class="btn hover:bg-red-500 border border-transparent hover:border-transparent m-2 bg-black text-slate-50 w-24"
              @click="reset">
              BACK TO MENU
            </button>
          </div>
        </div>
        <div v-if="gameStr && !gameOver" class="flex justify-end">
          <!--Timer-->
          <div class="bg-black m-4 p-3 border-8 rounded-2xl">
            <h1 class="text-white">Timer: {{ x }}</h1>
          </div>
          
        </div>
        <!-- ===================================================================================================================== -->
        <div class="flex flex-col items-center my-auto" v-if="!bg">
          <!--Play Screen-->

          <div class="flex flex-col">
            <!--Menu-->
            <div v-if="!startBtn" class="flex flex-col space-y-8">
              <!-- Play btn -->
              <button id="black"
                class="btn h-16 hover:border-white hover:bg-emerald-500 border-white rounded-2xl border-8"
                @click="start">
                <span class="text-white">Play</span>
              </button>
              <button class="btn h-16 hover:border-white hover:bg-emerald-500 border-white rounded-2xl border-8"
                @click="Cr">
                <span class="text-white">CROSSHAIR</span>
              </button>
            </div>
            <!-- Level btn -->
            <div class="flex flex-col space-y-10" v-if="startBtn && !gameStr && !cross">
              <div v-if="startBtn && !gameStr" class="rounded-2xl p-4 border-8 bg-black">
                <h1 class="text-slate-50 text-xl font-bold text-center">
                  LEVEL
                </h1>
              </div>
              <div v-if="startBtn && !gameStr" class="rounded-2xl bg-white">
                <button class="btn hover:bg-green-500 border-transparent hover:border-transparent m-2 bg-green-600 w-24"
                  @click="[gameStart(), diffical('easy')]">
                  <span class="text-slate-50">easy</span>
                </button>
              </div>
              <div v-if="startBtn && !gameStr" class="rounded-2xl bg-white">
                <button
                  class="btn hover:bg-yellow-400 border-transparent hover:border-transparent m-2 bg-yellow-500 w-24"
                  @click="[gameStart(), diffical('normal')]">
                  <span class="text-slate-50">normal</span>
                </button>
              </div>
              <div v-if="startBtn && !gameStr" class="rounded-2xl bg-white">
                <button class="btn hover:bg-red-500 border-transparent hover:border-transparent m-2 bg-red-800 w-24"
                  @click="[gameStart(), diffical('hard')]">
                  <span class="text-slate-50">hard</span>
                </button>
              </div>
            </div>
            <!-- end Level btn -->
          </div>
        </div>
        <!-- ===================================================================================================================== -->
        <div v-if="cross" class="h-full w-full  " :class="CROSSHAIR">
          <!--Crosshair Screen-->
          <div class="flex flex-row h-full w-full">
            <div class="flex w-1/2">
              <div class="m-auto bg-white w-[400px] h-[400px]">
                <div class="absolute m-24 w-[400px] h-[400px] ">
                  <img :src=g style="width: 200px; height: 200px" />
                </div>
              </div>
            </div>
            <div class="flex flex-col w-1/2">
              <div class="flex justify-center">
                <div class="rounded-2xl p-4 border-8 bg-black text-white">
                  CHANGE CROSSHAIR
                </div>
              </div>
              <div class="grid grid-flow-col justify-center">
                <div class="grid grid-flow-col mt-5">
                  <div class="bg-white w-20 h-20 ml-5">
                    <div class="absolute m-6 w-20 h-20">
                      <img src="./assets/pt/p/pblack.png " style="width: 30px; height: 30px" />
                    </div>

                  </div>
                  <div class="bg-white w-20 h-20 ml-5">
                    <div class="absolute m-6 w-20 h-20">
                      <img src="./assets/pt/x/xblack.png " style="width: 30px; height: 30px" />
                    </div>
                  </div>
                  <div class="bg-white w-20 h-20 ml-5">
                    <div class="absolute m-6 w-20 h-20">
                      <img src="./assets/pt/o/oblack.png " style="width: 30px; height: 30px" />
                    </div>
                  </div>
                  <div class="bg-white w-20 h-20 ml-5">
                    <div class="absolute m-6 w-20 h-20">
                      <img src="./assets/pt/t/Tblack.png " style="width: 30px; height: 30px" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid mt-5 justify-center">
                <div class="grid grid-flow-col mt-5 w-[400px]">
                  <div>
                    <input type="radio" value="P" name="P" v-model="type" class="radio radio-success ml-12"  />
                    <input type="radio" value="X" name="X" v-model="type" class="radio radio-success ml-20 mr-2" />
                    <input type="radio" value="O" name="O" v-model="type" class="radio radio-success ml-16 mr-2" />
                    <input type="radio" value="T" name="T" v-model="type" class="radio radio-success ml-16" />
                  </div>
                </div>
              </div>

              <!-- cheage color -->
              <div class="flex-col justify-center">
                <div class="flex-row rounded-lg mt-32 ml-20">
                  <input type="radio" id="black" value="Black" v-model="CrossColor" class="radio radio-success"
                     />
                  <label for="black" class="text-white m-auto font-bold bth">Black</label>
                  <input type="radio" id="red" value="Red" v-model="CrossColor" class="radio radio-success ml-5" />
                  <label for="red" class="text-white m-auto font-bold">Red</label>
                  <input type="radio" id="green" value="Green" v-model="CrossColor" class="radio radio-success ml-5" />
                  <label for="green" class="text-white m-auto font-bold">Green</label>
                  <input type="radio" id="yellow" value="Yellow" v-model="CrossColor"
                    class="radio radio-success ml-5" />
                  <label for="yellow" class="text-white m-auto font-bold">Yellow</label>
                  <input type="radio" id="blue" value="Blue" v-model="CrossColor" class="radio radio-success ml-5" />
                  <label for="blue" class="text-white m-auto font-bold">Blue</label>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <!-- game -->
      <div v-if="gameStr" class="h-screen bg-gray-400 w-full rounded-2xl" :class="gameStr == true ? CROSSHAIR: ''"
        @click="nh">
        <div class="flex flex-col">
          <div v-if="gameStr && !gameOver" class="flex justify-end">
            <!--Timer-->
            <div class="bg-black m-4 p-3 border-8 rounded-2xl">
              <h1 class="text-white">Timer: {{ x }}</h1>
            </div>
          </div>
        </div>
        <!--Game Over-->
        <div v-if="gameOver" class="flex flex-col ">
          <div class="flex justify-center">
            <h class="rounded-3xl mt-10 p-8 border-8 bg-black text-3xl px-10">Results</h>
          </div>
          <div class="h-full flex flex-row justify-around items-end mt-36">
            <div class="flex flex-col items-start space-y-8">
              <div
                class="btn rounded-2xl p-4 hover:border-white border-white border-8 h-20 w-64 text-center text-2xl pointer-events-auto">
                REPLAY
              </div>
              <div
                class="btn rounded-2xl p-4 hover:border-white border-white border-8 h-20 w-64 text-center text-2xl pointer-events-auto"
                @click="reset">
                BACK TO MENU
              </div>
            </div>
            <div class="flex flex-col space-y-10">
              <div class="w-64 h-64 flex justify-center bg-white">
                <div class="w-48 h-20 -mt-7 bg-black">
                  <h1 class="text-3xl text-center items-center p-4 text-white">
                    TIME
                  </h1>
                </div>
                <div class="absolute m-32">
                  <h1 class="text-6xl font-bold text-black">10:00</h1>
                </div>
              </div>
              <div class="w-64 h-64 flex justify-center bg-white">
                <div class="w-48 h-20 -mt-7 bg-black">
                  <h1 class="text-3xl text-center items-center p-4 text-white">
                    HITS
                  </h1>
                </div>
                <div class="absolute m-32">
                  <h1 class="text-6xl font-bold text-black">{{ scoreHit }}</h1>
                </div>
              </div>
            </div>
            <div class="flex flex-col space-y-10">
              <div class="w-64 h-64 flex justify-center bg-white">
                <div class="w-48 h-20 -mt-7 bg-black">
                  <h1 class="text-3xl text-center items-center p-4 text-white">
                    ACCURACY
                  </h1>
                </div>
                <div class="absolute m-32">
                  <h1 class="text-6xl font-bold text-black">{{ acc }}%</h1>
                </div>
              </div>
              <div class="w-64 h-64 flex justify-center bg-white">
                <div class="w-48 h-20 -mt-7 bg-black">
                  <h1 class="text-3xl text-center items-center p-4 text-white">
                    MISS
                  </h1>
                </div>
                <div class="absolute m-32">
                  <h1 class="text-6xl font-bold text-black">{{ smiss }}</h1>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-start space-y-10">
              <div class="w-72 h-72 mb-32 flex justify-center bg-white">
                <div class="w-48 h-20 -mt-7 bg-black">
                  <h1 class="text-3xl text-center items-center p-4 text-white">
                    SCORE
                  </h1>
                </div>
                <div class="absolute m-32">
                  <h1 class="text-6xl font-bold text-black">{{ hiy }}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="gameStr && !gameOver" v-show="enemy" class="bg-emerald-200 rounded-full" :style="{
          position: 'absolute',
          top: targetTop + 'px',
          left: targetleft + 'px',
        }" :class="diff" @click="hit"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "/public/data/data.json";
import { ref, computed } from "vue";
const startBtn = ref(false);
const diff = ref("");
const gameStr = ref(false);
const targetTop = ref("100");
const targetleft = ref("500");
const gameOver = ref(false);
const scoreHit = ref(0);
const x = ref(5);
const enemy = ref(true);
const winWidth = ref(window.innerWidth);
const cross = ref(false);
const bg = ref(false);
const CrossColor = ref("Black");
const smiss = ref(0);
const hiy = ref("");
const type = ref('P')

const g = computed(() => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].type == type.value) {
      for (let j = 0; j < data[i].color?.length; j++) {
        if (data[i].color[j].id === CrossColor.value) {
            
          return data[i].color[j].image;
          
        }
      }
    }
  }

})

const CROSSHAIR = computed(() => {
  for (let i = 0; i < data.length; i++) {

    if (data[i].type == type.value) {
      for (let j = 0; j < data[i].color?.length; j++) {

      if (data[i].color[j].id === CrossColor.value) {

          return data[i].color[j].cursor;
  
}
}
      
    }
  }

})

const acc = computed(() => {
  return ((scoreHit.value / smiss.value) * 100).toFixed(2);
});

window.addEventListener("resize", () => (winWidth.value = window.innerWidth));

function nh() {
  if (gameOver.value == false) {
    smiss.value++;
  }
}
function start() {
  startBtn.value = true;
}
function Cr() {
  cross.value = true;
  startBtn.value = true;
  bg.value = true;
}
function reset() {
  startBtn.value = false;
  gameOver.value = false;
  gameStr.value = false;
  scoreHit.value = 0;
  cross.value = false;
  bg.value = false;
  clickT.value = 0;
  scrore.value = 0;
}

function gameStart() {
  gameStr.value = true;
  timer();
}
function diffical(diffi) {
  switch (diffi) {
    case "easy":
      diff.value = "w-20 h-20";
      eJump(1200);
      break;
    case "normal":
      diff.value = "w-20 h-20";
      eJump(900);
      break;
    case "hard":
      diff.value = "w-20 h-20";
      eJump(700);
      break;
    default:
      break;
  }
  x.value = 3;
}
function hit() {
  scoreHit.value++;
  enemy.value = false;
  scrore.value = scoreHit.value * 12;
}
function randomPosition() {
  targetTop.value = `${Math.floor(Math.random() * (500 - 400) + 400)}`;
  targetleft.value = `${Math.floor(Math.random() * (1200 - 150) + 150)}`;
  enemy.value = true;
}
function eJump(time) {
  let textx = setInterval(() => {
    randomPosition();
    while (x.value == 0) {
      return clearInterval(textx);
    }
  }, time);
}
function timer() {
  let test = setInterval(() => {
    --x.value;
    while (x.value == 0) {
      gameOver.value = true;
      return clearInterval(test);
    }
  }, 1000);
}
</script>

<style scoped>

</style>
