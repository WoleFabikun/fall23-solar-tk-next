import Image from "next/image"
import Link from "next/link"

import { ScrollArea } from "@/components/ui/scroll-area"
import Footer from "@/components/Footer"
import Globe from "@/components/Globe"

export default async function Page() {
  return (
    <div className="flex-1 h-[calc(100dvh-64px)]">
            <div className="flex md:flex-row flex-col relative items-center md:justify-between md:mb-12 ">
              <div className="text-left md:p-0 rounded-xl z-10">
                <div className="relative z-50 md:mt-24 xl:mt-32 md:max-w-[780px] xl:max-w-[940px] mb-8">
                  <h1 className="text-3xl md:text-5xl xl:text-6xl font-fitzgeraldBold mb-2 md:mb-4 w-full max-w-[90%] leading-9">
                  Retrieve solar data from the NSRDB API latitude and longitude coordinates
                  </h1>
                </div>

                <p className="text-md mb-10 relative z-50 md:max-w-[80%]">
                This project aims to retrieve solar data from the National Solar Radiation Database (NSRDB) API for a specific location on Earth and perform machine learning predictions using the obtained data. The project consists of a Flask backend that interacts with the NSRDB API and processes the retrieved solar data, and a frontend built with Next.js and React that provides a user interface for inputting location coordinates and selecting desired datasets.
                </p>

                <div className="flex flex-row-reverse gap-1 items-center md:w-full md:max-w-[100%]">
                  <Link
                    href="/start"
                    className="bg-background self-end border-fl-green text-fl-green border-2 hover:bg-fl-green hover:text-fl-white px-4 py-2 rounded font-okineBold cursor-pointer"
                  >
                    GET STARTED
                  </Link>
                  <Link
                    href="https://developer.nrel.gov/signup/" target="_blank"
                    className="px-4 py-3 text-xs self-end font-okineBold cursor-pointer hover:underline"
                  >
                    NSRDB API Key
                  </Link>
                </div>
              </div>

              <div className="">
                <Globe />
              </div>
            </div>
            <Footer />
    </div>
  )
}
