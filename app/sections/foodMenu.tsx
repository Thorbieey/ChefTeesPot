import React from "react";

// type Props = {}

const themeCol = "#d44618";
// const themeTextCol = "#ff5c29";
const FoodMenu = () => {
  return (
    <section
      id="menu"
      style={{ fontFamily: "var(--font-delius)" }}
      className="w-full text-black  md:px-40 px-4 py-10 md:py-16 pb-20 flex flex-col items-center justify-center relative bg-stone-300"
    >
      <div className="w-full nd:w-[50%] text-center flex flex-col gap-4">
        <h2 className="text-4xl md:text-6xl text-center font-extrabold" style={{ fontFamily: "var(--font-srisakdi)" }}>
          FOOD
        </h2>
        <div className="mt-4 text-md md:text-2xl text-center ">
          <h3 className="text-2xl md:text-4xl font-semibold mb-2" style={{ fontFamily: "var(--font-srisakdi)" }}>Starters</h3>
          <ul className="flex flex-col gap-1 md:gap-2">
            <li className="">Gizdodo Sticks</li>
            <span className="text-xs md:text-sm leading-none" >Crispy fried gizzard and plantain, tosssed in a spicy pepper sauce</span>
            <li className="">Assorted Meat Pepper Soup</li>
            <span className="text-xs md:text-sm leading-none" >Assorted meats simmered in a rich and spicy broth</span>
          </ul>
        </div>
        <div className="mt-4 text-md md:text-2xl text-center ">
          <h3 className="text-2xl md:text-4xl font-semibold mb-2" style={{ fontFamily: "var(--font-srisakdi)" }}>Meat | Seafood</h3>
          <ul className="flex flex-col gap-1 md:gap-2">
            <li className="">Spicy Surf</li>
            <span className="text-xs md:text-sm leading-none" > Crispy battered hake fish, spicy peppers, and fresh parsley, served with a zesty lemon.</span>
            <li className="">Peppered Turkey</li>
            <span className="text-xs md:text-sm leading-none" >Juicy turkey infused with aromatic peppers and a hint of African heat.</span>
          </ul>
        </div>
        <div className="mt-4 text-md md:text-2xl text-center ">
          <h3 className="text-2xl md:text-4xl font-semibold mb-2" style={{ fontFamily: "var(--font-srisakdi)" }}>Rice | Pasta | Wrap</h3>
          <ul className="flex flex-col gap-1 md:gap-2">
            <li className="">Gidi Party Collab</li>
            <span className="text-xs md:text-sm leading-none" >Smoky Jollof Rice & Veggie Fried Rice - flavoured with charred tomatoes and caramelized onions, finished with fresh salad.</span>
            <li className="">Penne Bolognese</li>
            <span className="text-xs md:text-sm leading-none" >Rich penne bolognese with slow-cooked beef and parmesan, topped with cheese.</span>
            <li className="">Chicken Suya Wrap</li>
            <span className="text-xs md:text-sm leading-none" >Tender chicken suya, wrapped in a warm tortilla with fresh veggies.</span>
          </ul>
        </div>
        <div className="mt-4 text-md md:text-2xl text-center ">
          <h3 className="text-2xl md:text-4xl font-semibold mb-2" style={{ fontFamily: "var(--font-srisakdi)" }}>Desserts</h3>
          <ul className="flex flex-col gap-1 md:gap-2">
            <li className="">Blackie’s Triple Choc Fudge Cake</li>
            <span className="text-xs md:text-sm leading-none" >Triple layered chocolate cake</span>
            <li className="">Coconut Coast Crunch</li>
            <span className="text-xs md:text-sm leading-none" >Vibrant parfait bowl with yogurt, apples, grapes, and coconut shavings.</span>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;

export const FoodMenuHeader = ({
  title,
  number,
  backgroundColor,
}: {
  title: string;
  number: string;
  backgroundColor: string;
}) => {
  return (
    <div
      className="flex mb-4 items-center px-3 py-2 rounded-lg justify-between gap-4"
      style={{ backgroundColor: backgroundColor }}
    >
      <span className="text-lg text-nowrap font-semibold"> {title}</span>
      <div className="w-full h-0.5  " style={{ backgroundColor: themeCol }} />
      <span className="text-lg bg-white text-nowrap text-black rounded-lg px-2 py-1 font-semibold">
        {number}
      </span>
    </div>
  );
};
