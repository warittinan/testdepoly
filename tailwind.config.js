/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        default: 'url(https://play.tailwindcss.com/favicons/favicon-16x16.png?v=3), default',
        xb: 'url(/src/assets/pt/x/xback.png) 32 32 , default',
        xr: 'url(/src/assets/pt/x/xred.png) 32 32, default',
        xy: 'url(/src/assets/pt/x/xyellow.png) 32 32, default',
        xg: 'url(/src/assets/pt/x/xgreen.png) 32 32, default',
        xbu: 'url(/src/assets/pt/x/xblue.png) 32 32, default',

        ob:"URL(/src/assets/pt/o/oback.png)32 32, default",
        or:"URL(/src/assets/pt/o/ored.png)32 32, default",
        oy:"URL(/src/assets/pt/o/oyellow.png)32 32, default",
        og:"URL(/src/assets/pt/o/ogreen.png)32 32, default",
        obu:"URL(/src/assets/pt/o/oblue.png)32 32, default",

        pb:"URL(/src/assets/pt/p/pblack.png)32 32, default",
        pr:"URL(/src/assets/pt/p/pred.png)32 32, default",
        py:"URL(/src/assets/pt/p/pyellow.png)32 32, default",
        pg:"URL(/src/assets/pt/p/pgreen.png)32 32, default",
        pbu:"URL(/src/assets/pt/p/pblue.png)32 32, default",

        tb:"URL(/src/assets/pt/t/tblack.png)32 32, default",
        tr:"URL(/src/assets/pt/t/tred.png)32 32, default",
        ty:"URL(/src/assets/pt/t/tyellow.png)32 32, default",
        tg:"URL(/src/assets/pt/t/tgreen.png)32 32, default",
        tbtu:"URL(/src/assets/pt/t/tblue.png)32 32, default",
      },
    },
  },
  safelist:[
    'cursor-xb',
    'cursor-xr',
    'cursor-xy',
    'cursor-xg',
    'cursor-xbu',
    'cursor-ob',
    'cursor-or',
    'cursor-oy',
    'cursor-og',
    'cursor-obu',
    'cursor-pb',
    'cursor-pr',
    'cursor-py',
    'cursor-pg',
    'cursor-pbu',
    'cursor-tb',
    'cursor-tr',
    'cursor-ty',
    'cursor-tg',
    'cursor-tbu'
  ],
  plugins: [require('daisyui')],
}
