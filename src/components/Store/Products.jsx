import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const products = [
  { name: "AirPods", path: '../../../public/assets/Store/firstDiv/airPods.png' },
  { name: "AirTags", path: '../../../public/assets/Store/firstDiv/airTags.png' },
  { name: "Apple Speaker", path: '../../../public/assets/Store/firstDiv/appleSpeaker.png' },
  { name: "Apple Watch", path: '../../../public/assets/Store/firstDiv/appleWatch.png' },
  { name: "iPad", path: '../../../public/assets/Store/firstDiv/ipad.png' },
  { name: "iPhone", path: '../../../public/assets/Store/firstDiv/iphone.png' },
  { name: "Mac", path: '../../../public/assets/Store/firstDiv/mac.png' },
  { name: "Mac Mini", path: '../../../public/assets/Store/firstDiv/macMini.png' }
];

const Products = () => {
  return (
    <>
      <Carousel className="w-full ">
        <CarouselContent className=''>
          {products.map((product, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/6 cursor-pointer'>
                <img src={product.path} alt={product.name} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </>
  )
}

export default Products
