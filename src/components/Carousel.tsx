"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";

type Product = {
  id: number;
  name: string;
  instructor: string;
  price: number;
  discount: number;
  image: string;
};
interface Props {
  title: string;
  products: Product[];
}

export const Carousel: FC<Props> = ({ title, products }) => {
  return (
    <section className="mt-5">
      <h2 className="text-2xl font-bold pt-5 pb-5">{title}</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products?.map((product) => {
          return (
            <SwiperSlide
              key={product.id}
              className="bg-white w-fit rounded-md cursor-pointer"
            >
              <Image
                width={245}
                height={158}
                src={product.image}
                alt="Product image"
              />
              <div className="flex flex-col justify-between px-[10px] py-3 gap-2">
                <p className="text-lg text-text font-bold">{product.name}</p>
                <p className="text-gray-400 text-">{product.instructor}</p>
                <div className="flex gap-4 items-center">
                  <p className="text-black text-lg">
                    {product.price - product.price * 0.1}
                  </p>
                  <p className="text-gray-400 text-sm line-through">
                    {product.price}
                  </p>
                </div>

                <button className="bg-secondary text-white hover:bg-primary hover:text-white rounded px-2 py-4">
                  Agregar al carrito
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
