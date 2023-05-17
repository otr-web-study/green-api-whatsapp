/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        messages: 'url("/public/images/bg-chat-tile-dark.png")',
      },
    },
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    colors: {
      bg_stripe: '#00a884',
      bg_stripe_deeper: '#008069',
      bg_def: '#eae6df',
      bg_deeper: '#d1d7db',
      bg_conv_panel: '#efeae2',
      bg_gray: '#f0f2f5',
      bg_white_05: 'rgba(255, 255, 255, .7)',
      white: '#fff',
      panel_bg_lighter: '#f7f8fa',
      primary: '#3b4a54',
    },
  },
  plugins: [],
};
