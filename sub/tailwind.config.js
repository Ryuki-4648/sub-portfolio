const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // JIT (just-in-time) mode を適用
  darkMode: false, // 'media' or 'class'
  content: [],
  theme: {
    extend: {
      colors: {
        'color01': '#bfbfbf',
        'color02': '#828282',
        'color03': '#616060',
      },
    },
  },
  purge: [ // ビルド生成時の未使用のスタイルを除外し、パフォーマンスを最適化
    // "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}

