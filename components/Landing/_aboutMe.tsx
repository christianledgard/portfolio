import React from "react";

const AboutMe = () => {
  return (
    <section>
      <div id="about-me" className="w-full border-2 border-black" />
      <div className="flex flex-col items-center py-20 space-y-2">
        <h1 className="text-2xl">About Me</h1>
        <h2 className="font-bold text-center text-5xl md:text-6xl p-4">
          From Lima to Amsteram
        </h2>
        <div className="text-lg max-w-4xl space-y-4 px-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            ipsum turpis, venenatis eu tincidunt sit amet, varius quis nibh.
            Nunc blandit vel enim quis tincidunt. Ut at diam in nulla
            consectetur condimentum.
          </p>
          <p>
            Cras congue ex et felis rutrum, et feugiat dolor tempus. Mauris
            libero lectus, fringilla id convallis a, pulvinar sed quam. Sed sem
            eros, interdum et commodo in, tincidunt vitae nisi. Curabitur sed
            gravida nisi. Pellentesque finibus massa in lacus sollicitudin
            aliquet. Mauris tempor risus ac mollis volutpat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
