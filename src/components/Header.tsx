import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex bg-white py-4">
      <div className="flex justify-between w-full max-w-screen-xl m-auto">
        <h1>LOGO</h1>
        <nav className="h-full">
          <ul className="flex items-center gap-4">
            <li>
              <a href="/my-courses">Mis cursos</a>
            </li>
            <li>
              <a href="/profile">
                <Image
                  src="/assets/image/cart.svg"
                  alt="profile"
                  width={30}
                  height={30}
                />
              </a>
            </li>
            <li>
              <Image
                src="/assets/image/person-sharp.svg"
                alt="cart"
                width={30}
                height={30}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
