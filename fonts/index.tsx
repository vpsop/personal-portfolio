
import { Jost, Barlow_Semi_Condensed, Barlow } from 'next/font/google';

export const jost = Jost({
  subsets: ['latin'],
  weight: ["400", "700"]
});

export const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ["400", "800", "900"]
});

export const barlow = Barlow({
  subsets: ['latin'],
  weight: ["400"]
});