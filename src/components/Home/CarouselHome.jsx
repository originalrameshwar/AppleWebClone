import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import bgTwo from "/assets/Home/bg-2.png";

const CarouselHome = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl my-3 "
    >
      <CarouselContent className=''>
        <CarouselItem>
          <img className="rounded-md" src={bgTwo} alt="" />
        </CarouselItem>
        <CarouselItem>
          <img className="rounded-md" src={bgTwo} alt="" />
        </CarouselItem>
        <CarouselItem>
          <img className="rounded-md" src={bgTwo} alt="" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselHome;
