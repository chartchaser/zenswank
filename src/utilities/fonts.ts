import { Bad_Script } from "next/font/google";
import localFont from "next/font/local";

const my_font = localFont({ src: '../../public/fonts/regular_black_italic.otf', display: 'swap' });

const bad_script = Bad_Script({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export {my_font, bad_script}