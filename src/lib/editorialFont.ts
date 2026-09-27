import { Oswald } from "next/font/google";

export const editorialFont = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-editorial",
});
