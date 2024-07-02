import * as React from "react";
import tech1 from "../public/techindustry.png";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StaticImageData } from "next/image";
export interface TechIndustryProps {
  image: StaticImageData;
  cat: string;
  heading: string;
}

const techindustry: TechIndustryProps[] = [
  {
    image: tech1,
    cat: "Technology",
    heading:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    image: tech1,
    cat: "Technology",
    heading:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    image: tech1,
    cat: "Technology",
    heading:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    image: tech1,
    cat: "Technology",
    heading:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    image: tech1,
    cat: "Technology",
    heading:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    image: tech1,
    cat: "Technology",
    heading:  "The Impact of Technology on the Workplace: How Technology is Changing",
  },
];
const TechIndustrys = () => {
  return (
    <div>
      <section className="container flex py-10 gap-8  sm:flex-wrap p-7 lg:flex-nowrap justify-between">
        <div className=" pt-10 sm:w-full md:w-full lg:w-2/5 pe-20">
          <h2 className="text-4xl text-custom-heading-500 font-bold">
          Latest Trends in the Tech Industry{" "}
          </h2>
          <p className="pt-5 pr-20">
          Our blog keeps you updated with the latest trends in the tech industry. Explore in-depth articles on network infrastructure advancements, cutting-edge cybersecurity practices, innovative software solutions, and emerging cloud technologies. Learn about the impact of AI, machine learning, and IoT on various sectors. Discover how Emerald IT's services align with these trends to keep your business at the forefront of the tech revolution.
          </p>
        </div>
        <div className="sm:w-full md:w-full lg:w-3/5">
          <Carousel className="w-full ">
            <CarouselContent className="-ml-1">
              {techindustry.map((item) => (
                <CarouselItem
                  key={item.heading}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">
                          <Image
                            src={item.image}
                            alt={item.heading}
                            
                            width={500}
                            height={300}
                          />
                          <div>
                            {" "}
                            <h6 className="text-custom-emerald text-lg py-4">
                              {item.cat}{" "}
                            </h6>{" "}
                          </div>
                          <div>
                            {" "}
                            <h3 className="text-1xl text-custom-heading-500 font-semibold">
                              {item.heading}
                            </h3>{" "}
                          </div>
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="carousel-control previous absolute left-0 top-1/2 transform -translate-y-1/2 bg-custom-emerald text-wrap text-white hover:bg-custom-heading-500 hover:text-white" />
            <CarouselNext className="carousel-control next absolute right-0 top-1/2 transform -translate-y-1/2 bg-custom-emerald text-white hover:bg-custom-heading-500 hover:text-white" />
          </Carousel>{" "}
        </div>
      </section>
    </div>
  );
};

export default TechIndustrys;
