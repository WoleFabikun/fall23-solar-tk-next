import { Inconsolata, Inter, Zilla_Slab } from "next/font/google"
import localFont from "next/font/local"

export const zillaBold = Zilla_Slab({
  weight: "700",
  variable: "--font-serif",
  subsets: ["latin"]
})

export const inter = Inter({
  variable: "--font-default",
  subsets: ["latin"],
  preload: true,
  display: "swap"
})

export const inconsolata = Inconsolata({
  variable: "--font-mono",
  subsets: ["latin"]
})

export const okineBold = localFont({
  src: "./made-okine-sans-bold.woff2",
  variable: "--font-bold",
  preload: true,
  display: "swap"
})

export const okineBoldOutline = localFont({
  src: "./made-okine-sans-bold-outline.woff2",
  variable: "--font-okine-bold-outline",
  preload: true,
  display: "swap"
})

export const okineBlack = localFont({
  src: "./made-okine-sans-black.woff2",
  variable: "--font-okine-black",
  preload: true,
  display: "swap"
})

export const okine = localFont({
  src: "./made-okine-sans-regular.woff",
  variable: "--font-okine",
  preload: true,
  display: "swap"
})

export const okineMedium = localFont({
  src: "./made-okine-sans-medium.woff",
  variable: "--font-okine-medium",
  preload: true,
  display: "swap"
})

export const okineBlackOutline = localFont({
  src: "./made-okine-sans-black-outline.woff2",
  variable: "--font-okine-black-outline",
  preload: true,
  display: "swap"
})

export const fitzgerald = localFont({
  src: "./hv-fitzgerald-regular.woff2",
  variable: "--font-fitzgerald",
  preload: true,
  display: "swap",
  weight: "400"
})

export const fitzgeraldItalic = localFont({
  src: "./hv-fitzgerald-italic.woff2",
  variable: "--font-fitzgerald-italic",
  preload: true,
  display: "swap",
  weight: "400"
})

export const fitzgeraldBold = localFont({
  src: "./hv-fitzgerald-bold.woff2",
  variable: "--font-fitzgerald-bold",
  preload: true,
  display: "swap",
  weight: "400"
})

export const fitzgeraldBoldItalic = localFont({
  src: "./hv-fitzgerald-bold-italic.woff2",
  variable: "--font-fitzgerald-bold-italic",
  preload: true,
  display: "swap",
  weight: "400"
})

export const defaultFontMapper = {
  default: inter.variable,
  serif: zillaBold.variable,
  mono: inconsolata.variable,

  okineBold: okineBold.variable,
  okineBoldOutline: okineBoldOutline.variable,
  okineBlack: okineBlack.variable,
  okineBlackOutline: okineBlackOutline.variable,
  okine: okine.variable,
  okineMedium: okineMedium.variable,

  fitzgerald: fitzgerald.variable,
  fitzgeraldItalic: fitzgeraldItalic.variable,
  fitzgeraldBold: fitzgeraldBold.variable,
  fitzgeraldBoldItalic: fitzgeraldBoldItalic.variable
}
