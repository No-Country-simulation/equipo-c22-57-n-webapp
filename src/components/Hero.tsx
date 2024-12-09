import React from "react";

export const Hero = () => {
  return (
    <section className="flex bg-white px-10 py-10 rounded-md mt-10">
      <div className="h-full flex flex-col justify-center">
        <h1 className="text-[54px] font-bold leading-[60px]">
          ¡Despierta tu creatividad y transforma tu pasión en arte!
        </h1>
        <p className="my-4">
          Explora nuestros cursos de diseño, dibujo y técnicas artísticas para
          llevar tus habilidades al siguiente nivel. Aprende a tu propio ritmo,
          con contenido diseñado para inspirarte y potenciar tu talento.
        </p>
        <button className="w-fit px-5 py-3 rounded-full bg-slate-900 text-white mt-4">
          Explorar
        </button>
      </div>
      <img src="/assets/image/hero-img.png" alt="Hero Image" />
    </section>
  );
};
