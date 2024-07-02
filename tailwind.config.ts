import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        3: '3px',
      },
      screens: {
        xs: {  min: '0px' },
        sm: {  min: '501px' },
        md: {  min: '768px'},
        'md-1': {  min: '768px', max: '871px'},
        'md-2': {  min: '872px', max: '1023px'},
        lg: {  min: '1024px' },
        'lg-1': { min: '1024px', max: '1266px'},
        'lg-2': { min: '1267px' },
        xl: {  min: '1400px' },
        xxl: {  min: '1920px' },
      },
      backgroundImage: {
        'banner': "url(\'~@/images/banner.webp\')",
        'banner-mobile': "url(\'~@/images/banner-mobile.png\')",
        'logo-lg': "url(\'~@/images/logo-lg.svg\')",
        'logo-md': "url(\'~@/images/logo-md.svg\')",
        'logo-sm': "url(\'~@/images/logo-sm.svg\')",
        'curveline': "url(\'~@/images/curve-line.svg\')",
        'icon-search': "url(\'~@/images/icons/search.svg\')",
        'icon-bell': "url(\'~@/images/icons/bell.svg\')",
        'icon-user': "url(\'~@/images/icons/user.svg\')",
        'icon-menu': "url(\'~@/images/icons/hamburger-menu.svg\')",
        'icon-lock': "url(\'~@/images/icons/lock.svg\')",
        'icon-party-popper': "url(\'~@/images/icons/party-popper.svg\')",
        'icon-eye': "url(\'~@/images/icons/eye.svg\')",
        'icon-thumb-up': "url(\'~@/images/icons/thumbs-up.svg\')",
        'icon-heart': "url(\'~@/images/icons/heart.svg\')",
        'icon-bookmark': "url(\'~@/images/icons/bookmark.svg\')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
