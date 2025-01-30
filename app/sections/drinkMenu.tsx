import React from "react";

// type Props = {}

// const themeCol = "#450266"
// #450266
// const themeTextCol = "#de9cfd"
const DrinkMenu = () => {
  return (
    <section
      style={{ fontFamily: "var(--font-delius)" }}
      className="w-full text-black  md:px-40 px-4 py-10 md:py-16 pb-20 flex flex-col  relative bg-stone-300"
    >
    <h2 className="font-[Delius] text-4xl md:text-6xl text-center  font-extrabold"  style={{ fontFamily: "var(--font-srisakdi)" }}>
        DRINKS
      </h2>
      <div className="mt-4 text-md md:text-2xl text-center ">
        <h3 className="text-2xl md:text-4xl font-semibold mb-1 md:mb-2 leading-none" style={{ fontFamily: "var(--font-srisakdi)" }}>Cocktails</h3>
        <span className="text-xs md:text-sm font-[Delius] ">First cocktail  on us! Additional cocktails at 3,500 each</span>
        <ul className="lex flex-col gap-1 md:gap-2 mt-2">
          <li className="">Margarita</li>
            <span className="text-xs md:text-sm leading-none" >shaken & salt rimmed - lime juice, triple sec, tequila</span>
          <li className="">Cupid’s Cosmopolitan</li>
            <span className="text-xs md:text-sm leading-none" >lime juice, cranberry juice, hibiscus syrup, cointreau, vodka</span>
        </ul>
      </div>
      <div className="mt-4 text-md md:text-2xl text-center ">
        <h3 className="text-2xl md:text-4xl font-semibold mb-1 md:mb-2 leading-none" style={{ fontFamily: "var(--font-srisakdi)" }}>Shots</h3>
        <span className="text-xs md:text-sm font-[Delius] ">First classic shot on us! Additional classic shot at 1,500 each, bomb at 2,500 each</span>
        <ul className="lex flex-col gap-1 md:gap-2 mt-2">
          <li className="">Tequila</li>
          <li className="">Vodka</li>
          <li className="">Jagerbomb</li>
          <span className="text-xs md:text-sm leading-none" >Jägermeister, red bull</span>
        </ul>
      </div>
      <div className="mt-4 text-md md:text-2xl text-center ">
        <h3 className="text-2xl md:text-4xl font-semibold mb-1 md:mb-2 leading-none" style={{ fontFamily: "var(--font-srisakdi)" }}>Mocktails</h3>
        <span className="text-xs md:text-sm font-[Delius] ">First mocktail on us! Additional mocktails at 3,000 each</span>
        <ul className="lex flex-col gap-1 md:gap-2 mt-2">
          <li className="">Margarita</li>
          <span className="text-xs md:text-sm leading-none" >shaken and salt rimmed - lime juice, orange juice, sparkling water/club soda</span>
          <li className="">Chapman</li>
        </ul>
      </div>
      <div className="mt-4 text-md md:text-2xl text-center ">
        <h3 className="text-2xl md:text-4xl font-semibold mb-1 md:mb-2 leading-none" style={{ fontFamily: "var(--font-srisakdi)" }}>Soft Drink</h3>
        <span className="text-xs md:text-sm font-[Delius] ">First drink on us! Additional drink at 500 each</span>
        <ul className="lex flex-col gap-1 md:gap-2 mt-2">
          <li className="">Water</li>
          <li className="">Schweppes</li>
        </ul>
      </div>
    </section>
  );
};

export default DrinkMenu;

