"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export interface TestimonailSliderProps {
  review: string;
  name: string;
  role: string;
}

const TestimonailSliderTwo = () => {
  const plugin = React.useRef(
    Autoplay({ stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const testimonials: TestimonailSliderProps[] = [
    {
      review:
        "Managing our IT equipment has never been easier. Emerald IT's proactive maintenance and support keep our operations running smoothly.",
      name: "Mark T",
      role: "Melbourne Tech Startup",
    },
    {
      review:
        "The custom software solution developed by Emerald IT streamlined our workflow and improved our efficiency. Highly recommend their services!",
      name: "Emma B",
      role: "Brisbane Manufacturing Company",
    },
    {
      review:
        "Emerald IT's robust cybersecurity measures give us peace of mind. Their proactive approach protects our data and keeps us safe from online threats.",
      name: "Emily Anderson",
      role: "CFO, Perth Accounting Firm",
    },
    {
      review:
        "Implementing a secure payment gateway was crucial for our business. Emerald IT delivered a reliable and efficient solution that our customers trust.",
      name: "Peter Brown",
      role: "Hobart E-commerce Store",
    },
    {
      review:
        "Emerald IT's cloud migration services were seamless. Now, we have flexible access to our data from anywhere, and costs are more manageable.",
      name: "Michael Williams",
      role: "Adelaide Marketing Agency",
    },
    {
      review:
        "Emerald IT designed a future-proof network infrastructure for our rapidly growing hotel chain. Their scalability solutions ensure we can seamlessly accommodate increasing guest needs.",
      name: "Lisa Zhang",
      role: "Gold Coast Hotel Chain",
    },
    {
      review:
        "Emerald IT's on-site equipment management is invaluable for our remote eco-tourism lodge. Their technicians ensure uninterrupted operations, even in challenging locations.",
      name: "Mark Robinson",
      role: "Cairns Eco-Tourism Lodge",
    },
    {
      review:
        "Emerald IT developed custom software that automates key processes for our government agency. This has resulted in significant time savings and improved data accuracy.",
      name: "Dr. Jane Miller",
      role: "Canberra Government Agency",
    },
  ];

  return (
    <Carousel
      className="w-full"
      plugins={[plugin.current]}
      opts={{
        duration: 3000,
        loop: true,
        align: "start", // Align items to the start (left) of the carousel
      // Ensure horizontal scrolling
   
      }}

     
    >
      <CarouselContent className="ml-4"> {/* Adjust left margin for smooth sliding */}
        {testimonials.map((item, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <Card className="flex justify-between flex-col h-full bg-custome-services shadow-3xl gap-4 p-4 rounded-xl bg-clip-padding backdrop-blur-xl bg-opacity-20 border-none">
              <CardContent className="p-4">
                <p className="text-custom-dark-200 font-dmSansa">{item.review}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between gap-8 p-4 pt-0">
                <strong className="font-dmSansa text-custom-heading-500">
                  {item.name}
                </strong>
                <h6 className="font-dmSansa text-custom-dark-200">
                  {item.role}
                </h6>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TestimonailSliderTwo;
