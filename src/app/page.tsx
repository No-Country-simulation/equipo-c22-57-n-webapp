import { Carousel } from "@/components/Carousel";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

const products = [
  {
    id: 1,
    name: "Introducción al Render 3D para Moda",
    instructor: "Alexander",
    price: 199.99,
    discount: 0.1,
    image: "/assets/image/product-img.png",
  },
  {
    id: 2,
    name: "Introducción al Render 3D para Moda",
    instructor: "Alexander",
    price: 199.99,
    discount: 0.1,
    image: "/assets/image/product-img.png",
  },
  {
    id: 3,
    name: "Introducción al Render 3D para Moda",
    instructor: "Alexander",
    price: 199.99,
    discount: 0.1,
    image: "/assets/image/product-img.png",
  },
  {
    id: 4,
    name: "Introducción al Render 3D para Moda",
    instructor: "Alexander",
    price: 199.99,
    discount: 0.1,
    image: "/assets/image/product-img.png",
  },
  {
    id: 5,
    name: "Introducción al Render 3D para Moda",
    instructor: "Alexander",
    price: 199.99,
    discount: 0.1,
    image: "/assets/image/product-img.png",
  },
  {
    id: 6,
    name: "Introducción al Render 3D para Moda",
    instructor: "Alexander",
    price: 199.99,
    discount: 0.1,
    image: "/assets/image/product-img.png",
  },
  {
    id: 7,
    name: "Introducción al Render 3D para Moda",
    instructor: "Alexander",
    price: 199.99,
    discount: 0.1,
    image: "/assets/image/product-img.png",
  },
  {
    id: 8,
    name: "Introducción al Render 3D para Moda",
    instructor: "Alexander",
    price: 199.99,
    discount: 0.1,
    image: "/assets/image/product-img.png",
  },
  {
    id: 9,
    name: "Introducción al Render 3D para Moda",
    instructor: "Alexander",
    price: 199.99,
    discount: 0.1,
    image: "/assets/image/product-img.png",
  },
  {
    id: 10,
    name: "Introducción al Render 3D para Moda",
    instructor: "Alexander",
    price: 199.99,
    discount: 0.1,
    image: "/assets/image/product-img.png",
  },
];

export default function Home() {
  return (
    <>
      <Header></Header>

      <main className="max-w-screen-xl m-auto ">
        <Hero></Hero>
        <Carousel title="Más populares" products={products}></Carousel>
        <Carousel title="Recomendados" products={products}></Carousel>
      </main>
    </>
  );
}
