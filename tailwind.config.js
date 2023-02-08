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
        xb: 'url(/public/pt/x/xblack.png) 32 32 , default',
        xr: 'url(/public/pt/x/xred.png) 32 32, default',
        xy: 'url(/public/pt/x/xyellow.png) 32 32, default',
        xg: 'url(/public/pt/x/xgreen.png) 32 32, default',
        xblu: 'url(/public/pt/x/xblue.png) 32 32, default',

        ob:"URL(/public/pt/o/oblack.png)32 32, default",
        or:"URL(/public/pt/o/ored.png)32 32, default",
        oy:"URL(/public/pt/o/oyellow.png)32 32, default",
        og:"URL(/public/pt/o/ogreen.png)32 32, default",
        oblu:"URL(/public/pt/o/oblue.png)32 32, default",

        pb:"URL(/public/pt/p/pblack.png)32 32, default",
        pr:"URL(/public/pt/p/pred.png)32 32, default",
        py:"URL(/public/pt/p/pyellow.png)32 32, default",
        pg:"URL(/public/pt/p/pgreen.png)32 32, default",
        pblu:"URL(/public/pt/p/pblue.png)32 32, default",

        tb:"URL(/public/pt/t/tblack.png)32 32, default",
        tr:"URL(/public/pt/t/tred.png)32 32, default",
        ty:"URL(/public/pt/t/tyellow.png)32 32, default",
        tg:"URL(/public/pt/t/tgreen.png)32 32, default",
        tblu:"URL(/public/pt/t/tblue.png)32 32, default",
      },
    },
  },
  safelist:[
    'cursor-xb',
    'cursor-xr',
    'cursor-xy',
    'cursor-xg',
    'cursor-xblu',
    'cursor-ob',
    'cursor-or',
    'cursor-oy',
    'cursor-og',
    'cursor-oblu',
    'cursor-pb',
    'cursor-pr',
    'cursor-py',
    'cursor-pg',
    'cursor-pblu',
    'cursor-tb',
    'cursor-tr',
    'cursor-ty',
    'cursor-tg',
    'cursor-tblu'
  ],
  plugins: [require('daisyui')],
}
