import { Orbitron, Lexend, Plus_Jakarta_Sans ,Lato, DM_Sans} from "next/font/google";

export const orbitron = Orbitron({
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const lexend = Lexend({
  weight: ["400", "500", "700"],
  variable: "--font-lexend",
  subsets: ["latin-ext"],
});

export const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "700"],
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const lato = Lato (
  {
    weight: ["400", "700","900"],
    variable: "--font-lato",
    subsets: ["latin"],

  }
)


export const dmSans = DM_Sans (
  {
    weight: ["400", "700","900"],
    variable: "--font-DM-Sans",
    subsets: ["latin"],

  }
)
